import React from "react";
import axios from "axios";
import { useState } from "react";

function FormCreate(props){
    const url = "http://localhost:3001/api/routines/create"
    const [name,setName] = useState('');
    const [status, setStatus] = useState('')
  
    function handle(event){
      setName(event.target.value)
      console.log(name)
    }
    
    const submit = (e) => {
      setStatus('semidone')
      e.preventDefault()
      axios.post(url, {
        name: name
      }).then(() => {
        console.log('success')
      })
      if(status == "done"){
        axios.get("http://localhost:3001/api/exercises/")
      }
    }
    if(!status){
        return(
            <form id='form' method='POST' onSubmit={(e) => submit(e)}>
                <input onChange={(event) => handle(event)} type="text" placeholder='Inserta el nombre de la rutina' name='name'/>
                <input type="submit" value="Enviar datos"></input>
          </form>
        )
    }else if(status == "semidone"){
        return(
            <div>
                <p>Estas creando {name}</p>
            </div>
        )
    }
}

export {FormCreate}