import React, { Component } from "react";

export default class Settings extends Component {
    constructor() {
        super();

        this.state = {

        };
    }

    render() {
        return (
            <section id="Settings" className={`${this.props.sectionOpened === "Settings" ? "active" : ""}`}>
                <div className="container">
                    Settings
                </div>
            </section>
        );
    }
};