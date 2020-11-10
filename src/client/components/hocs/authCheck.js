import React, { Component} from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'


export default (ChildComponent) => {
    
    class AuthCheck extends Component {
      render() {
        switch(this.props.auth) {
            case false:
                console.log('hello----', this.props.auth);
                return <Redirect to="/"/>;
            case null:
                return <div>Loading...</div>;
            default:
                return <ChildComponent {...this.props} />;
        }
      }
    }

    const mapStateToProps = ({auth}) => {
        return { auth };
    }

    return connect(mapStateToProps)(AuthCheck)
    
}