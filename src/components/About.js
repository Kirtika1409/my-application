import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import about from "../assets/aboutus.jpg";
import { FaLanguage, FaBook, FaPersonBooth } from "react-icons/fa";

const About = () => {
  return (
    <div className="job-footer">
      <div className="card mb-4 mx-auto" style={{ maxWidth: "100%", width: "90%" }}>
        <div className="row g-0">
          <div className="col-12 col-md-4">
            <img
              src={about}
              className="img-fluid rounded-start"
              alt="about"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="col-12 col-md-8">
            <div className="card-body">
              <h3 className="card-title text-center text-md-start">About Us</h3>
              <p className="card-text text-center text-md-start" style={{ wordBreak: "break-word" }}>
                We are looking for a Credentialing Coordinator to join our team and oversee administrative tasks
                dealing with our health facility’s credentialing. Credentialing Coordinator responsibilities include 
                maintaining and verifying files and tracking the expiration of certifications throughout the 
                organization. Ultimately, you will work with different departments across our organization to ensure 
                staff members have the necessary accreditations needed throughout the year.
              </p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <div className="icon-container mx-2 text-center">
                  <FaLanguage size="2em" />
                  <p className="mt-2">Language</p>
                </div>
                <div className="icon-container mx-2 text-center">
                  <FaBook size="2em" />
                  <p className="mt-2">Accessible</p>
                </div>
                <div className="icon-container mx-2 text-center">
                  <FaPersonBooth size="2em" />
                  <p className="mt-2">Worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
