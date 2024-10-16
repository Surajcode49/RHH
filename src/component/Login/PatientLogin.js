import React, { Component } from 'react';
import Navber from '../Navber/Navber';

class PatientLogin extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.directLogin = this.directLogin.bind(this);
  } 

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    // You can handle login with the user details here if needed
    sessionStorage.setItem('usertoken', 'dummy_token'); // Replace with actual token if needed
    sessionStorage.setItem('userData', JSON.stringify(user));

    // Redirect to the patient home page
    this.props.history.push('/patient/login/patient_home');
  }

  directLogin() {
    // Directly log in without using email and password
    sessionStorage.setItem('usertoken', 'dummy_token'); // Replace with actual token if needed
    sessionStorage.setItem('userData', JSON.stringify({})); // Empty user data if not needed

    // Redirect to the patient home page
    this.props.history.push('/patient/login/patient_home');
  }

  render() {
    return (
      <div className="body">
        <Navber />
        <div className="container my-5">
          <div className="row">
            <div className="col-md-6 mt-5 mx-auto">
              <form noValidate onSubmit={this.onSubmit}>
                <h1 className="h3 mb-3 mt-5 font-weight-normal btn-rg">Please sign in as Patient</h1>
                <div className="form-group btn-rg">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter email"
                    value={this.state.email}
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className="form-group btn-rg">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.onChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-lg btn-primary btn-block mb-2"
                >
                  Sign in
                </button>
                {/* <button
                  type="button"
                  className="btn btn-lg btn-secondary btn-block"
                  onClick={this.directLogin}
                >
                  Direct Login
                </button> */}
              </form>
            </div>
          </div>
          <div className="reg ml-5">
            <h5 className="btn-rg">Don't have an account? <a href="/regPatient">Register Here</a></h5>
          </div>
        </div>

        <div className="mb-5 mt-5">v</div>
      </div>
    );
  }
}

export default PatientLogin;
