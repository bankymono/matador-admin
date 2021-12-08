import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import CurrencyOptionsBtn from '../../components/CurrencyOptionsBtn/CurrencyOptionsBtn';
import VIDTabs from '../../components/VerificationIdList/VIDTabs/VIDTabs';
// import VerificationIdListListOverviewCard from '../../components/VerificationIdList/VerificationIdListOverviewCard/VerificationIdListOverviewCard';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import SubNav from '../../components/SubNav/SubNav';
// import { getVerificationIdListStat } from '../../redux/actions/investmentsActions';

import './VerificationIdList.css'

// import ProjectListOverviewCardTwo from './ProjectsListOverviewCardTwo/ProjectsListOverviewCardTwo';

const VerificationIdList = ({arrLinks}) => {
    const [currentPage, setCurrentPage] = useState("ID Verification");
    const [newArrLinks,setNewArrLinks] = useState([...arrLinks]);


    useEffect(()=>{
        setNewArrLinks(prev => {
            return prev.map((str,id)=>{
                if(prev.length - 1 === id){
                    return str + " / Unverified"
                }

                return str
            })
        })
    },[arrLinks])

    return (
        <div>
            <SideBar setCurrentPage={setCurrentPage} />
            <div className="header-and-center-container">
                <Header />
                <SubNav 
                    currentPage={currentPage} 
                    arrLinks={newArrLinks} 
                     
                />

                <div className="v-id-list-center-content-wrapper">
                    <VIDTabs />
                </div>
            </div>
        </div>
    )
}

export default VerificationIdList
