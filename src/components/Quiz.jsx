import { useState, useCallback } from "react";
import QUESTIONS from "../../questions.js";
import quizCompleteImage from "../assets/quiz-complete.png";
import Questions from  "./Questions.jsx";

const Quiz = () => {
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const quizIsOver = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(answer) {
      setAnswerState("answered");
      setUserAnswers((prevUserAnsers) => {
        return [...prevUserAnsers, answer];
      });

      setTimeout(() => {
        if (answer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
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
        questionText={QUESTIONS[activeQuestionIndex].text}
        answers={QUESTIONS[activeQuestionIndex].answers}
        onSelectAnswer={handleSelectAnswer}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        answerState={answerState}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};

export default Quiz;
