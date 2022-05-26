import React from "react";
import axios from "axios";
import { useState } from "react";


function AddSomething(props){
    return(
        <div className={"divAddSomething "+props.classSecond}>
            <h4>{props.text}</h4>
            <button onClick={(e) => {
                props.setStateMain(props.button)
            }}>Nuevo</button>
        </div>
    )
}

export {AddSomething}
