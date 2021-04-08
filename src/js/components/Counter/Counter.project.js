import React, { Component } from "react";
// We are importing the <Button> that we are going to use for the buttons in the <Counter>.
// We are using "./Button.js" because the <Button> is in the same folder as the <Counter>.  We don't have to use "./Button.js" and can use "./Button" for this.  Joe normally likes to include the .js file extension, even though webpack is smart enough to know that you are talking about a JavaScript file, or a JSX file.
// import Button from "./Button.js";
import Button from "./Button";

export default class Counter extends Component {
    constructor() {
        super();

        this.state = {
            // The status property is manual by default.
            status: "manual",
            // This keeps track of counter number and the default value is 0.
            currentNumber: 0,
        };
    }

    // This is the componentWillMount() lifecycle method.  Whatever is in here will get executed before the component is rendered by the render().
    componentWillMount() {
        console.log("component will mount started")
    }

    // This is the componentDidMount() lifecycle method.  Whatever is in here will get executed after the component is rendered by the render().
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
        // If we put a console.log() before the this.setState(), the previous number for the this.state will be output to the console.
        // console.log(this.state);

        // In order for the console.log() to output the this.state after it gets changed, you will have to pass in a callback f() to the this.setState().
        this.setState({
            // When you click on the plus button, change the current number to whatever it is, plus one.
            currentNumber: this.state.currentNumber + 1,
        },
            // Whenever you use this.setState() and you want to do something, like a console.log(), after the state changes, make sure you use a callback f().  Do the console.log() or anything else you want to do from that callback f(), like the one below.
            () => {
                console.log(this.state);
            }
        );
        
        // If we put the console.log() after the this.setState(), the previous number for the this.state will be output to the console.  This is the same thing that happened above, where the console.log() was placed before the this.setState().  Once the currentNumber is changed on the this.state, the console.log() inside of the this.setState() will output the correct currentNumber.  Many people may think that just because the console.log() below comes after the this.setState() that we are going to get the correct currentNumber with it, but we are not.
        // console.log(this.state);
    };

    clickedMinus = () => {
        this.setState({
            currentNumber: this.state.currentNumber - 1,
        });
    };

    // Joe got an error with the two this.setState()s above because he used this.setState({currentNumber: currentNumber + or - 1}), instead of using this.setState({currentNumber: this.state.currentNumber + or 1}).  Little mistakes like this can mess you up and get you stuck.  We are getting the currentNumber from the state, so for us to get the right value, we have to go to the state to get it.

    // We are going to pass down the clickedAdd() and the clickedMinus() methods to the <Button> through the props.  Remember that we are able to pass down f()s, numbers, strings, {}s, []s, and everything else through props to a component.  We will call the prop for the clickedAdd() and the clickedMinus() methods trigger.

    // The counterRun() method will automatically increment the currentNumber property of this.state.
    counterRun = () => {
        setInterval(() => {
            this.setState({
                currentNumber: this.state.currentNumber + 1
            });
        // Here we are setting the setInterval() to run every 1 second.
        }, 1000);
    };

    render() {
        // This will run the counterRun() method if the status property passed down from the <App> to the <Counter> is set to auto.
        // if (this.props.status == "auto") {
        //     this.setState({
        //         // Here we are setting the status property of this.state of the <Counter> to the status property passed down from the <App>.
        //         status: this.props.status
        //     },
        //         () => {
        //             // We only want this to run once the status changes.
        //             this.counterRun();
        //         }
        //     );

        //     // this.counterRun();
        // }
        // else {
        // }

        // We are creating a component that will have all of its styles inside.  We can give anybody this component and they can reuse this component.
        // You can also just use regular CSS in a separate style sheet, instead of using what we are doing.  Joe is just showing us how we can keep everything scoped in this component.  This way we can switch the styles around and have more control over the component later on if we want to put this component in another application, or use it some place else in the current one.
        // We are going to call this style and the name of the actual element.  We are going to make this into an {} and put all of the style's properties in there.
        const styleCounterComp = {
            width: "100%",
            maxWidth: "400px",
            margin: "0 auto",
        };

        const styleNumber = {
            border: "3px solid black",
            padding: "20px",
            fontSize: "2rem",
            // Number values do not need to be a string.  I tried 900 and it worked, but Joe did "900" and I left it like that.
            fontWeight: "900",
            textAlign: "center",
        };

        const styleButtons = {
            // display: "flex",
            // Joe wants to remove the <Button>s if the <Counter> is set to "auto".
            display: this.props.status == "auto" ? "none" : "flex",
        };

        return (
            // <div id="counter-comp">
            // To attach the styleCounterComp to the #counter-comp <div> we have to set the style property to the styleCounterComp {} variable with JavaScript.
            <div id="counter-comp" style={styleCounterComp}>
                {/* This is a counter. */}
                {/* <div className="number" style={styleNumber}>0</div> */}
                <div className="number" style={styleNumber}>{this.state.currentNumber}</div>
                <div className="buttons" style={styleButtons}>
                    {/* Now we are using the <Button> here.  We are going to reuse what we did here, but we're going to have one component that's going to be the button.  From there, we are going to do the different stylings and changes within the Button.js file. */}
                    {/* The props passed down to the <Button> are action="minus" and action="plus". */}
                    {/* <Button action="minus">-</Button> */}
                    {/* We added the fontColor, the hoverColor, and the backgroundColor props in order to make the <Button> more reusable. */}
                    <Button 
                        action="minus" 
                        fontColor="white" 
                        hoverColor="red" 
                        backgroundColor="black"
                        // Whatever we want to trigger with the <Button>, we will pass it in through here.
                        trigger={this.clickedMinus}
                    >
                        -
                    </Button>
                    {/* <Button action="plus">+</Button> */}
                    <Button 
                        action="plus" 
                        fontColor="black" 
                        hoverColor="purple" 
                        backgroundColor="white"
                        trigger={this.clickedAdd}
                    >
                        +
                    </Button>
                    {/* This is no loner needed. */}
                    {/* <div className="button minus" style={styleButton}>-</div>
                    <div className="button plus" style={styleButton}>+</div> */}
                </div>
            </div>
        );
    }
}

