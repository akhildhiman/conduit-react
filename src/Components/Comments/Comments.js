import React, { Component } from "react";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: {
        body: "",
      },
    };
  }

  componentDidMount() {
    var slug = this.props.slug;
    fetch(`https://conduit.productionready.io/api/articles/${slug}/comments`, {
      method: "GET",
      "Content-type": "application/json",
      Authorization: `Token ${localStorage.Token}`,
    })
      .then((response) => response.json())
      .then((data) => this.setState({ comment: data }));
  }

  render() {
    const comments = this.state.comment.comments && this.state.comment.comments;
    return (
      <div>
        <div>
          {comments &&
            comments.map((comment) => {
              return (
                <div
                  style={{
                    color: "red",
                    border: "1px solid grey",
                    marginLeft: "270px",
                    paddingTop: "20px",
                    paddingLeft: "50px",
                    width: "700px",
                  }}
                >
                  <span>
                    <img
                      className="user-image"
                      src={comment.author.image}
                      alt="comment"
                    ></img>
                  </span>
                  <span>{comment.author.username}</span>
                  <br></br>
                  <p>{comment.body}</p>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Comments;
