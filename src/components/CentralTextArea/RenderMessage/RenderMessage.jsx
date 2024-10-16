const RenderMessage = ({message}) => {

  const {sender, text} = message

  return (
    <div className="message-layout-grid">
      <div className={`message-avatar ${sender === "customer" ? "customer-avatar" : "support-avatar"}`}>

      </div>
      <div className="message-header">
        <div className="message-sender-info"></div>
        <div className="message-recipient"></div>
      </div>
      <div className={`message-body ${sender === "customer" ? "customer-message" : "support-message"}`}>{text}</div>
    </div>
  )
}

export default RenderMessage
