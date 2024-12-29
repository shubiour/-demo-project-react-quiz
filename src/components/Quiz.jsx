import { useState } from "react";
import QUESTIONS from "../../questions.js";
import quizCompleteImage from "../assets/quiz-complete.png";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const quizIsOver = activeQuestionIndex === QUESTIONS.length;

  function handleSelectAnsser(answer) {
    return setUserAnswers((prevUserAnsers) => [...prevUserAnsers, answer]);
  }

  if(quizIsOver){
    return <div id="summary">
      <img src={quizCompleteImage} alt="Quiz complete" />
      <h2>Quiz is completed</h2>
    </div>
  }

  const shuffledAnswers =  [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
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
