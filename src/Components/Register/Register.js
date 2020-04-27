import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import "../Login/Login";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      user: {
        username: this.state.userName,
        email: this.state.email,
        password: this.state.password,
      },
    };

    fetch("https://conduit.productionready.io/api/users", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) =>
        data.user ? this.props.history.push("/Login") : console.log(data)
      ); 
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value, //computed value of whatever it is in the name attribute
    });
  };

  render() {
    return (
      <div>
        <div className="form-header">
          <h1>Sign Up</h1>
          <h4 style={{ color: "#5cb85c" }}>Have an account ?</h4>
        </div>
        <form className="form">
          <input
            type="text"
            name="userName"
            placeholder="Username"
            value={this.state.userName}
            onChange={this.handleChange}
          />
          <br></br>

          <input
            type="text"
            placeholder="Email"
            value={this.state.email}
            name="email"
            onChange={this.handleChange}
          />
          <br></br>

          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            name="password"
            onChange={this.handleChange}
          />
          <br></br>

          <div className="btn">
            <button
              style={{ color: "white" }}
              type="submit"
              onClick={this.handleSubmit}
            >
              Signup
            </button>
            <br></br>
          </div>

          <Link to="/login" style={{ textDecoration: "none", color: "green" }}>
            {" "}
            Already an user? Login{" "}
          </Link>
        </form>
      </div>
    );
  }
}

export default Register;
