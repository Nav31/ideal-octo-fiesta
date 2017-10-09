import React, {Component} from 'react';
import User from './User.jsx';

class UserList extends Component {
    render() {
        return (
            <ul>
                {this.props.users.map(user => <User
                    key={user.id}
                    user={user}
                />)}
            </ul>
        )
    }
}

export default UserList