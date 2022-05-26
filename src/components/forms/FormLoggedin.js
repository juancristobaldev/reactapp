import React from "react";

function FormLoggedin(props){
    return(
        <form className={props.className +" "+ props.Anim}>
            {props.children}
        </form>
    )
}

export {FormLoggedin}