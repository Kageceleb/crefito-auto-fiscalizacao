import './styles.css'
import { question } from "../../../types/questionType"
import { Field, Form, Formik } from 'formik'
import { useState } from 'react'
import { questionarieAnswer } from '../../../types/answerType'

type AnswerValues = { [key: number]: string }

export const QuestionForm: React.FC<{ questions: question[], answers: questionarieAnswer[] }> = ({ questions, answers }) => {
    const [presentQuestionIndex, setPresentQuestionIndex] = useState(-1);
    const presentQuestion = questions[presentQuestionIndex];
    const nextIndex = presentQuestionIndex + 1;
    const nextQuestion = (values: AnswerValues) => {
        console.log(values);
        const nextQuestion = questions[nextIndex] ;
        if (!nextQuestion) setPresentQuestionIndex(presentQuestionIndex +1);
        setPresentQuestionIndex((nextQuestion.shouldSkip?.(values)) ? nextIndex + 1 : nextIndex)
    }
    return (
        presentQuestionIndex === -1 ?
            (<div className='form'>
                < h1 > Texto inicial de apresentação </h1 >
                <button className='nextQuestion' type='button' onClick={() => setPresentQuestionIndex(0)}> Começar </button>
            </div>)
            : nextIndex > questions.length ?
            (<h1>{answers[0].id}</h1>)
            :
            (<div className='form'>
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
                                    <label className='number'> Pergunta {presentQuestion.id}</label>
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
            </div >)
    );
}