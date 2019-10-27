import React, { Component } from "react"
import {Link} from "react-router-dom"


class ListTags extends Component {
    state = {
        tagList: null
    }


    componentDidMount() {
        fetch("https://conduit.productionready.io/api/tags")
            .then(response => response.json())
            // .then(data => console.log(data.tags))
                .then(data => this.setState({...this.state,tagList: data.tags}))
    }

    render() {
        console.log(this.state.tagList)
        const tagList = this.state.taglist
        return (
                <div>
                    {
                        tagList && tagList.map((tag, index) => {                           
                            return  (<Link to={`/Tags/${tag}`} >
                                <h1>{tag}</h1>
                            </Link>
                            )                     
                        })
                    }
                </div>
                
        )
            
}
}




export default ListTags



