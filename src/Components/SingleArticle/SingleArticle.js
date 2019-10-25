import React, { Component } from "react"
import "../NewArticle/NewArticle"

class SingleArticle extends Component {
    state = {
        article: null
    }

    componentDidMount() {
        var slug = this.props.match.params.slug; // slug coming from params in the match object
        fetch(`https://conduit.productionready.io/api/articles/${slug}`) 
        .then(response => response.json())
            .then(data => this.setState({article: data.article}))
    }

    render() {
        const article = this.state.article
        console.log(article)
        return (
            <div>
                {article && article.title}
                {article && article.createdAt.toLocaleString()}
                {article && article.author.username}
            </div>
        )
    }
}




export default SingleArticle