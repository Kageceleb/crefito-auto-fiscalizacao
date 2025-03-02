import './styles.css'
import { question } from "../../../types/questionType"
import { Field, Form, Formik } from 'formik'
import { useState } from 'react'

type AnswerValues = { [key: number]: string }

export const QuestionForm: React.FC<{ questions: question[] }> = ({ questions }) => {
    const [presentQuestionIndex, setPresentQuestionIndex] = useState(0);
    const presentQuestion = questions[presentQuestionIndex];
    const nextQuestion = (values: AnswerValues) => {
        console.log(values);
        let nextIndex = presentQuestionIndex + 1;
        const nextQuestion = questions[nextIndex];
        if (!nextQuestion) return;

        setPresentQuestionIndex((nextQuestion.shouldSkip?.(values)) ? nextIndex + 1 : nextIndex)

    }
    return (
        <div className='form'>
            <Formik
                initialValues={{}}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({ values }) => (
                    <Form>
                        <div key={presentQuestion.id}>
                            <label className='question'>{presentQuestion.question}</label>
                            {presentQuestion.type === "radio" ? (
                                presentQuestion.options.map((option) => (
                                    <label key={option}>
                                        <Field type="radio" name={presentQuestion.id} value={option} />
                                        {option}

                                    </label>
                                ))
                            ) : (
                                <h1>not radio</h1>
                            )
                            }
                        </div>
                        <button type='button' onClick={() => nextQuestion(values)}>{presentQuestion.id} Próxima pergunta</button>

                    </Form>
                )}

            </Formik>
        </div >);
}