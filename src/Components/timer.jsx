import { Component } from "react";
import Style from "./timer.module.css"

export class Timer extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            hours:0,
            minutes:1,
            seconds:10,
            start:false,
            input:false,
        }
    }

    startTimer()
    {
        this.timer = setInterval(()=>{
            this.setState({
                ...this.state,
                hours: this.state.hours > 0 && this.state.minutes == 0 && this.state.seconds == 0?
                                this.state.hours-1:this.state.hours==0 ? 0:this.state.hours,
                minutes:this.state.minutes > 0 && this.state.seconds == 0 ? this.state.minutes-1:
                            this.state.minutes==0 && this.state.hours > 0 ? 59:
                            this.state.minutes==0 && this.state.hours == 0?0:this.state.minutes,
                seconds:this.state.seconds == 0 && this.state.minutes > 0? 59:
                        this.state.seconds == 0 && this.state.hours > 0 ? 59 : 
                        this.state.seconds == 0 ? this.state.seconds : this.state.seconds-1,
                start:true
            })
        
        },1000)
    
    }

    stopTimer()
    {
        clearInterval(this.timer)
        this.setState({
            ...this.state,
            start:false
        })
    }

    resetTimer(res)
    {
            clearInterval(this.timer)
            if(res){
                this.setState({
                    ...this.state,
                    minutes:0,
                    seconds:0,
                    start:false
                })
            }
            else{
                this.setState({
                    ...this.state,
                    minutes:1,
                    seconds:10,
                    start:false
                })
            }
        }

    componentDidUpdate()
    {   
        let {hours,minutes,seconds,start,input} = this.state
        if(hours == 0 && minutes == 0 && seconds == 0 && start == true)
        {
            this.componentWillUnmount()
        }

    }

    componentWillUnmount()
    {
        this.resetTimer('ends')
    }

    render()
    {
        let {hours,minutes,seconds,start,input} = this.state

        if(seconds == 0 && start == true)
        {
            this.setState({
                ...this.state,
                hours:this.minutes == 0 && this.state.hours > 0?this.state.hours - 1:0,
                minutes:this.state.minutes > 0?this.state.minutes-1:0,
                seconds:this.state.minutes > 0 || this.state.hours > 0? 59 : 0
            })
        }
        
        return <div className={Style.Timer}>
                {input?
                    <div className={Style.watchBox} onMouseLeave={()=>{
                        this.setState({...this.state,input:false})}}>
                            <input type="text" placeholder={hours} maxLength="2"
                            onChange={(e)=>{this.setState({...this.state,hours:+e.target.value})}}/>
                            <h1>:</h1>
                            <input type="text" placeholder={minutes}maxLength="2"
                            onChange={(e)=>{this.setState({...this.state,minutes:+e.target.value})}}/>
                            <h1>:</h1>
                            <input type="text" placeholder={seconds}maxLength="2"
                            onChange={(e)=>{this.setState({...this.state,seconds:+e.target.value})}}/>
                    </div>
                    :
                    <div className={Style.watchBox} onClick={()=>{
                        this.setState({...this.state,input:true})}}>
                        <h1>{hours > 9?hours:hours="0"+hours}<kbd>h</kbd></h1>
                        <h1>:</h1>
                        <h1>{minutes> 9?minutes:minutes="0"+minutes}<kbd>m</kbd></h1>
                        <h1>:</h1>
                        <h1>{seconds> 9?seconds:seconds="0"+seconds}<kbd>s</kbd></h1>
                    </div>
                }
            <div>
                <button style={{background:start?"red":"green"}} className={Style.Buttons} disabled={start}
                onClick={()=>{this.startTimer()}}>Start</button>
                <button style={{background:start?"green":"red"}} className={Style.Buttons} disabled={!start}
                onClick={()=>{this.stopTimer()}}>Stop</button>
                <button style={{background:"orange"}} className={Style.Buttons} 
                onClick={()=>{this.resetTimer()}}>Reset</button>
            </div>
        </div>
    }
}

