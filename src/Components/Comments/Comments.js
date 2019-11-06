import React, { Component } from "react"

class Comments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comment: {
                body: ""
            }
        }
    }

    componentDidMount() {
        var slug = this.props.slug
        console.log(slug)
        fetch(`https://conduit.productionready.io/api/articles/${slug}/comments`, {
            method: "GET",
            "Content-type": "application/json",
            "Authorization": `Token ${localStorage.Token}`
        })
            .then(response => response.json())
            .then(data => this.setState({ comment: data })
            )
    }


    render() {
        console.log(this.state.comment.comments)
        const comment = this.state.comment.comments && this.state.comment.comments.map(comment => comment.body)
        const commentAuthor = this.state.comment.comments && this.state.comment.comments.map(comment => comment.author.username)
        const commentImage = this.state.comment.comments && this.state.comment.comments.map(comment => comment.author.image)
        return (
            <div>
                <div style={{ textAlign: "center", color: "red"} }>
                    <p>{comment}</p>
                    <p>{commentAuthor}</p>
                    <span><img className="user-image" src={commentImage} /></span>
                </div>
            </div>
        )
    }





}


export default Comments