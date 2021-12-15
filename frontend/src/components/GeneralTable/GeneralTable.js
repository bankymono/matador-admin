import React, { useState } from 'react';
import './GeneralTable.css';
import search_icon from '../../assets/icons/search-icon-img.png'
import Pagination from '../Pagination/Pagination';
import MoreOptionsMenu from '../MoreOptionsMenu/MoreOptionsMenu';

const GeneralTable = ({ headList, bodyList, handleCellClick }) => {
    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const [usersPerPage] = useState(5);
    const [duplicatedList, setDuplicatedList] = useState(bodyList);
    const paginate = (pageNumber) => setCurrentPageNumber(pageNumber);

    const indexOfLastUser = currentPageNumber * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers =()=>{
        const list = duplicatedList.length ? 
                duplicatedList.slice(indexOfFirstUser, indexOfLastUser) : 
                [''].slice(indexOfFirstUser, indexOfLastUser);
                return list
    }
    const handleSearch=(event)=>{
        let value = event.target.value.toLowerCase();
        let result = [];
        result = bodyList.filter((data) => {
            return data.first_name.toLowerCase().search(value) !== -1 || data.last_name.toLowerCase().search(value) !== -1;
            });
        setDuplicatedList(result);
    }
    return (
        <div>
            <div className="general-table-search-header">
                <div className="search-input-container">
                    <img src={search_icon} alt="search" />
                    <input placeholder="Search" onChange={handleSearch} />
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
                    duplicatedList ?
                        currentUsers().map((body, index) => 
                        <div key={index} className="general-table-info-body" onClick={()=>{handleCellClick(body)}}>
                            <input type="checkbox" />
                            <div className="general-table-info-body-wrapper">
                                <div>{`${body.first_name? body.first_name : ''} ${body.last_name? body.last_name : ''}`}</div>
                                <div>{body.amount? body.amount : 'N/A'}</div>
                                <div>{body.duration? body.duration : 'N/A'}</div>
                                <div>{body.durationLeft? body.durationLeft : 'N/A'}</div>
                                <div>{body.startDate? body.startDate : 'N/A'}</div>
                            </div>
                            <MoreOptionsMenu />
                        </div>) : <div className="general-table-info-body-wrapper">Empty List</div>}
            </div>

            <div className="general-table-bottom-pagination-container">
                <div>Showing: <span className="val">{currentPageNumber}/{Math.ceil(duplicatedList.length / usersPerPage)}</span></div>
                <div>
                    <Pagination 
                        usersPerPage={usersPerPage}
                        currentPage={currentPageNumber}
                        listLength={duplicatedList.length} 
                        paginate={paginate} 
                    />
                </div>
            </div>

        </div>
    )
}

export default GeneralTable
