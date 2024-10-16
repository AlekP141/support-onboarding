import { useContext } from "react";
import { QuestionContext } from "../../App";
import RenderMessage from "./RenderMessage/RenderMessage";

export const CentralTextArea = () => {
  const [question, setQuestion] = useContext(QuestionContext);

  return (
    <div className="text-area-structure">
      <div className="text-area-header">
        <div className="ta-header-title">{question.title}</div>
        <div className="ta-header-sla">
          <div className="ta-header-sla-count">{Math.floor(Math.random()*5+2)}d</div>
          <div className="ta-header-web-form">Via web form</div>
        </div>
      </div>
      <div className="text-area-container">
        {question.messages.map((message, index) => <RenderMessage key={`${question}-${index}`} message={message}></RenderMessage>)}
      </div>
      <div className="text-area-reply">
        <div className="text-area-reply-header"></div>
        <textarea name="replyArea" id=""></textarea>
      </div>
    </div>
  );
};
