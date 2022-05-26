import React from "react";
import { useState } from "react";


import '../css/Buttons.css'
function Button({ state,setStateButton,text,Class,classSecond,Loggedin, form }){


    return(
        <div className="divButton">
            <button onClick={(e)=>{
                e.preventDefault()
                if(Loggedin) Loggedin(form)
                else if(form == "logout"){
                    window.localStorage.setItem('Loggedin',false)
                    window.location.reload(true)
                }
            }} className={Class+" "+classSecond}>{text}</button>
        </div>
    )
}

export {Button}