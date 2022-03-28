import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import GeneralBackground from "../component/GeneralBackground/GeneralBackground.jsx";
import MyProposalDetail from "../component/MyFile/MyProposalDetail.jsx";

const MyFileMoreInfo = () => {
  const { store, actions } = useContext(Context);
  const proposal = store.proposal;

  //Loading user's proposals
  useEffect(() => {
    actions.getProposals();
  }, []);

  return (
    <>
      <GeneralBackground
        gralBgClassName="bg-image px-2 py-5 text-center"
        primaryText=""
        h1ClassName="pb-2"
        pClassName="px-5 pb-4"
        mainContent={
          <MyProposalDetail
            description={proposal.map((item) => item.description)}
          />
        }
      />
    </>
  );
};

export default MyFileMoreInfo;
