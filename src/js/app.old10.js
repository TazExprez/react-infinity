import React, { Component } from "react";
import ReactDOM from "react-dom";

import "../sass/main.scss";

// Now we want to pass down some type of argument to the function.

// Joe just showed us onClick events, but you can go to the React documentation at https://reactjs.org/docs/events.html#animation-events for more events.  You can go to API REFERENCE, then select SyntheticEvent to get to the particular section in the link.  The events that you will use the most are the form events, the mouse events, and the focus events.

const name = "Joe";

const users = ["Joe", "Justin", "Billy", "Cindy"];

class App extends Component {
    constructor() {
        super();

        this.state = {
            name: "Justin",
            age: 25,
        };
    }

    // printName = () => {
    //     console.log("Joe");
    // };

    // We have two arguments here, name and age.
    printName = (name, age) => {
        console.log(`${name} is ${age} years old.`);
    };

    render() {
        // const printName2 = () => {
        //     console.log("Joe");
        // };

        const printName2 = (name, age) => {
            console.log(`${name} is ${age} years old.`);
        };

        return (
            <div className={"container"}>
                app
                {/* <div className="button" onClick={this.printName}> */}
                {/* This is how you pass in the arguments to the printName() method. */}
                {/* <div className="button" onClick={() => this.printName("Joe", 31)}> */}
                {/* This is Joe's way of passing in arguments to the printName() method.  Everything after the null in the bind() will be sent to the printName(). */}
                {/* <div className="button" onClick={this.printName.bind(null, "Joe", 31)}> */}
                {/* This is how you pass in the arguments to the printName2() variable or regular f(). */}
                {/* <div className="button" onClick={() => printName2("Joe", 31)}> */}
                {/* This is Joe's way of passing in arguments to the printName2() variable or regular f(). */}
                {/* <div className="button" onClick={printName2.bind(null, "Joe", 31)}> */}
                {/* Here we are using the onMouseOver handler, instead of the onClick handler.  Now when we are over an element, the printName2() gets executed. */}
                {/* <div className="button" onMouseOver={() => printName2("Joe", 31)}> */}
                {/* This is Joe's way. */}
                {/* <div className="button" onMouseOver={printName2.bind(null, "Joe", 31)}> */}
                {/* Here we are using the onDoubleClick handler. */}
                <div className="button" onDoubleClick={() => printName2("Joe", 31)}>
                {/* Joe's way. */}
                {/* <div className="button" onDoubleClick={printName2.bind(null, "Joe", 31)}> */}
                    click me
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));

module.hot.accept();