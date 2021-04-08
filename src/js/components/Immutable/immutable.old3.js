// Working with Objects in the State Section.

import React, { Component } from "react";

export default class Immutable extends Component {
    constructor() {
        super();

        this.state = {
            background: "black",
            user: {
                name: "Joe",
                age: 23,
                location: "NYC",
                // Now we have an {} inside of an {}.
                grades: {
                    math: "A",
                    english: "B+",
                    science: "C-",
                    gym: "F",
                },
            },
        };
    }

    clickedBtn = () => {
        console.log(this.state);

        // When you are changing a property that's in an {} that's inside another {}, you will have to use two Object.assign()s.  The first will be to create a new object with the property, or properties, that you want to change in the inner {}.  The next Object.assign() will create a new {} with the outer {} and the property, or properties, that you want to change, including the {} created by the first Object.assign().
        // This is how you start coming in and make sure that you change your data to make sure that React says ok this is immutable data, let me make sure that I rerender my view.
        const newGrade = Object.assign({}, this.state.user.grades, {
            math: "A+",
        });

        const newUser = Object.assign({}, this.state.user, {
            name: "Justin",
            grades: newGrade,
        });

        this.setState({
            background: "green",
            user: newUser,
        },
            () => {
                console.log(this.state);
            }    
        );
    };

    changeToActive = () => {
        // Now we want to change one of the grades for math from an A to an A+.  If the this.state.user.grades.math is equal to an A+, this will return the .active and the box will turn green.
        if (this.state.user.grades.math == "A+") {
            return "active";
        }
        else {
            return "";
        }
    };

    render() {
        return (
            <div id="Immutable-comp">
                <div className={`box ${this.changeToActive()}`} />
                <div className="button" onClick={this.clickedBtn}>Press Me</div>
            </div>
        );
    }
}

// React is always going to react to any changes that are happening in the view.  For example, the reason the <div> in the line <div className={`box ${this.changeToActive()}`} /> is because we are running the this.changeToActive() method.  Whenever the data changes, like the math grade changes from A to A+, React is going to automatically rerender the component.  The moment we come in and press the .button <div>, we change the state, and then the state changes.  React says ok the state changed and now looks to see if we're using a property on the view that's connected to the state, and if we are, it's going to rerender the view.  When we click on the .button <div> the math grade changes from A to A+, so React rerenders the whole view, so the .box <div> gets the .active added to it and changes the background from black to green.