import React, {useState} from 'react';
import './ProjDepItemList.css';


import MOCK_DATA from './MOCK_DATA.json';
import {COLUMNS, COLUMNS2} from './columns';

import Pagination from '../../Pagination/Pagination';
import ProjDepItemTable from '../ProjDepItemTable/ProjDepItemTable';
import VIDDetails from '../../modals/VIDDetails/VIDDetails';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { listVerificationId } from '../../../redux/actions/userActions';
import ProjDepDetailModal from '../../modals/ProjDepDetailModal/ProjDepDetailModal';
import EquityInvestmentDetail from '../../modals/EquityInvestmentDetail/EquityInvestmentDetail';

const ProjDepItemList = ({veriType}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [veriIdsList, setveriIdsList] = useState([])
    const [verId, setVerId] = useState('');
    const [pagiOffset, setPagiOffset] = useState(0);


    const dispatch = useDispatch();

    const verificationIdList = useSelector(state => state.verificationIdList);
    const {verifyIdLoading, verificationIds, verificationIdError} = verificationIdList;


    // useEffect(()=>{
    //     if(veriType){
    //         dispatch(listVerificationId("True"));            
    //     }else{
    //         dispatch(listVerificationId("False"));  
    //     }


    // }, [dispatch, veriType])

    // useEffect(()=>{
    //     if(verifyIdLoading === false && !verificationIdError){
    //         constructObject(verificationIds)
    //     }
    // }, [verifyIdLoading,verificationIdError, verificationIds, verId])

    const constructObject = (verificationIds) => {

        // let unVerified = verificationIds.results.filter(verid => verid.status === false);
        // let verified = verificationIds.results.filter(verid => verid.status === true);

        let newArr = verificationIds.results.map(verid => {
            return({
                id:verid.id,
                full_name: verid.user.first_name + " " +  verid.user.last_name,
                document_type: verid.document_type === null ? "Unknown" : verid.document_type,
                status:verid.status === true ? "verified": "unverified"
            })
        })

        setveriIdsList(newArr)
    }

    const closeModal = () =>{        
        // history.push(`/investments/fixed-income/sole`)
        setVerId("");
        setIsOpen(false);
    }

    return (
        <>
            <div>

                 <ProjDepItemTable 
                    columnsConfig={COLUMNS} 
                    columnsConfig2={COLUMNS2} 
                    dataConfig={MOCK_DATA} 
                    dataConfig2={veriIdsList} 
                    setIsOpen={setIsOpen}
                    setVerId={setVerId}
                    verId={verId}
                    // setIsOpen={setIsOpen}
                />

            <div className="s-i-ongoing-bottom-pagination-container">
                <div>Showing: <span className="val">100</span></div>
                <div><Pagination /></div>
            </div>
            {/* <VIDDetails verId={verId} setIsOpen={setIsOpen} open={isOpen} onClose={closeModal} /> */}
            {/* <ProjDepDetailModal setIsOpen={setIsOpen} open={isOpen} onClose={closeModal} /> */}
            <EquityInvestmentDetail  setIsOpen={setIsOpen} open={isOpen} onClose={closeModal} />
        </div>

        </>
        
    )
}

export default ProjDepItemList
