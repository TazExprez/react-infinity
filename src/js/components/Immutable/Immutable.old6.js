// Using Immutability Helper to Set Values on Objects Section.

// We learned the basics of immutability and did this with {}s and []s.  Now we will use a library called immutability-helper.  This library helps us with having our data immutable and updating our data without having to do this the long way, how we did this before.  This library is found at https://github.com/kolodny/immutability-helper.  To install immutability-helper, just type npm i immutability-helper in the Terminal.

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
        
        // Now we are going to change the background property inside of the this.state {} with the immutability-helper library.  We are going to be using the update() from this library.
        // We are going to create the newState const variable and assign to it the result of the update().  We are going to pass in the data to the update(), which is going to be the this.state {} and another {}.  In this other {} we are going to put in the this.state {} property of background and set it to {$set}, which is something that looks like an {}, but is actually called the target.  $set is called the $set operator and is inspired by MongoDB's query language.  This is how you set a value for a property inside of an {}.  To {$set}, we are going to pass in the "red".
        const newState = update(this.state, {
            background: {$set: "red"},
        });

        // Here we are using the newState variable, instead of an unnamed {}.
        this.setState(newState, () => {
                console.log(this.state);
            }
        );
    };

    changeToActive = () => {
        // Here you are checking if the background property of the this.state {} is equal to the "red".
        if (this.state.background == "red") {
            return "active";
        }
        else {
            return "";
        }
    };

    // What the immutability-helper library has done so far is what we have already done before.  For simple {}s and []s that are not nested, it will not help much.  For these, you could just use vanilla JavaScript.  You're going to want to use the immutability-helper library when the this.state {} has many nested {}s inside of it.  Handling a this.state {} with many nested {}s will get very difficult with time when using vanilla JavaScript.  Changing a property like background, which is on the first level of the this.state {}, is the easiest thing to do.  Here we are changing the background from black to red in this property.

    render() {
        return (
            <div id="Immutable-comp">
                <div className={`box ${this.changeToActive()}`} />
                <div className="button" onClick={this.clickedBtn}>Press Me</div>
            </div>
        );
    }
}