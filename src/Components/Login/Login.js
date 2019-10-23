import React, { Component } from "react"

class Login extends Component {
        state = {
            email: "",
            password: "",
        }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    storeTokenAndRedirect = (token) => {
        localStorage.Token = token
        this.redirect()
    }

    redirect = () => {
        this.props.history.push('/')
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const body = {
            user: {
                email: this.state.email,
                password: this.state.password
            }
        }

        fetch("https://conduit.productionready.io/api/users/login", {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-type': "application/json"
            }
        })
        .then(response => response.json())
        .then(data => data.user.token ? this.storeTokenAndRedirect(data.user.token) // // if the user has token, call the storeTokenAndRedirect function
        :
         console.log(data))
        }
        
        
    render() {
        return (
            <form className="form">
                <input type="text"
                placeholder="Enter the email"
                value={this.state.email}
                name="email" 
                onChange={this.handleChange} />
                <br></br>

                <input type="text"
                placeholder="Enter the password"
                value={this.state.password}
                name="password"
                onChange={this.handleChange} />
                <br></br>

                <button type="submit" onClick={this.handleSubmit}>Sign in</button>
            </form>
        )
    }
}


export default Login