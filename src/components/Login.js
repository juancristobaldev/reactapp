import React from "react";

import {FormLoggedin} from './forms/FormLoggedin'
import {InputForm} from './forms/InputForm'
import {Footer} from './Footer'
import { useState } from "react";
import {Button} from './Button'
import "../scss/FormLogin.scss"
import { DoUReady } from "./forms/DoUReady";
import { DivAltForm } from "./DivAltForm";
import { MainPrincipal } from "./MainPrincipal";
import {TittleForm} from "./forms/TittleForm"

function Login(){
    const [stateA,setStateA] = useState(false)
    const formLogin = document.getElementsByClassName("FormLogin")
    const [inputUser,setInputUser] = useState('')
    const [inputPass,setInputPass] = useState('')
    const [inputC,setInputC] = useState('')
    const [inputD,setInputD] = useState('')

    function eventHandler(e,form){
        e.preventDefault()
        setStateA(!stateA)
    }
    function Loggedin(form){
        const formObject = {
            user:inputUser,
            pass:inputPass,
            inputC:inputC,
            inputD:inputD,
        }
        const dataLocalStorage = {
            user: window.localStorage.getItem('user'),
            pass: window.localStorage.getItem('pass'),
            inputC: window.localStorage.getItem('inputC'),
            inputD: window.localStorage.getItem('inputD')
        }
        if(form == "login"){
            if(formObject.user == dataLocalStorage.user && formObject.pass === dataLocalStorage.pass){
                window.localStorage.setItem('Loggedin', true)
                window.location.reload(true)
            }else if(formObject.user !== dataLocalStorage.user){
                alert('Usuario incorrecto')
            }else{
                alert('Contraseña incorrecta')
            }
        }else if(form == "register"){
            if(formObject.inputC !== formObject.pass){
                alert('Las contraseñas no son iguales')
            }else{
                window.localStorage.setItem('user', inputUser)
                window.localStorage.setItem('pass', inputPass)
                window.localStorage.setItem('name', inputD)
                setStateA(!stateA)

            }
        }else if (form == "logout"){
            window.localStorage.setItem('Loggedin', false)
        }
    }
    if(stateA == false){
        return(
            <main className="mainLoggedin">
                <DoUReady first="¿Listo para" second="entrenar?"/>
                <FormLoggedin Anim="FadeIn" className="FormLogin">
                    <TittleForm className="titleForm" title="Inicia sesion"/>
                    <InputForm n="1" setInputUser={setInputUser} ClassDiv="divInput" className="InputUser" label="Usuario:" placeholder="Ingresa tu usuario" name="user" type="text"/>
                    <InputForm n="2" setInputPass={setInputPass} ClassDiv="divPass" className="inputPass" label="Contraseña:" placeholder="Ingresa tu contraseña" name="pass" type="password"/>
                    <Button form="login" Loggedin={Loggedin} className="ButtonLogin" text="Iniciar sesion"/>
                </FormLoggedin>
                <DivAltForm text="¿No tienes cuenta?"  a="Registrate aqui" eventHandler={eventHandler}/>
                <Footer/>
            </main>
        )
    }else{
        return(
            <main className="mainLoggedin">
                <DoUReady first="¿Listo para" second="entrenar?"/>
                <FormLoggedin Anim="Fade" className="FormRegister">
                    <TittleForm className="titleForm" title="Registrate"/>
                    <InputForm n="1" setInputUser={setInputUser} ClassDiv="divFormRegister div1" className="InputUserRegister" label="Usuario:" placeholder="Ingresa tu usuario" name="user" type="text"/>
                    <InputForm n="2" setInputPass={setInputD} ClassDiv="divFormRegister div2" className="InputUserRegister" label="Nombre:" placeholder="Ingresa tu nombre" name="user" type="text" />
                    <InputForm n="3" setInputC={setInputPass} ClassDiv="divFormRegister div3" className="InputUserRegister" label="Contraseña:" placeholder="Ingresa tu contraseña" name="pass" type="password" />
                    <InputForm n="4" setInputD={setInputC} ClassDiv="divFormRegister div4" className="InputUserRegister" label="Repite tu Contraseña:" placeholder="Repite tu contraseña" name="pass-confirm" type="password" />
                    <Button form="register" Loggedin={Loggedin} className="buttonRegister" text="Registrar"/>
                </FormLoggedin>
                <DivAltForm text="¿Ya tienes cuenta?"  a="Inicia sesion aqui" eventHandler={eventHandler}/>
                <Footer/>
            </main>
        )
    }
}

export {Login}