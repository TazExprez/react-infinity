// What is immutability? Section.

import React, { Component } from "react";
import Button from "./Button";

let user = {
    name: "Joe",
    age: 31,
    location: "CT",
};

// When you change a property this way, you are mutating the original data.  If you want to go back in time and compare the original data that was there, you can't do this anymore because you mutated the data and actually changed the {}.
// user.name = "Justin";

// What we want to do instead is to create a new {} that is going to have the changes that we are doing in the line user.name="Justin";.  This way we can actually compare to the original data that is in the user {} in the line let user={name: "Joe", age: 31, location: "CT"}; to the new data in the new {}.
// let userNew = {
//     name: "Justin",
//     age: 31,
//     location: "CT",
// };

// What this is proving is that the user's name actually changed.  We know we can do this without having to mutate the original data.  We can simply create a new variable.
// if (user.name !== userNew.name) {
//     console.log("changed user");
// }

// We don't want to write the {} every single time, like in the line let userNew={name: "Justin", age: 31, location: "CT",};.  We don't want to write the whole {} constantly.  We are going to use the Object.assign(), like in the line let newUser=Object.assign({}, user, {name: "Justin",});.  The first parameter {}, tells the Object.assign() to create a new {}.  The next parameter that we're passing in is the user variable, which contains an {} with the original data.  The final parameter contains an {} with just the change that we want.  In our case, we just want to change the name to Justin, so for the final parameter we are going to pass the {name: "Justin",}.  What the Object.assign() will do is that it's going to take the user {} above and the new {},{name: "Justin",}, which is the change.  The property name is the user {} property that is changing.  The Object.assign() will take the user {} and the {name: "Justin"} and merge them together.  Whichever properties get matched by the {} in the final parameter will be changed.  So the name property will be changed, while the age and location properties will remain the same.  Then a new {} will be created will all of the old and changed properties.  When the Object.assign() runs, it will return back a new {} with all of the properties that remained unchanged and the changed or new (according to Joe) property.  The new {} that was returned contains immutable data and cannot be changed.  This immutability concept is important for you to learn because this is how React is able to react when a change happens.  React is looking at the state and says hey whenever there's a change from the previous state, then rerender the page.  If there is no way to compare the previous version to the new version or change that you are trying to create, then React is not going to work.  Joe is going to show us right now by modifying the clickedAdd() method below.
let newUser = Object.assign({}, user, {
    name: "Justin",
});


export default class Counter extends Component {
    constructor() {
        super();

        this.state = {
            status: "manual",
            currentNumber: 0,
        };
    }

    componentWillMount() {
        console.log("component will mount started")
    }

    componentDidMount() {
        if (this.props.status == "auto") {
            this.setState({
                status: this.props.status
            },
                () => {
                    this.counterRun();
                }
            );
        }
    }

    clickedAdd = () => {
        // We commented out the this.setState() method in order to change the this.state {} in a mutable way.  The way we are changing the state below will mutate the state {}.  Because React relies on your data being immutable to be able to track if something changed in the this.state {}, this is not going to work.  The line this.state.currentNumber=this.state.currentNumber+1; right below is the same as the line currentNumber: this.state.currentNumber+1 in the this.setState();.  The one right below changes the this.state {} in a mutable way, unlike the second one.  React won't work when you change the this.state {} in a mutable way.  You'll notice that if you click the plus button, nothing seems to change.  The displayed number never changes.  The state is actually changing and the currentNumber property of the this.state {} is being incremented.  Because React doesn't have a reference point to what actually changed on the page, it actually will not rerender anything.  The 0 doesn't become 1, 2, 3, 4, etc.  If we click on the minus button, the currentNumber property will be decremented by 1 and the displayed number will change from 0 to whatever it is in the this.state.currentNumber.  So the this.state {} did change, but because React did not have a reference point to say hey the this.state {} changed here from the previous version, the number displayed did not get rerendered to equal whatever value was inside of the currentNumber property.  The only way to render a component is by knowing the data changed somehow.  If we bring the currentNumber property to 5 with the minus button and clicked on the plus button 2 times, the currentNumber this.state {} property would change to 7, even though the component would not be rerendered.  Now if we press minus, the currentNumber property would change to 6.  So the this.state {} is changing, but because of React relying on your data to be immutable, it will not trigger a rerender.
        this.state.currentNumber = this.state.currentNumber + 1;
        
        // The this.setState() is taking in an {} with just the this.state property that we want to change.  If we look at this.state we'll notice that we have the {status: "manual", currentNumber: 0,}.  When we run the clickedAdd() and the this.setState() inside of it, all we are passing in to the this.setState() is what we're actually changing in the this.state {}.  Once we run the this.setState(), we say this.state.currentNumber+1.  The currentNumber property in the this.state {} is currently 0, and we add 1.  But we do not add 1 to the currentNumber property in the this.state {}.  When the this.setState() method is run, a new {} is created, just like with the Object.assign().  The new {} will have the property currentNumber incremented by 1.  With the newly created {} now React is able to compare what was in the this.state {} before and what is there now.  Before, the currentNumber property was 0, and now, it is 1.  Now React knows that there was a change and it actually rerenders the page.  The currentNumber property was 1 before, but when you clicked the plus button the page got rerendered and now the number 2 is shown.
        // this.setState({
        //     currentNumber: this.state.currentNumber + 1,
        // },
        //     () => {
        //         console.log(this.state);
        //     }
        // );
    };

    clickedMinus = () => {
        this.setState({
            currentNumber: this.state.currentNumber - 1,
        });
    };

    counterRun = () => {
        setInterval(() => {
            this.setState({
                currentNumber: this.state.currentNumber + 1
            });
        }, 1000);
    };

    render() {
        const styleCounterComp = {
            width: "100%",
            maxWidth: "400px",
            margin: "0 auto",
        };

        const styleNumber = {
            border: "3px solid black",
            padding: "20px",
            fontSize: "2rem",
            fontWeight: "900",
            textAlign: "center",
        };

        const styleButtons = {
            display: this.props.status == "auto" ? "none" : "flex",
        };

        return (
            <div id="counter-comp" style={styleCounterComp}>
                <div className="number" style={styleNumber}>{this.state.currentNumber}</div>
                <div className="buttons" style={styleButtons}>
                    <Button 
                        action="minus" 
                        fontColor="white" 
                        hoverColor="red" 
                        backgroundColor="black"
                        trigger={this.clickedMinus}
                    >
                        -
                    </Button>
                    <Button 
                        action="plus" 
                        fontColor="black" 
                        hoverColor="purple" 
                        backgroundColor="white"
                        trigger={this.clickedAdd}
                    >
                        +
                    </Button>
                </div>
            </div>
        );
    }
}

// Everywhere you go when it comes to React, you're going to hear the word immutable, immutability.  What does immutability mean?  This means that you are not mutating any {}s, any []s, or any strings.  You are coming in and making sure that there are no mutations.  What the this.setState() does behind the scenes is that it looks at the this.state {} in the line this.state={status: "manual", currentNumber: 0,}; and takes all of its properties and it finds everything that is inside the new {} inside of the this.setState() in the line this.setState({currentNumber: this.state.currentNumber + 1});.  Then it takes the new {} and merges it with the this.state {} and creates a new {} without changing the this.state {}.