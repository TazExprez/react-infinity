import React, { Component } from "react";
import Header from "./Header";
import AllBills from "./AllBills";
import FloatingMenu from "./FloatingMenu";
import Spend from "./Spend";
import Save from "./Save";
import Transfer from "./Transfer";
import Settings from "./Settings";
import AddBill from "./AddBill";
// We will be using the immutability-helper library in this project.
import update from "immutability-helper";

export default class BillsApp extends Component {
    constructor() {
        super();

        // The global state is where you keep track of everything within your application.  This is also the local state for this component.  Every single class component has the this.state {}, which is the local state for that component.
        // The <BillsApp /> is the host of all of the other components.  It has the <Header />, the <AllBills />, the <AddBill />, and the <FloatingMenu />.  Through this <BillsApp />, we are hosting all of the other components.
        // We can use the <BillsApp /> as a global state component and use its this.state {} as the global state.  For larger applications, it's easier to use a library like Redux to manage your state.  When you have a small application, like this one, you don't even need Redux.  You can use the parent component of all of the other components and just use that component's this.state {} as the place to host the global state of the application.
        // Anything that has to do with some type of change or some type of state, that all of the child components need to know about, is going to be hosted inside of this parent <BillsApp />.
        this.state = {
            // addBillOpen: false,
            sectionOpened: "none",
            // This property is going to be an [] of {}s.  We are going to host all of the bills here and add them to this [].  We will be displaying all of the bills that are in this [] later on.
            // allBills: [],
            // We are temporarily putting a bill inside of the allBills [] by default so that we don't have to create a bill while we are testing this application.
            allBills: [
                {
                    business_name: "GEICO",
                    price: 50,
                    // Now we are adding the status property to bills to track whether a bill is paid or not.
                    status: "unpaid",
                }
            ],
            // allBills: JSON.parse(localStorage.getItem("allBills")),
        };
    }

    // Since we want to change the this.state {} here, in the <BillsApp />, we are going to host the onClick() event that changes the this.state {} here, too.
    // clickedAddBillBtn = () => {
    //     this.setState({
    //         // Here we are setting addBillOpen to be the opposite of whatever the this.state.addBillOpen is.  When you are working with booleans, the !, or not symbol, will make something that is false into true and vice versa.
    //         addBillOpen: !this.state.addBillOpen,
    //     });
    // };

    clickedSectionToOpen = (section) => {
        if (this.state.sectionOpened === "none" || this.state.sectionOpened !== section) {
            this.setState({
                sectionOpened: section,
            });
        }
        else {
            this.setState({
                sectionOpened: "none",
            });
        }   
    };

    // Since we have the this.state.addBillOpen and the this.state.allBills here, in the <BillsApp />, and we have our <form> in the <AddBill />, we have to create this saveBill() method here.  Then we have to pass this saveBill() method down as props to the <AddBill />.  Then we have to pass the this.state {} of the <AddBill /> to this saveBill() method that got passed down to the <AddBill /> as props.  Finally, we have to come back to the <BillsApp /> and add the result of this saveBill() method to the this.state.allBills [].
    // This is where we are going to handle pushing that new bill inside of the this.state.allBills [].
    // 1. * We have the saveBill() method.  The saveBill() method takes in an argument called bill.
    // 10. * The bill will be the <AddBill />'s this.state {} that will be passed into the this.props.saveBill() method used in that component.
    saveBill = (bill) => {
        // The first argument is the original this.state.allBills [] that was there.  The second argument looks like an {}, but it's a target, {}.
        // 2. * Inside of the saveBill() method, we have a const variable named newBills.  This newBills const variable is set to the update(), which takes in the arguments this.state.allBills and {$push:[bill]}.  The this.state.allBills [] is an empty [] at first.  We are going to update the this.state.allBills [].  This will return back an [] to us.
        // 11. * The bill will be pushed to the [] that will update the state in the this.setState().
        // Whenever we save a bill, we come in and we push in the new bill to the allBills [].  We also want to be able to close the <form>.
        const newBills = update(this.state.allBills, {
            // We are putting the $push operator in here.  The $push operator is going to push the actual bill.  This bill is going to come from the actual <form> in the <AddBill />.
            // Joe had an error because he forgot to put the bill inside of an [].  You have to do this with the immutability-helper library when pushing to an [].
            // 3. * We are also passing in a target {} object with information saying that this is going to be a push to the this.state.allBills [].  We are saying, hey this is an array, we are pushing this bill inside of the this.state.allBills [].
            $push: [bill],
        });

        // 12. * Here we are setting the this.state.allBills [] to the newBills [].
        this.setState({
            // 4. * The newBills [] is the one returned by the update() above.  This new newBills [] will be set to the allBills [].
            allBills: newBills,
            // Whenever we click the save <button>, we want the <form> that adds the bills to close.
            // addBillOpen: !this.state.addBillOpen,
            sectionOpened: "none",
        },
            () => {
                // Here we are checking the state.
                // 5. * This is going to console.log() the state after it has been updated.  This is just for debugging purposes.
                // 13. * We finally console.log() the new state.
                console.log(this.state);
                // localStorage.setItem("allBills", JSON.stringify(newBills));
            }
        );
    };

