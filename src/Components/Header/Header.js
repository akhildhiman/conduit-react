import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Header.css";

const logoStyle = {textDecoration: "none", color: "#5cb85c"};
function Header() {
    return (
        <div className="header">
            <Link style={logoStyle} to="/">Conduit</Link>
            <Link to="/">Home</Link>
            <Link to="/Register">Sign up</Link>
            <Link to="/Login">Sign in</Link>
        </div>  
    )
}



export default withRouter(Header);