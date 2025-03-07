import './App.css'

import { QuestionForm } from './components/questionsForm'
import { Header } from './components/header'

import { mockQuestions } from "../questions"
import { mockAnswer } from "../answers"
import { Footer } from './components/footer'

function App() {
  const questions = mockQuestions
  const answers = mockAnswer

  return (
    <div className="container">
      <Header />
      <QuestionForm questions={questions} answers={answers} />
      <Footer />
    </div>
  )
}

export default App