    // This method is going to change the status of a bill to "paid".
    // The billIndex will contain the current position of the bill within the [].  This is how we are going to know which bill we need to change.
    changeBillStatus = billIndex => {
        const allBills = this.state.allBills;

        const bill = allBills[billIndex];

        // If the bill is unpaid and we click on the check, it will change to paid and vice versa.  The next thing we will do is change the state.
        if (bill.status == "unpaid") {
            bill.status = "paid";
        }
        else {
            bill.status = "unpaid";
        }

        // We will use this to change the state.  Since we are changing a property within the this.state {}, and it's within the first level of it, all we have to do is pass in the allBills property.  We are going to set this allBills property to the allBills const variable that we have in this changeBillStatus() method.  We have to use {$set} because we are using the update() from the immutability-helper library. 
        const newState = update(this.state, {
            allBills: {$set: allBills},
        });

        // Now we are actually going to set the state.  We are passing in the newState {} and a console.log to display the change.  We want to see what happened when we applied the change, so we will console.log() this.
        this.setState(newState, () => {
            console.log(this.state);
        });

        // console.log(billIndex);

        console.log(allBills[billIndex]);
    };

    // This deleteBill() method is going to delete a bill.
    deleteBill = (billIndex) => {
        const allBills = this.state.allBills;

        // The splice() method is used here to remove the element, or bill, at the current index, billIndex.  We are going to remove one element starting at the billIndex, so we will just remove the element at the billIndex.
        allBills.splice(billIndex, 1);

        // We will use the newState {} to set the state.  Here we are setting the this.state.allBills to the allBills const variable in this deleteBill() method. 
        const newState = update(this.state, {
            allBills: {$set: allBills},
        });
        
        // This will set the state.
        this.setState(newState, () => {
            console.log(this.state);
            // localStorage.setItem("allBills", JSON.stringify(newState));
        });

        // This will console.log() the index of the bill whose delete button is clicked.
        // console.log(billIndex);
    };

    render() {
        return (
            <div id="BillsApp">
                <Header />
                {/* Here we are passing the this.state.allBills [] to the <AllBills /> via the allBills property. */}
                {/* Here we are also passing the this.changeBillStatus() method to the <AllBills /> via the changeBillStatus property. */}
                {/* Here we are also passing the this.deleteBill() method to the <AllBills /> via the deleteBill property. */}
                <AllBills allBills={this.state.allBills} changeBillStatus={this.changeBillStatus} deleteBill={this.deleteBill} />
                <Spend sectionOpened={this.state.sectionOpened} />
                <Save sectionOpened={this.state.sectionOpened} />
                <Transfer sectionOpened={this.state.sectionOpened} />
                <Settings sectionOpened={this.state.sectionOpened} />
                {/* Here we are passing down the this.state.addBillOpen as the addBillOpen property to the <AddBill />.  We are passing down a false value, at first, because the this.state.addBillOpen is originally set to false. */}
                {/* Here we are passing down the state and the saveBill() method to the <AddBill />. */}
                {/* 6. * Here we are passing the saveBill() method as a property. */}
                {/* <AddBill addBillOpen={this.state.addBillOpen} saveBill={this.saveBill} /> */}
                <AddBill sectionOpened={this.state.sectionOpened} saveBill={this.saveBill} />
                <div className="content-background" />
                {/* We are passing down the clickedAddBillBtn() method to the <FloatingMenu />. */}
                {/* <FloatingMenu clickedAddBillBtn={this.clickedAddBillBtn} /> */}
                <FloatingMenu clickedSectionToOpen={this.clickedSectionToOpen} />
            </div>
        );
    }
};

// If you want to go the extra mile, use local storage to simulate a back end.  You can also create your own router by creating a switch statement that changes the whole view.  Instead of showing all of the bills, you can create a switch statement that shows different components.  You can make this application so that if you click on any of the buttons in the bottom, you are able to change the view through there.  You can can views for the Spend, Save, Transfer, and Settings buttons.