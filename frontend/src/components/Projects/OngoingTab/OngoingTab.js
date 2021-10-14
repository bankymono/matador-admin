import React from 'react';
import './OngoingTab.css';
import search_icon from '../../../assets/icons/search-icon-img.png'
import Pagination from '../../Pagination/Pagination';
import MoreOptionsMenu from '../../MoreOptionsMenu/MoreOptionsMenu';

const OngoingTab = () => {

    return (
        <div>
            <div className="ongoing-search-header">
                <div className="search-input-container">
                    <img src={search_icon} alt="search" />
                    <input placeholder="Search" />
                </div>

                <select className="ongoing-select">
                    <option>All investment</option>
                    <option>investment 2</option>
                    <option>investment 3</option>
                </select>
            </div>

            <div className="ongoing-info-heading">
                <input type="checkbox" />
                <div className="ongoing-info-heading-wrapper">
                    <div className="ongoing-info-heading-item">Investor name</div>
                    <div className="ongoing-info-heading-item">Amount</div>
                    <div className="ongoing-info-heading-item">Duration</div>
                    <div className="ongoing-info-heading-item">Duration left</div>
                    <div className="ongoing-info-heading-item">Start  date</div>
                </div>
            </div>

            <div className="ongoing-info-body-list">
                <div className="ongoing-info-body">
                    <input type="checkbox" />
                    <div className="ongoing-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <MoreOptionsMenu />
                </div>

                <div className="ongoing-info-body">
                    <input type="checkbox" />
                    <div className="ongoing-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <MoreOptionsMenu />
                </div>

                <div className="ongoing-info-body">
                    <input type="checkbox" />
                    <div className="ongoing-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <MoreOptionsMenu />
                </div>

                <div className="ongoing-info-body">
                    <input type="checkbox" />
                    <div className="ongoing-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <MoreOptionsMenu />
                </div>

                <div className="ongoing-info-body">
                    <input type="checkbox" />
                    <div className="ongoing-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <MoreOptionsMenu />
                </div>

                <div className="ongoing-info-body">
                    <input type="checkbox" />
                    <div className="ongoing-info-body-wrapper">
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                        <div>cell</div>
                    </div>
                    <MoreOptionsMenu />
                </div>
            </div>

            <div className="ongoing-bottom-pagination-container">
                <div>Showing: <span className="val">100</span></div>
                <div><Pagination /></div>
            </div>
            
        </div>
    )
}

export default OngoingTab
