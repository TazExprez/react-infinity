// Immutable Arrays Made Simple Section Around Five Minute Mark.

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

    // Now we are going to remove an item from an [].
    clickedBtn = () => {
        console.log(this.state);

        const newTeachers = update(this.state.teachers, {
            // In order to remove an item from an array, we are going to use the $splice operator, instead of using the $push operator.  Then from there, we are going to pass in an index.  We have an [] and then we pass in another [] inside of this one.  If we want to remove the "Jennifer", we put in a 2 inside of the [] nested inside.  This works in a similar way to the regular [] splice() method.
            $splice: [[2]],
        });

        const newState = update(this.state, {
            teachers: {$set: newTeachers},
        });

        console.log(newTeachers);

        this.setState(newState, () => {
                console.log(this.state);
            }
        );
    };

    changeToActive = () => {
        // Here you are checking if the "Jennifer" is not on the index two of the this.state.teachers [].
        if (this.state.teachers[2] !== "Jennifer") {
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

// There are a lot of commands available in the immutability-helper library, but the ones that you will use the most are $push, $splice, $set, and $merge.