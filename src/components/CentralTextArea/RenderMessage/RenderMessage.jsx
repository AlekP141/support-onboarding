const RenderMessage = ({ message }) => {
  const { sender, text } = message;

  return (
    <div className="message-layout">
      <div className="message-header">
        <div className={`message-avatar ${sender === "customer" ? "customer-avatar" : "support-avatar"}`}></div>
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
