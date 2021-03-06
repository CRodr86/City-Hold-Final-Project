import React from "react";
import GeneralBackground from "../component/GeneralBackground/GeneralBackground.jsx";
import NewsMain from "../component/News/NewsMain.jsx";

const News = () => {
  return (
    <>
      <GeneralBackground
        gralBgClassName="bg-image py-2 text-center"
        primaryText=""
        mainContent={<NewsMain />}
      />
    </>
  );
};

export default News;
