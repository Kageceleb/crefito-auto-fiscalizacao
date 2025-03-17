import './styles.css'
import { question } from "../../../types/questionType"
import { Field, Form, Formik } from 'formik'
import { useEffect, useState } from 'react'
import { questionarieAnswer } from '../../../types/answerType'
import { ResetButton } from '../resetButton'
import { PresentationText } from '../text-presentation'
import { MainOrientation } from '../text-mainOrientation'
import { AllRight } from '../text-Allright'
import { Modal } from '../modal'

type AnswerValues = { [key: number]: string }

export const QuestionForm: React.FC<{ questions: question[], answers: questionarieAnswer[] }> = ({ questions, answers }) => {
    const [presentQuestionIndex, setPresentQuestionIndex] = useState(-1);
    const [feedback, setFeedback] = useState<questionarieAnswer[]>([]);
    const [IsModalOpen, setIsModalOpen] = useState(false);
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
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        // Add the openModal function to the window object
        window.openModal = openModal;

        // Clean up the window object when the component unmounts
        return () => {
            delete window.openModal;
        };
    }, [openModal]);

    return (
        presentQuestionIndex === -1 ?
            (<div className='feedback'>
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
                        <p>Após a situação irregular ter sido devidamente comunicada internamente ao hospital, não havendo providências no sentido de reagularizar a questão, lembramos que é dever dos profissionais comunicar os fatos ao Conselho ou autoridade competente, conforme dispõe o art.7º do Código de Ética Profissional (Res. 424/2013 e Res. 425/2013).</p>
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
                                        <label dangerouslySetInnerHTML={{ __html: presentQuestion.question }}
                                        ></label>
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
                    <Modal isOpen={IsModalOpen} onClose={closeModal}>
                        <h2>Calculadora</h2>
                        <ResetButton onReset={resetForm} />


                    </Modal>
                </div >
                )
    );
}