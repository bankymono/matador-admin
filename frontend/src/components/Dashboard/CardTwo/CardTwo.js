import React from 'react'
import { numberWithComma } from '../../../redux/numberFormatter'

const CardTwo = ({paystackBalance}) => {
    return (
        <div className="dashboard-top-item dashboard-second-card">
            <div className="text-desc">Paystack Balance</div>
            <div className="value">₦{numberWithComma(paystackBalance)}<sup>.00</sup></div>
        </div>
    )
}

export default CardTwo
