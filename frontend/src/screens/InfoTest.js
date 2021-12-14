import React, { useState } from 'react';
import Header from '../components/Header/Header';
import InfoModal from '../components/modals/InfoModal';
import SideBar from '../components/SideBar/SideBar';
import SubNav from '../components/SubNav/SubNav';

const InfoTest = ({ arrLinks }) => {
    const [currentPage, setCurrentPage] = useState('test');
    const [showInfoModal, setInfoModal] = useState(false);
    const modalData = [
        {name: "ROI", context: "23200000"}, 
        {name: 'Duration', context: '65 Days'}, 
        {name: 'Amount Invested', context: '232300000'},
        {name: 'Start Date', context: '23 Dec, 2020'},
        {name: 'Maturity Date', context: '23 Dec, 2020'},
        {name: 'Maturity Date', context: 'Withdraw both my capital and interest after 3 months'}
    ]
    return (
        <div>
            <SideBar setCurrentPage={setCurrentPage} />
            <div className="header-and-center-container">
                <Header />
                <SubNav currentPage={currentPage} arrLinks={arrLinks} />
                <div className="user-info-container">
                    <button onClick={() => setInfoModal(true)}>show modal</button>
                </div>
            </div>
            {showInfoModal ?
                <InfoModal 
                    modalTitle="Sole Investment" 
                    status={'Active'} 
                    modalData={modalData} 
                    closeModal={()=>setInfoModal(false)} 
                />
                : null
            }
        </div>
    )
}

export default InfoTest;