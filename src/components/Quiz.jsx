import { useState, useCallback } from "react";
import QUESTIONS from "../../questions.js";
import quizCompleteImage from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

const Quiz = () => {
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const quizIsOver = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnsser = useCallback(
    function handleSelectAnsser(answer) {
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
          {shuffledAnswers.map((answer, index) => {
            const isSelected = userAnswers[userAnswers.length - 1] === answer;
            let cssClass = "";

            if (answerState === answer && isSelected) {
              cssClass = "selected";
            }

            if((answerState === 'correct' || answerState === 'wrong') && isSelected) {
              cssClass = answerState;
            }

            return (
              <li key={index} className="answer">
                <button
                  onClick={() => handleSelectAnsser(answer)}
                  className={cssClass}
                >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
