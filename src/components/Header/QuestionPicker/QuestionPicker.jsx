import { useContext } from "react";
import { QuestionContext } from "../../../App";

const QuestionPicker = ({ setQuestion }) => {
  const question = useContext(QuestionContext);

  const QUESTIONLIST = [
    { topic: "synonyms", questionNumber: 1 },
    { topic: "synonyms", questionNumber: 2 },
    { topic: "rules", questionNumber: 1 },
    { topic: "rules", questionNumber: 2 },
    { topic: "rules", questionNumber: 3 },
  ];

  const handleQuestionChange = (e) => {
    const { name, value } = e.target;
    setQuestion((prev) => ({
      ...prev,
      [name]: name === "questionNumber" ? parseInt(value) : value,
    }));
  };

  const filteredQuestions = QUESTIONLIST.filter((q) => q.topic === question.topic);

  return (
    <form className="question-picker">
      <select
        name="topic"
        id="select-topic"
        value={question.topic}
        onChange={handleQuestionChange}
      >
        {[...new Set(QUESTIONLIST.map((q) => q.topic))].map((topic) => (
          <option key={topic} value={topic}>
            {topic}
          </option>
        ))}
      </select>

      <select
        name="questionNumber"
        id="select-question-number"
        value={question.questionNumber}
        onChange={handleQuestionChange}
      >
        {filteredQuestions.map((q) => (
          <option key={`${q.topic}-${q.questionNumber}`} value={q.questionNumber}>
            {q.questionNumber}
          </option>
        ))}
      </select>
    </form>
  );
};

export default QuestionPicker;
