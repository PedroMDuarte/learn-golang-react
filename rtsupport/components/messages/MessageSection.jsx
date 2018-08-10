import React, {Component} from 'react'
import PropTypes from 'prop-types';
import MessageList from './MessageList.jsx'
import MessageForm from './MessageForm.jsx'


class MessageSection extends Component{
    render(){
        let {activeChannel} = this.props
        return (
            <div className="messages-container card card-default">
                <div className="card-header bg-light">
                    <strong>{activeChannel.name}</strong>
                </div>
                <div className="card-body messages">
                    <MessageList messages={this.props.messages}/>
                    <MessageForm
                        activeChannel={this.props.activeChannel}
                        activeUser={this.props.activeUser}
                        addMessage={this.props.addMessage}
                    />
                </div>
            </div>
        )
    }
}

MessageSection.propTypes = {
    messages: PropTypes.array.isRequired,
    addMessage: PropTypes.func.isRequired,
    activeChannel: PropTypes.object.isRequired,
    activeUser: PropTypes.object.isRequired
}

export default MessageSection