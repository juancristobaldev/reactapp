import React from "react";

function InputForm(props){
    
    function eventHandler(e){
        if (props.n == 1) props.setInputUser(e.target.value)
        else if (props.n == 2) props.setInputPass(e.target.value)
        else if (props.n == 3) props.setInputC(e.target.value)
        else props.setInputD(e.target.value)

        console.log(e.target.value)
    }

    return(
        <div className={props.ClassDiv}>
            <label for={props.name}>
                {props.label}
            </label>
            <input onChange={(e)=> eventHandler(e)} autocomplete="off" type={props.type} name={props.name} placeholder={props.placeholder}/>
        </div>
    )
}

export {InputForm}