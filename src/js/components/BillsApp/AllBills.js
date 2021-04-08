import React, { Component } from "react";

export default class AllBills extends Component {
    constructor() {
        super();

        this.state = {
        };
    }

    // This method is going to output a bunch of bills.
    showAllBills = () => {
        // This is an [] of bills.
        // We had to change the [] elements because there were repeats, so the keys were being repeated and giving us errors because you should use unique keys.
        // const bills = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        // In order to display the correct amount of bills, we will pass down to this <AllBills /> all of the bills that we are adding from the global state in the <BillsApp />.
        // The this.props.allBills [] is coming from the local state of the <BillsApp />, which is the global state for the entire application.
        const bills = this.props.allBills;

        // Joe got the error "Uncaught TypeError: Cannot read property 'map' of undefined", so he is going to do an if statement.  Joe thinks that we may be passing down an empty [] because this.state.allBills is an empty [] at first.  If the bills [] length is greater than 0, then run this.  I did not get that error.  The error was that Joe put a capital A in the line const bills=this.props.allBills;.  Joe had written this.props.AllBills;.  So this if statement seems to be unnecessary.
        if (bills.length > 0) {
            // We had to change this because we were getting an error that we were using duplicate keys.
            // return bills.map(bill => {
            // We fixed the duplicate keys error by adding an index argument.  Now every key will be unique since it will be an index.
            return bills.map((bill, index) => {
                return (
                    // <li className="bill" key={bill}>
                    // Now we are using an index for the key, instead of the bill.
                    // <li className="bill active" key={index}>
                    // Here we are using a ternary operator to return "active" for the className if the bill is paid, and an empty string "" if the bill is not paid.  We are also using a template string and a placeholder.
                    <li className={`bill ${bill.status == "paid" ? "active" : ""}`} key={index}>
                        <div className="company">
                            <div className="logo">
                                <img src="/img/billsApp/businessBuildingIcon.jpeg" />
                            </div>
                            {/* <div className="title">
                                netflix
                            </div> */}
                            <div className="title">
                                {/* Now we are using the correct name. */}
                                {bill.business_name}
                            </div>
                        </div>
                        {/* <div className="price">
                            -$9.99
                        </div> */}
                        <div className="price">
                            {/* Now we are using the correct price. */}
                            -${bill.price}
                        </div>
                        <div className="buttons">
                            {/* This is going to update the status of a bill to paid. */}
                            {/* <div className="paid"> */}
                            {/* Here we added an onClick event handler.  We are passing the index to the method inside of it.  We passed in index as an argument so that each bill's paid button gets an onClick event handler.  With the index, we will know the current position in the [] of the bill that we are selecting. */}
                            <div className="paid" onClick={() => this.props.changeBillStatus(index)}>
                            {/* Joe's way. */}
                            {/* <div className="paid" onClick={this.props.changeBillStatus.bind(null, index)}> */}
                                <i className="fas fa-check"></i>
                            </div>
                            {/* This is going to delete a bill. */}
                            {/* <div className="delete"> */}
                            {/* Here we added an onClick event handler that will delete the selected bill. */}
                            <div className="delete" onClick={() => this.props.deleteBill(index)}>
                            {/* Joe's way. */}
                            {/* <div className="delete" onClick={this.props.deleteBill.bind(null, index)}> */}
                                <i className="far fa-trash-alt"></i>
                            </div>
                        </div>
                    </li>
                )
            });
        }
        // If the bills [] length is less than 0, then run this.  We had to remove the key={bill} because we were getting the error "Uncaught ReferenceError: bill is not defined".
        else {
            return (
                <li className="bill" /* key={bill} */>
                    <div className="no-bill">
                        No bill!  Please add a bill!
                    </div>
                </li>
            );
        }

        // This is going to go over every single bill that we have in the bills [].  Every number in the bills [] is equivalent to a bill.
        // return bills.map(bill => {
        //     return (
        //         <li className="bill" key={bill}>
        //             <div className="company">
        //                 <div className="logo">
        //                     <img src="/img/billsApp/netflixLogo.webp" />
        //                 </div>
        //                 <div className="title">
        //                     netflix
        //                 </div>
        //             </div>
        //             <div className="price">
        //                 -$9.99
        //             </div>
        //         </li>
        //     )
        // });
    };

    // My solution to get the total amount for the bills.
    // getTotal = () => {
    //     const bills = this.props.allBills;

    //     return bills.reduce((total, bill) => {
    //         return total + parseInt(bill.price);
    //     }, 0 )
    // };

    // Joe's way to get the total for all of the bills.
    billsTotalAmount = () => {
        const bills = this.props.allBills;

        // This caused an error because we were trying to assign something to a const variable after it had already been asigned something.
        // const total = 0;
        // This fixed the error.
        let total = 0;

        for (var i = 0; i < bills.length; i++) {
            // Everything inside of the bills [] is going to be an {}.  Inside of each {} is going to be a property called price.  We are looping over every single {}'s price property.  In the end we are going to get the total.
            // total += bills[i].price;
            // We had to do this because the bill[i].price was a string.  The parseInt() will turn the string into an integer.
            total += parseInt(bills[i].price);
        }

        if (bills.length > 0) {
            return total;
        }
        else {
            return 0;
        }
    };

    render() {
        return (
            <section id="AllBills">
                <div className="container">
                    <div className="total-bills">
                        <div className="text">Total Amount: </div>
                        {/* <div className="number">$874</div> */}
                        {/* Now we are going to use the real total.  This is the way that I did it. */}
                        {/* <div className="number">${this.getTotal()}</div> */}
                        {/* This is Joe's way of getting the real total. */}
                        <div className="number">${this.billsTotalAmount()}</div>
                    </div>
                    {/* We are going to create a section for all of the bills.  You can have this as a <section> or a <ul>, it doesn't really matter.  Joe normally likes to have the top level element as a <section>. */}
                    <ul className="bills-list">
                        {/* Joe likes to name everything so that he can know what is going on even if he comes back to this years later. */}
                        {/* <li className="bill">
                            <div className="company">
                                <div className="logo">
                                    <img src="/img/billsApp/netflixLogo.webp" />
                                </div>
                                <div className="title">
                                    netflix
                                </div>
                            </div>
                            <div className="price">
                                -$9.99
                            </div>
                        </li>
                        <li className="bill">
                            <div className="company">
                                <div className="logo">
                                    <img src="/img/billsApp/netflixLogo.webp" />
                                </div>
                                <div className="title">
                                    netflix
                                </div>
                            </div>
                            <div className="price">
                                -$9.99
                            </div>
                        </li> */}
                        {this.showAllBills()}
                    </ul>
                </div>
            </section>
        );
    }
}