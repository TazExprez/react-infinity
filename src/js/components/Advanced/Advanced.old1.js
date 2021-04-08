// Now we are going to talk about fragments and why they are important.  

// import React, { Component } from "react";
// This is needed in order to create the React fragments that can use keys.
import React, { Component, Fragment } from "react";
import update from "immutability-helper";

export default class Advanced extends Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        return (
            // Every time we want to render a component, we have to put a parent <div> or some type of parent element.  This parent could be a <p>, a <footer>, a <header>, or anything else.  We always have to have a parent node, or parent element, to be able to display some type of text or component within that parent.  This is how we've been doing it so far and this is how most people know how to do this.  Now we want to have the "Text" without the #advancedFeatures parent <div>.  We want it directly inside of the .container <div>.  We can do this with React fragments.
            // <div id="advancedFeatures">
            //     Text
            // </div>
            // Here we are using React fragments.  You just have to put your content inside a pair of empty tags, <></>.  Whatever you put inside of the <></> is what you want to be returning.  When you use React fragments below, now your "Text" will be inside of the .container <div>, without needing a parent <div>.
            // Using React fragments is great for situations where you want to make sure that whatever you put inside of the fragments is actually what is going to be returned.
            // <>
            //     Text
            // </>
            <div id="advancedFeatures">
                <Menu />
            </div>
        );
    }
};

// React fragments are great for when you are creating a menu.  Joe is going to create two components.  One is going to be a <nav>.  The other is going to be a bunch of links.

// This is going to be a functional component.
const Menu = () => {
    return (
        <nav id="menu">
            <Links />
        </nav>
    );
};

const Links = () => {
    return (
        // We can have links, components, functions, and even loops being returned within this React fragment.  This will allow us to return the contents of this React fragment within the <nav> inside of the <Menu />, without the need of a parent container.  If we needed to add an extra <div> below, it would mess up our HTML with an additional element.
        // This is the shorthand way of doing React fragments.  There is another way to do them if you want to use keys.
        <>
            <a href="#">Home</a>
            <a href="#">Home</a>
            <a href="#">Home</a>
        </>
        // This is the way you can create React fragments that can use keys.
        // <Fragment>
        //     <a href="#">Home</a>
        //     <a href="#">Home</a>
        //     <a href="#">Home</a>
        // </Fragment>
        // You can also do the above like this.
        // <React.Fragment>
        //     <a href="#">Home</a>
        //     <a href="#">Home</a>
        //     <a href="#">Home</a>
        // </React.Fragment>
    );
};