import React, { useState } from "react";
import classNames from "../utils/class-names";
import useInterval from "../utils/useInterval";
import DurationBreak from "./DurationBreak";
import DurationFocus from "./DurationFocus";
import TimeControl from "./TimeControl";

function Pomodoro() {
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // set up focus/ break duration
  const [focusDuration, setFocusDuration] = useState(25); // in minute
  const [breakDuration, setBreakDuration] = useState(5); //in minute

  // adjust session active default to inactive
  const [isSessionActive, setIsSessionActive] = useState(false);

  //adjust pause default to pause
  const [isSessionPause, setIsSessionPause] = useState(true);

  //set up timer remaining
  const [timer, setTimer] = useState(1500); //in second

  // current session default to "Focus"
  const [currentState, setCurrentState] = useState("focus");

  // handle increment on focus
  const handleFocusIncrement = () => {
    setFocusDuration((currentValue) => {
      return Math.min(60, currentValue + 5);
    });
  };

  //handle decrement on focus
  const handleFocusDecrement = () => {
    setFocusDuration((currentValue) => {
      return Math.max(5, currentValue - 5);
    });
  };

  //handle inrement on break
  const handleBreakIncrement = () => {
    setBreakDuration((currentValue) => {
      return Math.min(15, currentValue + 1);
    });
  };

  //handle decrement on break
  const handleBreakDecrement = () => {
    setBreakDuration((currentValue) => {
      return Math.max(1, currentValue - 1);
    });
  };

  //handle stop button
  const handleStopButton = () => {
    setIsSessionActive(false);
    setIsTimerRunning(false);
    setIsSessionPause(true);
    setCurrentState("focus");
  };

  useInterval(
    () => {
      // ToDo: Implement what should happen when the timer is running
    },
    isTimerRunning ? 1000 : null
  );

  function playPause() {
    setIsTimerRunning((prevState) => !prevState);
  }

  return (
    <div className="pomodoro">
      <div className="row">
        <div className="col">
          <DurationFocus />
        </div>
        <div className="col">
          <div className="float-right">
            <DurationBreak />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <TimeControl />
        </div>
      </div>
      <ProgressBar />
      <div className="row">
        <div className="col">
          <ToDo />
        </div>
      </div>
    </div>
  );
}

export default Pomodoro;
