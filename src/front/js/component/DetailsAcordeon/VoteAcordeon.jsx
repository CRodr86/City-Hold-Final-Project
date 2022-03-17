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
        acordeonTitle6="Can I access maps, pictures an videos of the project?"
        acordeonText1={store.start}
        acordeonText2={store.cost}
        acordeonText3={store.taxes}
        acordeonText4={store.developer}
        acordeonText5={store.jobs}
        acordeonText6="You can fill out a Proposal Form and we will review it and contact you."
      />
    </>
  );
};



export default VoteAcordeon