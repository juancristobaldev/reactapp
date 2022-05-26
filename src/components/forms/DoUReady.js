import React from "react";

function DoUReady({first,second}){
    return(
        <div className="doUReady">
            <div className="divH1">
                <h1>{first}<br/>{second}</h1>
            </div>
        </div>
    )
}
export {DoUReady}