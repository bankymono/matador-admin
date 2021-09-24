import React from 'react';
import { useState } from 'react';
import './CurrencyOptionsBtn.css';

const CurrencyOptionsBtn = () => {
    const [toggleState, setToggleState] = useState(1);
    
    const toggleTab = (tab) =>{
        setToggleState(tab)
    }
    return (
        <div className='currency-options-btn'>
            <div className={toggleState === 1 ? "currency-option-item active-currency-option": "currency-option-item"} onClick={() => toggleTab(1)}>Naira (₦)</div>
            <div className={toggleState === 2 ? "currency-option-item active-currency-option": "currency-option-item"} onClick={() => toggleTab(2)}>Dollar ($)</div>
        </div>
    )
}

export default CurrencyOptionsBtn
