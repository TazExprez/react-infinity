// Making Arrays Immutable Section.

import React, { Component } from "react";

// Now we are going to learn how to work with []s in an immutable way because every time that you try to push any type of new data into an [], you are actually doing mutable data, you are mutating the data itself.  

// let names = [
//     "Cindy",
//     "Billy",
//     "Lisa3000",
//     "John",
// ];

// Instead of creating a new [] here, what we're actually doing is creating a reference from the names [] inside of the newNames [].  Whatever happens on the names [] is the same thing that is going to happen on the newNames [].  If we try to do a change to the newNames [], all this is really doing is affecting the names [] because it is pretty much the same [].  Joe will prove this below.  Even though we are pushing the "Ramsey" into the newNames [], when we console.log(names), it will output the names [] with the "Ramsey" in it.  Here we are mutating the data because the names [] had the "Ramsey" pushed inside of it.
// let newNames = names;
// newNames.push("Ramsey");
// console.log(names);

// Here we are actually creating a new [] variable using the spread operator, ..., followed by the orignal [], then a comma, and finally the string that we want to add to the new [] variable.  This is actually creating a new variable.  Now the names [] and the newNames [] contain a different list of elements.  This is how you write immutable []s and add a new character, a new index, a new user, a new number, a new {}.  That's how you do it.
// let newNames = [...names, "Ramsey"];
// console.log(names);
// console.log(newNames);

export default class Immutable extends Component {
    constructor() {
        super();

        this.state = {
            background: "black",
            names: ["Cindy", "Billy", "Lisa3000", "John"],
            // We had to put the both [] here because we were getting an undefined error since this was being created later on.
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

    // If we have an [] inside of the grades {}, or inside of some other {}, remember to use the Object.assign().  Right now we are learning everything the long way, but we'll learn to do this the short way soon.  We have to learn this the long way to really understand the concepts.

    // We are now going to try to push the "Ramsey" into an [] in an immutable way.
    // clickedBtn = () => {
    //     console.log(this.state);

    //     // * Joe's way.
    //     const newState = {
    //         names: [...this.state.names, "Ramsey"],
    //     }

    //     this.setState(
    //         // My way.
    //         // {
    //             // We are passing in the property of name and then the actual [] itself, this.state.names.  We are just changing the this.state.names property, so we don't need to pass in anything else.
    //         //     names: [...this.state.names, "Ramsey"],
    //         // },
            
    //         // * Joe's way.
    //         // Joe decided to do it this way in order to make it less confusing.  We are using a variable called newState down here.
    //         newState,

    //         () => {
    //             console.log(this.state);
    //         }    
    //     );
    // };

    // Now we are going to remove an element from the this.state.names [] in an immutable way.
    // clickedBtn = () => {
    //     console.log(this.state);
        
    //     // * Joe's way.
    //     const newState = {
    //         // Here we are creating a new [] to make sure that we set the state in an immutable way.  We are going to filter out the element that we don't want in the new [].  We are going to do this by applying the filter() method on the this.state.names [].  We are going to pass in an arrow f() to the filter() method.  The arrow f() is going to take in a value, or argument, or parameter, that is going to be called name, or whatever you want.  The new [] is going to get every element from the this.state.names [] that meets the condition name!=="Billy".  Any element that fails to meet the condition name!=="Billy" will not be part of the new [].
    //         names: this.state.names.filter(name => name !== "Billy"),
    //     };

    //     this.setState(
    //         // My way.
    //         // {
    //         //     names: this.state.names.filter(name => name !== "Billy"),
    //         // },

    //         // * Joe's way.
    //         newState,

    //         () => {
    //             console.log(this.state);
    //         }
    //     );
    // };

    // Now we will take the names [] and the teachers [] and merge them together.
    // clickedBtn = () => {
    //     console.log(this.state);

    //     // * * Joe's way.
    //     const newState = {
    //         both: [...this.state.names, ...this.state.teachers],
    //     };

    //     this.setState(
    //         // My way.
    //         // {
    //         //     both: [...this.state.names, ...this.state.teachers],
    //         // },

    //         // * * Joe's way.
    //         newState,

    //             () => {
    //                 console.log(this.state);
    //             }
    //         );
    // };

    // Another thing that you will be using a lot is sorting your arrays.
    clickedBtn = () => {
        console.log(this.state);

        // Some of you might use this whenever you want to sort an [] to go from A to Z or from lowest to highest.  In a situation like that, you would usually do the following.  You would think that this is immutable, but it's not, this is actually mutable.  What this does is it sorts the this.state.names [], but it does not create a new [].
        // const newState = this.state.names.sort();
        // In order to sort an array the immutable way, you have to create a new [] and sort that new one.  You can do this by adding the slice() method, like done below.  You trigger the slice() method, which will create a new [] for you, and then run the sort() method on the newly created [].
        // const newState = this.state.names.slice().sort();

        // * * * Joe's way.
        // This {} is going to be put inside of the this.setState().
        const newState = {
            // The names property is going to be replaced with the [] returned by this.state.names.slice().sort().
            names: this.state.names.slice().sort(),
        };

        this.setState(
            // My way.
            // {
            //     names: this.state.names.slice().sort(),
            // },

            // * * * Joe's way.
            newState,

            () => {
                console.log(this.state);
            }
        );
    };

    changeToActive = () => {
        // if (this.state.user.grades.math == "A+") {
        // Now we want to test for the "Ramsey" inside of the [].  If the "Ramsey" is in there, the box will turn green.
        // My way.
        // if (this.state.names.indexOf("Ramsey") !== -1) {
        // Joe's way.
        // if (this.state.names[4] == "Ramsey") {
        // Now we are checking that the "Billy" is not on index one.
        // if (this.state.names[1] !== "Billy") {
        // Now we are checking if "Brad" is on index five.
        // if (this.state.both[5] == "Brad") {
        // Now we are checking if "Billy" is on index zero of the sorted [].
        if (this.state.names[0] == "Billy") {
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

// If you don't know how to do this the hard, manual way, like above, you may have problems debugging your application later on.