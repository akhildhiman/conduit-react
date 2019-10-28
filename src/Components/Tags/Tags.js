import React, { Component } from "react"
import ListTags from "../ListTags/ListTags"

class Tags extends Component {
    state = {
        tagArticles: []
    }

    componentDidMount() {
        var tag = this.props.match.params.tag
        fetch(`https://conduit.productionready.io/api/articles/?tag=${tag}`)
            .then(response => response.json())
            .then(data => this.setState({ tagArticles: data }))
    }

    render() {
        console.log(this.state.tagArticles)
        return (
            <div>
                
            </div>
        )
    }
}



export default Tags