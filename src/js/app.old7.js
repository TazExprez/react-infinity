import React, { Component } from "react";
import ReactDOM from "react-dom";

import "../sass/main.scss";

// You can also do conditionals.

// You can run conditionals, loops, math, pretty much everything with JSX.  JSX is basically just JavaScript.  This is like HTML, but now you have the power of writing JavaScript on it and make your life easier.

const name = "Joe";

const users = ["Joe", "Justin", "Billy", "Cindy"];

class App extends Component {
    constructor() {
        super();

        this.state = {
            name: "Justin",
            // age: 31,
            age: 13,
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
            // When you have an apostrophe, single quotes, or double quotes inside of your string, you should just use a template string because it will make your life easier.
            return `You Can't Get In The Club Because You Are NOT LEGAL!!!!`;
        }
    };

    render() {
        return (
            <div className="container">
                <Header1>
                    <b>
                        {/* {this.loopUsers()} */}
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