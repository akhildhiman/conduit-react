import React, { Component } from "react";
import "./Profile.css";

class Profile extends Component {
  state = {
    profile: null,
    userArticles: [],
    isFollowed: false,
  };

  componentDidMount() {
    const username = this.props.match.params.username;
    fetch(`https://conduit.productionready.io/api/profiles/${username}`, {
      method: "GET",
      Authorization: `Token ${localStorage.Token}`,
      "Content-type": "application/json",
    })
      .then((response) => response.json())
      .then((data) => this.setState({ profile: data }));

    fetch(`https://conduit.productionready.io/api/articles/?author=${username}`)
      .then((response) => response.json())
      .then((userdata) => this.setState({ userArticles: userdata }));
  }

  handleFollow = () => {
    const username = this.props.match.params.username;
    fetch(
      `https://conduit.productionready.io/api/profiles/${username}/follow`,
      {
        method: "POST",
        headers: {
          Authorization: `Token ${localStorage.Token}`,
          "Content-type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const Follow = data.profile.following;
        this.setState({ ...this.state, isFollowed: Follow });
      });
  };

  handleUnFollow = () => {
    const username = this.props.match.params.username;
    fetch(
      `https://conduit.productionready.io/api/profiles/${username}/follow`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Token ${localStorage.Token}`,
          "Content-type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const UnFollow = data.profile.following;
        this.setState({ ...this.state, isFollowed: UnFollow });
      });
  };

  render() {
    const username = this.state.profile && this.state.profile.profile.username;
    const following =
      this.state.profile && this.state.profile.profile.following;
    const bio = this.state.profile && this.state.profile.profile.bio;
    return (
      <div>
        <div>
          {
            <div className="user-info">
              <img
                className="user-image"
                src={this.state.profile && this.state.profile.profile.image}
                alt="user-avatar"
              />
              <h2>
                {this.state.profile && this.state.profile.profile.username}
              </h2>
              <h6>{bio}</h6>
              <br></br>
              {this.state.isFollowed ? (
                <button onClick={this.handleUnFollow}>Unfollow</button>
              ) : (
                <button onClick={this.handleFollow}>Follow</button>
              )}
            </div>
          }

          <div>
            <p style={{ textAlign: "center", color: "#5cb85c" }}>Articles</p>
            {this.state.userArticles.articles &&
              this.state.userArticles.articles.map((article) => {
                return (
                  <div className="article-container">
                    <div className="article-list">
                      <img className="user-image" src={article.author.image} alt="user-avatar" />
                      <span>{article.author.username}</span>
                      <h2>{article.title}</h2>
                      <h4>{article.description}</h4> <br></br> <br></br>
                      <h6>Read more...</h6>
                      <hr></hr>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
