import React, {Component} from "react";

class Home extends Component {
    render() {
        return(
            <div>
                <div> hello 1233333 </div>
                <button onClick={() => console.log("clicked button")}> Click Me!</button>
            </div>
        )
    }
}

export default Home;