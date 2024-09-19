import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const onClickSignUp = () => {
    navigate("/signup");
  };

  const onClickSignIn = (e) => {
    e.preventDefault();
    setShowAlert(true);
  };
  return (
    <div className="job-footer justify-content-center">
      <div className="container my-4 d-flex justify-content-center align-items-center">
        <div className="card w-50">
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
            <div class="mb-4 row">
              <label for="staticEmail" class="col-sm-2 col-form-label">
                Email
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="staticEmail"
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                Password
              </label>
              <div class="col-sm-10">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword"
                />
              </div>
            </div>

            <div class="d-grid gap-2 col-6 mx-auto">
              <button
                class="btn btn-outline-primary"
                type="button"
                onClick={onClickSignIn}
              >
                Login
              </button>
              <button
                class="btn btn-outline-primary"
                type="button"
                onClick={onClickSignUp}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
