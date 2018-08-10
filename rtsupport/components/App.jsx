import React, {Component} from 'react'
import ChannelSection from './channels/ChannelSection.jsx'
import UserSection from './users/UserSection.jsx'
import MessageSection from './messages/MessageSection.jsx'


class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            channels: [],
            activeChannel: {name: ""},
            users: [],
            activeUser: {user: ""},
            messages: [],
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
        var user = this.getUser(name)
        var isNewUser = user.id < users.length
        if (isNewUser) {
            alert(`User ${name} already exists.`)
        }
        else {
            users.push(user)
        }
        this.setState({users, activeUser: user})

        // TODO : Send state to server.
    }

    getUser(name){
        let {users} = this.state
        var user = null
        if (users.map((u) => u.name).includes(name)) {
            user = users.filter((user) => user.name === name)[0]
        } else {
            user = {id: userId, name}
        }
        return(user)
    }

    addMessage(body){
        console.log(body)
        const channel = this.state.activeChannel
        const authorName = this.state.activeUser.name
        var message = {
            author: authorName,
            createdAt: new Date,
            body: body,
            channel: channel
        }
        messages.push(message)
        // TODO : Send state to server
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
                <MessageSection
                    {...this.state}
                    addMessage={this.addMessage.bind(this)}
                />
            </div>
        )
    }
}

export default App