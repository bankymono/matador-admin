import React, { useState } from 'react'

const PaymentPlan = ({
    handleRemovePaymentPlan,
    theIndex,
    item,
    handlePaymentPlanInputChange,
    paymentPlanLength
}) => {

    const [showPaymentPlanForm, setShowPaymentPlanForm] = useState(false);

    return (
            <div className="payment-plan-inputs-wrapper">
                {
                    !showPaymentPlanForm && !(theIndex === (paymentPlanLength - 1)) ?(
                        <div className="payplan-inputs-summarized">
                        <div className="content-details">
                            <div className="content-details-item">
                                <div className="mini-heading">Initial Deposit %</div>
                                <div className="mini-desc">10%</div>
                            </div>
        
                            <div className="content-details-item">
                                <div className="mini-heading">Initial Deposit Amount</div>
                                <div className="mini-desc">450,000</div>
                            </div>
        
                            <div className="content-details-item">
                                <div className="mini-heading">Available Payment Period in Months</div>
                                <div className="mini-desc">12</div>
                            </div>
        
                            <div className="content-details-item">
                                <div className="mini-heading">Monthly Payment</div>
                                <div className="mini-desc">120,000</div>
                            </div>
                        </div>
                        
                        <div className="controls-wrapper">
                            <button className="delete-btn">Delete</button>
                            <button className="expand-collapse-btn">Expand</button>
                        </div>
                    </div>

                    ):null
                }

                {
                    showPaymentPlanForm || (theIndex === (paymentPlanLength - 1)) ?(
                        <div className="proj-new-payment-plan-form-wrapper">
                        <div className="create-investment-info-heading">Payment Plan</div>

                        <div className="create-proj-two-fields-row payplan-input-container">
                            <div className="create-proj-input-container">
                                <label className="create-proj-input-label" htmlFor="proj-img-name">Initial deposit percentage</label>
                                <div className="create-proj-input-with-prefix"><span className="create-proj-input-prefix">%</span><input type="text" /></div>
                            </div>

                            <div className="create-proj-input-container">
                                <label className="create-proj-input-label" htmlFor="proj-img-name">Initial deposit amount</label>
                                <div className="create-proj-input-with-prefix"><span className="create-proj-input-prefix">N</span><input type="text" /></div>
                            </div>
                        </div>

                        <div className="create-proj-two-fields-row payplan-input-container">
                            <div className="create-proj-input-container">
                                <label className="create-proj-input-label" htmlFor="proj-name">Available payment period in months</label>
                                <input type="text" />
                            </div>

                            <div className="create-proj-input-container">
                                <label className="create-proj-input-label" htmlFor="proj-img-name">Monthly payment</label>
                                <div className="create-proj-input-with-prefix"><span className="create-proj-input-prefix">N</span><input type="text" /></div>
                            </div>

                        </div>
                </div>                           
                    ):null
                }




            </div>
    )
}

export default PaymentPlan
