import React, {Component} from "react";
import {Helmet} from 'react-helmet'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
    }
    render() {
        return(
            <div>
                <Helmet>
                    <title>{"Home Page"}</title>
                    <meta property="og:title" content="Home page" />
                </Helmet>
                <div> hello User! </div>
                <button onClick={this.handleClick}> click me!</button>
                <button onClick={() => console.log("clicked button")}> Click Me 22!</button>
            </div>
        )
    }
}

export default {
    component: HomePage
};