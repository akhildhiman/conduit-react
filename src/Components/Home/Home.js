import React, { Component } from "react";
import "./Home.css"
import {Link} from "react-router-dom"

class Home extends Component {
    state = {
        articlesArray: []
    }

    componentDidMount() {
        fetch("https://conduit.productionready.io/api/articles")
            .then(response => response.json())
                .then(data => this.setState({articlesArray: data.articles}))
    }

    render () {
        console.log(this.state.articlesArray)
        return (
            // <Header />
            <div className="home">
                <h1>conduit</h1>
                <p>A place to share knowledge</p>
                <div> 
                    <Link to path="/tags">coffee</Link>
                    <Link to path="/tags">test</Link>
                    <Link to path="/tags">butt</Link>
                </div>
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
            </div>
        )
    }
}

export default Home;