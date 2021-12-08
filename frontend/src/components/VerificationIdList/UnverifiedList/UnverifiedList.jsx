import React, {useMemo, useState} from 'react';
import './UnverifiedList.css';
import search_icon from '../../../assets/icons/search-icon-img.png'
import { useTable }from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import {COLUMNS, COLUMNS2} from './columns';
// import ReusableTable from '../../../ReusableTable/ReusableTable';
import Pagination from '../../Pagination/Pagination';
// import ReusableTable from '../../ReusableTable/ReusableTable';
import SoleFI from '../../modals/SoleFIModal/SoleFI';
import { useHistory } from 'react-router-dom';
import VIDTable from '../VIDTable/VIDTable';
import VIDDetails from '../../modals/VIDDetails/VIDDetails';

const SIOngoingTab = ({eqLoading, eqError, equityInvestments}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [verId, setVerId] = useState('');
    const history = useHistory()

    // const columns = useMemo(() => COLUMNS, []);
    // const data = useMemo(() => MOCK_DATA, []);

    const closeModal = () =>{
        
        // history.push(`/investments/fixed-income/sole`)
        setVerId("");
        setIsOpen(false);
    }

    return (
        <>
            <div>
                {eqLoading ? null : <VIDTable 
                    columnsConfig={COLUMNS} 
                    columnsConfig2={COLUMNS2} 
                    dataConfig={MOCK_DATA} 
                    dataConfig2={equityInvestments} 
                    setIsOpen={setIsOpen}
                    setVerId={setVerId}
                    verId={verId}
                />}  

            <div className="s-i-ongoing-bottom-pagination-container">
                <div>Showing: <span className="val">100</span></div>
                <div><Pagination /></div>
            </div>
            <VIDDetails verId={verId} setIsOpen={setIsOpen} open={isOpen} onClose={closeModal} />
        </div>


        </>
        
    )
}

export default SIOngoingTab
