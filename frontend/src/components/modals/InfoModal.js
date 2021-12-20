import React from 'react';
import close_icon from '../../assets/icons/close-icon.png';
import './InfoModal.css';

const InfoModal = ({ modalTitle, closeModal, status, modalData }) => {
    return (
        <div onClick={() => closeModal()} className="create-deposit-method-container">
            <div onClick={(event) => event.stopPropagation()} className="create-deposit-method-input-wrapper">
                <div className="create-deposit-heading">
                    <div>{modalTitle}</div>
                    <img src={close_icon} alt="close" onClick={() => closeModal()} />
                </div>
                <div className="info-modal-wrapper">
                    <div className="holder">
                        <p className="status">{status}</p>
                    </div>
                    {
                        modalData.map((data, index) => (
                            <div key={index} className="holder">
                                <p className="header">{data.name}</p>
                                <p className="context">{data.context}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default InfoModal;