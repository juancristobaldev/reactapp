import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Header } from './components/Header';
import { RoutinesList } from './components/AddSomething';
import { Button } from './components/Button';
import { Footer } from './components/Footer';
import { Login } from './components/Login';


const Loggedin = window.localStorage.getItem('Loggedin')
console.log(Loggedin)
const root = ReactDOM.createRoot(document.getElementById('root'));

if(Loggedin == "true"){
  root.render(
    <React.StrictMode>
      <App>
      </App>
    </React.StrictMode>
  );
}else if(Loggedin == "false"){
  root.render(
    <React.StrictMode>
      <Login Loggedin = {Loggedin}/>
    </React.StrictMode>
  )
}
