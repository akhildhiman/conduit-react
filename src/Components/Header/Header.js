import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Header.css";
import "../Register/Register";
import "../Login/Login";
import "../Home/Home";
import "../NewArticle/NewArticle";
import "../Settings/Settings"


const logoStyle = { textDecoration: "none", color: "#5cb85c", fontSize: "22px" };
const linksStyle = { textDecoration: "none", color: "black", padding: "0 10px", color: "rgb(92,87,87)", fontWeight: "300" };

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
                <Link style={logoStyle} to="/">conduit</Link>
                {
                    localStorage.Token ?   // if the user is logged in, display logout
                        <div className="header-links">
                            <button onClick={this.handleLogout} className="btn-logout">Logout</button>
                            <Link to="/">Home</Link>
                            <Link to="/NewArticle">New Article</Link>
                            {/* <button>Settings</button> */}
                            {<Link to="/Settings">Settings</Link>}
                        </div>
                        :

                        <div className="header-links">
                            <Link to="/" style={linksStyle}>Home</Link>
                            <Link to="/Register" style={linksStyle}>Sign up</Link>
                            <Link to="/Login" style={linksStyle}>Sign in</Link>
                        </div>
                }
            </div>
        )
    }
}



export default withRouter(Header);