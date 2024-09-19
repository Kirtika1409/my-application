import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import Jobs from './components/Jobs';
import Footer from './components/Footer';
import About from './components/About';
import Insight from './components/Insight';
import { FaTrello } from 'react-icons/fa';
import ContactUs from './components/ContactUs';
import Joinus from './components/JoinUs';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="light" expand="lg" sticky="top">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <FaTrello style={{ marginRight: '8px', fontSize: '1.5rem' }} />
              Job Finder
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/jobs">Jobs</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link >Candidate</Nav.Link>
                <Nav.Link >Client</Nav.Link>
                <Nav.Link as={Link} to="/join-us">
                  <Joinus />
                </Nav.Link>
                <Nav.Link as={Link} to="/insights">Insights</Nav.Link>
                <Nav.Link as={Link}>
                  <ContactUs /> 
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={
            <div className="content-section">
              <div className="search-section">
                <Container>
                  <SearchBar />
                </Container>
              </div>
            </div>
          } />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/about" element={<About />} />
          <Route path="/insights" element={<Insight />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />      
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
