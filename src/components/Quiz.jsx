import { useState, useCallback } from "react";
import QUESTIONS from "../../questions.js";
import quizCompleteImage from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const quizIsOver = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnsser = useCallback(function handleSelectAnsser(answer) {
    return setUserAnswers((prevUserAnsers) => [...prevUserAnsers, answer]);
  }, []);

  const handleSkipAnsser = useCallback(() => handleSelectAnsser(null));

  if (quizIsOver) {
    return (
      <div id="summary">
        <img src={quizCompleteImage} alt="Quiz complete" />
        <h2>Quiz is completed</h2>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestionIndex}
          timout={10000}
          onTimeout={handleSkipAnsser}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer, index) => (
            <li key={index} className="answer">
              <button onClick={() => handleSelectAnsser(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
