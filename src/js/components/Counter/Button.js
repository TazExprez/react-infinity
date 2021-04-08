import React, { Component } from "react";

export default class Button extends Component {
    constructor() {
        super();

        this.state = {
            // By default, the user is not hovering over an element, so we are setting hover to false.  This is the initial state of this component.
            hover: false,
        };
    }

    // This toggleHover() method is going to change the hover state from false to true and vice versa.
    toggleHover = () => {
        // The only way to change the state is with the this.setState().  We pass in an {} to the this.setState().  This is the best way to change your state or local state.  React is smart enough to know that wherever you have a property that you pass in (Joe probably meant to the this.setState()), it's going to find it and basically overwrite it.
        this.setState({
            // Here we are saying to make hover the opposite of whatever the current hover state is.
            // If we hover over an element, the toggleHover() will be triggered and the hover state will be changed to true.  If we do a mouse leave, the toggleHover() will be triggered again, so whatever is inside of the state will be changed back.  This will cause the hover state to be changed back to false.
            hover: !this.state.hover,
        });

        // You can't change the state this way because you are going to get an error.
        // this.state.hover = true;
    };

    render() {
        const styleButton = {
            color: this.props.fontColor,
            width: "50%",
            border: "3px solid black",
            padding: "20px",
            fontSize: "2rem",
            fontWeight: "900",
            textAlign: "center",
            cursor: "pointer",
            transition: "all 0.6s ease-in-out",
            // This is the default background color.
            // background: "white",
            // If you are hovering over a button, the background will be red, otherwise it will be white.
            // This will give an error of undefined until the styleButton {} is moved inside of the <Button> render().
            // background: this.state.hover ? "red" : "white",
            // Here we are using the JavaScript ternary operator to assign the background.  this.props.backgroundColor is the default.
            background: this.state.hover ? this.props.hoverColor : this.props.backgroundColor,
        };

        return (
            // <div className="button plus" style={styleButton}>
            // Here we changed the className from "button plus" to {`button ${this.props.action}`} to make the <Button> even more reusable.
            // When this <div> is rendered, it shows a <div> with the className of button and the action name passed down as props from the <Counter>.
            // <div className={`button ${this.props.action}`} style={styleButton}>
            // Now we are going to create a hover effect.  By default we have a white background.  onMouseEnter is an event.  When the mouse enters this element, or hovers on top of it, we are going to change the element to be a different color.
            // We have not talked about how we are going to change the state before.  We are going to use the state as a memory card.  We are going to use it to keep track of whether the user is hovering over a button.
            <div 
                className={`button ${this.props.action}`} 
                style={styleButton} onMouseEnter={this.toggleHover} 
                onMouseLeave={this.toggleHover} 
                // This will change the this.state.currentNumber in the <Counter> when you click on the plus or minus buttons.  We say onClick={this.props.trigger} because we are bringing in the trigger() from the props from the <Counter>.  The <Counter> is passing it down to the <Button> through a property called trigger.
                onClick={this.props.trigger}
            >
                {/* This will allow us to get what we are passing inside of each <Button>, between the opening and closing tags, <Button></Button>. */}
                {this.props.children}
            </div>
        );
    }
}

// const styleButton = {
//     width: "50%",
//     border: "3px solid black",
//     padding: "20px",
//     fontSize: "2rem",
//     fontWeight: "900",
//     textAlign: "center",
//     cursor: "pointer",
//     // This is the default background color.
//     // background: "white",
//     // If you are hovering over a button, the background will be red, otherwise it will be white.
//     // This will give an error until you move the styleButton {} inside of the <Button> render().
//     background: this.state.hover ? "red" : "white",
// };

// We are basically creating a component that is reusable right now.  We are creating this <Button> because both of the buttons are very similar and we are able to reuse what we did in one over and over again.

// React is pretty much like JavaScript.  It is not like Angular or Vue, or most other frameworks out there, where they are teaching you different things that the framework created.  If you are good with JavaScript, this will make you a better React developer and improve your JavaScript skills.  If you are not good with JavaScript, just by using React, you will learn JavaScript even more because React is basically only JavaScript.