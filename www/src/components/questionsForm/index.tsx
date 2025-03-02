import './styles.css'
import { question } from "../../../types/questionType"
import { Field, Form, Formik } from 'formik'
import { useState } from 'react'

export const QuestionForm: React.FC<{ questions: question[] }> = ({ questions }) => {
    const [answers, setAnswers] = useState([]);
    const [questionIndex, setQuestionIndex] = useState(0);
    console.log(questions)
    const handleChange = (questionId, answer) => {
        setAnswers({ ...answers, [questionId]: answer });
    };
    const nextQuestion = () => {
        if (questionIndex < questions.length - 1) {
            setQuestionIndex(questionIndex + 1);
        }
    }
    const presentQuestion = questions[questionIndex];
    if (!presentQuestion) {
        return <div>sem mais perguntas</div>;
    }
    return (
        <div className='form'>
            <Formik
                initialValues={{
                    picked: '',
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ values }) => (
                    <Form>
                        {questions.map((question) => {
                            if (question.dependsOn) {
                                const dependentAnswer = answers[question.dependsOn.questionId];
                                if (dependentAnswer === question.dependsOn.answer) {
                                    return null; //não renderiza se não for atendida a condição
                                }
                            }
                            return (
                                <div key={question.id}>
                                    <label>{question.question}</label>
                                    {question.type === "radio" ? (
                                        question.options.map((option) => (
                                            <label key={option}>
                                                <Field type="radio" name="picked" value={option} />
                                                {option}

                                            </label>
                                        ))
                                    ) : (
                                        <h1>not radio</h1>
                                    )
                                    }
                                </div>
                            )
                        }
                        )}
                    </Form>
                )}

            </Formik>
        </div>);
}