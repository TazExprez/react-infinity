import React, { Component } from "react";

const Spend = (props) => {
    return (
        <section id="Spend" className={`${props.sectionOpened === "Spend" ? "active" : ""}`}>
            <div className="container">
                Spend
            </div>
        </section>
    );
};

export default Spend;