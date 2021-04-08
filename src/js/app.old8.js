import React, { Component } from "react";
import ReactDOM from "react-dom";

import "../sass/main.scss";

// You can also have a conditional ternary operator.

// JSX is giving us the extra powers to be able to write JavaScript within our elements, especially <div>s, <footer>s, <header>s, etc., and even our own components.  It's just giving us this extra power.

const name = "Joe";

const users = ["Joe", "Justin", "Billy", "Cindy"];

class App extends Component {
    constructor() {
        super();

        this.state = {
            name: "Justin",
            // age: 13,
            age: 25,
        };
    }

    loopUsers = () => {
        return users.map((user, index) => {
            return <div key={index}>{user}</div>;
        });
    };

    showNotification = () => {
        if (this.state.age > 18) {
            return "You Can Get In The Club Because You Are LEGAL!!!!";
        }
        else {
            return `You Can't Get In The Club Because You Are NOT LEGAL!!!!`;
        }
    };

    render() {
        return (
            // <div className="container">
            // This is going to add the .active on the .container <div> if the user is over 18 years old.
            <div className={`container ${this.state.age > 18 ? "active" : ""}`}>
                <Header1>
                    <b>
                        {this.showNotification()}
                    </b>
                </Header1>
                {this.loopUsers()}
                <Footer
                    name="Billy"
                    age={22}
                    printName={() => console.log("Hello my name is Billy.")}
                />
            </div>
        );
    }
}

const Header1 = (props) => {
    return <h1>{props.children}</h1>;
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
            <footer onClick={this.props.printName}>
                Name: {this.props.name}
                Age: {this.props.age}
            </footer>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));

module.hot.accept();