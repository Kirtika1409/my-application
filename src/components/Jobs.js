import React, { useState, useEffect } from 'react';
import Slick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Jobs = () => {
  const [loading, setLoading] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200, 
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // load 2 sec

    return () => clearTimeout(timer);
  }, []);

  const jobsData = [
    {
      title: 'Business Analyst',
      image: 'https://images.pexels.com/photos/34600/pexels-photo.jpg',
      alt: 'Job Advertisement 1',
      buttonText: 'Apply Now',
      buttonDisabled: false,
    },
    {
      title: 'FrontEnd Developer',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      alt: 'Job Advertisement 2',
      buttonText: 'Apply Now',
      buttonDisabled: false,
    },
    {
      title: 'Project Manager',
      image: 'https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Job Advertisement 3',
      buttonText: 'Apply Now',
      buttonDisabled: false,
    },
    {
      title: 'Software Engineer',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Job Advertisement 4',
      buttonText: 'Apply Now',
      buttonDisabled: true,
    },
    {
      title: 'Software Tester',
      image: 'https://images.pexels.com/photos/256502/pexels-photo-256502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Job Advertisement 5',
      buttonText: 'Apply Now',
      buttonDisabled: false,
    },
  ];

  return (
    <div className="job-footer">
      {loading ? (
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
          <div className="jobs-section">
            <h2 className="text-center mb-4">Featured Job Opportunities</h2>
            <Slick {...settings}>
              {jobsData.map((job, index) => (
                <div key={index}>
                  <img src={job.image} alt={job.alt} className="img-fluid" />
                  <h3>{job.title}</h3>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    disabled={job.buttonDisabled}
                  >
                    {job.buttonText}
                  </button>
                </div>
              ))}
            </Slick>
          </div>
      )}
    </div>
  );
};

export default Jobs;
