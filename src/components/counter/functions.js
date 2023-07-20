import { useState } from "react";
import { storage } from "./localStorage";

function timeSetter({time}){
    let newTime = Number(time.replace(":",""));
    newTime++;
    return newTime;
}

export { timeSetter };