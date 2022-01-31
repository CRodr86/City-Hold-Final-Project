import React from "react";
import "./newsCard.css";
import photoNews1 from "../../../img/PhotoNews1.jpg";
import photoNews2 from "../../../img/PhotoNews2.jpg";
import photoNews3 from "../../../img/PhotoNews3.jpg";
import BalletNews from "../../../img/BalletNews.png";
import BaseballNews from "../../../img/BaseballNews.png";
import ConcertNews from "../../../img/ConcertNews.png";
import MarathonNews from "../../../img/MarathonNews.png";
import StadiumNews from "../../../img/StadiumNews.png";
import TheatreNews from "../../../img/TheatreNews.png";
import NewsCard from "../NewsCard/NewsCard.jsx";
import ProgressBar from "../ProgressBar/ProgressBar.jsx";

const NewsCardsGrid = (props) => {
  return (
    <>
      <div className="container my-4 px-5 py-3" id="news_wrapper">
        <div className="row">
          <h4 className="news_section_title text-start my-2">Trending News</h4>
          <div className="col-lg-4 col-md-4 col-12 mt-3 p-0 text-start">
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
          <div className="col-lg-8 col-md-8 col-12 mt-3 text-start">
            <div className="card p-4 border-4 rounded-0 bigCard">
              <img
                src={photoNews3}
                className="card-img-top rounded-0"
                alt="New mall build model"
              />
              <div className="card-body">
                <h3 className="card-title">
                  Cultural Center will be finished by 2023
                </h3>
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
      <div className="container my-4 px-5 py-3" id="news_wrapper">
        <div className="row">
          <h4 className="news_section_title text-start my-2">Cultural News</h4>
          <div className="col-lg-4 col-md-4 col-12 mt-3 text-start">
            <NewsCard
              imgSrc={BalletNews}
              imgAlt="Ballerina"
              cardTitle="City Ballet"
              cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit tortor. Quisque sed sodales lectus, sit amet scelerisque odio. Sed tortor augue, iaculis a condimentum nec, consequat vitae risus."
            />
          </div>
          <div className="col-lg-4 col-md-4 col-12 mt-3 text-start">
            <NewsCard
              imgSrc={TheatreNews}
              imgAlt="Theatre"
              cardTitle="On the Billboard"
              cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit tortor. Quisque sed sodales lectus, sit amet scelerisque odio. Sed tortor augue, iaculis a condimentum nec, consequat vitae risus."
            />
          </div>
          <div className="col-lg-4 col-md-4 col-12 mt-3 text-start">
            <NewsCard
              imgSrc={ConcertNews}
              imgAlt="Rock Concert"
              cardTitle="Rock weekend"
              cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit tortor. Quisque sed sodales lectus, sit amet scelerisque odio. Sed tortor augue, iaculis a condimentum nec, consequat vitae risus."
            />
          </div>
        </div>
      </div>
      <div className="container my-4 px-5 py-3" id="news_wrapper">
        <div className="row">
          <h4 className="news_section_title text-start my-2">Sports News</h4>
          <div className="col-lg-4 col-md-4 col-12 mt-3 text-start">
            <NewsCard
              imgSrc={StadiumNews}
              imgAlt="Soccer game"
              cardTitle="Full Attendance"
              cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit tortor. Quisque sed sodales lectus, sit amet scelerisque odio. Sed tortor augue, iaculis a condimentum nec, consequat vitae risus."
            />
          </div>
          <div className="col-lg-4 col-md-4 col-12 mt-3 text-start">
            <NewsCard
              imgSrc={BaseballNews}
              imgAlt="Jackie Robinson"
              cardTitle="Heritage Day"
              cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit tortor. Quisque sed sodales lectus, sit amet scelerisque odio. Sed tortor augue, iaculis a condimentum nec, consequat vitae risus."
            />
          </div>
          <div className="col-lg-4 col-md-4 col-12 mt-3 text-start">
            <NewsCard
              imgSrc={MarathonNews}
              imgAlt="Marathon"
              cardTitle="City Marathon"
              cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit tortor. Quisque sed sodales lectus, sit amet scelerisque odio. Sed tortor augue, iaculis a condimentum nec, consequat vitae risus."
            />
          </div>
        </div>
      </div>
    </>
  );
};

NewsCardsGrid.propTypes = {};

export default NewsCardsGrid;
