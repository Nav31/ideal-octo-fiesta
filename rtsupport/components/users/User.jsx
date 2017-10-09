import React, {Component} from 'react';

class User extends Component {
    onClick(e) {
        e.preventDefault();
        const {setUser} = this.props;
        setUser(name)
    }
    render() {
        const {user, activeUser} = this.props;
        const active = user === activeUser ? "active" : "";
        return (
            <li className={active}>
                <a onClick={this.onClick.bind(this)}>
                    {this.props.user.name}
                </a>
            </li>
        )
    }
}

export default User