import React, { Component } from "react"
import "../NewArticle/NewArticle"

class SingleArticle extends Component {
    state = {
        article: {}
    }

    componentDidMount() {
        var slug = this.props.match.params.slug; // slug coming from params in the match object
        fetch(`https://conduit.productionready.io/api/articles/${slug}`) 
        .then(response => response.json())
            .then(data => this.setState({article: data.article}))
    }

    render() {
        const article = this.state.article
        return (
            <div>{article && article.title}</div>
        )
    }


}




export default SingleArticle