import React, { Component } from "react";
import "./Home.css"
import {Link} from "react-router-dom"
import ListTags from "../ListTags/ListTags"

class Home extends Component {
    state = {
        articlesArray: null
    }

    componentDidMount() {
        fetch("https://conduit.productionready.io/api/articles")
            .then(response => response.json())
                .then(data => this.setState({articlesArray: data.articles}))
    }

    render () {
        return(
            <div className="home">
                {this.state.articlesArray && this.state.articlesArray.map(article => {
                    return (
                        <div className="article-list">
                            <Link to={`/SingleArticle/${article.slug}`}> 
                                {/* <img src= {article.author.image} /> */}
                                {article.author.username} <br></br>
                                {article.title} <br></br>
                                {article.body} <br></br> <br></br>
                            </Link>
                        </div>
                    )
                })}
                <div>
                    <ListTags />
                </div>
            </div>

        )
    }
}

export default Home;