import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import about from "../assets/aboutus.jpg"
import { FaLanguage, FaBook, FaPersonBooth} from "react-icons/fa";

const About = () => {
  return (
    <div class="card mb-4">
  <div class="row g-0">
    <div class="col-md-3">
      <img src={about} class="img-fluid rounded-start" alt="about"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h3 class="card-title">About Us</h3>
        <p class="card-text">We are looking for a Credentialing Coordinator to join our team and oversee administrative tasks dealing with our health facility’s credentialing. 
            Credentialing Coordinator responsibilities include maintaining and verifying files and tracking the expiration of certifications throughout the organization. 
            Ultimately, you will work with different departments across our organization to ensure staff members have the necessary accreditations needed throughout the year.</p>
            <br/><br/>
            <div className="d-flex justify-content-center">
              <div className="icon-container mx-5">
                <FaLanguage size={50} />
                <p className="mt-2">Language</p>
              </div>
              <div className="icon-container mx-3">
                <FaBook size={50} />
                <p className="mt-2">Accessible</p>
              </div>
              <div className="icon-container mx-3">
                <FaPersonBooth size={50} />
                <p className="mt-2">Worldwide</p>
              </div>
              </div>
      </div>
    </div>
  </div>
</div>
   
  );
};

export default About;
