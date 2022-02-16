const getState = ({ getStore, getActions, setStore }) => {
	return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      signIn: async (email, password) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };
        try {
          const resp = await fetch(
            "https://3001-crodr86-cityholdfinalpr-eb9ve4vhd3q.ws-eu32.gitpod.io/api/token",
            opts
          );
          if (resp.status !== 200) {
            alert("An error has ocurred");
            return false;
          }
          const data = await resp.json();
          console.log("this came from backend", data);
          sessionStorage.setItem("token", data.access_token);
          setStore({ token: data.access_token });
          return true;
        } catch (error) {
          console.error("There has been an error", error);
        }
      },

	  logout: () => {
		sessionStorage.removeItem("token");
		setStore({token: null});
	},

  createNewUser: (name, lastname, email, password, homePhone, mobilePhone, address1, address2, zipCode, yearsOfResidence) =>{
    fetch("https://3001-crodr86-cityholdfinalpr-eb9ve4vhd3q.ws-eu32.gitpod.io/api/user", {
        			method: "POST",
        			body: JSON.stringify({name: name, lastname: lastname, email: email, password: password, homePhone:homePhone, mobilePhone:mobilePhone, address1:address1, address2:address2, zipCode:zipCode, yearsOfResidence:yearsOfResidence}),
              mode: "no-cors",
        			headers: { "Content-Type": "application/json" }
              
        		})
        			.then(resp => {
        				resp.json();
        			})
        			.then(data => {
        				console.log(data);
        			})
        			.catch(error => {
        				console.log("Error", error);
        			});
  },

      getMessage: () => {
        // const store = getStore();
        // const opts = {
        //   headers: {
        //     "Authorization" : "Bearer" = store.token
        //   }
        // }
        // fetching data from the backend
        fetch(process.env.BACKEND_URL + "/api/hello")
          .then((resp) => resp.json())
          .then((data) => setStore({ message: data.message }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
