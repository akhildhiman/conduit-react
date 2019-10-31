import React, { Component } from "react"
import "../NewArticle/NewArticle"
import { Link } from "react-router-dom"
import Header from "../Header/Header"

const linksStyle = { textDecoration: "none", color: "black", padding: "0 10px", color: "rgb(92,87,87)", fontWeight: "300" };

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
        // console.log(article)
        return (

            <div className="single-article-banner">
                <div>
                    {article && article.title}
                </div>
                <div>
                    {article && article.author.username}
                    <Link style={linksStyle}>Edit Article</Link>
                    <Link style={linksStyle}>Delete Article</Link>
                </div>
                
                <div>
                    {/* <div>
                        {article && article.title}
                        {article && article.createdAt.toLocaleString()}
                        {article && article.author.username}
                    </div> */}
                </div>
            </div>
        )
    }
}




export default SingleArticle