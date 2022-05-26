import React from "react";

function TittleForm(props){
    if(props.type == undefined){
        return(
            <div className={props.className}>
                <p>{props.title} por favor.</p>
            </div>
        )    
    }else if(props.type == "create"){
        return(
            <div className={props.className}>
                <h3>{props.title}</h3>
                <button onClick={
                    (e) => props.setStateMain('main')
                } className="button-transparent-offline-color-black">
                <span class="material-symbols-outlined">
                    arrow_back_ios
                </span>
                </button>
            </div>
        )    
    }
}

export {TittleForm}