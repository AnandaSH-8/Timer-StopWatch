import Style from './App.module.css'
import {Timer} from "./Components/timer"
import {StopWatch} from "./Components/stopwatch"
import { useState } from 'react'
import {GiSandsOfTime} from "react-icons/gi"
import {ImStopwatch} from "react-icons/im"

function App() {

  const [shift,setShift] = useState("timer")

  return (
    <div className={Style.App}>
      <div className={Style.title}>
        <h2 onClick={()=>{setShift("timer")}}
        style={{borderBottom:shift=="timer"?"3px solid white":""}}>
         <GiSandsOfTime className={Style.timer}></GiSandsOfTime> Timer</h2> 
        <h2 onClick={()=>{setShift("watch")}}
        style={{borderBottom:shift=="watch"?"3px solid white":""}}> 
        <ImStopwatch className={Style.stopWatch}></ImStopwatch>StopWatch</h2>
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