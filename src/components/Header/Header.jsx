import QuestionPicker from "./QuestionPicker/QuestionPicker";

const Header = ({ setQuestion }) => {

  return (
    <header className="flex-group">
      <QuestionPicker setQuestion={setQuestion} />
      <div className="header-resources">
        <p>Useful Resources:</p>
        <ul className="header-useful-group">
          <li><a href="https://algolia.zendesk.com/agent/search">ZD</a></li>
          <li><a href="https://www.algolia.com/doc/">DOC</a></li>
          <li><a href="https://support.algolia.com/hc/en-us">SUPP</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
