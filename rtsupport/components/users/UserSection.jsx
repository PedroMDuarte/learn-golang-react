import React, {Component} from 'react'
import PropTypes from 'prop-types';
import UserList from './UserList.jsx'
import UserForm from './UserForm.jsx'


class UserSection extends Component{
    render(){
        return (
            <div className="support card">
                <div className="card-header bg-light">
                    <strong>Users</strong>
                </div>
                <div className="card-body users">
                    <UserList users={this.props.users}/>
                    <UserForm setUserName={this.props.setUserName}/>
                </div>
            </div>
        )
    }
}

UserSection.propTypes = {
    users: PropTypes.array.isRequired,
    setUserName: PropTypes.func.isRequired,
}

export default UserSection