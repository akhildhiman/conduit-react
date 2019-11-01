import React, { Component } from "react"
import "../NewArticle/NewArticle"
import { Link } from "react-router-dom"
import Header from "../Header/Header"
import "./SingleArticle.css"

const linksStyle = { textDecoration: "none", color: "black", padding: "0 10px", color: "rgb(92,87,87)", fontWeight: "300", color: "red" };

class SingleArticle extends Component {
    state = {
        article: null
    }

    componentDidMount() {
        var slug = this.props.match.params.slug; // slug coming from params in the match object
        fetch(`https://conduit.productionready.io/api/articles/${slug}`)
            .then(response => response.json())
            .then(data => this.setState({ article: data.article }))
    }

    render() {
        const article = this.state.article
        console.log(article)
        return (
            <>
                <div className="single-article-banner">
                    <div className="article-title">
                        {article && article.title}
                    </div>
                    <div>
                        <span><img className="user-image" src={article && article.author.image}></img></span>
                        {article && article.author.username}
                        <div className="article-banner-links">
                            <Link style={linksStyle}>Edit Article</Link>
                            <Link to=""style={linksStyle}>Delete Article</Link>
                        </div>
                    </div>
                </div>

                <div className="article-description">
                    {article && article.description}
                </div>
            </>
        )
    }
}




export default SingleArticle