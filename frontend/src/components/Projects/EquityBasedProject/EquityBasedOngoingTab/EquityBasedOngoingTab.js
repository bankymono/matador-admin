import React, {useMemo, useState} from 'react';
import './EquityBasedOngoingTab.css';
import search_icon from '../../../../assets/icons/search-icon-img.png'
import Pagination from '../../../Pagination/Pagination';
import MoreOptionsMenu from '../../../MoreOptionsMenu/MoreOptionsMenu';
import { useTable }from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import {COLUMNS, COLUMNS2} from './columns';
import ReusableTable from '../../../ReusableTable/ReusableTable';

const EquityBasedOngoingTab = ({eqLoading, eqError, equityInvestments}) => {


    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);

    // const tableInstance = useTable({
    //     columns,
    //     data
    // })

    // const {
    //     getTableProps, 
    //     getTableBodyProps,
    //     headerGroups,
    //     rows,
    //     prepareRow
    // } = useTable({
    //     columns,
    //     data
    // }) 

    return (
        <>

            <div>
            {/* <div className="equity-based-ongoing-search-header">
                <div className="search-input-container">
                    <img src={search_icon} alt="search" />
                    <input value={filtered || ""} 
                        onChange={e => setFiltered(e.target.value)}
                    placeholder="Search" />
                </div>

                <select className="equity-based-ongoing-select">
                    <option>All investment</option>
                    <option>investment 2</option>
                    <option>investment 3</option>
                </select>
            </div> */}

            {eqLoading ? null : <ReusableTable 
                columnsConfig={COLUMNS} 
                columnsConfig2={COLUMNS2} 
                dataConfig={MOCK_DATA} 
                dataConfig2={equityInvestments} 
            />}
            

            {/* <div className="equity-based-ongoing-info-heading">
                <input type="checkbox" />
                <div className="equity-based-ongoing-info-heading-wrapper">
                    <div className="equity-based-ongoing-info-heading-item">Investor name</div>
                    <div className="equity-based-ongoing-info-heading-item">Equity Type</div>
                    <div className="equity-based-ongoing-info-heading-item">Number of fractions</div>
                    <div className="equity-based-ongoing-info-heading-item">Investment Date</div>
                    <div className="equity-based-ongoing-info-heading-item">Amount Invested</div>
                </div>
            </div>

            <div className="equity-based-ongoing-info-body-list">
                <div className="equity-based-ongoing-info-body">
                    <input type="checkbox" />
                    <div className="equity-based-ongoing-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <MoreOptionsMenu />
                </div>

                <div className="equity-based-ongoing-info-body">
                    <input type="checkbox" />
                    <div className="equity-based-ongoing-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <MoreOptionsMenu />
                </div>

                <div className="equity-based-ongoing-info-body">
                    <input type="checkbox" />
                    <div className="equity-based-ongoing-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <MoreOptionsMenu />
                </div>

                <div className="equity-based-ongoing-info-body">
                    <input type="checkbox" />
                    <div className="equity-based-ongoing-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <MoreOptionsMenu />
                </div>

                <div className="equity-based-ongoing-info-body">
                    <input type="checkbox" />
                    <div className="equity-based-ongoing-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <MoreOptionsMenu />
                </div>

                <div className="equity-based-ongoing-info-body">
                    <input type="checkbox" />
                    <div className="equity-based-ongoing-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <MoreOptionsMenu />
                </div>
            </div> */}

            <div className="equity-based-ongoing-bottom-pagination-container">
                <div>Showing: <span className="val">100</span></div>
                <div><Pagination /></div>
            </div>
            
        </div>

{/* ####################################################################################### */}
        {/* <div>
            <div className="equity-based-ongoing-search-header">
                <div className="search-input-container">
                    <img src={search_icon} alt="search" />
                    <input placeholder="Search" />
                </div>

                <select className="equity-based-ongoing-select">
                    <option>All investment</option>
                    <option>investment 2</option>
                    <option>investment 3</option>
                </select>
            </div>

            <div className="equity-based-ongoing-info-heading">
                <input type="checkbox" />
                <div className="equity-based-ongoing-info-heading-wrapper">
                    <div className="equity-based-ongoing-info-heading-item">Investor name</div>
                    <div className="equity-based-ongoing-info-heading-item">Equity Type</div>
                    <div className="equity-based-ongoing-info-heading-item">Number of fractions</div>
                    <div className="equity-based-ongoing-info-heading-item">Investment Date</div>
                    <div className="equity-based-ongoing-info-heading-item">Amount Invested</div>
                </div>
            </div>

            <div className="equity-based-ongoing-info-body-list">
                <div className="equity-based-ongoing-info-body">
                    <input type="checkbox" />
                    <div className="equity-based-ongoing-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <MoreOptionsMenu />
                </div>

                <div className="equity-based-ongoing-info-body">
                    <input type="checkbox" />
                    <div className="equity-based-ongoing-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <MoreOptionsMenu />
                </div>

                <div className="equity-based-ongoing-info-body">
                    <input type="checkbox" />
                    <div className="equity-based-ongoing-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <MoreOptionsMenu />
                </div>

                <div className="equity-based-ongoing-info-body">
                    <input type="checkbox" />
                    <div className="equity-based-ongoing-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <MoreOptionsMenu />
                </div>

                <div className="equity-based-ongoing-info-body">
                    <input type="checkbox" />
                    <div className="equity-based-ongoing-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <MoreOptionsMenu />
                </div>

                <div className="equity-based-ongoing-info-body">
                    <input type="checkbox" />
                    <div className="equity-based-ongoing-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <MoreOptionsMenu />
                </div>
            </div>

            <div className="equity-based-ongoing-bottom-pagination-container">
                <div>Showing: <span className="val">100</span></div>
                <div><Pagination /></div>
            </div>
            
        </div> */}
        </>
        
    )
}

export default EquityBasedOngoingTab
