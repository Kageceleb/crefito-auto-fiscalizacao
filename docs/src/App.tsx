import './index.css'

import { QuestionForm } from './components/questionsForm'
import { Header } from './components/header'

import { mockQuestions } from "../questions"
import { calcQuestions } from '../calcQuestions'
import { mockAnswer } from "../answers"
import { Footer } from './components/footer'
function App() {
  const modalQuestions = calcQuestions
  const questions = mockQuestions
  const answers = mockAnswer

  return (
    < >
      <Header />
      <QuestionForm questions={questions} answers={answers} calcQuestions={modalQuestions} />
      <Footer />
    </ >
  )
}

export default App
