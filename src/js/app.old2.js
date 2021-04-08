import React, { Component } from "react";
import ReactDOM from "react-dom";

import "../sass/main.scss";

// Now we are going to use components within components.

class App extends Component {
    constructor() {
        super();

        this.state = {
            name: "Justin",
        };
    }

    render() {
        return (
            <div className="container">
                {/* <h1>{this.state.name}</h1> */}
                {/* This creates the <Header1> inside of this component. */}
                <Header1 />
            </div>
        );
    }
}

// We are going to make this into a fuctional component that just prints out an <h1>.
const Header1 = () => {
    // return <h1>Justin</h1>;
    return <h1>Billy</h1>;
};

ReactDOM.render(<App />, document.getElementById("app"));

module.hot.accept();