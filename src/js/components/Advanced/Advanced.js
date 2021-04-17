// Now we are doing the section on using the Context API as a Global State.

// By using the Context API, you won't need to pass all of the data that you have through props.  If you have multiple children inside of a component and multiple levels of components, you won't have to pass props into every single one.  If you have a component with a child, and that child has a child, which is the grandchild of the first component, you don't have to constantly pass down all of the data from the first component, to the last, through props.

import React, { Component, Fragment } from "react";
import update from "immutability-helper";
import PropTypes from "prop-types";

// Now we are using the Context API.  You can name the AppContext const variable whatever you want.
const AppContext = React.createContext();

// Here we just created our first <Provider />.  We can wrap this <Provider /> around any component, in any section within our application.  The component and any of the children of the component that gets placed inside of the <Provider /> is going to get access to the value, which in this case is the "Testing", like shown on the line with value="Testing".  We call the value the context.
class Provider extends Component {
    constructor() {
        super();

        this.state = {
            name: "Joe",
            clicked: false,
        };
    }

    // For us to have some type of change, we need to make sure that we are able to change the data within the <Provider />.  In order to do this, we need to create a method, just like we've been doing.
    clickedButton = () => {
        this.setState({
            // The clicked property will get the opposite of whatever the current value of this.state.clicked is.
            clicked: !this.state.clicked,
        });
    };

