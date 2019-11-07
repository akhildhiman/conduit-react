import React, { Component } from "react"
import "../NewArticle/NewArticle"
import { Link } from "react-router-dom"
import Header from "../Header/Header"
import "./SingleArticle.css"
import Comments from '../Comments/Comments'

const linksStyle = { textDecoration: "none", color: "black", padding: "0 10px", color: "rgb(92,87,87)", fontWeight: "300", color: "red" };


class SingleArticle extends Component {
    state = {
        article: null,
        favorited: null,
        count: 0
    }

    componentDidMount() {
        var slug = this.props.match.params.slug; // slug coming from params in the match object
        fetch(`https://conduit.productionready.io/api/articles/${slug}`)
            .then(response => response.json())
            .then(data => this.setState({ article: data.article }))
    }

    handleFavoriteArticle = () => {
        var slug = this.props.match.params.slug
        console.log(localStorage.Token)
        fetch(`https://conduit.productionready.io/api/articles/${slug}/favorite`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Token ${localStorage.Token}`
            }
        })
            .then(response => response.json())
            .then(data => this.setState({ favorited: true }))
    }

    handleUnfavoriteArticle = () => {
        var slug = this.props.match.params.slug
        console.log(localStorage.Token)
        fetch(`https://conduit.productionready.io/api/articles/${slug}/favorite`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Token ${localStorage.Token}`
            }
        })
            .then(response => response.json())
            .then(data => this.setState({ favorited: false }))
    }

    render() {
        // var slug = this.props.match.params.slug
        // console.log(article)
        const article = this.state.article
        const slug = article && article.slug
        // console.log(slug)
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
                            <Link style={linksStyle}>Follow </Link>

                            {
                                this.state.favorited ?
                                    <button onClick={this.handleFavoriteArticle} style={linksStyle}>Favorite Article</button>

                                    :
                                    <button onClick={this.handleUnfavoriteArticle} style={linksStyle}>Unfavorite Article</button>
                            }
                        </div>
                    </div>
                </div>

                <div className="article-description">
                    {article && article.description}
                </div>

                <div>
                    {
                        article && article.slug ?
                            <Comments slug={article && article.slug} />

                            :
                            null
                    }

                    {
                        localStorage.Token ?
                            <div className="comment-section">
                                <textarea />
                                <button className="btn-comment">Post Comment</button>
                            </div>
                            :
                            <div style={{ textAlign: "center" }}>
                                <p><b>Sign Up</b> or <b>Sign In</b> to add comments</p>
                            </div>
                    }
                </div>




            </>
        )
    }
}




export default SingleArticle