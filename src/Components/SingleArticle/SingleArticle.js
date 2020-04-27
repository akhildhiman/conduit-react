import React, { Component } from "react";
import "../NewArticle/NewArticle";
import { Link } from "react-router-dom";
import "./SingleArticle.css";
import Comments from "../Comments/Comments";


class SingleArticle extends Component {
  state = {
    article: null,
    favorited: null,
    count: 0,
    comments: "",
  };

  componentDidMount() {
    var slug = this.props.match.params.slug; // slug coming from params in the match object
    fetch(`https://conduit.productionready.io/api/articles/${slug}`)
      .then((response) => response.json())
      .then((data) => this.setState({ article: data.article }));
  }

  handleFavoriteArticle = () => {
    var slug = this.props.match.params.slug;
    fetch(`https://conduit.productionready.io/api/articles/${slug}/favorite`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Token ${localStorage.Token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => this.setState({ favorited: true }));
  };

  handleUnfavoriteArticle = () => {
    var slug = this.props.match.params.slug;
    fetch(`https://conduit.productionready.io/api/articles/${slug}/favorite`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: `Token ${localStorage.Token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => this.setState({ favorited: false }));
  };

  handleChange = (event) => {
    this.setState({ ...this.state, comments: event.target.value });
  };

  handleComment = () => {
    const slug = this.props.match.params.slug;
    const Comments = {
      comment: {
        body: this.state.comments,
      },
    };
    fetch(`https://conduit.productionready.io/api/articles/${slug}/comments`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Token ${localStorage.Token}`,
      },
      body: JSON.stringify(Comments),
    })
      .then((res) => res.json())
      .then((comnt) => {
        const rescmnt = comnt.comment.body;
        this.setState({ ...this.setState, comments: rescmnt });
      });
  };

  render() {
    const article = this.state.article;
    const username = this.state.article && this.state.article.author.username;
    return (
      <>
        <div className="single-article-banner">
          <div className="article-title">{article && article.title}</div>
          <div>
            <span>
              <img
                className="user-image"
                src={article && article.author.image}
                alt="author-avatar"
              ></img>
            </span>
            <Link
              style={{ color: "white" }}
              to={`/Profile/{article.author.username}`}
            >
              {username}
            </Link>
            <div className="article-banner-links">
              {/* <Link style={linksStyle}>Follow </Link> */}

              {/* { */}
              {/* // this.state.favorited ? */}
              {/* // <button onClick={this.handleFavoriteArticle} style={linksStyle}>Favorite Article</button> */}

              {/* : */}
              {/* // <button onClick={this.handleUnfavoriteArticle} style={linksStyle}>Unfavorite Article</button> */}
              {/* } */}
            </div>
          </div>
        </div>

        <div className="article-description">
          {article && article.description}
        </div>

        <div>
          {article && article.slug ? (
            <Comments slug={article && article.slug} />
          ) : null}

          {localStorage.Token ? (
            <div className="comment-section">
              <textarea
                value={this.state.comments}
                onChange={this.handleChange}
              />
              <button className="btn-comment" onClick={this.handleComment}>
                Comment
              </button>
            </div>
          ) : (
            <div style={{ textAlign: "center" }}>
              <p>
                <b>Sign Up</b> or <b>Sign In</b> to add comments
              </p>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default SingleArticle;
