import React from 'react';
import './CreateDepositMethodButton.css';

const CreateDepositMethodButton = ({setIsOpen}) => {
    return (
        <div className="create-deposit-btn-container">
            <button onClick={() => {setIsOpen(true)}} className="create-deposit-btn">Create Deposit Method</button>
        </div>
    )
}

export default CreateDepositMethodButton