// Now we are up to the Create Testing Component section.

import React, { Component } from "react";
import ReactDOM from "react-dom";
// import Counter from "./components/Counter/Counter.js";
// import Counter from "./components/Counter/Counter";
// import Immutable from "./components/Immutable/Immutable";
import BillsApp from "./components/BillsApp/BillsApp";
// import Advanced from "./components/Advanced/Advanced";
// import ReactHooks from "./components/Advanced/ReactHooks";
// import BoxComp from "./components/Advanced/BoxComp";

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
                {/* <Counter status="manual" /> */}
                {/* <Immutable /> */}
                <BillsApp />
                {/* <Advanced /> */}
                {/* <ReactHooks /> */}
                {/* <BoxComp /> */}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));

module.hot.accept();