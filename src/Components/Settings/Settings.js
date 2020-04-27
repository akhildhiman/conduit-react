import React, { Component } from "react";
import "./Settings.css";

class Settings extends Component {
  state = {
    username: "",
    email: "",
  };

  componentDidMount() {
    fetch("https://conduit.productionready.io/api/user", {
      headers: {
        "Content-type": "application/json",
        Authorization: `Token ${localStorage.Token}`,
      },
    })
      // if user is authorized
      .then((response) => response.json())
      .then((data) =>
        data.user.token
          ? this.setState({
              username: data.user.username,
              email: data.user.email,
            })
          : console.log("no user")
      );
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      user: {
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
        bio: this.state.bio,
        image: this.state.image,
      },
    };

    fetch("https://conduit.productionready.io/api/user", {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json",
        Authorization: `Token ${localStorage.Token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => this.setState({ user: data }));
    this.props.history.push("/");
  };

  render() {
    const username = this.state.username;
    const email = this.state.email;

    return (
      <div>
        <div>
          <h1 style={{ textAlign: "center" }}>Your Settings</h1>
        </div>

        {/* How the username and email values are hardcoded */}
        <div className="settings-input">
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="URL of profile picture"
          />

          <input
            type="text"
            onChange={this.handleChange}
            name="username"
            value={username}
          />

          <textarea
            type="text"
            onChange={this.handleChange}
            placeholder="Short bio about you"
          />

          <input
            type="text"
            onChange={this.handleChange}
            const
            name="email"
            value={email}
          />

          <input
            type="text"
            onChange={this.handleChange}
            placeholder="New Password"
          />
        </div>

        <div style={{ textAlign: "center" }}>
          <button onClick={this.handleSubmit} type="submit">
            Update Settings
          </button>
        </div>
      </div>
    );
  }
}

export default Settings;
