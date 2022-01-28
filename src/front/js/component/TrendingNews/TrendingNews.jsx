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
            cardTitle="Some News"
            cardText="Some quick example text to build on the card title and make up
                the bulk of the card's content."
          />
          <NewsCard
            imgSrc={photoNews2}
            imgAlt="Paving work"
            cardTitle="Another News"
            cardText="Some quick example text to build on the card title and make up
                the bulk of the card's content."
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
              <h3 className="card-title">Card title</h3>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nulla purus, consequat vel sem vitae, lacinia vehicula tellus.
                Duis tincidunt vulputate est, ultrices lobortis lectus. Fusce
                sed lorem sed quam iaculis condimentum. Nulla accumsan luctus
                nibh, quis aliquet nisi pharetra nec. Suspendisse non posuere
                lorem. Fusce faucibus, urna in bibendum placerat, dolor dolor
                efficitur orci, vel volutpat quam justo ac metus.
              </p>
              <ProgressBar
                label="Proposal One"
                id="progress1"
                valueNow="63"
                value="63%"
              />
              <ProgressBar
                label="Proposal Two"
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
