import React from "react";
import "./trendingNews.css";
import photoNews1 from "../../../img/PhotoNews1.jpg";
import photoNews2 from "../../../img/PhotoNews2.jpg";
import photoNews3 from "../../../img/PhotoNews3.jpg";

const TrendingNews = () => {
  return (
    <div className="container">
      <div className="row mb-3">
        <h3>Trending News</h3>
      </div>
      <div className="row">
        <div className="col-4">
          <div className="card border-0 me-4 smallCard">
            <img src={photoNews1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card border-0 me-4 smallCard">
            <img src={photoNews2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="card p-4 border-4 rounded-0 bigCard">
            <img src={photoNews3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nulla purus, consequat vel sem vitae, lacinia vehicula tellus.
                Duis tincidunt vulputate est, ultrices lobortis lectus. Fusce
                sed lorem sed quam iaculis condimentum. Nulla accumsan luctus
                nibh, quis aliquet nisi pharetra nec. Suspendisse non posuere
                lorem. Fusce faucibus, urna in bibendum placerat, dolor dolor
                efficitur orci, vel volutpat quam justo ac metus. Vivamus arcu
                nunc, dignissim vitae nisl a, porta blandit quam. Nulla
                facilisi. Nullam nunc lacus, ultricies in nulla in, bibendum
                accumsan arcu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingNews;