// Joe moved the styleCounterComp {}, the styleNumber {}, and the styleButtons {} inside of the <Counter>'s render() so that the <Counter> would have access to them.  We were having issues accessing the this.props.status in the styleButtons {} when it was out here.
// // We are creating a component that will have all of its styles inside.  We can give anybody this component and they can reuse this component.
// // You can also just use regular CSS in a separate style sheet, instead of using what we are doing.  Joe is just showing us how we can keep everything scoped in this component.  This way we can switch the styles around and have more control over the component later on if we want to put this component in another application, or use it some place else in the current one.
// // We are going to call this style and the name of the actual element.  We are going to make this into an {} and put all of the style's properties in there.
// const styleCounterComp = {
//     width: "100%",
//     maxWidth: "400px",
//     margin: "0 auto",
// };

// const styleNumber = {
//     border: "3px solid black",
//     padding: "20px",
//     fontSize: "2rem",
//     // Number values do not need to be a string.  I tried 900 and it worked, but Joe did "900" and I left it like that.
//     fontWeight: "900",
//     textAlign: "center",
// };

// const styleButtons = {
//     // display: "flex",
//     // Joe wants to remove the <Button>s if the <Counter> is set to "auto".
//     display: this.props.status == "auto" ? "none" : "flex",
// };

// const styleButton = {
//     width: "50%",
//     border: "3px solid black",
//     padding: "20px",
//     fontSize: "2rem",
//     fontWeight: "900",
//     textAlign: "center",
//     cursor: "pointer",
// };

// Joe changed the styles of the container using an external CSS style sheet to make our life easier.  In my case, this is the main.scss file.

// We are going to create a component for the buttons.  We currently have everything inside of the Counter.js component.  We will do this to have more control over the button elements.

// The idea of a component is that you write once and use it again for a different situation.

// We're basically putting all of the styles within the component, so that you can have more control and everything is scoped to that component itself.

