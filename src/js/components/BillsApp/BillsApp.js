// Here we will use the window.localStorage property.

import React, { Component } from "react";
import Header from "./Header";
import AllBills from "./AllBills";
import FloatingMenu from "./FloatingMenu";
import Spend from "./Spend";
import Save from "./Save";
import Transfer from "./Transfer";
import Settings from "./Settings";
import AddBill from "./AddBill";
import update from "immutability-helper";

export default class BillsApp extends Component {
    constructor() {
        super();

        this.state = {
            sectionOpened: "none",
            
            allBills: localStorage.getItem("allBills") != undefined
                ? JSON.parse(localStorage.getItem("allBills")) 
                : [],
        };
    }

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

    saveBill = (bill) => {
        const newBills = update(this.state.allBills, {
            $push: [bill],
        });

        this.setState({
            allBills: newBills,
            sectionOpened: "none",
        },
            () => {
                console.log(this.state);
                localStorage.setItem("allBills", JSON.stringify(this.state.allBills));
            }
        );
    };

    changeBillStatus = billIndex => {
        const allBills = this.state.allBills;

        const bill = allBills[billIndex];

        if (bill.status == "unpaid") {
            bill.status = "paid";
        }
        else {
            bill.status = "unpaid";
        }
 
        const newState = update(this.state, {
            allBills: {$set: allBills},
        });

        this.setState(newState, () => {
            console.log(this.state);
            localStorage.setItem("allBills", JSON.stringify(this.state.allBills));
        });

        console.log(allBills[billIndex]);
    };

    deleteBill = (billIndex) => {
        const allBills = this.state.allBills;

        allBills.splice(billIndex, 1);

        const newState = update(this.state, {
            allBills: {$set: allBills},
        });
        
        this.setState(newState, () => {
            console.log(this.state);

            localStorage.setItem("allBills", JSON.stringify(this.state.allBills));
        });
    };

    render() {
        return (
            <div id="BillsApp">
                <Header />
                <AllBills allBills={this.state.allBills} changeBillStatus={this.changeBillStatus} deleteBill={this.deleteBill} />
                <Spend sectionOpened={this.state.sectionOpened} />
                <Save sectionOpened={this.state.sectionOpened} />
                <Transfer sectionOpened={this.state.sectionOpened} />
                <Settings sectionOpened={this.state.sectionOpened} />
                <AddBill sectionOpened={this.state.sectionOpened} saveBill={this.saveBill} />
                <div className="content-background" />
                <FloatingMenu clickedSectionToOpen={this.clickedSectionToOpen} />
            </div>
        );
    }
};