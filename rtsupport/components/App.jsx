import React, {Component} from 'react'
import ChannelSection from './channels/ChannelSection.jsx'


class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            channels: []
        }
    }

    addChannel(name){
        let {channels} = this.state
        channels.push({id: channels.length, name})
        this.setState({channels})
        
        // TODO: Send state to server.
    }

    setChannel(activeChannel){
        this.setState({activeChannel})

        // TODO: Get channel messages from server and display on messages component.
    }

    render(){
        return (
            <div className='app'>
                <div className='nav'>
                    <ChannelSection
                        channels={this.state.channels}
                        addChannel={this.addChannel.bind(this)}
                        setChannel={this.setChannel.bind(this)}
                        activeChannel={this.state.activeChannel}
                    />
                </div>
            </div>
        )
    }
}

export default App