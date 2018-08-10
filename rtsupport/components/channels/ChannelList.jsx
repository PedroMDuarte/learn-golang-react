import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Channel from './Channel.jsx'


class ChannelList extends Component{
    render(){
        console.log(this.props.channels)
        var channels = this.props.channels.map(chan => {
            return (
                <Channel 
                    channel={chan}
                    key={chan.id}
                    setChannel={this.props.setChannel}
                    activeChannel={this.props.activeChannel}
                />
            )
          })
        return (
            <ul>{channels}</ul>
        )
    }
}

ChannelList.propTypes = {
    channels: PropTypes.array.isRequired,
    setChannel: PropTypes.func.isRequired,
    activeChannel: PropTypes.object.isRequired
}

export default ChannelList