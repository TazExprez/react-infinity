// Immutable Arrays Made Simple Section.

// Now we are going to use []s with the immutability-helper library.

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

    // We are going to add an extra name to the teachers [] in this.state and then we are going to test it out.
    clickedBtn = () => {
        console.log(this.state);

        // Here we are going to create the newTeachers const variable and assign the result of the update() to it.  We are going to pass in the data, this.state.teachers, to the update().  Next we are going to pass in the target, {}, along with the $push operator.  We are using the $push operator because this is an [].  With the $push operator, we are going to pass in the item that we want to add to the teachers [].  We are going to pass in an [] that's going to contain the "James" in the line $push:["James"],.
        const newTeachers = update(this.state.teachers, {
            $push: ["James"],
        });

        // Now we have to actually update the state itself, so we are going to use this.  
        const newState = update(this.state, {
            // This gives an error because you have to use a target, {}, and the $set operator.  You have to do this because you are using the update() from the immutability-helper library and this is not a regular {}.
            // teachers: newTeachers,
            // This fixes the error.
            teachers: {$set: newTeachers},
        });

        // We are doing a console.log() here to see what we are getting in the newTeachers const variable.
        console.log(newTeachers);

        this.setState(newState, () => {
                console.log(this.state);
            }
        );
    };

    changeToActive = () => {
        // Here you are checking if the "James" is on the index three of the this.state.teachers [].
        if (this.state.teachers[3] == "James") {
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