import React from "react"

function Login() {
    return(
        <form>
            <input type="text" placeholder="Enter the email" /><br></br>
            <input type="text" placeholder="Enter the password" /><br></br>
            <button type="submit">Submit</button>
        </form>
    )
}


export default Login