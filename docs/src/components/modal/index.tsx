import React, { useEffect, useState } from 'react';
import './styles.css'; // You'll need to create this CSS file
import { Field, Form, Formik } from 'formik';
import { question } from '../../../types/questionType';

// type AnswerValues = { [key: string]: string };
type AnswerValues = { [key: string]: string };

interface ModalProps {
    isOpen: boolean;
    onClose: (answers: { [key: string]: string }) => void;
    questions: question[]
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, questions }) => {
    const [modalAnswers, setModalAnswers] = useState<AnswerValues>({});

    useEffect(() => {
        if (!isOpen) {
            setModalAnswers({});
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (values: AnswerValues) => {
        onClose(values);
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="modal-close" onClick={() => onClose(modalAnswers)}>
                    X
                </button>
                <Formik
                    initialValues={modalAnswers}
                    onSubmit={handleSubmit}
                    enableReinitialize={true}
                >
                    {({ setFieldValue }) => (
                        <Form>
                            {questions.map((question) => (
                                <div key={`${question.id}`}>
                                    <div className='question'>
                                        <label className='number'> PERGUNTA {question.id}</label>
                                        <label dangerouslySetInnerHTML={{ __html: question.question }}
                                        ></label>
                                    </div>
                                    <div className='answers'>
                                        <Field
                                            name={`${question.id}`}
                                            type="number"
                                            required
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                setFieldValue(`${question.id}`, e.target.value);
                                                setModalAnswers({ ...modalAnswers, [question.id]: e.target.value });
                                            }}
                                        />

                                    </div>
                                </div>
                            ))}
                            <button type="submit">Calcular</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};
