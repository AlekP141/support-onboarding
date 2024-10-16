import { useContext, useEffect, useState } from "react";
import { QuestionContext } from "../../App";
import RenderMessage from "./RenderMessage/RenderMessage";

export const CentralTextArea = () => {
  const [question] = useContext(QuestionContext);
  const [replyType, setReplyType] = useState("public-reply");

  const handleReplyType = (e) => {
    setReplyType(e.target.value);
  };

  return (
    <div className="text-area-structure">
      <div className="text-area-header">
        <div className="ta-header-title">{question.title}</div>
        <div className="ta-header-sla">
          <div className="ta-header-sla-count">{Math.floor(Math.random() * 5 + 2)}d</div>
          <div className="ta-header-web-form">Via web form</div>
        </div>
      </div>
      <div className="text-area-container">
        {question.messages.map((message, index) => (
          <RenderMessage key={`${question}-${index}`} message={message}></RenderMessage>
        ))}
      </div>
      <div className={`text-area-reply ${replyType}`}>
        <div className="text-area-reply-header">
          <select name="reply-type" onChange={handleReplyType}>
            <option value="public-reply">Public reply</option>
            <option value="internal-note">Internal note</option>
          </select>
          {replyType === "public-reply" ? <div className="tar-header-recipients">{question.customer}</div> : null}
        </div>
        <textarea name="replyArea" id=""></textarea>
      </div>
    </div>
  );
};
