import React, { useState } from 'react'
import './PaymentPlan.css';
const PaymentPlan = ({
    handleRemovePaymentPlan,
    theIndex,
    item,
    handlePaymentPlanInputChange,
    paymentPlanLength
}) => {

    const [showPaymentPlanForm, setShowPaymentPlanForm] = useState(true);

    return (
        <div className="payment-plan-inputs-wrapper">
            <div className="title-and-collapse-btn-wrapper proj-new-payment-plan-form-wrapper">
                <div className="create-investment-info-heading">Payment Plan</div>
                <div>
                <button onClick={(e) => handleRemovePaymentPlan(e, theIndex)} 
                    className="bundle-delete-btn">Delete</button>
                <button onClick={() => setShowPaymentPlanForm(!showPaymentPlanForm)} 
                    className="expand-collapse-btn">
                    {showPaymentPlanForm ? 'Collapse' : 'Expand'}</button>
                </div>
                
            </div>
            {
                showPaymentPlanForm ? (
                    <div className="proj-new-payment-plan-form-wrapper">

                        <div className="create-proj-two-fields-row payplan-input-container">
                            <div className="create-proj-input-container">
                                <label className="create-proj-input-label" htmlFor="proj-img-name">Initial deposit percentage</label>
                                <div className="create-proj-input-with-prefix">
                                    <span className="create-proj-input-prefix">%</span>
                                    <input type="number" name="initialDepositPercent"
                                        value={item.initialDepositPercent}
                                        className={item.initialDepositPercentError ? "error-border" : ""}
                                        onChange={(e) => handlePaymentPlanInputChange(theIndex, e)} />
                                </div>
                            </div>

                            <div className="create-proj-input-container">
                                <label className="create-proj-input-label" htmlFor="proj-img-name">Initial deposit amount</label>
                                <div className="create-proj-input-with-prefix">
                                    <span className="create-proj-input-prefix">N</span>
                                    <input type="number" name="initialDepositAmount"
                                        value={item.initialDepositAmount}
                                        className={item.initialDepositAmountError ? "error-border" : ""}
                                        onChange={(e) => handlePaymentPlanInputChange(theIndex, e)}/>
                                    </div>
                            </div>
                        </div>

                        <div className="create-proj-two-fields-row payplan-input-container">
                            <div className="create-proj-input-container">
                                <label className="create-proj-input-label" htmlFor="proj-name">Available payment period in months</label>
                                <input type="number" name="availablePaymentPeriod"
                                        value={item.availablePaymentPeriod}
                                        className={item.availablePaymentPeriodError ? "error-border" : ""}
                                        onChange={(e) => handlePaymentPlanInputChange(theIndex, e)} />
                            </div>

                            <div className="create-proj-input-container">
                                <label className="create-proj-input-label" htmlFor="proj-img-name">Monthly payment</label>
                                <div className="create-proj-input-with-prefix">
                                    <span className="create-proj-input-prefix">N</span>
                                    <input type="number"name="monthlyPayment"
                                        value={item.monthlyPayment}
                                        className={item.monthlyPaymentError ? "error-border" : ""}
                                        onChange={(e) => handlePaymentPlanInputChange(theIndex, e)} /></div>
                            </div>

                        </div>
                    </div>
                ) : null
            }

        </div>
    )
}

export default PaymentPlan
