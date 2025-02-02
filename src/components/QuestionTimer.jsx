import { useState, useEffect } from "react";

export default function QuestionTimer({ timout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timout);

  useEffect(() => {
    console.log('Setting timeout');
    
    const timer =  setTimeout(onTimeout, timout);

    return () => {
      console.log('Clearing timeout');
      clearTimeout(timer);
    };
  }, [timout, onTimeout]);

  useEffect(() => {
    console.log('Setting interval');
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      console.log('Clearing interval');
      clearInterval(interval);
    };
  }, []);

  return (
    <progress id="question-time" max={timout} value={remainingTime} />
  );
}
