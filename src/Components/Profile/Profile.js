import React, { Component } from "react"
import "./Profile.css"


class Profile extends Component {
    state = {
        profile: null,
        userArticles: []
    }

    componentDidMount() {
        const username = this.props.match.params.username
        fetch(`https://conduit.productionready.io/api/profiles/${username}`, {
            method: "GET",
            "Authorization": `Token ${localStorage.Token}`,
            "Content-type": "application/json",
        })
            .then(response => response.json())
            .then(data => this.setState({ profile: data }))

        fetch(`https://conduit.productionready.io/api/articles/?author=${username}`)
            .then(response => response.json())
            .then(userdata => this.setState({ userArticles: userdata }))
    }

    render() {
        const username = this.state.profile && this.state.profile.profile.username
        console.log(this.state.userArticles)
        console.log(this.state.profile)

        return (
            <div>
                <div>
                    {<div className="user-info">
                        <img className="user-image" src={this.state.profile && this.state.profile.profile.image} />
                        <h2>{this.state.profile && this.state.profile.profile.username}</h2>
                    </div>
                    }

                    <div>
                        {
                            this.state.userArticles && this.state.userArticles.articles.map(article => {
                                return (
                                    <p>{article.author.username}</p>
                                    <p>{article.title}</p>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        )
    }
}



export default Profile