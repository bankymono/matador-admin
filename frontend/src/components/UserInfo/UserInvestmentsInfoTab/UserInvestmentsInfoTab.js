import React, { useState } from 'react';
import './UserInvestmentsInfoTab.css';
import search_icon from '../../../assets/icons/search-icon-img.png'
import menu_dots_icon from '../../../assets/icons/menu-dots-icon.png'
import Pagination from '../../Pagination/Pagination';

const UserInvestmentsInfoTab = () => {
    const [items, setItems] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div>
            <div className="user-investments-search-header">
                <div className="search-input-container">
                    <img src={search_icon} alt="search" />
                    <input placeholder="Search" />
                </div>

                <select className="user-investments-select">
                    <option>All investment</option>
                    <option>investment 2</option>
                    <option>investment 3</option>
                </select>
            </div>

            <div className="user-investments-info-heading">
                <input type="checkbox" />
                <div className="user-investments-info-heading-wrapper">
                    <div className="user-investments-info-heading-item">Investor name</div>
                    <div className="user-investments-info-heading-item">Amount</div>
                    <div className="user-investments-info-heading-item">Duration</div>
                    <div className="user-investments-info-heading-item">Duration left</div>
                    <div className="user-investments-info-heading-item">Start  date</div>
                </div>
            </div>

            <div className="user-investments-info-body-list">
                <div className="user-investments-info-body">
                    <input type="checkbox" />
                    <div className="user-investments-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <img className="menu-dots" src={menu_dots_icon} alt="menu-dots" />
                </div>

                <div className="user-investments-info-body">
                    <input type="checkbox" />
                    <div className="user-investments-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <img className="menu-dots" src={menu_dots_icon} alt="menu-dots" />
                </div>

                <div className="user-investments-info-body">
                    <input type="checkbox" />
                    <div className="user-investments-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <img className="menu-dots" src={menu_dots_icon} alt="menu-dots" />
                </div>

                <div className="user-investments-info-body">
                    <input type="checkbox" />
                    <div className="user-investments-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <img className="menu-dots" src={menu_dots_icon} alt="menu-dots" />
                </div>

                <div className="user-investments-info-body">
                    <input type="checkbox" />
                    <div className="user-investments-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <img className="menu-dots" src={menu_dots_icon} alt="menu-dots" />
                </div>

                <div className="user-investments-info-body">
                    <input type="checkbox" />
                    <div className="user-investments-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <img className="menu-dots" src={menu_dots_icon} alt="menu-dots" />
                </div>
            </div>

            <div className="user-investments-bottom-pagination-container">
                <div>Showing: <span className="val">100</span></div>
                <div><Pagination /></div>
            </div>
            
        </div>
    )
}

export default UserInvestmentsInfoTab
