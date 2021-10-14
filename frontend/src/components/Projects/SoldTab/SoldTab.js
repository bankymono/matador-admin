import React from 'react';
import './SoldTab.css';
import search_icon from '../../../assets/icons/search-icon-img.png'
import Pagination from '../../Pagination/Pagination';
import MoreOptionsMenu from '../../MoreOptionsMenu/MoreOptionsMenu';

const SoldTab = () => {

    return (
        <div>
            <div className="sold-search-header">
                <div className="search-input-container">
                    <img src={search_icon} alt="search" />
                    <input placeholder="Search" />
                </div>

                <select className="sold-select">
                    <option>All investment</option>
                    <option>investment 2</option>
                    <option>investment 3</option>
                </select>
            </div>

            <div className="sold-info-heading">
                <input type="checkbox" />
                <div className="sold-info-heading-wrapper">
                    <div className="sold-info-heading-item">Investor name</div>
                    <div className="sold-info-heading-item">Amount</div>
                    <div className="sold-info-heading-item">Duration</div>
                    <div className="sold-info-heading-item">Duration left</div>
                    <div className="sold-info-heading-item">Start  date</div>
                </div>
            </div>

            <div className="sold-info-body-list">
                <div className="sold-info-body">
                    <input type="checkbox" />
                    <div className="sold-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>

                    <MoreOptionsMenu />
                </div>

                <div className="sold-info-body">
                    <input type="checkbox" />
                    <div className="sold-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <MoreOptionsMenu />
                </div>

                <div className="sold-info-body">
                    <input type="checkbox" />
                    <div className="sold-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <MoreOptionsMenu />
                </div>

                <div className="sold-info-body">
                    <input type="checkbox" />
                    <div className="sold-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <MoreOptionsMenu />
                </div>

                <div className="sold-info-body">
                    <input type="checkbox" />
                    <div className="sold-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <MoreOptionsMenu />
                </div>

                <div className="sold-info-body">
                    <input type="checkbox" />
                    <div className="sold-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <MoreOptionsMenu />
                </div>
            </div>

            <div className="sold-bottom-pagination-container">
                <div>Showing: <span className="val">100</span></div>
                <div><Pagination /></div>
            </div>
            
        </div>
    )
}

export default SoldTab
