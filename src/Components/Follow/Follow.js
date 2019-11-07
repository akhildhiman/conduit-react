import React, { Component } from "react"

class Follow extends Component {
    state = {
        profile: ""
    }

    componentDidMount() {
        var username = this.props.match.params.username
 
    }

    

    render() {
        console.log(this.state.profile)
        return (
            <div>


            </div>
        )
    }
}



export default Follow