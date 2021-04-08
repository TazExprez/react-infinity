import React, { Component } from "react";

export default class FloatingMenu extends Component {
    constructor() {
        super();

        this.state = {
        };
    }

    render() {
        return (
            // Joe had an error because he used the <Nav>, instead of the <nav>.
            <nav id="FloatingMenu">
                {/* Now we are going to create several menu options. */}
                {/* This is not a link, but we will give it the .link anyway. */}
                <div className="link">
                    <div className="icon">
                        <i className="far fa-credit-card"></i>
                    </div>
                    <div className="text">Spend</div>
                </div>
                <div className="link">
                    <div className="icon">
                    <i className="fas fa-piggy-bank"></i>
                    </div>
                    <div className="text">Save</div>
                </div>
                <div className="link">
                    <div className="icon">
                        <i className="fas fa-exchange-alt"></i>
                    </div>
                    <div className="text">Transfer</div>
                </div>
                <div className="link">
                    <div className="icon">
                        <i className="fas fa-cogs"></i>
                    </div>
                    <div className="text">Settings</div>
                </div>
                <div className="link">
                    {/* We have to say this.props.clickedAddBillBtn because the clickedAddBillBtn() method is a property that gets passed down from the parent <BillsApp /> to the child <FloatingMenu />. */}
                    <div className="add-button" onClick={this.props.clickedAddBillBtn}>
                        <div className="icon">
                            <i className="fas fa-plus"></i>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
};