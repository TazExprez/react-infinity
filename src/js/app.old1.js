import React, { Component } from "react";
import ReactDOM from "react-dom";

import "../sass/main.scss";

class App extends Component {
    constructor() {
        super();

        // All class components have a state property.  The state keeps track of what is going on inside of a component.  State is the memory card for your component and keeps tracking of everything that is going on in the component.
        this.state = {
            // name: "Joe",
            name: "Justin",
        };
    }

    // The render() is going to allow us to run JSX, which is like JavaScript, but not quite.  This is a way for us to write elements the short way with React.
    render() {
        return (
            <div className="container">
                <h1>{this.state.name}</h1>
            </div>
        );
    }
}

// Now let's do a dumb component, or stateless component, or functional component.  These are the words you might hear for this component.
const App2 = () => {
    return (
        <div className="container">
            {/* This is going to give an error because this is not a real component that has a state.  The only components that have a state are the ones made with a class.  For you to use this.state, you would need to use it inside of a class based component.  A functional component is just like a dumb component.  It is just for the view. */}
            {/* <h1>{this.state.name}</h1> */}
            {/* Since we cannot use this.state to print out the name Justin, we have to type the name Justin manually, ourselves.  With a functional component, you don't have access to the state.  You will always get errors if you try to use the state. */}
            <h1>Justin</h1>
        </div>
    );
};
// Only use functional components for things in the view, where you don't need any type of logic that uses your state.
// You can actually use state inside of functional components now with hooks.

// The first argument is the component and the second argument is the element where you want it to be rendered inside of.
// ReactDOM.render(<App />, document.getElementById("app"));

ReactDOM.render(<App2 />, document.getElementById("app"));

module.hot.accept();