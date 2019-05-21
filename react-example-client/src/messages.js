import React, {Component} from "react";
import axios from "axios";

class Messages extends Component {
    state = {
        messages: []
    }

    componentDidMount() {
        axios.get("/api/messages")
            .then(result => {
                this.setState({
                    messages: result.data
                })
            })
    }

    render() {
        return (
            <div>{this.state.messages.map((message, index) => {
                return <h2 key={index}>{message.title}</h2>
            })}</div>
        )
    }
}

export default Messages