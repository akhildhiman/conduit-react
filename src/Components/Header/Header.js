import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Header.css";
import "../Register/Register";
import "../Login/Login";
import "../Home/Home";
import "../NewArticle/NewArticle";


const logoStyle = { textDecoration: "none", color: "#5cb85c" };

class Header extends Component {

    handleLogout = () => { // when clicked on logout, clear the localstorage and redirect to the home page
        localStorage.clear();
        this.redirect()
    }

    redirect = () => {
        this.props.history.push("/")
    }


    render() {
        return (
            <div className="header">
                <Link style={logoStyle} to="/">Conduit</Link>
                <Link to="/">Home</Link>
                {
                    localStorage.Token ?   // if the user is logged in, display logout
                        <div>
                            <button onClick={this.handleLogout} className="btn-logout">Logout</button>
                            <Link to="/NewArticle">New Article</Link>
                        </div>
                        :

                        <div>
                            <Link to="/Register">Sign up</Link>
                            <Link to="/Login">Sign in</Link>
                        </div>
                }
            </div>
        )
    }
}



export default withRouter(Header);