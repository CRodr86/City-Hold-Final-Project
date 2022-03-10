import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import UpperBanner from "../component/UpperBanner/UpperBanner.jsx";
import MainButton from "../component/MainButton/MainButton.jsx";
import ProposalUserCard from "../component/Cards/ProposalUserCard.jsx";

const ReviewProposals = (props) => {
  let bgImg = { background: "#023047", height: "max-content" };
  const { store, actions } = useContext(Context);
  const data = store.data;
  const getAllProposals = () => {
    actions.getAllProposals();
  };

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
              <div className="col-4"></div>
              <div className="col-4">
                {data?.map((item) => (
                  <ProposalUserCard
                    key={item.id}
                    proposal_type={firstCharToUpper(item.proposal_type)}
                    description={item.description}
                    contact={item.contact_by}
                    proponent={item.proponent_id}
                    confirmation={item.confirmation_by}
                    date={cleanDate(item.date)}
                    btn={<MainButton buttonText="Access User info"/>}
                  />
                ))}
              </div>
              <div className="col-4"></div>
            </div>
          </div>

          <span>
            <MainButton to="#" buttonText="Back" onClick={getAllProposals} />
          </span>
        </div>
      </div>
    </>
  );
};

export default ReviewProposals;
