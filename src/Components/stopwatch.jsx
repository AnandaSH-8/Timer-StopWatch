import { Component } from "react";
import Style from "./watch.module.css"

export class StopWatch extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            hours:0,
            minutes:0,
            seconds:0,
            millisecs:0,
            start:false
        }
    }

    startWatch()
    {
       this.watch = setInterval(()=>{
            this.setState({
                ...this.state,
                millisecs:this.state.millisecs+1,
                start:true
            })
       },10)
    
    }

    stopWatch()
    {
        clearInterval(this.watch)
        this.setState({
            ...this.state,
            start:false
        })
    }

    resetWatch()
    {
        clearInterval(this.watch)
        this.setState({
            ...this.state,
            minutes:0,
            seconds:0,
            millisecs:0,
            start:false
        })
    }

    render()
    {
        let {hours,minutes,seconds,start,millisecs} = this.state
        if(millisecs > 99)
        {
            this.setState({
                ...this.state,
                seconds:this.state.seconds+1,
                millisecs:0
            })
        }
        if(seconds > 59)
        {
            this.setState({
                ...this.state,
                minutes:this.state.minutes+1,
                seconds:0
            })
        }
        if(minutes > 59)
        {
            this.setState({
                ...this.state,
                hours:this.state.hours+1,
                minutes:0,
            })
        }
        

        return <div className={Style.Timer}>
            <div className={Style.watchBox}>
                <h1>{hours > 9?hours:hours="0"+hours}<kbd>h</kbd></h1>
                <h1>:</h1>
                <h1>{minutes> 9?minutes:minutes="0"+minutes}<kbd>m</kbd></h1>
                <h1>:</h1>
                <h1>{seconds> 9?seconds:seconds="0"+seconds}<kbd>s</kbd></h1>
                <h1>:</h1>
                <h1>{millisecs> 9?millisecs:millisecs="0"+millisecs}<kbd>ms</kbd></h1>
            </div>
            <div>
                <button style={{background:start?"red":"green"}} className={Style.Buttons}  disabled={start} 
                onClick={()=>{this.startWatch()}}>Start</button>
                <button style={{background:start?"green":"red"}}  className={Style.Buttons} disabled={!start}
                onClick={()=>{this.stopWatch()}}>Stop</button>
                <button style={{background:"orange"}} className={Style.Buttons} 
                onClick={()=>{this.resetWatch()}}>Reset</button>
            </div>
        </div>
    }
}