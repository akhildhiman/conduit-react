import React from "react"
import { Link } from "react-router-dom";
import "./Register.css"



function Register() {
    function handleClick() {
        fetch("https://conduit.productionready.io/api/users", {
            method: 'POST', // or 'PUT'
            // body: JSON.stringify(data), // data can be `string` or {object}!e
            headers: {
              'Content-Type': 'application/json'
            }
          })
        .then(response => response.json())
    }

    return(
        <form className="form">
            <input type="text" placeholder="Enter the username" /> <br></br>
            <input type="text" placeholder="Enter the email" /><br></br>
            <input type="text" placeholder="Enter the password" /><br></br>
            <button type="submit">Signup</button><br></br>
            <Link to="/login">
                <button onClick={handleClick}type="submit">Already an user? Login</button>
            </Link>
        </form>
    )
}

export default Register;