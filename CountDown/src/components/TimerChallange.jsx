import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";
function TimerChallange({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  
  const [timerExpired, setTimeExpired] = useState(false);
  const [timerStarted, setStimerStarted] = useState(false);
 

  const handleStart = () => {
    timer.current = setTimeout(() => {
      setTimeExpired(true);

      dialog.current.showModal();
      console.log(timer.current);
    }, targetTime * 1000);

    setStimerStarted(true);
  };

  const handleStop = () => {
    clearTimeout(timer.current);
  };

  return (
    <>
       <ResultModal ref={dialog} targetTime={targetTime} result={"lost"} />
      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>{timerStarted ? "Stop" : "Start"} challange</button>
        </p>
        <p className={timerStarted ? "active " : undefined}>{timerStarted ? "Time is Running" : "Timer is inactive"}</p>
      </section>
    </>
  );
}

export default TimerChallange;
