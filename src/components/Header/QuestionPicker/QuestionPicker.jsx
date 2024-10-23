import { useContext, useEffect, useState } from "react";
import { QuestionContext } from "../../../App";
import questionsData from "../../../../questions.json";

const QuestionPicker = () => {
  const [question, setQuestion] = useContext(QuestionContext);
  const [topic, setTopic] = useState("synonyms");
  const [questionNumber, setQuestionNumber] = useState("1");
  const questionList = questionsData.questions;

  const handleTopicChange = (e) => {
    setTopic(e.target.value);
  };
  const handleQuestionNumberChange = (e) => {
    setQuestionNumber(e.target.value);
  };

  useEffect(() => {
    const selectedQuestion =
      questionList.find((q) => q.topic === topic && q.questionNumber === questionNumber) ||
      questionList.find((q) => q.topic === topic && q.questionNumber === "1");
  
    setQuestion(selectedQuestion);

    console.log(selectedQuestion)
    const urlOrigin = window.location.origin;
    let url = `${urlOrigin}/${selectedQuestion.topic}-${selectedQuestion.questionNumber}`
    window.history.pushState({}, "", url)

  }, [topic, questionNumber, questionList, setQuestion]);


  const filteredQuestions = questionList.filter((q) => q.topic === question.topic);

  return (
    <div className="question-section flex-group">
      <p>Question:</p>
      <form className="question-picker">
        <select name="topic" id="select-topic" value={question.topic} onChange={handleTopicChange}>
          {[...new Set(questionList.map((q) => q.topic))].map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>

        <select name="questionNumber" id="select-question-number" value={question.questionNumber} onChange={handleQuestionNumberChange}>
          {filteredQuestions.map((q) => (
            <option key={`${q.topic}-${q.questionNumber}`} value={q.questionNumber}>
              {q.questionNumber}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default QuestionPicker;
