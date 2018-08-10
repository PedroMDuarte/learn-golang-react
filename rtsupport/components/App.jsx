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
            connected: false
        }
    }

    //### Websockets

    componentDidMount(){
        let ws = this.ws = new WebSocket("ws://echo.websocket.org")
        ws.onmessage = this.message.bind(this)
        ws.onopen = this.open.bind(this)
        ws.onclose = this.close.bind(this)
    }

    message(e){
        const event = JSON.parse(e.data)
        if(event.name === "channel add"){
            this.newChannel(event.data)
        }
    }
    open(){
        this.setState({connected: true})
    }
    close(){
        this.setState({connected: false})
    }

    newChannel(channel){
        let {channels} = this.state
        channels.push(channel)
        this.setState({channels})
    }

    //### Front end

    addChannel(name){
        let {channels} = this.state
        
        // TODO: Send state to server.
        // Experimental echo websocket
        let msg = {
            name: "channel add",
            data: {
                id: channels.length,
                name
            }
        }
        this.ws.send(JSON.stringify(msg))
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
            user = {id: users.length, name}
        }
        return(user)
    }

    addMessage(body){
        let {messages} = this.state
        const channel = this.state.activeChannel
        const authorName = this.state.activeUser.name
        var message = {
            id: messages.length,
            author: authorName,
            createdAt: new Date,
            body: body,
            channel: channel
        }
        messages.push(message)
        this.setState({messages})
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