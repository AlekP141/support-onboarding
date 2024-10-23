import { QuestionContext } from "../../../App";
import { useContext } from "react";

const HintGenerator = ({ setCurrentHints, currentHints }) => {
  const [question] = useContext(QuestionContext);

  const availableHints = question.hints;

  const generateHint = () => {
    setCurrentHints((prev) => [...prev, availableHints[prev.length]]);
  };

  if (currentHints.length < availableHints.length) {
    return (
      <div className="hint-gen-area" onClick={generateHint}>
        ?
      </div>
    );
  } else {
    return <></>;
  }
};

export default HintGenerator;
