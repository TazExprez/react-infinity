import React, { Component } from "react";
import ReactDOM from "react-dom";

import "../sass/main.scss";

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
                {/* <Header1 name={this.state.name} /> */}
                {/* There are going to be certain situations where you will want to pass in some props, information, data, or text through the element itself, or the component itself, instead of passing this through the props like in line <Header1 name={this.state.name} />.  This is when you will use the children.  In the line <Header1><b>Joe</b></Header1> we are passing down the children.  Anything that is inside of the <Header1>, anything that is between the <Header1> and the </Header1>, any HTML or any text, is called the children.  The children are being passed down to the <Header1>.  This is a great way for situations where you want to pass down some sort of HTML or some sort of text and you don't want to do this through the properties. */}
                <Header1>
                    {/* This is the Bring Attention to Element HMTL tag. */}
                    <b>
                        Joe
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
    // return <h1>{props.name}</h1>;
    // This is how we use children.
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