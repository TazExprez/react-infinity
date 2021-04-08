// Using Immutability Helper to Set Values on Objects Section Around Five Minute Mark.

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
        
        const newState = update(this.state, {
            background: {$set: "red"},
            // This is how you change the teachers [].  First you pass in a target, {}, to the teachers variable.  Then you pass in the $set operator to the target, {}.  Then you pass in an [] to the $set operator.  The [] will contain the elements "Billy" and "Jordan", as shown on the line $set:["Billy", "Jordan"],.
            teachers: {
                $set: ["Billy", "Jordan"],
            },
            // Now we will change the math property, which is inside of the grades {}, which is inside of the user {}, which is inside of the this.state {}.
            // We will do this by passing in an {} to the user variable.  Inside of the user {} we are going to pass in the grades variable.  We will pass in another {} to the grades variable.  Inside of the grades {}, we are going to pass in the math variable.  We are going to pass the target, {}, to the math variable.  Inside of the math variable's target, {}, we are going to be using the $set operator so that we can set the property of math.  We are going to set the property of math to the "C+" in the line $set:"C+",.
            user: {
                grades: {
                    math: {
                        $set: "C+",
                    },
                },
            },
        });

        this.setState(newState, () => {
                console.log(this.state);
            }
        );
    };

    // The update() of the immutability-helper library is very useful because it can help keep our data immutable with little hassle.

    changeToActive = () => {
        // Here you are checking if the math property of the this.state.user.grades is equal to the "C+".
        // if (this.state.user.grades.math == "C+") {
        // Here you are checking if the "Billy" is on the zero index of the this.state.teachers [].
        if (this.state.teachers[0] == "Billy") {
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