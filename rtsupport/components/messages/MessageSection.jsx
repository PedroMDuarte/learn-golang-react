import React, {Component} from 'react'
import PropTypes from 'prop-types';
import MessageList from './MessageList.jsx'
import MessageForm from './MessageForm.jsx'


class MessageSection extends Component{
    render(){
        return (
            <div className="support card">
                <div className="card-header bg-light">
                    <strong>Messages</strong>
                </div>
                <div className="card-body messages">
                    <MessageList messages={this.props.messages}/>
                    <MessageForm addMessage={this.props.addMessage}/>
                </div>
            </div>
        )
    }
}

MessageSection.propTypes = {
    messages: PropTypes.array.isRequired,
    addMessage: PropTypes.func.isRequired,
}

export default MessageSection