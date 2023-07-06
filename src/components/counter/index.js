import React from "react";
import './chronometer.css'
//import { TimeSetter } from "./functions";
import { storage } from "./localStorage";

let data = storage();
let cnt;

function init(){
    let n1=0,n2=0;
    n1++;
    if(n1 > 59){
        n1 = 0;
        n2++;
    }
    return `${n2}:${n1}`;
}

function Counter(){
    const [count, setCount] = React.useState(data);
    return(
        <>  
            <h3 className="chronometer">
                { count }
            </h3>

            <button className="btn init"
                onClick={ () => {
                    cnt = init();
                    console.log( typeof cnt);
                    setCount(cnt);
                }}
            > INIT </button>
            <button className="btn stop"> STOP </button>
            <button className="btn pause"> PAUSE </button>
        </>
    );
}
export { Counter };