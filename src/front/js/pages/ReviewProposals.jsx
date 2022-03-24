import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import MainButton from "../component/MainButton/MainButton.jsx";
import ProposalUserCard from "../component/Cards/ProposalUserCard.jsx";
import { useHistory } from "react-router-dom";

const ReviewProposals = () => {
  //Style variable
  let bgImg = { background: "#023047", height: "max-content" };

//Context variables
  const { store, actions } = useContext(Context);
  const data = store.data;
  const history = useHistory();

  //Handler function renders only one user data
  const getUserData = (id) => {
    actions.getUserData(id);
    history.push("/reviewuser");
  };
  useEffect(() => {
    actions.getAllProposals();
  }, []);

  //Style functions
  const firstCharToUpper = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const cleanDate = (date) => {
    return date.split(" ", 4).join(" ");
  };

  return (
    <>
      <div className="container-fluid w-100" id="banner_wrapper">
        <div className="text-center py-4" id="bg-image" style={bgImg}>
          <h1 id="upper_banner_h1">All Proposals</h1>
          <div className="container">
            <div className="row">
              {data?.map((item) => (
                <div className="col-md-4 mb-3">
                  <ProposalUserCard
                    key={item.id}
                    proposal_type={firstCharToUpper(item.proposal_type)}
                    description={item.description}
                    contact={item.contact_by}
                    proponent={item.proponent_id}
                    confirmation={item.confirmation_by}
                    date={cleanDate(item.date)}
                    btn={
                      <MainButton
                        buttonText="Access User info"
                        onClick={() => getUserData(item.proponent_id)}
                      />
                    }
                  />
                </div>
              ))}
            </div>
          </div>
          <span className="mt-2">
            <MainButton to="/cityhome" buttonText="Back" />
          </span>
        </div>
      </div>
    </>
  );
};

export default ReviewProposals;
