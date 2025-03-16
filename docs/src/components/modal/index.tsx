import React from 'react';
import './styles.css'; // You'll need to create this CSS file

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="modal-close" onClick={onClose}>
                    X
                </button>
                <div className="modal-content">{children}</div>
            </div>
        </div>
    );
};
