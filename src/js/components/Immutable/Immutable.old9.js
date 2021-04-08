// Merging Objects With Immutability Helpers Section Around Five Minute Mark.

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

    // Now we will make this smaller by combining the two update()s.
    clickedBtn = () => {
        console.log(this.state);

        // const newGrades = update(this.state.user.grades, {
        //     $merge: {
        //         art: "B-",
        //         biology: "D",
        //     },
        // });

        // const newState = update(this.state, {
        //     user: {
        //         grades: {$set: newGrades,},
        //     }
        // });

        // Joe had an error because he saved this with a semicolon in the wrong place.
        const newState = update(this.state, {
            user: {
                grades: {
                    // This update() is returning back an {}.  No matter what, once you run the $set operator, this will be like running the update() below and returning back an {}.  So you don't have to put the result of the update() into its own variable.  The reason why Joe likes to put the result in a variable is because this is easier to read.
                    // It will be easier for Joe to come back to the code a year or two later, if all of the update()s are assigned to separate variables.
                    $set: update(this.state.user.grades, {
                        $merge: {
                            art: "B-",
                            biology: "D",
                        },
                    }),
                },
            },
        });

        this.setState(newState, () => {
                console.log(this.state);
            }
        );
    };

    changeToActive = () => {
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