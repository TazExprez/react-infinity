// Object spread vs Object assign Section.

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

        // const newGrade = Object.assign({}, this.state.user.grades, {
        //     math: "A+",
        // });
        // In a situation where you are only changing one property, like this.state.user.grades.math in the line const newGrade=Object.assign({}, this.state.user.grades, {math: "A+"});, you can also use the ..., the {} spread operator.  To use the {} spread operator we have to first create an {}.  Then create three dots, followed by the original source, in this case this.state.user.grades.  So you will write down ...this.state.user.grades.  Next you will put in a comma and then pass in the property that you want to change, which in this case is math:"A+".  We are only passing in the math:"A+" property and none of the others.
        const newGrade = {
            ...this.state.user.grades,
            math: "A+",
        };

        // If you have multiple properties that you want to change, like below, where we are changing the name and grades properties, then use the Object.assign().  If you are just going to change one part, or one section, then use the ..., the {} spread operator.
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