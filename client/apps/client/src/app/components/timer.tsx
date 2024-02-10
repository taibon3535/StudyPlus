import React, { useState, useEffect } from 'react';
import './Timer.css'; // Importing CSS for styles

interface TimerProps {
  learntime: number;
  sbrake: number;
  lbrake: number;
}

export const Timer: React.FC<TimerProps> = ({ learntime, sbrake, lbrake }) => {
  const [time, setTime] = useState<number>(0);
  const [activeTime, setActiveTime] = useState<number>(learntime * 60);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isTimerRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(interval!);
            setIsTimerRunning(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, time]);

  useEffect(() => {

    setTime(activeTime);
  }, [activeTime]);

  const handleButtonClick = (newTime: number) => {
    setActiveTime(newTime);
    setTime(newTime);
    setIsTimerRunning(false);
  };

  const handleStartButtonClick = () => {
    if (!isTimerRunning && time === 0) {
      setTime(activeTime);
    }
    setIsTimerRunning(!isTimerRunning);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="timerContainer">
      <div className="buttonContainer">
        <button onClick={() => handleButtonClick(learntime * 60)}>Learning</button>
        <button onClick={() => handleButtonClick(sbrake * 60)}>Short Break</button>
        <button onClick={() => handleButtonClick(lbrake * 60)}>Long Break</button>
      </div>
      <div className="timerDisplay">{formatTime(time)}</div>
      <button onClick={handleStartButtonClick}>
        {isTimerRunning ? 'Pause' : 'Start'}
      </button>
    </div>
  );
};

export default Timer;
