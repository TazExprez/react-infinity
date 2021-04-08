import React, { Component } from "react";
import ReactDOM from "react-dom";

import "../sass/main.scss";

// The beauty of JSX is that we can use regular JavaScript within our components.

// We can also do loops inside of JSX.

const name = "Joe";

const users = ["Joe", "Justin", "Billy", "Cindy"];

class App extends Component {
    constructor() {
        super();

        this.state = {
            name: "Justin",
        };
    }

    // We have the contructor() and the render() in class components, but we can also add our own methods.

    // What you want to do is create a method inside of your class and run your logic there.  Whatever gets returned will be displayed by the element that triggers the method.
    loopUsers = () => {
        // When you do something like a loop, remember to return the [] with the map().  Remember to return it back to the page.
        // return users.map(user => {
        //     return <div key={user}>{user}</div>;
        // });
        // You will get a warning if you don't use a key.  For a key, you have to choose some type of property that will make each key unique.  I used the user for the keys above.  We are using the index for the keys below.  If the users [] contained {}s with an id property, each key could have been set to user.id.
        return users.map((user, index) => {
            return <div key={index}>{user}</div>;
        });
    };

    render() {
        return (
            <div className="container">
                <Header1>
                    <b>
                        {/* Joe */}
                        {/* Whenever you see the braces { and }, you can use JavaScript in there. */}
                        {/* {23} */}
                        {/* We can do math inside of JSX. */}
                        {/* {23 + 5} */}
                        {/* We can use variables, like the const name, inside of JSX. */}
                        {/* {name} */}
                        {/* We can loop through the users [] and return a <div> per user with each user inside of one. */}
                        {/* Joe does not recommend putting all of your logic inside of JSX because at some point this will get very messy.  Joe's advice is to create a class method above, before the render(). */}
                        {/* {users.map(user => {
                            return <div key={user}>{user}</div>;
                        })} */}
                        {/* It is cleaner to see your JSX like this than to put the entire f() definition in here. */}
                        {this.loopUsers()}
                    </b>
                </Header1>
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