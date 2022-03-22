const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      proposal: [],
      message: null,
    },
    actions: {
      //User Sign in Actions

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
            name: data.user.name,
            lastname: data.user.lastname,
            email: data.user.email,
            homePhone: data.user.home_phone,
            mobilePhone: data.user.mobile_phone,
            address1: data.user.address1,
            zipCode: data.user.zip_code,
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

      citySignIn: async (email, password) => {
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
            process.env.BACKEND_URL + "/api/citytoken",
            opts
          );
          if (resp.status !== 200) {
            alert("Bad email or password");
            return false;
          }
          const data = await resp.json();
          console.log("this came from backend", data);
          sessionStorage.setItem("jwt-token", data.access_token);
          setStore({
            cityToken: data.access_token,
          });
          return true;
        } catch (error) {
          console.error("There has been an error", error);
        }
      },

      cityLogout: () => {
        sessionStorage.removeItem("jwt-token");
        setStore({
          cityToken: null,
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
          const data = await resp.json();
          console.log("this came from backend", data);
        } catch (error) {
          console.error("There has been an error", error);
        }
      },

      //Proposal related actions

      createProposal: async (
        area,
        proposal_type,
        date,
        description,
        documents,
        document_type,
        document_description,
        contact_by,
        confirmation_by
      ) => {
        const store = getStore();

        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + store.token,
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
          }),
          mode: "cors",
        };
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/proposal",
            opts
          );
          if (resp.status !== 201) {
            alert("Something went wrong");
            return false;
          }
          const data = await resp.json();
          console.log("this came from backend", data);
          setStore({
            area: data.area,
            proposal_type: data.proposal_type,
            date: data.date,
            description: data.description,
            documents: data.documents,
            document_type: data.document_type,
            document_description: data.document_description,
            contact_by: data.contact_by,
            confirmation_by: data.confirmation_by,
            id: data.id,
          });
          return true;
        } catch (error) {
          console.error("There has been an error", error);
        }
      },

      getProposals: () => {
        const store = getStore();
        const opts = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + store.token,
          },
        };
        fetch(process.env.BACKEND_URL + "/api/proposalofuser", opts)
          .then((resp) => resp.json())
          .then((data) => {
            const proposal = data.map((item) => {
              return {
                area: item.area,
                proposal_type: item.proposal_type,
                date: item.date,
                description: item.description,
                proponent_id: item.proponent_id,
                id: item.id,
              };
            });
            console.log(proposal);
            setStore({
              ...store,
              proposal: proposal,
            });
          })
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },

      // Admin area related functions

      getAllProposals: async () => {
        const opts = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/proposal",
            opts
          );
          if (resp.status !== 200) {
            alert("Something went wrong");
            return false;
          }
          const data = await resp.json();
          console.log(data);
          setStore({
            data: data,
          });
          return true;
        } catch (error) {
          console.error("There was an error ", error);
        }
      },

      getUserData: async (id) => {
        const opts = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/user/" + id,
            opts
          );
          if (resp.status !== 200) {
            alert("Something went wrong");
            return false;
          }
          const data = await resp.json();
          console.log(data);
          setStore({
            name: data.name,
            lastname: data.lastname,
            email: data.email,
            homePhone: data.home_phone,
            mobilePhone: data.mobile_phone,
            address1: data.address1,
            zipCode: data.zip_code,
          });
          return true;
        } catch (error) {
          console.error("There was an error ", error);
        }
      },

      //Projects related functions

      createProject: async (
        area,
        name,
        general_description,
        image,
        start,
        cost,
        taxes,
        developer,
        jobs
      ) => {
        const store = getStore();

        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            area: area,
            name: name,
            general_description: general_description,
            image: image,
            start: start,
            cost: cost,
            taxes: taxes,
            developer: developer,
            jobs: jobs,
          }),
          mode: "cors",
        };
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/project",
            opts
          );
          if (resp.status !== 201) {
            alert("Something went wrong");
            return false;
          }
          const data = await resp.json();
          console.log("this came from backend", data);
          setStore({
            area: data.area,
            project_name: data.name,
            general_description: data.general_description,
            image: data.image,
            start: data.start,
            cost: data.cost,
            taxes: data.taxes,
            developer: data.developer,
            jobs: data.jobs,
          });
          return true;
        } catch (error) {
          console.error("There has been an error", error);
        }
      },

      getAllProjects: async () => {
        const opts = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/project",
            opts
          );
          if (resp.status !== 200) {
            alert("Something went wrong");
            return false;
          }
          const data = await resp.json();
          console.log(data);
          setStore({
            data: data,
          });
          return true;
        } catch (error) {
          console.error("There was an error ", error);
        }
      },

      deleteProject: async (id) => {
        const opts = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        };
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/project/" + id,
            opts
          );
          if (resp.status !== 200) {
            alert("Something went wrong");
            return false;
          }
          const data = await resp.json();
          console.log(data);
          alert("Project deleted");
          return true;
        } catch (error) {
          console.error("There was an error ", error);
        }
      },

      getProjectData: async (id) => {
        const opts = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/project/" + id,
            opts
          );
          if (resp.status !== 200) {
            alert("Something went wrong");
            return false;
          }
          const data = await resp.json();
          console.log(data);
          setStore({
            area: data.area,
            project_name: data.name,
            general_description: data.general_description,
            image: data.image,
            start: data.start,
            cost: data.cost,
            taxes: data.taxes,
            developer: data.developer,
            jobs: data.jobs,
          });
          return true;
        } catch (error) {
          console.error("There was an error ", error);
        }
      },

      //Demo functions

      getMessage: () => {
        // const store = getStore();
        // const opts = {
        //   headers: {
        //     "Authorization" : "Bearer " + store.token
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
