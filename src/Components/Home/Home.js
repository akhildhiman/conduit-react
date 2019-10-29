import React, { Component } from "react";
import "./Home.css"
import { Link } from "react-router-dom"
import ListTags from "../ListTags/ListTags"

class Home extends Component {
    state = {
        articlesArray: null
    }

    componentDidMount() {
        fetch("https://conduit.productionready.io/api/articles")
            .then(response => response.json())
            .then(data => this.setState({ articlesArray: data.articles }))
    }

    render() {
        return (
            <div>
                <div className="conduit-banner">
                    <h1>Conduit</h1>
                    <h5>A place to show your knowledge</h5>
                </div>



                <div>
                    {this.state.articlesArray && this.state.articlesArray.map(article => {
                        return (
                            <div className="article-container">
                                <div className="article-list">
                                    <Link to={`/SingleArticle/${article.slug}`}>
                                        <img className="user-image" src={article.author.image} />
                                        <span>{article.author.username}</span>
                                        <h2>{article.title}</h2>
                                        <h4>{article.body}</h4> <br></br> <br></br>
                                        <hr></hr>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="list-tags">
                    <ListTags />
                </div>

            </div>
        )
    }
}

export default Home;