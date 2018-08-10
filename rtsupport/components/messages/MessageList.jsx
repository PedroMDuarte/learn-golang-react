import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Message from './Message.jsx'


class MessageList extends Component{
    render(){
        var messages = this.props.messages.map(msg => {
            return (
                <Message 
                    message={msg} 
                    key={msg.id}
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