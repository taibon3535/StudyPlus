import React, { useState, useEffect } from 'react';

interface TimerProps {
  learntime: number;
  sbrake: number;
  lbrake: number;
}

export const Timer: React.FC<TimerProps> = ({ learntime, sbrake, lbrake }) => {

  const [time, setTime] = useState<number>(0);

  learntime=learntime*60;
  sbrake=sbrake*60;
  lbrake=lbrake*60;


  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  const handleButtonClick = (newTime: number) => {
    setTime(newTime);
  };

  const containerStyle: React.CSSProperties = {
    position: 'fixed',
    top: '35%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '24px',
    zIndex: 1000,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    padding: '10px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  };

  return (
    <div style={containerStyle}>
      <button onClick={() => handleButtonClick(learntime)}>Learning</button>
      <button onClick={() => handleButtonClick(sbrake)}>Short Break</button>
      <button onClick={() => handleButtonClick(lbrake)}>Long Break</button>
      <div>Time: {time/60-(time%60)/60}:{time%60}</div>
    </div>
  );
};

export default Timer;
