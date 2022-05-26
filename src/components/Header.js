import React from "react";

function Header(props){
    return(
        <header className="Header">
            {props.children}
        </header>
    )
}

export {Header}