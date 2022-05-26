import React from "react";

function List(props){
    return(
        <div className={"List "+ props.className}>
            {props.children}
        </div>
    )
}

export {List}