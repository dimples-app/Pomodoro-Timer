import React, { useState } from "react";
import classNames from "../utils/class-names";
import useInterval from "../utils/useInterval";
import DurationBreak from "./DurationBreak";
import DurationFocus from "./DurationFocus";
import TimeControl from "./TimeControl";

function Pomodoro() {
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);

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
