import './App.css'

import { QuestionForm } from './components/questionsForm'
import { Header } from './components/header'

import { mockQuestions } from "../questions"
import { Footer } from './components/footer'

function App() {
  const questions = mockQuestions

  return (
    <div className="container">
      <Header />
      <QuestionForm questions={questions} />
      <Footer />
    </div>
  )
}

export default App
