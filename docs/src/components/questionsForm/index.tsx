import './styles.css'
import { question } from "../../../types/questionType"
import { Field, Form, Formik } from 'formik'
import { useState } from 'react'
import { questionarieAnswer } from '../../../types/answerType'
import { ResetButton } from '../resetButton'
import { PresentationText } from '../text-presentation'
import { MainOrientation } from '../text-mainOrientation'
import { AllRight } from '../text-Allright'

type AnswerValues = { [key: number]: string }

export const QuestionForm: React.FC<{ questions: question[], answers: questionarieAnswer[] }> = ({ questions, answers }) => {
    const [presentQuestionIndex, setPresentQuestionIndex] = useState(-1);
    const [feedback, setFeedback] = useState<questionarieAnswer[]>([]);
    const presentQuestion = questions[presentQuestionIndex];
    const nextIndex = presentQuestionIndex + 1;
    const nextQuestion = (values: AnswerValues) => {
        let nextIndexToCheck = nextIndex;
        let nextQuestionToCheck = questions[nextIndexToCheck];

        //Loop while testing the next Question
        while (nextQuestionToCheck && nextQuestionToCheck.shouldSkip?.(values)) {
            nextIndexToCheck++;
            nextQuestionToCheck = questions[nextIndexToCheck];
        }

        if (nextIndexToCheck >= questions.length) {
            const feedbacks = answers.filter((answer) => {
                return (answer.shouldAnswer?.(values))
            })
            setFeedback(feedbacks)
            setPresentQuestionIndex(nextIndexToCheck)
            return
        } else {
            setPresentQuestionIndex(nextIndexToCheck)
        }
    };
    const resetForm = () => {
        setPresentQuestionIndex(-1);
        setFeedback([]);
    };

    return (
        presentQuestionIndex === -1 ?
            (<div className='form'>
                <PresentationText />
                <button className='nextQuestion' type='button' onClick={() => setPresentQuestionIndex(0)}> Começar </button>
            </div>)
            : presentQuestionIndex >= questions.length ?
                feedback.length === 0 ?
                    (
                        <>
                            <AllRight />
                            <ResetButton onReset={resetForm} />
                        </>
                    )
                    :
                    (<div className='feedback'>
                        <h2>Orientações</h2>
                        <MainOrientation />
                        {feedback.map((item, index) => {
                            return (
                                <div key={index}>
                                    <p dangerouslySetInnerHTML={{ __html: item.answer }} />
                                </div>
                            )
                        })}
                        <ResetButton onReset={resetForm} />
                    </div>
                    )
                :
                (<div className='form'>
                    <Formik
                        initialValues={{}}
                        onSubmit={(values) => {
                            nextQuestion(values)
                            console.log(values)
                        }}
                    >
                        {() => (
                            <Form >
                                <div key={presentQuestion.id}>
                                    <div className='question'>
                                        <label className='number'> PERGUNTA {presentQuestion.id}</label>
                                        <label >{presentQuestion.question}</label>
                                    </div>
                                    <div className='answers'>
                                        {presentQuestion.options.map((option) => (
                                            <label className='answer' key={option}>
                                                <Field type="radio" name={presentQuestion.id} value={option} required />
                                                {option}

                                            </label>
                                        ))

                                        }
                                    </div>

                                </div>
                                <button className='nextQuestion' type='submit'> PRÓXIMA PERGUNTA</button>
                                <ResetButton onReset={resetForm} />

                            </Form>
                        )}

                    </Formik>
                </div >
                )
    );
}