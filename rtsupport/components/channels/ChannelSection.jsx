import React, {Component} from 'react'
import PropTypes from 'prop-types';
import ChannelList from './ChannelList.jsx'
import ChannelForm from './ChannelForm.jsx'


class ChannelSection extends Component{
    render(){
        return (
            <div className="support card">
                <div className="card-header bg-light">
                    <strong>Channels</strong>
                </div>
                <div className="card-body channels">
                    <ChannelList 
                        channels={this.props.channels}  // Could have also used {...this.props}
                        setChannel={this.props.setChannel}
                        activeChannel={this.props.activeChannel}
                    />
                    <ChannelForm addChannel={this.props.addChannel}/>
                </div>
                
            </div>
        )
    }
}

ChannelSection.propTypes = {
    channels: PropTypes.array.isRequired,
    setChannel: PropTypes.func.isRequired,
    addChannel: PropTypes.func.isRequired,
    activeChannel: PropTypes.object.isRequired
}

export default ChannelSection