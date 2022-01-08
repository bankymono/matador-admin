import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import close_icon from '../../../assets/icons/close-icon.png';
// import { getInvestmentsDetail } from '../../../redux/actions/invActions';
import { getInvestmentsDetail } from '../../../redux/actions/investmentsActions';
import './InvestmentsDetail.css';
import UserInvImg from '../../../assets/images/user-inv-mg.png'

const InvestmentsDetail = ({ open, closeModal, invId }) => {

    const dispatch = useDispatch();

    const investmentsDetailItem = useSelector(state => state.investmentsDetailItem);
    const [singleInv, setSingleInv] = useState({})

    useEffect(()=> {
        if(open){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'scroll'
        }
    },[open]);

    useEffect(() => {
        if(invId){
            dispatch(getInvestmentsDetail(invId))
        }
    },[invId, dispatch])

    useEffect(() => {
        console.log(investmentsDetailItem.investmentsDetail?.data?.investment_type,'got here');
        if(investmentsDetailItem.investmentsDetailLoading === false && investmentsDetailItem.investmentsDetail){
            let dt = new Date(investmentsDetailItem.investmentsDetail.data.created_at)
            
            setSingleInv({
                investment_type: investmentsDetailItem.investmentsDetail?.data?.investment_type.name,
                amount_invested: investmentsDetailItem.investmentsDetail?.data?.amount_invested.toLocaleString(),
                investment_date: dt.toLocaleString(),
                project_details: investmentsDetailItem.investmentsDetail?.data.project.name,
            })

        }

    },[investmentsDetailItem])

    if(!open) return null;
    return (
        <div onClick={() => closeModal()} className="inv-details-modal-container">
            
            <div onClick={(event) => event.stopPropagation()} className="inv-details-modal-input-wrapper">
                <div className="inv-details-modal-heading">
                    <div>Investment Name</div>
                    <img src={close_icon} alt="close" onClick={() => closeModal()} />
                </div>
                <div className="i-d-m-wrapper">
                    {/* <div className="holder">
                        <p className="status">status</p>
                    </div> */}
                    <img src={UserInvImg} alt="dd" />
                    <div  className="holder">
                        <p className="header">Investment Type</p>
                        <p className="context">{singleInv.investment_type}</p>
                    </div>

                    <div  className="holder">
                        <p className="header">Amount Invested</p>
                        <p className="context">{singleInv.amount_invested}</p>
                    </div>

                    <div  className="holder">
                        <p className="header">Investment Date</p>
                        <p className="context">{singleInv.investment_date}</p>
                    </div>

                    <div  className="holder">
                        <p className="header">Project Details</p>
                        <p className="context">{singleInv.project_details}</p>
                    </div>

                    {/* <div  className="holder">
                        <p className="header">Date Created</p>
                        <p className="context">{singleInv.created_at}</p>
                    </div> */}

                </div>
            </div>
        </div>
    )
}

export default InvestmentsDetail;