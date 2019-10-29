import React, { Component } from "react"
import "./Settings.css"
import NewArticle from "../NewArticle/NewArticle"

class Settings extends Component {

    render() {
        return (
            <div>
                <div>
                    <h1 style={{ textAlign: "center" }}>Your Settings</h1>
                </div>

                {/* How the username and email values are hardcoded */}
                <div className="settings-input">
                    <input type="text"
                        placeholder="URL of profile picture" />
                    <input type="text" />

                    <textarea type="text"
                        placeholder="Short bio about you" />

                    <input type="text" />

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