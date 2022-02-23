import React from "react";
import "./trendingNews.css";
import ProgressBar from "../ProgressBar/ProgressBar.jsx";
import photoNews1 from "../../../img/PhotoNews1.jpg";
import photoNews2 from "../../../img/PhotoNews2.jpg";
import photoNews3 from "../../../img/PhotoNews3.jpg";
import NewsCard from "../NewsCard/NewsCard.jsx";

const TrendingNews = () => {
  return (
    <div className="container trending-news">
      <div className="row">
        <h3>Trending News</h3>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-12 mt-3">
          <NewsCard
            imgSrc={photoNews1}
            imgAlt="Planting a tree"
            cardTitle="5000 new trees planted"
            cardText="Citizens form all around the area were a fundamental piece in this activity. Ellis Park will now have 5000 new trees."
          />
          <NewsCard
            imgSrc={photoNews2}
            imgAlt="Paving work"
            cardTitle="New Sidewalks for Grant St."
            cardText="The City Hall approved the construction of wider sidewalks. A total of 1 million USD will be invested."
          />
        </div>
        <div className="col-lg-8 col-md-8 col-12 mt-3">
          <div className="card p-4 border-4 rounded-0 bigCard">
            <img
              src={photoNews3}
              className="card-img-top rounded-0"
              alt="New mall build model"
            />
            <div className="card-body">
              <h3 className="card-title">Cultural Center will be finished by 2023</h3>
              <p className="card-text">
              Citizens approved the construction of the New Michael Scott
                  Cultural Center. In a vote held on January 23, 63% of the
                  citizens voted for this proposal. The cultural center will
                  have two theatre halls, four cinemas and one new concert hall.
              </p>
              <ProgressBar
                label="Yes"
                id="progress1"
                valueNow="63"
                value="63%"
              />
              <ProgressBar
                label="No"
                id="progress2"
                valueNow="37"
                value="37%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingNews;
