// Merging Objects With Immutability Helpers Section.

import React, { Component } from "react";
import update from "immutability-helper";

export default class Immutable extends Component {
    constructor() {
        super();

        this.state = {
            background: "black",
            names: ["Cindy", "Billy", "Lisa3000", "John"],
            both: [],
            teachers: ["Cam", "Brad", "Jennifer"],
            user: {
                name: "Joe",
                age: 23,
                location: "NYC",
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

        // Now we are going to merge two {}s.
        // We have the user {}, which contains the grades {}.  We want to add several more properties to the grades {}, which will represent several more classes that the user took.  We want to add the classes biology and art to the grades {}.
        // We are going to do this by creating a new variable here that is going to be assigned as the new this.state.user.grades {} property that is going to be changed in the this.setState().  The $merge operator is going to merge the properties, or keys, of the {} that it contains with the target, {}, the this.state.user.grades {}.
        // We are going to say const newGrades and assign it the result of the update().  We are going to pass in the this.state.user.grades {} to the update().  The next thing we are going to pass in to the update() is another argument, a target, {}.  In this target, {}, we are going to say $merge, and to this we are going to pass in an {} with the new properties that we want to add to the this.state.user.grades {}.  The properties are going to be art:"B-" and biology:"D".
        const newGrades = update(this.state.user.grades, {
            $merge: {
                art: "B-",
                biology: "D",
            },
        });
        
        // Here we are taking the original state, this.state, and we are setting a new grades property for the this.state.user {}.  We are setting the grades property to the {} that we are getting from the newGrades const variable from the line {$merge: {art: "B-", biology: "D",},}.  We are going to use this newState const variable as one of the arguments in the this.setState() in order to set the new this.state.
        const newState = update(this.state, {
            user: {
                // When we did grades:newGrades we got an error "Uncaught Error: update(): You provided an invalid spec to update()..."  This occurred because we did not use the target, {}, and the $set operator below.  Since we are using the update() from the immutability-helper library, we have to make sure that we use the target, {}, and the $set operator, when assigning a value to a variable.
                // grades: newGrades,
                // This line will eliminate the error message.
                grades: {$set: newGrades,},
            }
        });

        this.setState(newState, () => {
                console.log(this.state);
            }
        );
    };

    changeToActive = () => {
        // Here we are checking if the this.state.user.grades.biology property is equal to the "D".
        if (this.state.user.grades.biology == "D") {
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