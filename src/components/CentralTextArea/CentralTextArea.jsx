import { useContext } from "react"
import { QuestionContext } from "../../App"

export const CentralTextArea = () => {
  const [question, setQuestion] = useContext(QuestionContext)

  return (
    <div className="text-area-structure">
      <div className="text-area-header">{question.title}</div>
      <div className="text-area-container"></div>
      <div className="text-area-reply">
        <div className="text-area-reply-header"></div>
        <textarea name="replyArea" id=""></textarea>
      </div>
    </div>
  )
}
