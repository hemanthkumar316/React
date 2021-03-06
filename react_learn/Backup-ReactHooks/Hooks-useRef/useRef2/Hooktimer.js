import React,{useState,useEffect,useRef} from 'react'

const Hooktimer = () => {
  const [timer, setTimer] = useState(0)
  const intervalRef=useRef()
  useEffect(()=>{
    intervalRef.current=setInterval(()=>{
      setTimer(prevTimer=>prevTimer+1)
    },1000)
    return()=>{
      clearInterval(intervalRef.current)
    }
  },[])
  return (
    <div>
      <h1> Hooktimer - {timer}</h1>
      <button onClick={()=>{clearInterval(intervalRef.current)}}>Stop Timer</button>
    </div>
  )
}

export default Hooktimer