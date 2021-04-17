// Now we are going to talk about refs in React.

// Refs make it possible to access DOM nodes directly within React.

// A ref is a reference to a DOM node, or a reference to an element.

// Refs might be useful when you are working with <form>s, with <input>s, when you might want to change some CSS, when you might want to change the focus, key up, key down, and other things.  This all depends on the situation.  This is very useful because now you don't have to constantly be putting in an id or a class to be able to find the DOM node.  All you have to do is set up a ref.

import React, { Component, Fragment } from "react";
import update from "immutability-helper";

// This will give us all of the information of this DOM node.
console.dir(document.getElementById("testing"));

// console.dir(document.getElementById("billy"));

export default class Advanced extends Component {
    constructor() {
        super();

        this.state = {};

        // This is going to create a reference to the <div> with the text of Billy inside of it once we pass this to that <div>.
        this.billyRef = React.createRef();
    }

    // We have to do this because we get null from the line console.dir(document.getElementById("billy")); because the element does not exist, yet, when the console.dir() ran above.
    componentDidMount() {
        // console.dir(document.getElementById("billy"));
        // Now that the <div> with the text Billy doesn't have an id, you have to do the console.dir() like this.
        console.dir(this.billyRef.current);
    }


    render() {
        return (
            <div id="advancedFeatures">
                {/* <div id="billy">Billy</div> */}
                {/* Now this DOM node doesn't have an id. */}
                {/* <div>Billy</div> */}
                {/* Now we are passing the this.billyRef as a ref to this <div>. */}
                <div ref={this.billyRef}>Billy</div>

                <Menu />
            </div>
        );
    }
};

const Menu = () => {
    return (
        <nav id="menu">
            <Links />
        </nav>
    );
};

const Links = () => {
    return (
        <>
            <a href="#">Home</a>
            <a href="#">Home</a>
            <a href="#">Home</a>
        </>
    );
};