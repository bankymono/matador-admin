import React, { useState } from 'react';
import './GeneralTable.css';
import search_icon from '../../assets/icons/search-icon-img.png'
import Pagination from '../Pagination/Pagination';
import MoreOptionsMenu from '../MoreOptionsMenu/MoreOptionsMenu';
import { BeatLoader } from 'react-spinners';

const GeneralTable = ({
    headList,
    bodyList,
    handleCellClick,
    usersPerPage,
    currentPageNumber,
    setCurrentPageNumber,
    handleSearch,  
    paginate,
    total_count,
    showTabControls,
    tabControlsButtonText,
    handleTabControl
}) => {
    // const [duplicatedList, setDuplicatedList] = useState(bodyList);
    const [activeTab, setActiveTab] = useState(tabControlsButtonText.buttonOne);
    
    return (
        <div>
            {   
            showTabControls?
                <div className="general-tabs-controls">
                    <div className={activeTab===tabControlsButtonText.buttonOne? "tabs active-tabs": "tabs"} onClick={()=> {setActiveTab(tabControlsButtonText.buttonOne); handleTabControl(tabControlsButtonText.buttonOne);}}>{tabControlsButtonText.buttonOne}</div>
                    <div className={activeTab===tabControlsButtonText.buttonTwo? "tabs active-tabs": "tabs"} onClick={()=> {setActiveTab(tabControlsButtonText.buttonTwo); handleTabControl(tabControlsButtonText.buttonTwo);}}>{tabControlsButtonText.buttonTwo}</div>
                </div>
                :null
            }

            <div className={!showTabControls? "general-table-search-header borederRad": "general-table-search-header"} >

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
                    bodyList ?
                        bodyList.map((body, index) =>
                            <div key={index} className="general-table-info-body" onClick={() => { handleCellClick({ body, index }) }}>
                                <input type="checkbox" />
                                <div className="general-table-info-body-wrapper">
                                    <div>{`${body.data_one ? body.data_one : 'N/A'} ${body.last_name ? body.last_name : ''}`}</div>
                                    <div>{body.data_two ? body.data_two : 'N/A'}</div>
                                    <div>{body.data_three ? body.data_three : 'N/A'}</div>
                                    <div>{body.data_four ? body.data_four : 'N/A'}</div>
                                    <div>{body.data_five ? body.data_five : 'N/A'}</div>
                                </div>
                                <MoreOptionsMenu />
                            </div>) : <div className="general-table-info-body-wrapper"><BeatLoader loading={true} color="#03A678" /></div>}
            </div>

            <div className="general-table-bottom-pagination-container">
                <div>Showing: <span className="val">{total_count}</span></div>
                <div>
                    <Pagination
                        usersPerPage={usersPerPage}
                        currentPage={currentPageNumber}
                        listLength={total_count}
                        paginate={paginate}
                    />
                </div>
            </div>

        </div>
    )
}

export default GeneralTable
