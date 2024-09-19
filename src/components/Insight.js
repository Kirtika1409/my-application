import React from "react";
import "../styles/insight.css"; 
import insight2 from "../assets/insight2.jpg";
import insight3 from "../assets/insight3.jpg";

const Insight = () => {

  return (
    <div className="job-footer">
    <div className="row row-cols-1 row-cols-md-2 g-4">
      <div className="col">
        <div className="card">
          <div className="image-container">
            <img src={insight2} className="card-img-top" alt="Insight 1" />
            <div className="hover-description">
              <figure>
                <blockquote class="blockquote">
                  <p>“The quicker you can act, the better experience you can give that candidate.”</p>
                </blockquote>
                <figcaption class="blockquote-footer">
                 Morgan Llewellyn, Chief Data Scientist, Jobvite
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="image-container">
            <img src={insight3} className="card-img-top" alt="Insight 1" />
            <div className="hover-description">
              <figure>
                <blockquote class="blockquote">
                  <p>“The best way to predict the future is to invent it.” </p>
                </blockquote>
                <figcaption class="blockquote-footer">
                 Alan Kay
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </div>
  );
};

export default Insight;
