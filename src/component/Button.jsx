import React, { useState } from "react";
import "./button.css"
const Counter = () => { 
    const [count, setCount] = useState(0);

    return (
        <>
            <button className="increase"  onClick={() => {setCount((prev) => prev + 1)} }> + </button>
            <button className="reset"> {count} </button>
            <button  className="decrease" onClick={() => { setCount((prev) => prev - 1)} }> - </button> 
       
        </>
    );
};

export default Counter;

