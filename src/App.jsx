import { useState, createContext } from "react";
import Header from "./components/Header/Header";
import { SideBar } from "./components/SideBar/SideBar";
import { AppInfoBar } from "./components/AppInfoBar/AppInfoBar";

export const QuestionContext = createContext({});

function App() {
  const [question, setQuestion] = useState({ topic: "synonyms", questionNumber: 1 });

  return (
    <div className="page-layout">
      <QuestionContext.Provider value={question}>
        <Header setQuestion={setQuestion} />
        <div className="ticket-layout">
          <SideBar/>
          <AppInfoBar/>
        </div>
      </QuestionContext.Provider>
    </div>
  );
}

export default App;
