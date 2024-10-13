import { useContext, useEffect, useState } from "react";
import { QuestionContext } from "../../../App";
import { FetchIndex, FormatIndices } from "./FetchIndex";

const QuestionPicker = ({ setQuestion }) => {
  const question = useContext(QuestionContext);

  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const indices = await FetchIndex();
      const formattedData = FormatIndices(indices);
      setQuestionList(formattedData);
    };

    fetchData();
  }, []);

  const handleQuestionChange = (e) => {
    const { name, value } = e.target;
    setQuestion((prev) => ({
      ...prev,
      [name]: name === "questionNumber" ? parseInt(value) : value,
    }));
  };

  const filteredQuestions = questionList.filter((q) => q.topic === question.topic);

  return (
    <div className="question-section flex-group">
      <p>Question:</p>
      <form className="question-picker">
        <select name="topic" id="select-topic" value={question.topic} onChange={handleQuestionChange}>
          {[...new Set(questionList.map((q) => q.topic))].map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>

        <select name="questionNumber" id="select-question-number" value={question.questionNumber} onChange={handleQuestionChange}>
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
