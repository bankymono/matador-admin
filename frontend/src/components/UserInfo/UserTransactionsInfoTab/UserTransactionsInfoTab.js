import React from 'react';
import './UserTransactionsInfoTab.css';
import search_icon from '../../../assets/icons/search-icon-img.png'
import Pagination from '../../Pagination/Pagination';
import MoreOptionsMenu from '../../MoreOptionsMenu/MoreOptionsMenu';

const UserTransactionsInfoTab = () => {

    return (
        <div>
            <div className="user-transactions-search-header">
                <div className="search-input-container">
                    <img src={search_icon} alt="search" />
                    <input placeholder="Search" />
                </div>

                <select className="user-transactions-select">
                    <option>All investment</option>
                    <option>investment 2</option>
                    <option>investment 3</option>
                </select>
            </div>

            <div className="user-transactions-info-heading">
                <input type="checkbox" />
                <div className="user-transactions-info-heading-wrapper">
                    <div className="user-transactions-info-heading-item">Investor name</div>
                    <div className="user-transactions-info-heading-item">Amount</div>
                    <div className="user-transactions-info-heading-item">Duration</div>
                    <div className="user-transactions-info-heading-item">Duration left</div>
                    <div className="user-transactions-info-heading-item">Start  date</div>
                </div>
            </div>

            <div className="user-transactions-info-body-list">
                <div className="user-transactions-info-body">
                    <input type="checkbox" />
                    <div className="user-transactions-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>

                    <MoreOptionsMenu />
                </div>

                <div className="user-transactions-info-body">
                    <input type="checkbox" />
                    <div className="user-transactions-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <MoreOptionsMenu />
                </div>

                <div className="user-transactions-info-body">
                    <input type="checkbox" />
                    <div className="user-transactions-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <MoreOptionsMenu />
                </div>

                <div className="user-transactions-info-body">
                    <input type="checkbox" />
                    <div className="user-transactions-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <MoreOptionsMenu />
                </div>

                <div className="user-transactions-info-body">
                    <input type="checkbox" />
                    <div className="user-transactions-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <MoreOptionsMenu />
                </div>

                <div className="user-transactions-info-body">
                    <input type="checkbox" />
                    <div className="user-transactions-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <MoreOptionsMenu />
                </div>
            </div>

            <div className="user-transactions-bottom-pagination-container">
                <div>Showing: <span className="val">100</span></div>
                <div><Pagination /></div>
            </div>
            
        </div>
    )
}

export default UserTransactionsInfoTab
