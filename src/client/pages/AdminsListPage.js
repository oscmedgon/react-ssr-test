import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchAdmins} from '../actions';
import requireAuth from '../components/hocs/requireAuth';

class AdminsListPage extends Component {
    componentDidMount () {
        this.props.fetchAdmins();
    }
    renderUsers () {
        return this.props.admins.map((admin) => {
            return <li key={admin.id}>{admin.name}</li>
        })
    }
    render () {

        return (
            <div>
                <h1>
                    Here is a big list of admins
                </h1>
                <ul>{this.renderUsers()}</ul>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return{admins: state.admins}
}
function loadData (store) {
    return store.dispatch(fetchAdmins());
}

export default {
    component: connect(mapStateToProps, { fetchAdmins })(
      requireAuth(AdminsListPage)
    ),
    loadData: ({ dispatch }) => dispatch(fetchAdmins())
  };