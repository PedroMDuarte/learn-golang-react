import React, {Component} from 'react'
import PropTypes from 'prop-types';


class MessageForm extends Component{
    onSubmit(e){
        e.preventDefault()
        const node = this.refs.message
        const body = node.value
        this.props.addMessage(body)
        node.value = ""
    }

    render(){
        let input
        var hasCh = this.props.activeChannel.id !== undefined
        var hasUser = this.props.activeUser.id !== undefined
        if (hasCh && hasUser) {
            input = (
                <input
                    className="form-control"
                    placeholder="type a message ..."
                    type="text"
                    ref="message"
                />
            )
        }
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <div className="form-group">
                    {input}
                </div>
            </form>
        )
    }
}

MessageForm.propTypes = {
    addMessage: PropTypes.func.isRequired,
    activeChannel: PropTypes.object.isRequired,
    activeUser: PropTypes.object.isRequired
}

export default MessageForm
