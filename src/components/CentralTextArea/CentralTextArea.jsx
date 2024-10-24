import { useContext, useEffect, useState } from "react";
import { QuestionContext } from "../../App";
import RenderMessage from "./RenderMessage/RenderMessage";
import { HintMessage } from "./Hints/HintMessage";
import HintGenerator from "./Hints/HintGenerator";

export const CentralTextArea = () => {
  const [question] = useContext(QuestionContext);
  const [replyType, setReplyType] = useState("public-reply");
  const [userMessages, setUserMessages] = useState([]);
  const [currentHints, setCurrentHints] = useState([]);

  const handleReplyType = (e) => {
    setReplyType(e.target.value);
  };

  const handleSubmitMessage = (e) => {
    e.preventDefault();
    const userMessage = {
      text: e.target.elements["replyArea"].value,
      sender: replyType === "internal-note" ? "support-internal" : "support",
    };
    setUserMessages((prev) => [...prev, userMessage]);
    e.target.elements["replyArea"].value = "";
    const encodedStr = btoa(JSON.stringify([...userMessages, userMessage]));
    let url = window.location.href;
    url += encodedStr;
    window.history.pushState({}, "", url);
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
        {userMessages.map((message, index) => (
          <RenderMessage key={`userMessage-${index}`} message={message}></RenderMessage>
        ))}
        {currentHints.map((hint, index) => (
          <HintMessage key={`${question.indexName}-hint-${index + 1}`} hint={hint} />
        ))}
        <HintGenerator {...{ setCurrentHints }} {...{ currentHints }} />
      </div>
      <div className={`text-area-reply ${replyType}`}>
        <div className="text-area-reply-header">
          <select name="reply-type" onChange={handleReplyType}>
            <option value="public-reply">Public reply</option>
            <option value="internal-note">Internal note</option>
          </select>
          {replyType === "public-reply" ? <div className="tar-header-recipients">{question.customer}</div> : null}
        </div>
        <form id="submit-text-form" onSubmit={handleSubmitMessage}>
          <textarea name="replyArea"></textarea>
        </form>
      </div>
    </div>
  );
};
