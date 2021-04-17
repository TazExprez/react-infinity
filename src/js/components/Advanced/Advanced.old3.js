// Now we are doing the section on type checking your prop.

// There are times that you may need a prop that you are passing down to be a certain type.  For example, if you want to add two numbers, you know that both of those numbers need to be integers.  You know that anything that's coming in needs to be an integer, instead of a string.

import React, { Component, Fragment } from "react";
import update from "immutability-helper";
// We need this in order to use the React built-in typechecking.
import PropTypes from "prop-types";

console.dir(document.getElementById("testing"));

export default class Advanced extends Component {
    constructor() {
        super();

        this.state = {};

        this.billyRef = React.createRef();
    }
    
    componentDidMount() {
        console.dir(this.billyRef.current);
    }


    render() {
        return (
            <div id="advancedFeatures">
                <div ref={this.billyRef}>Billy</div>

                {/* <ChildComp total={6} /> */}
                {/* This will cause an error when the total gets the PropTypes.number, like in the line total:PropTypes.number,. */}
                {/* <ChildComp total={"6"} /> */}
                {/* <ChildComp numberA={6} numberB={6} /> */}
                {/* If we don't use PropTypes, this will give us a bug.  It will return the string "66", instead of giving us an error. */}
                {/* <ChildComp numberA={"6"} numberB={6} /> */}
                {/* Here both properties, numberA and numberB, are strings. */}
                {/* <ChildComp numberA={"6"} numberB={"6"} /> */}
                {/* We didn't add any props here, so we set the defaultProps property for the <ChildComp /> below.  By default, we are going to pass the property numberA:"1" and the property numberB:"2".  This way, the <ChildComp /> will be able to work no matter what. */}
                <ChildComp />
            </div>
        );
    }
};

// This is a child functional component.
// const ChildComp = (props) => {
//     return (
//         <div>
//             {props.total}
//         </div>
//     );
// };

const ChildComp = (props) => {
    return (
        <div>
            {props.numberA + props.numberB}
        </div>
    );
};

// To make sure that the prop total is always an integer, we can do the following.  We put the name of the prop, total, inside of this {}.  Then we set the prop to the type, like in the line total:PropTypes.number,.  What we are saying here is that the property that is being passed down to the <ChildComp />, with the name total, it must have the type of number.  If this property is not a number, we will get an error.
// This is a way for you to deal with certain bugs that are going to happen.  This is a way to get warnings of future bugs that are going to happen if they are not corrected now.
// The propTypes property of the <ChildComp /> should start with a lowercase p, like ChildComp.propTypes, if not, you will get an error.
// ChildComp.PropTypes = {
// ChildComp.propTypes = {
//     total: PropTypes.number,
// };
// Here we want the properties numberA and numberB to be numbers.
// ChildComp.propTypes = {
//     numberA: PropTypes.number,
//     numberB: PropTypes.number,
// };
// Here we want the properties numberA and numberB to be strings.
ChildComp.propTypes = {
    numberA: PropTypes.string,
    numberB: PropTypes.string,
};
// We can even have default values for props by setting the defaultProps property for the <ChildComp />.
// Sometimes having a default is very important because there are going to be situations where we forget to add a prop.  These props will be passed down to the <ChildComp /> in case we forget to pass props down to it.
ChildComp.defaultProps = {
    // This caused an error because we still have to take into account that the properties numberA and numberB have to be strings, or we will get an error.
    // numberA: 1,
    // numberB: 2,
    numberA: "1",
    numberB: "2",
};

// You can use TypeScript or Flow instead of using PropTypes.