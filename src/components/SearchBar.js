import React, { useState } from 'react';
import { Form, Button, InputGroup, ListGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { jobList } from '../data/jobList'; 

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);
  const navigate = useNavigate(); 

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      const filtered = jobList.filter((job) =>
        job.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredJobs(filtered);
    } else {
      setFilteredJobs([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchTerm.trim()) {
      alert('Please enter a job name to search.');
      return;
    }
    
    //find job that matchess the typed value
    const matchingJob = jobList.find((job) =>
      job.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (matchingJob) {
      navigate(`/jobdetail/${matchingJob.id}`);
    } else {
      alert('No job found for this search term');
    }
  };

  const handleJobClick = (jobId) => {
    navigate(`/jobdetail/${jobId}`);
  };

  return (
    <Form onSubmit={handleSubmit} className="my-5 custom-search-bar">
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Search for jobs..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Button variant="primary" type="submit">
          <FaSearch />
        </Button>
      </InputGroup>
      {filteredJobs.length > 0 && (
        <ListGroup>
          {filteredJobs.map((job) => (
            <ListGroup.Item
              key={job.id}
              onClick={() => handleJobClick(job.id)}
              style={{ cursor: 'pointer' }}
            >
              {job.name}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Form>
  );
};

export default SearchBar;
