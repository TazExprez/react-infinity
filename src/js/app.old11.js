import React, { Component } from "react";
import ReactDOM from "react-dom";

import "../sass/main.scss";

// Now we are going to style our components, or elements.

const name = "Joe";

const users = ["Joe", "Justin", "Billy", "Cindy"];

class App extends Component {
    constructor() {
        super();

        this.state = {
            name: "Justin",
            // age: 25,
            age: 17,
        };
    }

    printName = (name, age) => {
        console.log(`${name} is ${age} years old.`);
    };

    render() {
        const printName2 = (name, age) => {
            console.log(`${name} is ${age} years old.`);
        };

        return (
            // <div className={"container"}>
            // Here we are going to style this component.  For the {} that you passed down to the <style>, you can use any CSS styles, or properties, that you want.  There are a few differences between this and regular CSS, though.
            <div 
                className={"container"} 
                style={{
                    // Because the <style> is an {}, you have to put the property first and then the value, which is a string in this case.
                    // background: "red",
                    // We can also do if statements.
                    background: this.state.age > 18 ? "green" : "red",
                    // We have to use marginRight, instead of the regular margin-right from CSS, because this is an {} property.  We also need to use a string for the "200px" value.
                    // marginRight: "200px",
                    // marginLeft: "200px",
                    margin: "20px 100px 20px 100px",
                    borderRight: "5px solid black",
                }}
            >
                app
                <div className="button" onDoubleClick={() => printName2("Joe", 31)}>
                    click me
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));

module.hot.accept();

// It's pretty useful to have your CSS inlined because you have access to JavaScript and being able to put in conditions, which you were not able to do with regular CSS.

// There are HTML to JSX converters online, like https://magic.reactjs.net/htmltojsx.htm, that you can use to convert HTML and CSS pages to JSX pages.