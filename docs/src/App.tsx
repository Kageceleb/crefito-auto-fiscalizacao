import './index.css'

import { QuestionForm } from './components/questionsForm'
import { Header } from './components/header'

import { mockQuestions } from "../questions"
import { mockAnswer } from "../answers"
import { Footer } from './components/footer'

function App() {
  const questions = mockQuestions
  const answers = mockAnswer

  return (
    < >
      <Header />
      <QuestionForm questions={questions} answers={answers} />
      <Footer />
    </ >
  )
}

export default App