    render() {
        return (
            // <AppContext.Provider value="Testing">
            // This is how we pass the state to the <AppContext.Consumer />.
            // My way.
            // <AppContext.Provider value={this.state.name}>
            // Joe's way.  Joe does it this way because he says to pass in an {}.  You can name the property state, globalState, or whatever you'd like.
            // <AppContext.Provider value={{globalState: this.state}}>
            // Now we are also passing in the clickedButton() method through the clickedButton property, in the {} assigned to the value, to the context.  Now we can go to any component inside of the <Provider /> and use the clickedButton() method.
            <AppContext.Provider value={{globalState: this.state, clickedButton: this.clickedButton}}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
};

export default class Advanced extends Component {
    constructor() {
        super();

        this.state = {
            // We want to have the name "Joe" within the <ChildComp />.  We will first do this by passing props from component to component.
            name: "Joe",
        };
    }

    render() {
        return (
            // <div id="advancedFeatures">
            //     {/* Joe is going to play on this idea of having a father, a grandfather, and a child. */}
            //     {/* <GrandComp /> */}
            //     {/* <GrandComp name="Joe" /> */}
            //     {/* First we are passing the state as a property. */}
                // <GrandComp name={this.state.name} />
            // </div>
            // Now we are going to wrap the #advancedFeatures <div> with the <Provider />.  We could have named the <Provider /> anything that we wanted to.  We called it the <Provider /> because we are basically creating an AppContext {} <Provider /> within the <Provider />.  
            // After creating the <Provider />, we have to create a <Consumer />.  We can create this anywhere inside of the <Provider />, or any of the components that are inside of the <Provider />, as long as these components are a child of the <Provider />.
            <Provider>
                {/* We are going to create a render() here.  It is going to return JSX.  The context is going to have the <Provider />'s value property, which is currently the "Testing". */}
                <AppContext.Consumer>
                    {/* {context => <h1>{context}</h1>} */}
                    {/* If passing the value Joe's way in the <Provider /> definition, we have to write context.globalState.name in order to get access to the value because we passed in an {}. */}
                    {context => <h1>{context.globalState.name}</h1>}
                </AppContext.Consumer>
                
                <div id="advancedFeatures">
                    {/* <GrandComp name={this.state.name}/> */}
                    {/* Now we are refactoring this to not pass props and to use the Context API, instead. */}
                    <GrandComp />
                </div>
            </Provider>
        );
    }
};

// This could have been a class component, but we're using a functional component because it's easier to do.  Joe might also do a class component just to show us.
// We are passing props to the <GrandComp />.
// There are three levels of components in here.  There is one component inside another, inside another.
// Here we have one component that has another component inside of it, and this internal component has another component inside of it, too.  We have four levels of components because the <GrandComp /> is inside of the <Advanced />.
const GrandComp = props => {
    return (
        <div className="GrandComp">
            {/* <FatherComp /> */}
            {/* Now we are passing the this.state.name from the <GrandComp /> to the <FatherComp /> through props using the name property. */}
            {/* <FatherComp name={props.name} /> */}
            <FatherComp />
        </div>
    );
};
const FatherComp = props => {
    return (
        <div className="FatherComp">
            {/* <ChildComp /> */}
            {/* Now we are passing the this.state.name from the <FatherComp /> to the <ChildComp /> through props using the name property. */}
            {/* <ChildComp name={props.name} /> */}
            <ChildComp />
        </div>
    );
};
const ChildComp = props => {
    return (
        // <div className="ChildComp">
        //     {/* Text */}
        //     {/* Here we are putting the this.state.name inside of this <div>.  This is being passed from the <FatherComp /> to the <ChildComp /> through props using the name property. */}
        //     {/* {props.name} */}
        //     {/* We are refactoring this to use the Context API. */}
        //     <AppContext.Consumer>
        //         {/* {context => <h1>{context.globalState.name}</h1>} */}
        //         {/* Now we are using React fragments. */}
        //         {context => <>{context.globalState.name}</>}
        //     </AppContext.Consumer>
        // </div>
        // There are going to be times when you don't want the <AppContext.Consumer /> to be inside an element like in the code above.  You may want to wrap the <AppContext.Consumer /> around the element, instead, like in the code below.  This will give you full control over the element.  In order for this to work, you have to be returning a function.  Wrapping everything with the <AppContext.Consumer /> will give you access to the context all throughout the component.
        <AppContext.Consumer>
            {context => (
                // <div className="ChildComp">
                // If the state changes and the context.globalState.clicked===true, the .active will be added to the className for the <div> below.
                <div className={`ChildComp ${context.globalState.clicked === true ? "active" : ""}`}>
                    {context.globalState.name}
                    {/* <div className="button">Save</div> */}
                    {/* With this .button <div>, we can change the <Provider />'s this.state.clicked property from false to true and vice versa.  We do this by using the context.clickedButton() method to add or remove the .active from this <div>'s parent <div>. */}
                    <div className="button" onClick={context.clickedButton}>Save</div>
                </div>
            )}
        </AppContext.Consumer>
    );
};

// When we used props, we passed the this.state.name "Joe" from the <Advanced /> to the <GrandComp />.  Then we passed this from the <GrandComp /> to the <FatherComp />.  Next we passed this from the <FatherComp /> to the <ChildComp />.  Finally the <ChildComp /> will actually render the this.state.name "Joe".  With the Context API, we can do something better than this.

// Now the idea that we have to pass down the data to every single component, from the <GrandComp />, to the <FatherComp />, and finally to the <ChildComp />, is not needed anymore.  As long as we use the <AppContext.Consumer />, we can now have access to everything that's inside of the <Provider />.

// Since we are wrapping everything inside of the <Advanced />'s return statement inside of the <Provider />, anything that is inside of this <Provider /> is going to get access to the context.  The <Provider /> is holding all of the data and all of the information.  Think of the <Provider /> as basically a component that holds the data.  You will usually use a <Provider /> when you are using multiple components that are using the same data.  So instead of you having to pass down the data directly, you just pass it down to the parent component, and wrap the parent component with a <Provider />.  Any child component will also now have access to the data.  

// Since we wrap the parent component, the <Advance />, with the <Provider />, the context will get passed down to its children, the <GrandComp />, the <FatherComp />, and the <ChildComp />.  Then in the <ChildComp />, we say <AppContext.Consumer>, then pass in a render(), {context=><h1>{context.globalState.name}</h1>}, then finally close it with </AppContext.Consumer>.  There are going to be situations where you don't want to have something like the line before this one.  You may not want to have the data coming in with HTML tags, or some type of element.  So we will change the code above to have React fragments, instead of <h1> tags.

// Pretty much everything that we learned before with all of the other applications that we have built, now we can use the Context API to be able to have something similar to a global state.  Everywhere that we pass a <Provider /> to a certain component, all of this component's child components will be able to have access to the <Provider />'s data.  Wherever we have the <AppContext.Consumer />, this is where we are going to be able to access the data that is inside of the <Provider />.

// Think of the <Provider /> as a regular component, but it holds all of the data for the application.  We can have multiple <Provider />s.  If we want, we can have a single <Provider /> that is a global state.