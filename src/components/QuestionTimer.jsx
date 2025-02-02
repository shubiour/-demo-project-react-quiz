import { useState, useEffect } from "react";

export default function QuestionTimer({ timout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timout);

  useEffect(() => {
    setTimeout(onTimeout, timout);
  }, [timout, onTimeout]);

  useEffect(() => {
    setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
  }, []);

  return (
    <progress id="question-time" max={timout} value={remainingTime} />
  );
}
