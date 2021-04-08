import React, { Component } from "react";
import ReactDOM from "react-dom";

import "../sass/main.scss";

// Now we are going to talk about passing down props.  Passing down props is a way to pass down data from a parent element.  This is like HTML where you have parent and child elements.  With JSX you have extra powers where you pass down extra data for child components, like the <Header1>, to be able to use.

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
                {/* <Header1 /> */}
                {/* This is how you pass props to child components. */}
                {/* Now we get access to the string "Justin" that is inside of the state of the <App> class component.  We pass it down to the <Header1> functional component.  And down below inside of the <Header1> we can place it where we want to. */}
                {/* You can pass down anything you want, like {}s, ""s, f()s, and []s.  You can pass down almost anything to the child component, straight through the props. */}
                <Header1 name={this.state.name} />
            </div>
        );
    }
}

// const Header1 = () => {
//     return <h1>Billy</h1>;
// };
// In order to use the props {} that is passed down to the <Header1>, you have to assign the parameter props to the <Header1> and insert {props.name} inside of the <h1>.  Now we get access to the string "Justin" that is passed down.
const Header1 = (props) => {
    return <h1>{props.name}</h1>;
};

ReactDOM.render(<App />, document.getElementById("app"));

module.hot.accept();