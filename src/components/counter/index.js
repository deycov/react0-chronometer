import React from "react";
import './chronometer.css'

function Counter(){
    return(
        <>  
            <h3 className="chronometer">
                00:00 
            </h3>

            <button className="btn init"> INIT </button>
            <button className="btn stop"> STOP </button>
            <button className="btn pause"> PAUSE </button>
        </>
    );
}
export { Counter };