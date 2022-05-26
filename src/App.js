import { Header } from './components/Header';
import { AddSomething } from './components/AddSomething';
import { Button } from './components/Button';
import { Footer } from './components/Footer';
import { useState } from 'react';
import { MainPrincipal } from './components/MainPrincipal';
import { Dash } from './components/Dash';
import { List } from './components/List';

import './scss/styles.scss';
import './css/Fonts.css';
import './scss/styles.scss'
import "./scss/MainPrincipal.scss"
import { TittleForm } from './components/forms/TittleForm';

function App(props) {
  const [mainState,setStateMain] = useState("main")
  const [buttonState,setStateButton] = useState(false)

  const Routines = [
    { 
      name:"Pull ups Altas",

      nExercises:4,
      time: "47:35min",
      endTimes: 4
    },
    { 
      name:"Pull ups Altas",
      nExercises:4,
      time: "47:35min",
      endTimes: 4
    }
  ]
  const Exercises =[
    "Pull ups","Australian","Dips","Muscle ups"
  ]
  const ExercisesSelect = [
    "Pull ups"
  ]
    if(mainState == "main"){
      return (
        <MainPrincipal>
          <Header>
            <h1>¡Hola <br></br>{window.localStorage.getItem('name')}!</h1>
          </Header>
          <Dash>
            <AddSomething text="Tus rutinas" mainState={mainState} setStateMain={setStateMain} button="routine"/>
            <List>
              {
                Routines.map((item) => 
                <div className='routineItem'>
                  <p><strong>{item.name}</strong></p>
                  <p>{item.nExercises} single exercises</p>
                  <p>{item.time}</p>
                  <p>{item.endTimes}</p>
                  <button>GO</button>
                </div>
                )
              }
            </List>
            <AddSomething classSecond="exercises" text="Tus ejercicios" button="exercise" mainState={mainState} setStateMain={setStateMain}/>
            <List className="exercises">
              {
                Exercises.map((item) =>
                <div className='exerciseItem'>
                  <h5>{item}</h5>
                </div>
                )
              }
            </List>
          </Dash>
          <Footer classSecond="Dash"/>
          <Button classSecond="outColor" form="logout" text={"Logout"} setStateButton={setStateButton}/>
        </MainPrincipal>
      )
    }else if(mainState == "exercise"){
      return(
        <MainPrincipal>
          <TittleForm setStateMain={setStateMain} className="title-display-flex-justify-between-align-center-padding-left-right" title="Crea tu ejercicio" type="create"/>
          <List>
          </List>
        </MainPrincipal>
      )
    }else if(mainState == "routine"){
      let ExercisesSelect = [
        {
          name:"pull ups",
          series:4,
          return:[]
        },
        {
          name:"pull ups altas",
          series:4,
          return:[]
        }
      ]


      return(
        <MainPrincipal  className="mainCreateRoutine">
          <TittleForm setStateMain={setStateMain} className="title-display-flex-justify-between-align-center-padding-left-right" title="Crea tu rutina" type="create"/>
          <List>
          {

          }
          </List>
        </MainPrincipal>
      )
    }
  }

export default App;
