import React, { useState } from 'react';
import './styles.css'; // You'll need to create this CSS file
import { calcQuestions } from '../../../calcQuestions';
import { Field, Form, Formik } from 'formik';
import { question } from '../../../types/questionType';

interface ModalProps {
    isOpen: boolean;
    onClose: (answers: { [key: number]: string }) => void;
    children: React.ReactNode;
    questions: question[]
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, questions }) => {
    const [modalAnswers, setModalAnswers] = useState<{ [key: number]: string }>({});

    if (!isOpen) return null;
    const handleModalSubmit = (values: { [key: number]: string }) => {
        onClose(values);
    }

    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="modal-close" onClick={() => onClose(modalAnswers)}>
                    X
                </button>
                <div className="modal-content">
                    {children}
                    <Formik
                        initialValues={modalAnswers}
                        onSubmit={handleModalSubmit}
                        enableReinitialize={true}
                    >
                        {({ values, setFieldValue }) => (
                            <Form>
                                {questions.map((question) => (
                                    <div key={question.id} className="modal-question">
                                        <label className='number'> PERGUNTA {question.id}</label>
                                        <label dangerouslySetInnerHTML={{ __html: question.question }}></label>
                                        <div className='answers'>
                                            {question.options.map((option) => (
                                                <label className='answer' key={option}>
                                                    <Field
                                                        type="radio"
                                                        name={question.id}
                                                        value={option}
                                                        required
                                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                            setFieldValue(question.id, e.target.value);
                                                            setModalAnswers({ ...modalAnswers, [question.id]: e.target.value });
                                                        }}
                                                    />
                                                    {option}
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                                <button type="submit">Salvar</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};
