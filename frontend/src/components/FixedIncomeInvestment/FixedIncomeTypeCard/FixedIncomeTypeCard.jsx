import React from 'react'
import { BsChevronCompactRight } from 'react-icons/bs'

// import eq_img from '../../assets/icons/investment_equity.png'
// import fx_img from '../../assets/icons/investment_fixed.png'

const FixedIncomeTypeCard = ({typeText, icon}) => {
    return (
        <div className="f-i-i-type-card">
        <img src={icon} alt=""  />    

        <div className="text-and-icon">
            <div className="">
                <div className="main-text">{typeText}</div>
            </div>
            {/* hello */}
            <BsChevronCompactRight className="iv-icon" />
        </div>
    </div>
    )
}

export default FixedIncomeTypeCard
