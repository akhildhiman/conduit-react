import React, { Component } from "react"
import "./NewArticle.css"

class NewArticle extends Component {
    state = {
        title: "",
        description: "",
        body: "",
        tagList: []
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const body = {
            article: {
                title: this.state.title,
                description: this.state.description,
                body: this.state.body,
                // tagList: [],
            }
        }

        fetch("https://conduit.productionready.io/api/articles", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Authorization": `Token ${localStorage.Token}`,
                "Content-type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => data.article.slug ? this.props.history.push("/") : console.log(data)) //if slug is there, redirect to home page
    }

    render() {
        return (
            <div className="new-article">

                <input onChange={this.handleChange}
                    type="text"
                    placeholder="Article Title"
                    name="title"
                    value={this.state.title} />
                <br></br>

                <input onChange={this.handleChange}
                    type="text"
                    placeholder="What's this article about"
                    name="description"
                    value={this.state.description} />
                <br></br>

                <textarea onChange={this.handleChange}
                    type="text"
                    cols="58"
                    placeholder="Write your article"
                    name="body"
                    value={this.state.body} />
                <br></br>

                <input onChange={this.handleChange}
                    type="text"
                    placeholder="Enter tags"
                    name="tagList"
                    value={this.state.tagList} />
                <br></br>

                <button onClick={this.handleSubmit}>Publish Article</button>
            </div>
        )
    }

}


export default NewArticle