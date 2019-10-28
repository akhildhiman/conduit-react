import React, { Component } from "react"
import { Link } from "react-router-dom"


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
                        return (<Link to={`/Tags/${tag}`} >
                            <h1>{tag}</h1>
                        </Link>)
                    })
                }
            </div>
        )

    }
}




export default ListTags



