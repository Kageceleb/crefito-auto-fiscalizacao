import './styles.css'
import { question } from "../../../types/questionType"
import { Field, Form, Formik } from 'formik'
import { useState } from 'react'

type AnswerValues = { [key: number]: string }

export const QuestionForm: React.FC<{ questions: question[] }> = ({ questions }) => {
    const [presentQuestionIndex, setPresentQuestionIndex] = useState(-1);
    const presentQuestion = questions[presentQuestionIndex];
    const nextQuestion = (values: AnswerValues) => {
        console.log(values);
        let nextIndex = presentQuestionIndex + 1;
        const nextQuestion = questions[nextIndex];
        if (!nextQuestion) return;
        setPresentQuestionIndex((nextQuestion.shouldSkip?.(values)) ? nextIndex + 1 : nextIndex)
    }
    return (
        presentQuestionIndex === -1 ?
            <div className='form'>
                < h1 > oi </h1 >
                <button className='nextQuestion' type='button' onClick={() => setPresentQuestionIndex(0)}> Começar </button>
            </div>
            :
            <div className='form'>
                <Formik
                    initialValues={{}}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({ values }) => (
                        <Form >
                            <div key={presentQuestion.id}>
                                <div className='question'>
                                    <label className='number'>Pergunta {presentQuestion.id}</label>
                                    <label >{presentQuestion.question}</label>
                                </div>
                                <div className='answers'>
                                    {presentQuestion.type === "radio" ? (
                                        presentQuestion.options.map((option) => (
                                            <label className='answer' key={option}>
                                                <Field type="radio" name={presentQuestion.id} value={option} />
                                                {option}

                                            </label>
                                        ))
                                    ) : (
                                        <h1>not radio</h1>
                                    )
                                    }
                                </div>

                            </div>
                            <button className='nextQuestion' type='button' onClick={() => nextQuestion(values)}> Próxima pergunta</button>

                        </Form>
                    )}

                </Formik>
            </div >
    );
}