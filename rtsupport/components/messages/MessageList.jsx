import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Message from './Message.jsx'


class MessageList extends Component{
    render(){
        var messages = this.props.messages.map(message => {
            return (
                <Message 
                    message={message}
                    key={message.id}
                />
            )
          })
        return (
            <ul>{messages}</ul>
        )
    }
}

MessageList.propTypes = {
    messages: PropTypes.array.isRequired,
}

export default MessageList