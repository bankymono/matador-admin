import React, {useMemo, useState} from 'react';
import './SIOngoingTab.css';
import search_icon from '../../../assets/icons/search-icon-img.png'
// import search_icon from '../../../assets/icons/search-icon-img.png'
// import Pagination from '../../../Pagination/Pagination';
// import MoreOptionsMenu from '../../../MoreOptionsMenu/MoreOptionsMenu';
import { useTable }from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import {COLUMNS, COLUMNS2} from './columns';
// import ReusableTable from '../../../ReusableTable/ReusableTable';
import Pagination from '../../Pagination/Pagination';
import ReusableTable from '../../ReusableTable/ReusableTable';
import SoleFI from '../../modals/SoleFIModal/SoleFI';
import { useHistory } from 'react-router-dom';

const SIOngoingTab = ({eqLoading, eqError, equityInvestments}) => {
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory()

    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);

    const closeModal = () =>{
        setIsOpen(false);
        history.push(`/investments/fixed-income/sole`)
    }

    return (
        <>
            <div>
                {eqLoading ? null : <ReusableTable 
                    columnsConfig={COLUMNS} 
                    columnsConfig2={COLUMNS2} 
                    dataConfig={MOCK_DATA} 
                    dataConfig2={equityInvestments} 
                    // isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />}  

            <div className="s-i-ongoing-bottom-pagination-container">
                <div>Showing: <span className="val">100</span></div>
                <div><Pagination /></div>
            </div>
            <SoleFI setIsOpen={setIsOpen} open={isOpen} onClose={closeModal} />
        </div>

{/* ####################################################################################### */}
        {/* <div>
            <div className="s-i-ongoing-search-header">
                <div className="search-input-container">
                    <img src={search_icon} alt="search" />
                    <input placeholder="Search" />
                </div>

                <select className="s-i-ongoing-select">
                    <option>All investment</option>
                    <option>investment 2</option>
                    <option>investment 3</option>
                </select>
            </div>

            <div className="s-i-ongoing-info-heading">
                <input type="checkbox" />
                <div className="s-i-ongoing-info-heading-wrapper">
                    <div className="s-i-ongoing-info-heading-item">Investor name</div>
                    <div className="s-i-ongoing-info-heading-item">Equity Type</div>
                    <div className="s-i-ongoing-info-heading-item">Number of fractions</div>
                    <div className="s-i-ongoing-info-heading-item">Investment Date</div>
                    <div className="s-i-ongoing-info-heading-item">Amount Invested</div>
                </div>
            </div>

            <div className="s-i-ongoing-info-body-list">
                <div className="s-i-ongoing-info-body">
                    <input type="checkbox" />
                    <div className="s-i-ongoing-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <MoreOptionsMenu />
                </div>

                <div className="s-i-ongoing-info-body">
                    <input type="checkbox" />
                    <div className="s-i-ongoing-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <MoreOptionsMenu />
                </div>

                <div className="s-i-ongoing-info-body">
                    <input type="checkbox" />
                    <div className="s-i-ongoing-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <MoreOptionsMenu />
                </div>

                <div className="s-i-ongoing-info-body">
                    <input type="checkbox" />
                    <div className="s-i-ongoing-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <MoreOptionsMenu />
                </div>

                <div className="s-i-ongoing-info-body">
                    <input type="checkbox" />
                    <div className="s-i-ongoing-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <MoreOptionsMenu />
                </div>

                <div className="s-i-ongoing-info-body">
                    <input type="checkbox" />
                    <div className="s-i-ongoing-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <MoreOptionsMenu />
                </div>
            </div>

            <div className="s-i-ongoing-bottom-pagination-container">
                <div>Showing: <span className="val">100</span></div>
                <div><Pagination /></div>
            </div>
            
        </div> */}
        </>
        
    )
}

export default SIOngoingTab
