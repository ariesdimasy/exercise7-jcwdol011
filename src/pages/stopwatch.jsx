import { useState, useEffect } from "react";
import style from "./stopwatch.module.css";

export default function Stopwatch() {
  const [counter, setCounter] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [stop, setStop] = useState(true);

  useEffect(() => {
    if(counter == 0) {
      setMinutes(0)
      setSeconds(0)
    }
    if(!stop) {
      const run = setInterval(() => {
        setCounter(counter + 1)
      },1000)

      if(counter > 0) {
        setMinutes(Math.floor(counter / 60) % 60)
        setSeconds(counter % 60)
      } 
      
      return () => clearInterval(run);
    }
  },[counter, stop])


  return (
    <div className={style.box}>
      <div className={style.time}>
        {minutes < 10 ? '0'+minutes : minutes }
        {` : `}  
        {seconds < 10 ? '0'+seconds : seconds}
      </div>
      <div className={style.buttons}>
        <button disabled={!stop} className={style.start} onClick={() => {
          setStop(false)
        }}> Start </button>
        <button disabled={stop} className={style.end} onClick={() => {
          setStop(true)
        }}> End  </button>
        <button disabled={stop} className={style.reset} onClick={() => {
          setCounter(0)
          setStop(true)
        }}> Reset  </button>
      </div>
    </div>
  );
}
