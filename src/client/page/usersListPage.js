import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchUsers } from '../actions/userActions';

class UsersListPage extends Component {
    constructor(props) {
        super(props);
        this.displayUsersList= this.displayUsersList.bind(this);
    }
    componentDidMount() {
        this.props.fetchUsers();
    }
    displayUsersList() {
        console.log("this.props.usersList111", )
        return this.props.usersList && this.props.usersList.map( item => {
            return(<li key={item.id}>{item.name}</li>)
        })
    }
    render() {
        return (
            <div>
            {
                this.props.usersList && this.props.usersList.length > 0 ?
                <div>
                    Users List:-
                    <ul>{this.displayUsersList()}</ul>
                </div>
                :
                <div>Loading...</div>
            }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    usersList: state.user.usersList 
})

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchUsers }, dispatch)
}

function loadData(store) {
    return store.dispatch(fetchUsers());
    // console.log("I ma trying to load some data");
}

export default {
    loadData,
    component: connect(mapStateToProps, mapDispatchToProps)(UsersListPage)
};