import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
export default function Questions({
  questionText,
  answerState,
  answers,
  onSkipAnswer,
  onSelectAnswer,
  selectedAnswer,
}) {
  return (
    <div id="question">
      <QuestionTimer timout={10000} onTimeout={onSkipAnswer} />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
    </div>
  );
}
