import React, { useState} from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const onClickSignUp = () => {
    navigate('/signup'); 
  };

  const onClickSignIn = (e) => {
    e.preventDefault();
    setShowAlert(true);
  };
  return (
    <div className="container my-2">
      <div className="card">
        <div className="card-header">
          <h3>Login</h3>
        </div>
        <div className="card-body">
          {showAlert && (
            <div className="alert alert-success" role="alert">
              <h4 className="alert-heading">Success!</h4>
              <p>You successfully signed in!</p>
            </div>
          )}
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="col-md-6">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="password" />
            </div>
            <div class="d-grid gap-2 col-6 mx-auto">
              <button class="btn btn-outline-primary" type="button" onClick={onClickSignIn}>
                Login
              </button>
              <button class="btn btn-outline-primary" type="button" onClick={onClickSignUp}>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
