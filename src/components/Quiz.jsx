import { useState } from "react";
import QUESTIONS from "../../questions.js";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  function handleSelectAnsser(answer) {
    return setUserAnswers((prevUserAnsers) => [...prevUserAnsers, answer]);
  }

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {QUESTIONS[activeQuestionIndex].answers.map((answer, index) => (
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
