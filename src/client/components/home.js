import React, {Component} from "react";

class Home extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log("renderer");
    }
    render() {
        return(
            <div>
                <div> hello 123333344 </div>
                <button onClick={this.handleClick}> click me!</button>
                <button onClick={() => console.log("clicked button")}> Click Me 22!</button>
            </div>
        )
    }
}

export default Home;