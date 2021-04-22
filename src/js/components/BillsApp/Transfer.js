import React, { Component } from "react";

export default class Transfer extends Component {
    constructor() {
        super();

        this.state={

        };
    }

    render() {
        return (
            <section id="Transfer" className={`${this.props.sectionOpened === "Transfer" ? "active" : ""}`}>
                <div className="container">
                    Transfer
                </div>
            </section>
        );
    }
};