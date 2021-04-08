import React, { Component } from "react";
import ReactDOM from "react-dom";

import "../sass/main.scss";

// Now we are going to go over handling events.  In regular JavaScript, you handle events with an event listener.  In HTML you would do something like <div class="button" onclick="printName()">click me</div>.  Here you have an onclick event handler to which you pass in the function name and then you would trigger the printName() with the ().  This is how you do an onclick event with JavaScript, throught the HTML.

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

    printName = () => {
        console.log("Joe");
    };

    render() {
        const printName2 = () => {
            console.log("Joe");
        };

        return (
            <div className={"container"}>
                app
                {/* This is the JSX way to do an onClick event handler.  If you use a set of () in the line onClick={this.printName()}, the printName() will get executed only once after the page loads, without needing to be clicked.  When you are using an onClick event, you don't want the f() triggered right away, you want to click an element to trigger the f(). */}
                {/* Here we are using printName as a this method because it is defined inside of a class. */}
                {/* <div className="button" onClick={this.printName}> */}
                {/* We defined the printName2() and assigned it to a variable, so it is not a this class method. */}
                <div className="button" onClick={printName2}>
                    click me
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));

module.hot.accept();