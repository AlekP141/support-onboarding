import { useContext } from "react";
import { QuestionContext } from "../../App";
import { APPLICATION_ID } from "../consts";

export const SideBar = () => {
  const [question, setQuestion] = useContext(QuestionContext);

  return (
    <div className="side-bar-container">
      <div className="app-info">
        <div className="app-id">
          <label htmlFor="app-id-area">Application ID</label>
          <textarea name="app-id-area" defaultValue={APPLICATION_ID}></textarea>
        </div>
        <div className="app-index">
          <label htmlFor="app-index-area">Index Name</label>
          <textarea name="app-index-area" defaultValue={`${question.topic}-${question.questionNumber}`}></textarea>
        </div>
      </div>
    </div>
  );
};
