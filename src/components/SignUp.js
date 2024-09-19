import React,{useState} from 'react';

const SignUp = () => {
    const [showAlert, setShowAlert] = useState(false); 

    const onClickSignUp =(e) => {
        e.preventDefault();
        setShowAlert(true);

    }
  return (
    <div className="container my-2">
      <div className="card">
        <div className="card-header">
          <h3>Sign Up</h3>
        </div>
        <div className="card-body">
        {showAlert && (
            <div className="alert alert-success" role="alert">
              <h4 className="alert-heading">Success!</h4>
              <p>
                You successfully signed up! 
              </p>
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
            <div className="col-12">
              <label htmlFor="fname" className="form-label">
                First Name
              </label>
              <input type="text" className="form-control" id="fname" />
            </div>
            <div className="col-12">
              <label htmlFor="lname" className="form-label">
                Last Name
              </label>
              <input type="text" className="form-control" id="lname" />
            </div>
            <div className="col-md-4">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <select id="gender" className="form-select">
                <option></option>
                <option>Female</option>
                <option>Male</option>
              </select>
            </div>
            <div className="col-12">
            <button type="submit" className="btn btn-primary" onClick={onClickSignUp}>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
