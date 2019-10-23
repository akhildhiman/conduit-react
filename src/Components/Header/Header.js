import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Header.css";
import "../Register/Register";
import "../Login/Login";
import "../Home/Home";


const logoStyle = {textDecoration: "none", color: "#5cb85c"};

class Header extends Component {

    handleLogout = () => {
        localStorage.clear();
        this.redirect()
    }

    redirect = () => {
        this.props.history.push("/")
    }
    

    render () {
        return (
            <div className="header">
                <Link style={logoStyle} to="/">Conduit</Link> 
                <Link to="/">Home</Link>
                {
                    localStorage.Token?   // if the user is logged in, display logout
                    <div>
                        <button onClick={this.handleLogout} className="btn-logout">Logout</button>
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