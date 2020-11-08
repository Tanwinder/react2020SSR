import React, { Component } from 'react';
import { fetchAdmins } from '../actions/userActions';
import { connect } from 'react-redux';

class AdminPage extends Component {
    constructor(props) {
        super(props);
        // this.getAdminList = this.getAdminList.bind(this);
    }
    componentDidMount() {
        if(!this.props.admins) {
            this.props.fetchAdmins();
        }
    }
    getAdminList() {
        return(
            this.props.admins && this.props.admins.map( admin => {
                return(
                    <li className="collection-item" key={admin.id}>{admin.name}</li>
                )
            })
        )
    }
    render() {
        return(
            <div>
                <h1>Here is the list of the Admins:-</h1>
                <ul className="collection">{this.getAdminList()}</ul>
            </div>
        )
    }
}

const mapStateToProps = ({admins}) => {
    return {admins};
}

const loadData = (store) => {
    return store.dispatch(fetchAdmins())
}

export default {
    loadData,
    component: connect(mapStateToProps, {fetchAdmins})(AdminPage)
}