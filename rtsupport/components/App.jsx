import React, {Component} from 'react'
import ChannelSection from './channels/ChannelSection.jsx'
import UserSection from './users/UserSection.jsx'


class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            channels: [],
            users: [],
            activeChannel: {name: ""}
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

    setUserName(name){
        let {users} = this.state
        console.log(users)
        console.log(name)
        if (users.map((user) => user.name).includes(name)) {
            alert(`User ${name} already exists.`)
        } else {
            users.push({id: users.length, name})
        }
        this.setState({users})
    }

    render(){
        return (
            <div className='app'>
                <div className='nav'>
                    <ChannelSection
                        channels={this.state.channels}
                        activeChannel={this.state.activeChannel}
                        addChannel={this.addChannel.bind(this)}
                        setChannel={this.setChannel.bind(this)}
                    />

                    <UserSection
                        users={this.state.users}
                        setUserName={this.setUserName.bind(this)}
                    />
                </div>
            </div>
        )
    }
}

export default App