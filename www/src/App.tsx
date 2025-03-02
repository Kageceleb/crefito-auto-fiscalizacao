import './App.css'

import { QuestionForm } from './components/questionsForm'
import { Header } from './components/header'

import { mockQuestions } from "../questions"

function App() {
  const questions = mockQuestions

  return (
    <div className="container">
      <Header />
      <QuestionForm questions={questions} />
    </div>
  )
}

export default App
