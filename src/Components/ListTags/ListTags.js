import React, { Component } from "react"
import { Link } from "react-router-dom"
const tagStyle = { display: "inline-block", height: "15px", fontSize: "9 px", width: "90px", marginLeft: "60px" }


class ListTags extends Component {
    state = {
        tagList: null
    }


    componentDidMount() {
        fetch("https://conduit.productionready.io/api/tags")
            .then(response => response.json())
            .then(data => this.setState({ tagList: data.tags }))
    }

    render() {
        console.log(this.state.tagList)
        const tagList = this.state.tagList
        return (
            <div>
                {
                    tagList && tagList.map(tag => {
                        return (<Link style={{textDecoration: "none"}} to={`/Tags/${tag}`} >
                            <div style={tagStyle}>
                                <h1 style={{color: "red"}}>{tag}</h1>
                            </div>
                        </Link>)
                    })
                }
            </div>
        )

    }
}




export default ListTags



