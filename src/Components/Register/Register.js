import React, { Component } from "react"
import { Link } from "react-router-dom";
import "./Register.css"



class Register extends Component {
    constructor() {
        super()
        this.state = {
            userName: "",
            email: "",
            password: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault(); 

        const body = {
            user:{
                username:this.state.userName,
                email:this.state.email,
                password: this.state.password
            }
        }

        fetch("https://conduit.productionready.io/api/users", {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(body), // data can be `string` or {object}!e
            headers: {
              'Content-Type': 'application/json'
            }
          })
        .then(response => response.json()).then(data => console.log(data))
        .then(data=>data.user.token ? this.props.history.push('/Login'): console.log(data)) 
    }

    handleChange = (e) => {
        const { name,value } = e.target
        this.setState({
            [name] : value //computed value of whatever it is in the name attribute
        })
    }


    //     fetch("https://conduit.productionready.io/api/users", {
    //         method: 'POST', // or 'PUT'
    //         // body: JSON.stringify(data), // data can be `string` or {object}!e
    //         headers: {
    //           'Content-Type': 'application/json'
    //         }
    //       })
    //     .then(response => response.json())
    // }


    render() {
        return(
            <form className="form">

                <input type="text"
                name="userName" 
                placeholder="Enter the username" 
                value={this.state.userName} 
                onChange={this.handleChange}/>
                 <br></br>

                <input type="text"
                 placeholder="Enter the email" 
                 value={this.state.email} 
                 name="email" 
                 onChange={this.handleChange}/>
                 <br></br>

                <input type="text"
                 placeholder="Enter the password" 
                 value={this.state.password} 
                 name="password"
                 onChange={this.handleChange}/>
                 <br></br>

                <button type="submit" onClick={this.handleSubmit}>Signup</button><br></br>

                <Link to="/login">  Already an user? Login  </Link>
            </form>
        )
}}

export default Register;
