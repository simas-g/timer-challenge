import { useRef, useState } from "react";
import ResultModal from "./ResultModal";
const TimerChallenge = ({ title, targetTime }) => {
  const dialog = useRef();
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)
  let timer = useRef();
  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining(prev => prev - 10)
    }, 10);
  }
  function handleStop() {
    clearTimeout(timer.current);
    dialog.current.showModal()

  }
  return (
    <>
      <ResultModal ref={dialog}/>
      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>You lost!</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button ref={timer} onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : ""}>
          {timerStarted ? "Time is running" : "Time inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
