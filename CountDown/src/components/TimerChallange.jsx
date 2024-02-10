import React, { useRef, useState } from "react";

function TimerChallange({ title, targetTime }) {
  const [timerExpired, setTimeExpired] = useState(false);
  const [timerStarted, setStimerStarted] = useState(false);
  const timer = useRef();
  console.log(timer.current);

  const handleStart = () => {
    timer.current = setTimeout(() => {
      setTimeExpired(true);

      //   console.log(timer.current);
    }, targetTime * 1000);

    setStimerStarted(true);
  };

  const handleStop = () => {
    clearTimeout(timer.current);
  };

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost</p>}
      <p className="challenge-time">
        {targetTime} second {targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>{timerStarted ? "Stop" : "Start"} challange</button>
      </p>
      <p className={timerStarted ? "active " : undefined}>{timerStarted ? "Time is Running" : "Timer is inactive"}</p>
    </section>
  );
}

export default TimerChallange;
