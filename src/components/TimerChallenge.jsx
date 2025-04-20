import { useRef, useState } from "react";
import ResultModal from "./ResultModal";
const TimerChallenge = ({ title, targetTime }) => {
  const dialog = useRef();
  const timer = useRef();
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.showModal();
  }
  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }
  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prev) => prev - 10);
    }, 10);
  }
  function handleStop() {
    clearInterval(timer.current);
    dialog.current.showModal();
  }
  return (
    <>
      <ResultModal handleReset={handleReset} ref={dialog} timeRemaining={timeRemaining} targetTime={targetTime}/>
      <section className="challenge">
        <h2>{title}</h2>
        {<p>You lost!</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button ref={timer} onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : ""}>
          {timerIsActive ? "Time is running" : "Time inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