// We have our local state here, in the <Counter>, which is the parent component of the <Button>.  We are able to pass down the clickedAdd() and the clickedMinus() <Counter> methods through the props to the <Button>.  When we do that, we are able to use this new property called trigger, which is pretty much the same as this.clickedMinus, or this.clickedAdd, in the lines trigger={this.clickedMinus} and trigger={this.clickedAdd}, respectively.  When we pass down trigger the <Button>'s onClick handler gets this.props.trigger in the line onClick={this.props.trigger}.  With this onClick method, we are able to technically change the state of the <Button>'s parent <Counter>.  Because we passed down a f() to the child <Button>, that changes the state of the parent <Counter>, we can change the state of the parent <Counter>, even though the child <Button> has its own local state.  This is how we pass down what we call a global state.  Technically you want to pass down that global state to a child component.  If you are using Redux, you have a global state that all of the components are sharing and you can still have a local state.  When you are doing this the way we are, with basically a scoped component, you can just pass down a function that changes the state on the parent, which is the technique that Joe likes to use better.  Joe prefers this because it just organizes things better for him.  Joe likes to have the parent component as the global state for all of the other components that are the children of this parent component.  We learned many things in this lesson, including creating a component that is completely scoped for any type of application.  You can give this component to somebody else and this person can use it on his or her application and it's going to work.  It does not matter what styles they have, it does not matter what they have in their code, this component is going to work for them.

// We are now going to make the counter go from manual to automatic.

// * Now we will cover React component lifecycles because we got the error "Warning: Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."  Even though the JavaScript that we wrote seemed correct, with the if statement that starts with if (this.props.status == "auto") {}, we need the componentDidMount() lifecycle method to fix the issue. 

// * When your component first mounts, it goes through the props and it goes through the state during the initialization.  When we first load up our component, the first thing React goes through is the constructor() and says these are the default status and currentNumber properties, or this is the default state of this component.  If the state is an empty {}, it's empty.  If you put in some kind of number, this is what you are starting with.  React will go through this process of initialization automatically.  After this, React will going through another process called the componentWillMount().  You can use the componentWillMount() and the other mounting methods through your class based components.  Let's say you went through the initialization and React looked at your props and looked at your state.  Then from there, React will say run the componentWillMount().  Now we will run the componentWillMount() above in the line componentWillMount(){console.log("component will mount started");} and learn more processes so that we can fix the error that we're getting.  When we run the componentWillMount(), it will simply output "component will mount started" to the console, but we have not fixed the error, yet.  Then next process, after initialization and componentWillMount(), is render().  We are currently calling the setInterval(), which is inside of the counterRun() on the line this.counterRun(), inside of the render().  The setInterval() is calling for a change in the state, but we are doing this through the render().  The setInterval() is going to continue being called every second, so it's not going to give you time to render the application, and this will give you an error.  The best way to use the setInterval() is to not call it until the component did mount, using the componentDidMount() lifecycle method.  We will place the setInterval() inside of the componentDidMount() lifecycle method, above the render(), in order to fix the error.  We will put the entire if statement with the line if (this.props.status == "auto"){} inside of the componentDidMount() lifecycle method.  After we do this, this error goes away and the setInterval() keeps on getting executed forever with no issues.

// * The reason that the React library is called React is because it's based on the idea that when the state or the props change, the current component, or the current area within the component, is going to be rerendered.  In our <Counter>, React initializes and notices that there is a change in the state, so the <Counter> is rendered again.  Every single time the state changes, React renders a new component.

// * When a prop is received and there is a change in the prop, the area that received the prop will be rerendered.  The lifecycle will go from the componentWillReceiveProps() to the shouldComponentUpdate() to the render() and finally to the componentDidUpdate().  If a prop was received and it actually changed, then the area that received the prop will get rerendered by the render() and the componentDidUpdate() will be called one more time.

// * When the state changes, React will use the componentWillUpdate(), then React will use the render().  If the state does not change, then the component just stays there, without being rendered again, it's a stale component, nothing is happening and the component remains exactly how you left it.  The moment you change the state, like changing currentNumber from 0 to 1, 1 to 2, or 2 to 3, the component is going to be rerendered, the component will be updated one more time.  The lifecycle will go from the shouldComponentUpdate() to the componentWillUpdate() to the render() and finally to the componentDidUpdate().

// * When you are unmounting a component, when you are removing a component from the view, you want to be able to call the componentWillUnmount().  This is for situations where you might have a component that pops up and you want to remove it from the DOM.  Once you remove the component from the DOM, you want to run some type of callback f() where you say once this component is removed from here, do a POST request, or once it is removed, I want you to do an alert box, or do a console.log(), or whatever else you decide.

// * Pretty much all of the lifecycle methods above are different types of methods that you can run in different lifecycles of React components.