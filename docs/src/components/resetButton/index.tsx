import React from 'react';
import './styles.css';
import { RedoOutlined } from '@ant-design/icons';

interface ResetButtonProp {
    onReset: () => void;
}
export const ResetButton: React.FC<ResetButtonProp> = ({ onReset }) => {
    return (
        <button id='reset-button' onClick={onReset}>
            <RedoOutlined spin />
        </button>
    )
}