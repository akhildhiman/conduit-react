import React, { Component } from "react"

class Tags extends Component {
    componentDidMount() {
        fetch("https://conduit.productionready.io/api/tags")
            .then(response => response.json())
                .then(data => console.log(data))
    }

    render() {
        return (
            <div></div>
        )
    }
    
}


export default Tags