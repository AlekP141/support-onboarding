const RenderMessage = ({ message }) => {
  const { sender, text } = message;

  return (
    <div className="message-layout">
      <div className="message-header">
        <div className={`message-avatar ${sender === "customer" ? "customer-avatar" : "support-avatar"}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
            <g fill="currentColor">
              <circle cx="8" cy="5" r="4"></circle>
              <path d="M8 10a6 6 0 0 0-6 5.47.5.5 0 0 0 .5.53h10.97a.5.5 0 0 0 .5-.53A6 6 0 0 0 8 10z"></path>
            </g>
          </svg>
        </div>
        <div className="message-sender-info">
          <div className="message-sender-name">{sender === "customer" ? "Temp Cust Name" : "Algolia Support"}</div>
          <div className="message-recipient">
            <strong>To:</strong>
            <span className="message-recipient-name">{sender === "customer" ? "Algolia Support" : "Temp Cust Name"}</span>
          </div>
        </div>
      </div>
      <p className={`message-body ${sender === "customer" ? "customer-message" : "support-message"}`}>{text}</p>
    </div>
  );
};

export default RenderMessage;



<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" aria-hidden="true" focusable="false" data-test-id="omni-log-avatar-badge-AgentBadge" class="sc-1dhlyk1-1 cPsOjR"><path fill="currentColor" d="M13 1a9 9 0 0 1 8.996 8.735L22 10a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3l-.29.001a7.006 7.006 0 0 1-5.954 4.959A2.001 2.001 0 0 1 12 22a2 2 0 0 1 3.703-1.05 5.003 5.003 0 0 0 3.914-3.028A.995.995 0 0 1 19 17v-6a1 1 0 0 1 1-1 7 7 0 0 0-13.996-.24L6 10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3 9 9 0 0 1 9-9z"></path></svg>