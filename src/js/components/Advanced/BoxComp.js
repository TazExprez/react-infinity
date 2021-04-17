// Now we are doing the React Hooks Effects section.

// Now we are going to learn how to use the Effect Hook in order to create or simulate the componentDidMount(), the componentDidUpdate(), and other things.

// We're now also importing the useEffect property here.
import React, { Component, Fragment, useState, useEffect } from "react";
import update from "immutability-helper";
import PropTypes from "prop-types";

// In this <BoxComp /> functional component, we want to test out when does the component mount, when does it actually show up.  We also want to test when does the component change, when does it update, or when is there a change that makes this component rerender.  To do this inside of this <BoxComp /> functional component, we will start using the Effect Hook.
const BoxComp = () => {
    // Whenever this functional component gets called, or whenever there is a change in this functional component, this useEffect() will trigger whichever function is inside of it.
    // useEffect(() => {
    //     console.log("ComponentDidMount");
    // });
    // If we want to make sure that this useEffect() only gets called when the component did mount, we pass in an empty [] to it.  This is going to make sure that the useEffect() will only trigger the function inside of it when the <BoxComp /> functional component did mount.  We can click the .button <div> as many times as we want, but the function containing the console.log() will only be executed once.
    // useEffect(() => {
    //     console.log("ComponentDidMount");
    // }, []);
    // Here we are making it easier for us to know how this useEffect() works by creating a ComponentDidMount().  This is similar like how we used to do this for class components.  We just have to put the useEffect() inside of the ComponentDidMount().  Then we just have to trigger the ComponentDidMount().
    // This is going to be easier for us to understand.  We have the useEffect() inside of the ComponentDidMount().  We have the console.log() inside of the the useEffect().
    const ComponentDidMount = () => {
        useEffect(() => {
            console.log("ComponentDidMount");

            // Now we want to do a function that deals with the component being unmounted, but we don't need a separate function and will use this ComponentDidMount().  We want to trigger something, or do some type of change, once the component is unmounting, or we want to do some type of cleanup.  To do this, all we have to do inside of this useEffect() is to return a function.  This will get triggered whenever the component gets removed.
            // This will only get triggered when the component is about to be unmounted.
            return () => {
                console.log("ComponentWillUnmount");
            };
        }, []);
    };
    ComponentDidMount();
    // Now we will create another function for ComponentDidUpdate.  We will see a lot of different implementations for how to do this online.  Joe is teaching us how he would do this.  If you look at different blogs and tutorials, everybody basically does this a completely different way.  Joe is teaching us how he would do this, especially for beginners, so that we can remember how this whole thing works.
    // Every time we click on the .button <div> the function inside of the useEffect() will keep on getting triggered.
    const ComponentDidUpdate = () => {
        // Whatever we put inside of this useEffect() will be triggered when the component mounts or when the component updates.
        useEffect(() => {
            console.log("ComponentDidUpdate");
        });
    };
    // Now we are triggering the ComponentDidUpdate().
    ComponentDidUpdate();

    return (
        <div 
            className="box"
            style={{
                width: "100%",
                height: "200px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "blue",
                color: "white",
            }}
        >
            This is a blue box
        </div>
    );
};

export default BoxComp;