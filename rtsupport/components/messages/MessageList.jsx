import React, {Component} from 'react';
import Message from "./Message.jsx";

class MessageList extends Component {
    render() {
        return (
            <ul>
                {this.props.messages.map(message => <Message message={message}/>)}
            </ul>
        )
    }
}

export default MessageList