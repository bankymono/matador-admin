import React from 'react'
import { BsChevronCompactRight } from 'react-icons/bs'

// import eq_img from '../../assets/icons/investment_equity.png'
// import fx_img from '../../assets/icons/investment_fixed.png'

const ProjDepTypeCard = ({typeText, icon}) => {
    return (
        <div className="proj-deps-type-card">
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

export default ProjDepTypeCard
