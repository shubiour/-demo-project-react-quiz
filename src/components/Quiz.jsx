import { useState, useCallback } from "react";
import QUESTIONS from "../../questions.js";
import quizCompleteImage from "../assets/quiz-complete.png";
import Questions from  "./Questions.jsx";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsOver = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(answer) {
      setUserAnswers((prevUserAnsers) => {
        return [...prevUserAnsers, answer];
      });
    },
    []
  );

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null));

  if (quizIsOver) {
    return (
      <div id="summary">
        <img src={quizCompleteImage} alt="Quiz complete" />
        <h2>Quiz is completed</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Questions
        key={activeQuestionIndex}
        index ={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};

export default Quiz;
