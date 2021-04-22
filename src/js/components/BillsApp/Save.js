import React, { Component } from "react";

const Save = (props) => {
    return (
        <section id="Save" className={`${props.sectionOpened === "Save" ? "active" : ""}`}>
            <div className="container">
                Save
            </div>
        </section>
    );
};

export default Save;