import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import ListTags from "../ListTags/ListTags";
import Profile from "../Profile/Profile";
import {connect} from "react-redux"

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
        console.log(this.props, "inside render home")
        return (
            <div>
                <div className="conduit-banner">
                    <h1>conduit</h1>
                    <h5>A place to share your knowledge</h5>
                </div>

                {/* <div className="list-tags">
                    <ListTags />
                </div> */}

                <div>
                    {this.state.articlesArray && this.state.articlesArray.map(article => {
                        return (
                            <div className="article-container">
                                <div className="article-list">
                                    <Link to={`/SingleArticle/${article.slug}`} style={{ textDecoration: 'none' }}>
                                        <Link to={`/Profile/${article.author.username}`}>
                                            <img className="user-image" src={article.author.image} />
                                            <span>{article.author.username}</span>
                                        </Link>
                                        <h2>{article.title}</h2>
                                        <h4>{article.description}</h4> <br></br> <br></br>
                                        <h6>Read more...</h6>
                                        <hr></hr>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>



            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}


export default connect(mapStateToProps)(Home)