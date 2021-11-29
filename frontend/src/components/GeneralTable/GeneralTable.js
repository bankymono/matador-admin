import React, { useState } from 'react';
import './GeneralTable.css';
import search_icon from '../../assets/icons/search-icon-img.png'
import Pagination from '../Pagination/Pagination';
import MoreOptionsMenu from '../MoreOptionsMenu/MoreOptionsMenu';

const GeneralTable = ({ headList, bodyList }) => {
    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const [usersPerPage] = useState(1);
    const paginate = (pageNumber) => setCurrentPageNumber(pageNumber);

    const indexOfLastUser = currentPageNumber * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers =()=>{
        const list = bodyList.length ? 
                bodyList.slice(indexOfFirstUser, indexOfLastUser) : 
                [''].slice(indexOfFirstUser, indexOfLastUser);
                return list
    } 
    
    return (
        <div>
            <div className="general-table-search-header">
                <div className="search-input-container">
                    <img src={search_icon} alt="search" />
                    <input placeholder="Search" />
                </div>

                <select className="general-table-select">
                    <option>All investment</option>
                    <option>investment 2</option>
                    <option>investment 3</option>
                </select>
            </div>

            <div className="general-table-info-heading">
                <input type="checkbox" />
                <div className="general-table-info-heading-wrapper">
                    {headList.map((list, index) =>
                        <div key={index} className="general-table-info-heading-item">
                            {list}
                        </div>)}
                </div>
            </div>

            <div className="general-table-info-body-list">

                {
                    bodyList ?
                        currentUsers().map((body, index) => 
                        <div key={index} className="general-table-info-body">
                            <input type="checkbox" />
                            <div className="general-table-info-body-wrapper">
                                <div>{body.name}</div>
                                <div>{body.amount}</div>
                                <div>{body.duration}</div>
                                <div>{body.durationLeft}</div>
                                <div>{body.startDate}</div>
                            </div>
                            <MoreOptionsMenu />
                        </div>) : <div className="general-table-info-body-wrapper">Empty List</div>}
            </div>

            <div className="general-table-bottom-pagination-container">
                <div>Showing: <span className="val">100</span></div>
                <div>
                    <Pagination 
                        usersPerPage={usersPerPage}
                        currentPage={currentPageNumber}
                        listLength={bodyList.length} 
                        paginate={paginate} 
                    />
                </div>
            </div>

        </div>
    )
}

export default GeneralTable
