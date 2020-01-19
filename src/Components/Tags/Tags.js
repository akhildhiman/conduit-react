import React, { Component } from "react"
import ListTags from "../ListTags/ListTags"
// import "./Tags.css"
// import "./ListTags.css"

class Tags extends Component {
    state = {
        tagArticles: []
    }

    componentDidMount() {
        var tag = this.props.match.params.tag
        fetch(`https://conduit.productionready.io/api/articles/?tag=${tag}`)
            .then(response => response.json())
            .then(data => this.setState({ tagArticles: data.articles }))
    }

    render() {
        const tagArticle = this.state.tagArticles

        return (
            <div className="article-container">
                <div className="article-list">{
                    tagArticle && tagArticle.map(article => {
                        return (
                            <div>
                                <img className="user-image" src={article.author.image} />
                                <span>{article.author.username}</span>
                                <h2>{article.title}</h2>
                                <h4>{article.description}</h4> <br></br> <br></br>
                                <h6>Read more...</h6>
                                {/* {
                                    tagArticle && tagArticle.map(tag => {
                                        return (
                                            <span></span>
                                        )
                                    })
                                } */}
                                <hr></hr>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}



export default Tags