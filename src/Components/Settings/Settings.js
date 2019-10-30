import React, { Component } from "react"
import "./Settings.css"

class Settings extends Component {
    state = {
        username: "",
        email: ""
    }

    componentDidMount() {
        fetch("https://conduit.productionready.io/api/user", {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Token ${localStorage.Token}`
            }
        })
            .then(response => response.json())
            .then(data => data.user.token ? this.setState({ username: data.user.username, email: data.user.email }) : console.log("no user"))
    }

    handleChange = (e) => {
        const { name, value } = e.target.value
        this.setState({
            [name]: value
        })
    }


    render() {
        const username = this.state.username
        const email = this.state.email

        return (
            <div>
                <div>
                    <h1 style={{ textAlign: "center" }}>Your Settings</h1>
                </div>

                {/* How the username and email values are hardcoded */}
                <div className="settings-input">
                    <input type="text"
                        placeholder="URL of profile picture" />

                    <input type="text"
                        onChange={this.handleChange}
                        name="username"
                        value={username}
                    />

                    <textarea type="text"
                    placeholder="Short bio about you" />

                    <input type="text"
                    onChange={this.handleChange}
                    name="email"
                    value={email} />
                    

                    <input type="text"
                    placeholder="New Password" />
                </div>

                <div style={{ textAlign: "center" }}>
                    <button type="submit">Update Settings</button>
                </div>
            </div>

        )
    }

}

export default Settings