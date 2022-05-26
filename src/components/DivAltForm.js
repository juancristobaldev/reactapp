import React from "react";

function DivAltForm(props){
    return(
        <div className="divAltForm">
        <p>{props.text}</p>
        <a href="" onClick={(e)=>{props.eventHandler(e)}}>{props.a}</a>
        </div>
    )
}

export {DivAltForm}