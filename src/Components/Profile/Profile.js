import React, { Component } from "react"
import Header from "../Header/Header"

class Profile extends Component {
    state = {
        profile: null
    }


    componentDidMount() {
        const username = this.props.match.params.username
        // console.log("inside profile cdm")
        fetch(`https://conduit.productionready.io/api/profiles/${username}`, {
            method: "GET",
            "Content-type": "application/json",
        })
            .then(response => response.json())
                .then(data => console.log(data))
    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
            </div>
        )
    }
}



export default Profile