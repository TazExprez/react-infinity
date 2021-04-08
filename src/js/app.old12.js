// What is immutability? is the last section that we completed with this.

import React, { Component } from "react";
import ReactDOM from "react-dom";
// import Counter from "./components/Counter/Counter.js";
import Counter from "./components/Counter/Counter";

import "../sass/main.scss";

class App extends Component {
    constructor() {
        super();

        this.state = {
        };
    }

    render() {
        return (
            <div className={"container"}>
                {/* <Counter /> */}
                {/* Here we are setting the status property to auto and passing it to the <Counter>.  This will remove the <Button>s. */}
                {/* <Counter status="auto" /> */}
                {/* Now we are setting the status property to manual and passing it to the <Counter>.  Now the <Counter> is waiting for us to press a button in order to update the currentNumber property of this.state. */}
                <Counter status="manual" />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));

module.hot.accept();