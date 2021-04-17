// Now we are doing the state with hooks section.

// import React, { Component, Fragment } from "react";
// The useState named property will allow us to create our own React Hooks.
import React, { Component, Fragment, useState } from "react";
import update from "immutability-helper";
import PropTypes from "prop-types";
// Here we are importing the <BoxComp /> functional component to this <ReactHooks /> functional component.  We are importing it from this current location, the Advanced folder.
import BoxComp from "./BoxComp";

// export default class ReactHooks extends Component {
//     constructor() {
//         super();

//         // For us to have a state, we used to have to use a class component.
//         this.state = {
//             name: "Joe",
//         };
//     }

//     render() {
//         return (
//            <div id="HooksApp">
//                <h1>Working on Hooks {this.state.name}</h1>
//            </div>
//         );
//     }
// };

// The only way to have a state before was by using class components.  Now we will do the component above as a functional component.
const ReactHooks = () => {
    // This is an example of React Hooks.  The useState() that we're using returns back an [].  Inside of this [] there are going to be two things.  One is going to be for the state.  The other is going to be for setting the state.  We are creating a variable for each one of the things that the useState() is returning back.  
    // Whatever we pass into the useState() will become our initial state.  Just how we did with our constructor() in the <ReactHooks /> class component above, with the line this.state={name:"Joe"};, this is what we are doing here with React Hooks.
    // const [state, setState] = useState({
    // });
    // When we are using this, we are creating two variables.  The first variable, state, is going to be whatever the first index in the useState() returns, which is going to be an {}.  This is the equivalent of this.state in class components.  The second variable, setState, is going to be whatever the second index in the useState() returns, which is going to be a function.  This is the equivalent of this.setState() in class components.
    // The const variables do not have to be called state and setState.  They can be called whatever you want.  You can call them count and setCount, or anything else, if you'd like.
    // This is the very first React Hook that we've created.
    const [state, setState] = useState({
        name: "Joe",
        // We added this total property to demonstrate the ComponentWillUnmount() that we are creating.
        total: 0,
    });

    // Just like with class components, we can create a method here to change the state.  We will do a click method here.  We are going to do this method differently from when we did something similar in the class.  Before, we were able to create a clickedButton() method by writing clickedButton=()=>{};.  We were able to do this because we were inside of a class component and did not have to write const before the rest of the line.  Since now we are inside of a function, instead of a class, all we're doing here is plain JavaScript.  Now we're just creating variables for every method that we want.
    const clickedButton = () => {
        // Here we pass in the new state that we want to change.  Pretty much whatever we want to send through here, which is the new {} that is going to be the new state.
        // Remember that the state above is the original state, the {name: "Joe"}, which we are getting inside the const variable state.
        // By calling the setState(), whichever {} we pass in to this, the setState() will merge this {} with the original state that we have set up, which in this case is the {name: "Joe"}.
        setState({
            name: "Billy",
            // Now we are also incrementing the state.total by one, every single time we click the .button <div>.
            total: state.total + 1,
        });
    };

    const displayBox = () => {
        // This if statement is going to check if the state.name is set to the "Joe".  If the state.name is set to the "Joe", we're going to return a <div> that says loading.  If the state.name is set to the "Billy", then we're going to return the blue box <div>.
        // if (state.name === "Joe") {
        // Now we changed this if statement to return a <div> that says loading if the total is set to 0.
        if (state.total === 0) {
            // We're just simulating a loading screen.  We may have to do something like this for real in certain situations.
            // This loading screen is going to be the initial state.
            return <div>Loading....</div>;
        }
        // If the state.name is not set to the "Joe", then we will return the <BoxComp /> functional component.
        // else {
        // We replaced the else with an else if.  Now if the state.total is set to 1, we will return the <BoxComp /> functional component.  When we click the .button <div> one time, we will return, or show, the <BoxComp /> functional component.
        else if (state.total === 1) {
            return <BoxComp />;
        }
        // Now if the state.total is set to 2, or more, we will return the <div> below with No More Box inside of it.  When we click the .button <div> one more time, the state.total will change from 1 to 2, so the <div> with No More Box will get triggered.  When we do that, the return ()=>{console.log("ComponentWillUnmount");}; will get triggered in the ComponentDidMount() inside of the <BoxComp /> functional component.  This return statement gets triggered when the <BoxComp /> functional component is unmounted.
        else {
            return <div>No More Box</div>
        }
    };

    // Joe is creating a console.log() to show us what the useState() actually returns.
    // console.log(useState({}));

    return (
        <div className="HooksApp">
            {/* <h1>Working on Hooks</h1> */}
            {/* We just use state.name because state is just a variable now, unlike with class components. */}
            <h1>Working on React Hooks with {state.name}</h1>
            {/* We are using clickedButton instead of this.clickedButton because we are not inside of a class.  We are inside of a regular function, so we are calling the const variable called clickedButton. */}
            {/* We are going to add some styling with the style property by passing it an {}. */}
            {/* When we click on this .button <div>, the state will change to the new state, which is a new {} with the name property set to the "Billy". */}
            <div 
                className="button" 
                onClick={clickedButton} 
                style={{
                    background: "red",
                    color: "white",
                    padding: "20px",
                }}
            >
                Change Name
            </div>
            {/* <BoxComp /> */}
            {/* Instead of running the <BoxComp /> functional component down here, we are running the displayBox(). */}
            {displayBox()}
        </div>
    );
};

export default ReactHooks;

// Joe had an "Invariant Violation: Invalid hook call." error because the react and react-dom libraries were different versions.  The react and react-dom libraries have to be the same version.

// We can pretty much do everything that we did before with class components using React Hooks and functional components.  Now we are keeping everything clean within a function, without having to create a brand new class.