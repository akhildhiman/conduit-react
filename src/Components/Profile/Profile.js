import React, { Component } from "react"
import "./Profile.css"
import UserArticles from "../UserArticles/UserArticles"
import { Link } from "react-router-dom"

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
            .then(data => this.setState({ profile: data }))
    }

    render() {
        const username = this.state.profile && this.state.profile.profile.username
        console.log(this.state.profile)
        return (
            <div>
                <div>
                    {<div className="user-info">
                        <img className="user-image" src={this.state.profile && this.state.profile.profile.image} />
                        <h2>{this.state.profile && this.state.profile.profile.username}</h2>

                    </div>
                    }
                    <Link to={`/UserArticles/${username}`}>
                        <div>
                            
                        </div>
                    </Link>


                </div>
            </div>
        )
    }
}



export default Profile