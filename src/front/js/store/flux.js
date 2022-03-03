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
            process.env.BACKEND_URL + "/api/token",
            opts
          );
          if (resp.status !== 200) {
            alert("Bad email or password");
            return false;
          }
          const data = await resp.json();
          console.log("this came from backend", data);
          sessionStorage.setItem("jwt-token", data.token);
          setStore({
            token: data.token,
            name: data.name,
            lastname: data.lastname,
            email: data.email,
            homePhone: data.homePhone,
            mobilePhone: data.mobilePhone,
            address1: data.address1,
            zipCode: data.zipCode,
          });
          return true;
        } catch (error) {
          console.error("There has been an error", error);
        }
      },

      logout: () => {
        sessionStorage.removeItem("jwt-token");
        setStore({
          token: null,
          name: null,
          lastname: null,
          email: null,
          homePhone: null,
          mobilePhone: null,
          address1: null,
          zipCode: null,
        });
      },

      createNewUser: async (
        name,
        lastname,
        email,
        password,
        homePhone,
        mobilePhone,
        address1,
        address2,
        zipCode,
        yearsOfResidence
      ) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: name,
            lastname: lastname,
            email: email,
            password: password,
            homePhone: homePhone,
            mobilePhone: mobilePhone,
            address1: address1,
            address2: address2,
            zipCode: zipCode,
            yearsOfResidence: yearsOfResidence,
          }),
          mode: "cors",
        };
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/api/user", opts);

          // if (resp.status !== 200) {
          //   alert("An error has ocurred");
          //   return false;
          // }
          const data = await resp.json();
          console.log("this came from backend", data);
          // setStore(data)
        } catch (error) {
          console.error("There has been an error", error);
        }
      },

      createProposal: async (
        area,
        proposal_type,
        date,
        description,
        documents,
        document_type,
        document_description,
        contact_by,
        confirmation_by,
        proponent_id
      ) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            area: area,
            proposal_type: proposal_type,
            date: date,
            description: description,
            documents: documents,
            document_type: document_type,
            document_description: document_description,
            contact_by: contact_by,
            confirmation_by: confirmation_by,
            proponent_id: proponent_id,
          }),
          mode: "cors",
        };
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/proposal",
            opts
          );
          const data = await resp.json();
          console.log("this came from backend", data);
          setStore({
            area: data.area,
            proposal_type: data.proposal_type,
            date: data.date,
            description: data.description,
            documents: data.mobilePhone,
            document_type: data.document_type,
            document_description: data.document_description,
            contact_by: data.contact_by,
            confirmation_by: data.confirmation_by,
            proponent_id: data.proponent_id,
          });
          return true;
        } catch (error) {
          console.error("There has been an error", error);
        }
      },

      // createNewUser: (name, lastname, email, password, homePhone, mobilePhone, address1, address2, zipCode, yearsOfResidence) =>{
      //   fetch("https://3001-crodr86-cityholdfinalpr-eb9ve4vhd3q.ws-eu32.gitpod.io/api/user", {
      //       			method: "POST",
      //       			body: JSON.stringify({name: name, lastname: lastname, email: email, password: password, homePhone:homePhone, mobilePhone:mobilePhone, address1:address1, address2:address2, zipCode:zipCode, yearsOfResidence:yearsOfResidence}),
      //             mode: "no-cors",
      //       			headers: { "Content-Type": "application/json",
      //             "Accept": "application/json" }

      //       		})
      //       			.then(resp => {
      //               console.log(resp)
      //       				resp.json();

      //       			})
      //       			.then(data => {
      //       				console.log(data);
      //       			})
      //       			.catch(error => {
      //       				console.log("Error", error);
      //       			});
      // },

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
