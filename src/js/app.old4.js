import React, { Component } from "react";
import ReactDOM from "react-dom";

import "../sass/main.scss";

// Now we are going to pass down props to child class components.

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
                <Header1 name={this.state.name} />
                {/* Here we are using the <Footer> and passing a regular "" to it. */}
                {/* <Footer name="Billy" /> */}
                {/* You can pass down just about anything as props and here we are passing two ""s and a function. */}
                {/* <Footer 
                    name="Billy"
                    age="22"
                    printName={() => console.log("Hello my name is Billy.")}
                /> */}
                <Footer
                    name="Billy"
                    // This is how you pass in a number.
                    age={22}
                    printName={() => console.log("Hello my name is Billy.")}
                />
            </div>
        );
    }
}

const Header1 = (props) => {
    return <h1>{props.name}</h1>;
};

class Footer extends Component {
    constructor() {
        super();

        this.state = {
            name: "Justin",
        }
    }

    render() {
        return (
            // When we pass props to class components, we use the this keyword, while with functional components we don't.  The reason we don't use the this keyword with functional components is because we are passing the props as an argument.
            // <footer>{this.props.name}</footer>
            <footer onClick={this.props.printName}>
                Name: {this.props.name}
                Age: {this.props.age}
            </footer>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));

module.hot.accept();

// Try to write your component names, or class names, or variable names starting with a capital letter.  I think Joe wants this to be done for class and functional components only.