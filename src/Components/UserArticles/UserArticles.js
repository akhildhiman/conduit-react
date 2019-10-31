import React, { Component } from "react"
import Profile from "../UserArticles/UserArticles"

class UserArticles extends Component {
    state = {
        userArticles: null
    }

    componentDidMount() {
        var username = this.props.match.params.username
        fetch(`https://conduit.productionready.io/api/articles/?author=${username}`)
            .then(response => response.json())
            .then(data => this.setState({ userArticles: data }))
    }


    render() {
        console.log(this.state.userArticles)
        return (
            <div>
                
            </div>

        )
    }



}



export default UserArticles