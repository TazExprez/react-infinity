// Create Testing Component Section.

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
            },
        };
    }

    clickedBtn = () => {
        // This console.log() will happen before the state is set to the new property values.
        console.log(this.state);

        // This is not the immutable way to set the state.  React will not work if you set the state this way.  Even if the name is Justin, React is not going to work.
        // this.state.user.name = "Justin";

        // If we just set the state this way, we will lose the age:23 and location:"NYC" properties and the new user property value is just going to be {name:"Justin"} because this will overwrite the old user property.
        // this.setState({
        //     background: "green",
        //     user: {
        //         name: "Justin",
        //     },
        // },
        //     () => {
        //         // This console.log() will happen after the state is set to the new property values and is in a callback f() inside of the this.setState().
        //         console.log(this.state)
        //     }
        // );

        // console.log("Clicked BTN!");

        // If we just want to change the name of Joe to Justin, we will have to do this extra step and will need to create this newUser const variable.
        // In the Object.assign() we are passing in a new {}, then the source {}, which is the this.state.user {}, and finally an {} with just the change that we want to do, which is {name:"Justin"}.  We have the const newUser and then we use the Object.assign() to create a new {} out of the data that is inside of the this.state.user {} and the new change that we're adding to the this.state.user {}, which is the {name:"Justin"}.  We're merging the this.state.user {} and the {name:"Justin"}.  Whatever is difference between these two {}s is the only thing that is going to change.  Every other property, like age:23 and location:"NYC", is going to stay the same in the merged {}.
        const newUser = Object.assign({}, this.state.user, {
            name: "Justin",
        });

        this.setState({
            background: "green",
            // Here we are setting user to newUser in order to keep all of the unchanged and changed properties of the user {}.  If the Object.assign() and the const newUser variable weren't used, then some properties of the user {} wouldn't have been kept.  We changed an {} and the property of an {} inside of the state {} and kept all of the data that we had there.
            user: newUser,
            // You can also do it this way, but Joe likes to have more separation in order to see everything more clearly.
            // user: Object.assign({}, this.state.user, {
            //     name: "Justin",
            // })
        },
            () => {
                console.log(this.state);
            }    
        );
    };

    // This is where we are going to be testing things out.
    changeToActive = () => {
        // We are going to be testing something here.  If it passes true and it's immutable and it's actually rerendering the page, then this is going to return the .active to the .box <div> below and it is going to turn the .box <div> to green.
        if (this.state.user.name == "Justin") {
            return "active";
        }
        else {
            return "";
        }
    };

    render() {
        return (
            <div id="Immutable-comp">
                <div className={`box ${this.changeToActive()}`}></div>
                <div className="button" onClick={this.clickedBtn}>Press Me</div>
            </div>
        );
    }
}

// We're going to be testing out different techniques to keep your data immutable.