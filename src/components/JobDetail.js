import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { jobList } from "../data/jobList";
import JobAppliedModel from "./JobAppliedModel";

const JobDetail = () => {
  const { jobId } = useParams();
  const [activeTab, setActiveTab] = useState("description");
  const [apply, setApply] = useState(false);

  const handleClose = () => setApply(false);

  const job = jobList.find((job) => job.id === parseInt(jobId, 10));

  if (!job) {
    return <div>Job Not Found</div>;
  }

  const onClickApply = () => {
    setApply(true);
  };

  return (
    <div className="job-footer">
      {apply && <JobAppliedModel apply={apply} handleClose={handleClose} />}
      <h2 className="text-center mb-2">{job.name}</h2>
      <div className="card" style={{ minHeight: "300px" }}>
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "description" ? "active" : ""
                }`}
                href="#description"
                onClick={() => setActiveTab("description")}
              >
                Description
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === "skills" ? "active" : ""}`}
                href="#skills"
                onClick={() => setActiveTab("skills")}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "experience" ? "active" : ""
                }`}
                href="#experience"
                onClick={() => setActiveTab("experience")}
              >
                Experience
              </a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          {activeTab === "description" && (
            <div id="description">
              <p className="card-text">{job.describe}</p>
            </div>
          )}
          {activeTab === "skills" && (
            <div id="skills">
              <ul>
                {job.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          )}
          {activeTab === "experience" && (
            <div id="experience">
              <p className="card-text">
                {job.experience || "No experience required"}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="btn">
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={onClickApply}
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetail;
