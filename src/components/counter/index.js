import React from "react";
import './chronometer.css'
import { timeSetter } from "./functions";
const timeInit = "00:00";

function Counter(){
    const [count, setCount] = React.useState(timeInit);
    
    const handleTime = (e) => {
        e.preventDefault();
        console.log(count);
        let newTime = timeSetter(count);
        setCount(newTime);
    }

    return(
        <>  
            <h3 className="chronometer">
                { count }
            </h3>

            <button className="btn init"
                onClick={(e) => {handleTime(e)}}
            > 
                INIT 
            </button>

            <button className="btn stop"> STOP </button>
            <button className="btn pause"> PAUSE </button>
        </>
    );
}
export { Counter };