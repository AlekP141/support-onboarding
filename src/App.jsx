import { useState, createContext } from "react";
import Header from "./components/Header/Header";
import { SideBar } from "./components/SideBar/SideBar";
import { AppInfoBar } from "./components/AppInfoBar/AppInfoBar";
import { CentralTextArea } from "./components/CentralTextArea/CentralTextArea";
import questionsData from "../questions.json";

export const QuestionContext = createContext();

function App() {
  const [question, setQuestion] = useState(questionsData.questions[0]);

  return (
    <div className="page-layout">
      <QuestionContext.Provider value={[question, setQuestion]}>
        <Header/>
        <div className="ticket-layout">
          <SideBar/>
          <CentralTextArea/>
          <AppInfoBar/>
        </div>
      </QuestionContext.Provider>
    </div>
  );
}

export default App;
