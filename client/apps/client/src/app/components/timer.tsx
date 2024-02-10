import React, { useState, useEffect } from 'react';
import './Timer.css'; // Importing external CSS for styling.

interface TimerProps {
  learntime: number; // Time for learning period.
  sbrake: number; // Time for short break.
  lbrake: number; // Time for long break.
}

export const Timer: React.FC<TimerProps> = ({ learntime, sbrake, lbrake }) => {
  const [time, setTime] = useState<number>(0); // Current countdown time.
  const [activeTime, setActiveTime] = useState<number>(learntime * 60); // Active time selected for the timer.
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false); // State to track if the timer is running.

  // Effect hook to handle the timer countdown logic.
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    // Starts an interval to decrement time if the timer is running.
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          // Stops the timer and resets state when countdown reaches 1 second.
          if (prevTime <= 1) {
            clearInterval(interval);
            setIsTimerRunning(false);
            return 0;
          }
          return prevTime - 1; // Decrements the time by one second.
        });
      }, 1000); // Interval set to decrement every 1000 milliseconds (1 second).
    }

    // Cleanup function to clear the interval when the component unmounts or the dependencies change.
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, time]);

  // Effect hook to reset the timer whenever the activeTime changes.
  useEffect(() => {
    setTime(activeTime);
  }, [activeTime]);

  // Function to update activeTime and reset the timer based on the button clicked.
  const handleButtonClick = (newTime: number) => {
    setActiveTime(newTime);
    setTime(newTime);
    setIsTimerRunning(false); // Stops the timer if it was running.
  };

  // Toggles the timer's running state and resets the time if necessary.
  const handleStartButtonClick = () => {
    if (!isTimerRunning && time === 0) {
      setTime(activeTime);
    }
    setIsTimerRunning(!isTimerRunning);
  };

  // Formats the time in seconds to a mm:ss format.
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="timerContainer">
      {/* Button group for selecting timer mode (Learning, Short Break, Long Break). */}
      <div className="buttonContainer">
        <button onClick={() => handleButtonClick(learntime * 60)}>Learning</button>
        <button onClick={() => handleButtonClick(sbrake * 60)}>Short Break</button>
        <button onClick={() => handleButtonClick(lbrake * 60)}>Long Break</button>
      </div>
      {/* Displays the current time in mm:ss format. */}
      <div className="timerDisplay">{formatTime(time)}</div>
      {/* Button to start/pause the timer. */}
      <button onClick={handleStartButtonClick}>
        {isTimerRunning ? 'Pause' : 'Start'}
      </button>
    </div>
  );
};

export default Timer;
