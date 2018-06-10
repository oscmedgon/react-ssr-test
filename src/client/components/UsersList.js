import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchUsers} from '../actions';

class UsersList extends Component {
    constructor() {
        super();
    }
    componentDidMount () {

    }

    renderUsers = () => {
        return this.props.users.map((user) => {
            return <li key={user.id}>{user.name}</li>
        })
    }
    render () {
        return (
            <div>
                <h1>
                    Here is a big list of users
                </h1>
                <ul>{this.renderUsers()}</ul>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return(users: state.users)
}

export default connect(mapStateToProps, {fetchUsers})(UsersList)