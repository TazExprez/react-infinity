import React, { Component } from "react";

export default class AddBill extends Component {
    constructor() {
        super();

        this.state = {
            // This is added to the this.state {} by the inputChange() method if we don't write it here.
            // It's good to have your values set by default, like in the line business_name:"",.  If we're going to have a bunch of different <form> names or <input> fields, we want to have the default state of those <form> fields inside of the this.state {}.
            business_name: "",
            // price: 0,
            // Joe changed this to an empty string "" because it's better than having a zero.  This is the case because the user will not have to delete the zero every time the user wants to add a bill.
            price: "",
            // We have to add this because it gave us a bug.  When we added a bill, it was not including the status, while the default bill did have a status.
            status: "unpaid",
        };
    }

    // Whenever we type inside any of the <input> text fields in the <AddBills />, this inputChange() method will get triggered.  Every time that we type anything, this is creating an event in the <input> text field in which we are typing.  Whenever the inputChange() method is triggered, we are able to say event.target, with target being the <input> text field that we are actually using.  With event.target.name we are able to get the name property of that target.  If we are writing inside of the <input> text field with the name property of business_name, we are able to get that property by saying event.target.name.
    // This inputChange() method will be run every time a single character is added or deleted.  Every single change will run this method and change the this.state {}.
    inputChange = () => {
        // Here we are creating a variable called const name and we are setting it to the event.target.name.
        // Whenever the inputChange() method is triggered, we are able to say event.target, with target being the <input> text field that we are actually using.  With event.target.name we are able to get the name property of that target.  If we are writing inside of the <input> text field with the name property of business_name, we are able to get that property by saying event.target.name.
        const name = event.target.name;

        // This is similar to the line const name=event.target.name;.
        const value =
            // This is like a one line if statement, using the ternary operator.  If the event.target.type is equal to the "checkbox", then we want to get the target checked, like shown in the line ? event.target.checked.  This is if you use a checkbox.  If event.target.type is not a checkbox, then we know for sure that it's an <input> text field, so we want to get the value, like shown in the line : event.target.value;.  The value is whatever we write in the <input> text field.
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value;

        // Here we are setting the state and passing in the {[name]:value}.
        this.setState({
            // Here we are going to set the state for whatever the name of the <input> text field that we are using is.  The <input> text field's name property is where we get the name from.  So if we're typing inside of the <input> text field with the name business_name, the [name] property will be called business_name.  This is the same thing as putting business_name:"" in the <AddBill />'s this.state {} with an empty string at first.
            // Here we will be setting up the this.state {} property business_name and set it to whatever value we are typing inside of the <input> text field with the name property of business_name.
            [name]: value,
        },
            // () => {
            //     // We are doing this just to see the this.state {}.
            //     console.log(this.state);
            // }
        );
    };

    // Whenever you submit the <form>, this is the method that is going to get triggered.
    // Now we are handling the <form>.  Now we need to take the <form> and all of its content and actually put it in the <BillsApp />'s this.state.allBills [] property.  We want to have a bunch of {}s in the allBills [], each of which represents a single bill.  To do this, we will use the immutability-helper library.
    // 7. * Here we handle the submit on the form when the save <button> is clicked.
    handleSubmit = () => {
        // This will prevent the default behavior from happening when we click on the submit <button>.  I noticed that this will prevent the page from being refreshed after you press the submit <button>.
        // 8. * The default behavior, which will refresh the whole page, will be prevented.
        event.preventDefault();
        // This is how Joe reset the <form> <input> text fields after a new bill is added.
        // this.setState({
        //     business_name: "",
        //     price: 0,
        // });
        // When we handle the submit <button>, once we submit this <form>, we want to use this.props.saveBill(this.state);.  We are going to pass in the this.state {} as an argument.  This is the state of the <AddBill /> and it's the this.state {}.  This is holding the properties of business_name and price.  Whatever is inside of the <input> text fields is what is going to be inside of the this.state {}.
        // 9. * Once the default behavior has been prevented, we want the this.props.saveBill() method to be executed.  We will pass in the <AddBill />'s this.state {} as an argument.  This argument will be sent back to the <BillsApp />.
        this.props.saveBill(this.state);
        // This will console.log() the state when we click the submit <button>.
        console.log(this.state);

        // This is how we reset the <form> <input> text fields after we add the new bill.  This is how I did it.
        this.setState({
            business_name: "",
            // price: 0,
            price: "",
            // We don't really have to put a status in here and can leave it alone.
            // status: "unpaid",
        });
    };

    render() {
        return (
            // When the #AddBill <section> has the .active, the <section> will be displayed.  When this <section> doesn't have the .active, the <section> will be hidden.
            // <section id="AddBill" className="active">
            // We are going to check if the this.props.addBillOpen property is true or not.  If it is, we are going to add the .active, if not, we are going to add an empty string, "".
            <section id="AddBill" className={`${this.props.addBillOpen == true ? "active" : ""}`}>
                <div className="container">
                    <h2>Add Bill</h2>
                    {/* When this <form> gets submitted, trigger the this.handleSubmit() method. */}
                    <form onSubmit={this.handleSubmit}>
                        {/* This is something that you see a lot on Bootstrap. They use .form-group's and it's actually pretty good.  This helps you control your forms a little bit better. */}
                        <div className="form-group">
                            {/* We have to use htmlFor, instead of for, because we are using JSX here. */}
                            <label htmlFor="business_name">Business Name</label>
                            {/* Every time that we do a change to this <input>, the inputChange() method will be run. */}
                            {/* We want to set the value property of the <input> to be set to the this.state.business_name property. */}
                            <input type="text" id="business_name" name="business_name" onChange={this.inputChange} value={this.state.business_name} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input type="text" id="price" name="price" onChange={this.inputChange} value={this.state.price} />
                        </div>
                        {/* Now we will focus on this <button>.  If we come here and actually try to submit what gets typed inside of the #business_name and the #price <input>s, we are going to be doing a POST request.  We don't want that to happen because we are not submitting to any back end.  We are not doing anything.  This is not supposed to be anything that gets submitted.  So for now, we are actually going to create a method. */}
                        <button type="submit">Save</button>
                    </form>

                </div>
            </section>
        );
    }
}