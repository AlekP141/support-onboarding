import RenderMessage from "../RenderMessage/RenderMessage";

export const HintMessage = ({ hint }) => {
  const structuredHint = {
    sender: "hint",
    text: hint,
  };

  return <RenderMessage message={structuredHint} />;
};
