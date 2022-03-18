import "./detailsAcordeon.css";
import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import DetailsAcordeon from "./DetailsAcordeon.jsx";

const VoteAcordeon = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <DetailsAcordeon
        acordeonTitle1="When will it start and finish?"
        acordeonTitle2="How much does it costs?"
        acordeonTitle3="Will I need to pay more taxes?"
        acordeonTitle4="Who is developing the project?"
        acordeonTitle5="How many jobs will be created?"
        acordeonTitle6="I have a proposal regarding this project, what can I do?"
        acordeonText1={store.start}
        acordeonText2={store.cost}
        acordeonText3={store.taxes}
        acordeonText4={store.developer}
        acordeonText5={store.jobs}
        acordeonText6="If you are already registered you can fill out a Proposal Form, we will review it and contact you. If you are not registered you can sign up and begin participating!"
      />
    </>
  );
};

export default VoteAcordeon;
