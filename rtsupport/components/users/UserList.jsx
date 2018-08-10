import React, {Component} from 'react'
import PropTypes from 'prop-types';
import User from './User.jsx'


class UserList extends Component{
    render(){
        var users = this.props.users.map(user => {
            return (
                <User 
                    user={user} 
                    key={user.id}
                />
            )
          })
        return (
            <ul>{users}</ul>
        )
    }
}

UserList.propTypes = {
    users: PropTypes.array.isRequired,
}

export default UserList