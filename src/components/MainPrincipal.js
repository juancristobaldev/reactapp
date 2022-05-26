import React from "react";

function MainPrincipal(props){
return(
    <main className={"mainPrincipal " + props.className}>
        {props.children}
    </main>
)
}

export {MainPrincipal}