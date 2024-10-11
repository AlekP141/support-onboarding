import QuestionPicker from "./QuestionPicker/QuestionPicker";

const Header = ({ setQuestion }) => {

  return (
    <header className="flex-group">
      <QuestionPicker setQuestion={setQuestion} />
      <h1 className="main-title">Algolia Support Onboarding</h1>
    </header>
  );
};

export default Header;
