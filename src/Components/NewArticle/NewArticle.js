import React, { Component } from "react"

class NewArticle extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="Article Title" /> <br></br>
                <input type="text" placeholder="What's this article about" /><br></br>
                <textarea type="text" placeholder="Write your article" /><br></br>
                <input type="text" placeholder="Enter tags" /><br></br>
                <button>Publish Article</button>
            </div>
        )
    }

}




export default NewArticle