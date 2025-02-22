import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import { useState } from "react";
import QUESTIONS from "../../questions.js";

export default function Questions({
  index,
  onSkipAnswer,
  onSelectAnswer,
}) {
  const [answer, serAnswer] = useState({
    selectedAnswer: null,
    isCorrect: null,
  });

  function handleSelectAnswer(answer) {
    serAnswer({
      selectedAnswer: answer,
      isCorrect: QUESTIONS[index].answers[0] === answer,
    });

    setTimeout(() => {
      serAnswer({
        selectedAnswer: answer,
        isCorrect: true
      });


      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = '';
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  } else if (answer.selectedAnswer) {
    answerState = 'answered';
  }

  return (
    <div id="question">
      <QuestionTimer timout={10000} onTimeout={onSkipAnswer} />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        answers={QUESTIONS[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
