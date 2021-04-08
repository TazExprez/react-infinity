// Create Testing Component Section.

import React, { Component } from "react";

export default class Immutable extends Component {
    constructor() {
        super();

        this.state = {
            background: "black",
        };
    }

    clickedBtn = () => {
        this.setState({
            background: "green",
        });

        console.log("Clicked BTN!");
    };

    // This is where we are going to be testing things out.
    changeToActive = () => {
        // We are going to be testing something here.  If it passes true and it's immutable and it's actually rerendering the page, then this is going to return the .active to the .box <div> below and it is going to turn the .box <div> to green.
        if (this.state.background == "green") {
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