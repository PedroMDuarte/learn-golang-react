import React, {Component} from 'react'
import PropTypes from 'prop-types';


class MessageForm extends Component{
    onSubmit(e){
        e.preventDefault()
        const node = this.refs.message
        const messageText = node.value
        this.props.addMessage(messageText)
        node.value = ""
    }

    render(){
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="type a message ..."
                        type="text"
                        ref="message"
                    />
                </div>
            </form>
        )
    }
}

MessageForm.propTypes = {
    addMessage: PropTypes.func.isRequired
}

export default MessageForm
