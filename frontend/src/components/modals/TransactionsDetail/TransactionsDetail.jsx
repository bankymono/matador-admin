import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import close_icon from '../../../assets/icons/close-icon.png';
import { getTransactionsDetail } from '../../../redux/actions/transactionsActions';
import './TransactionsDetail.css';
import UserInvImg from '../../../assets/images/user-inv-mg.png'

const TransactionsDetail = ({ open, closeModal, txnId }) => {

    const dispatch = useDispatch();

    const transactionsDetailItem = useSelector(state => state.transactionsDetailItem);
    const [singleTxn, setSingleTxn] = useState({})

    useEffect(()=> {
        if(open){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'scroll'
        }
    },[open]);

    useEffect(() => {
        if(txnId){
            dispatch(getTransactionsDetail(txnId))
        }
    },[txnId, dispatch])

    useEffect(() => {
        // console.log(transactionsDetailItem.transactionsDetail,'errrmmm');
        if(transactionsDetailItem.transactionsDetailLoading === false){
            let dt = new Date(transactionsDetailItem.transactionsDetail.data.created_at)

            setSingleTxn({
                name: transactionsDetailItem.transactionsDetail.data.user.first_name + " " + transactionsDetailItem.transactionsDetail.data.user.last_name,
                amount: transactionsDetailItem.transactionsDetail.data.amount.toLocaleString(),
                transaction_action_type: transactionsDetailItem.transactionsDetail.data.transaction_action_type === null ? "Not available" : transactionsDetailItem.transactionsDetail.data.transaction_action_type,
                description: transactionsDetailItem.transactionsDetail.data.description,
                created_at: dt.toLocaleString()
            })

        }

    },[transactionsDetailItem])

    if(!open) return null;
    return (
        <div onClick={() => closeModal()} className="transactions-details-modal-container">
            
            <div onClick={(event) => event.stopPropagation()} className="transactions-details-modal-input-wrapper">
                <div className="txns-details-modal-heading">
                    <div>Transaction Info</div>
                    <img src={close_icon} alt="close" onClick={() => closeModal()} />
                </div>
                <div className="t-d-m-wrapper">
                    {/* <div className="holder">
                        <p className="status">status</p>
                    </div> */}

                    <img src={UserInvImg} alt="dd" />
                    <div  className="holder">
                        <p className="header">Investor Name</p>
                        <p className="context">{singleTxn.name}</p>
                    </div>

                    <div  className="holder">
                        <p className="header">Amount</p>
                        <p className="context">{singleTxn.amount}</p>
                    </div>

                    <div  className="holder">
                        <p className="header">Transaction Action Type</p>
                        <p className="context">{singleTxn.transaction_action_type}</p>
                    </div>

                    <div  className="holder">
                        <p className="header">Description</p>
                        <p className="context">{singleTxn.description}</p>
                    </div>

                    <div  className="holder">
                        <p className="header">Date Created</p>
                        <p className="context">{singleTxn.created_at}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TransactionsDetail;