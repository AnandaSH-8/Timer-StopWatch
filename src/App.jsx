import Style from './App.module.css'
import {Timer} from "./Components/timer"
import {StopWatch} from "./Components/stopwatch"
import { useState } from 'react'

function App() {

  const [shift,setShift] = useState("timer")

  return (
    <div className={Style.App}>
      <div className={Style.title}>
        <h1 onClick={()=>{setShift("timer")}}
        style={{borderBottom:shift=="timer"?"5px solid white":""}}>
          Timer</h1> 
        <h1 onClick={()=>{setShift("watch")}}
        style={{borderBottom:shift=="watch"?"5px solid white":""}}> 
        StopWatch</h1>
      </div>
      <div style={{marginTop:-30}}>
        {shift=="timer"?<Timer/>:<StopWatch/> }
      </div>
      
    </div>
  )
}

export default App

/* <div style={{border:"2px solid red"}}>
      
        </div> */