import React from "react";
import { HashLink } from 'react-router-hash-link';
import "./detailsAcordeon.css";
import PropTypes from "prop-types";
import DetailsAcordeon from "./DetailsAcordeon.jsx";



const VoteAcordeon = (props) => {
	return (
    <>
      <DetailsAcordeon
        acordeonTitle1="When will it start and finish?"
        acordeonTitle2="How much does it costs?"
        acordeonTitle3="Will I need to pay more taxes?"
        acordeonTitle4="Who is developing the project?"
        acordeonTitle5="How many jobs will be created?"
        acordeonTitle6="Can I access maps, pictures an videos of the project?"
        acordeonText1="This project will start on March 15 2022 if 80% of the votes are in favor. The construction has a duration of 14 months. 
        During this time the following streets will be closed: Main St, Grant St. and Tucson St.
        All commercial activity will be open to pedestrians as normal."
        acordeonText2="The initial budget is 9 million Euros."
        acordeonText3="No. This project is included in 2022 infraestructure budget."
        acordeonText4="This project was subject to public bidding. After this process, the company 'Millenium 2000, S.A.' was selected to to execute the work. "
        acordeonText5="A total of 150 workers will be needed for this project. The company in charge of the work will be hiring 100 new workers from around the area."
        acordeonText6={`You can access all the available information in the ${<HashLink to="#">"Projects"</HashLink>} section of this site. If there is additional information that you don't find, you can contact us to see how can we help you.`}
      />
    </>
  );
};



export default VoteAcordeon