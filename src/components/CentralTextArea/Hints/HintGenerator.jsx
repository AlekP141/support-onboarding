import { QuestionContext } from "../../../App";
import { useContext, useEffect } from "react";

const HintGenerator = ({ setCurrentHints, currentHints }) => {
  const [question] = useContext(QuestionContext);

  const availableHints = question.hints;

  const generateHint = () => {
    setCurrentHints((prev) => [...prev, availableHints[prev.length]]);
  };

  useEffect(() => {
    let url = window.location.href;
    const regex = /\/h\d+\//;

    if (regex.test(url)) {
      url = url.replace(regex, `/h${currentHints.length}/`);
    } else {
      url = `${url}h1/`;
    }

    window.history.pushState({}, "", url);
  }, [currentHints]);

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

// TEST TO SEE HOW TO APPEND INFO TO URL ON SAME PAGE - WORKING
// const url = window.location.href;
// const newUrl = url.includes('?a') ? `${url}?a` : `${url}`;
// window.history.pushState({}, "", newUrl);
// console.log(newUrl);
