import React, { useEffect } from 'react'
import './VerificationIdList.css'
import MoreOptionsMenu from '../../components/MoreOptionsMenu/MoreOptionsMenu'

import search_icon from '../../assets/icons/search-icon-img.png'
import Pagination from '../../components/Pagination/Pagination';   
import SideBar from '../../components/SideBar/SideBar';
import { useState } from 'react';
import Header from '../../components/Header/Header';
import SubNav from '../../components/SubNav/SubNav';

// const NewInvBtn = () => {
//     return (
//         <div className="txn-lists-new-btn-container">
//             <button className="txn-lists-new-btn">New Investment</button>
//             <MoreOptionsMenu />
//         </div>
//     )
// }

const VerificationIdList = ({match, arrLinks}) => {
    const [currentPage, setCurrentPage] = useState("ID Verification");
    const [newArrLinks,setNewArrLinks] = useState([...arrLinks]);

    
    useEffect(()=>{
        setNewArrLinks(prev => {
            return prev.map((str,id)=>{
                if(prev.length - 1 === id){
                    return str + " / Unverified"
                }

                return str
            })
        })
    },[arrLinks])
    return (
        <div>
            <SideBar setCurrentPage={setCurrentPage} />
            <div className="header-and-center-container">
                <Header />
                <SubNav currentPage={currentPage} arrLinks={newArrLinks}  />

                <div className="v-id-list-container">
                    <div className="user-v-id-list-search-header">
                        <div className="search-input-container">
                            <img src={search_icon} alt="search" />
                            <input placeholder="Search" />
                        </div>

                        <select className="user-v-id-list-select">
                            <option>All investment</option>
                            <option>investment 2</option>
                            <option>investment 3</option>
                        </select>
                    </div>

                    <div className="user-v-id-list-info-heading">
                        <input type="checkbox" />
                        <div className="user-v-id-list-info-heading-wrapper">
                            <div className="user-v-id-list-info-heading-item">Investor name</div>
                            <div className="user-v-id-list-info-heading-item">Amount</div>
                            <div className="user-v-id-list-info-heading-item">Duration</div>
                            <div className="user-v-id-list-info-heading-item">Duration left</div>
                            <div className="user-v-id-list-info-heading-item">Start  date</div>
                        </div>
                    </div>

                    <div className="user-v-id-list-info-body-list">
                        <div className="user-v-id-list-info-body">
                            <input type="checkbox" />
                            <div className="user-v-id-list-info-body-wrapper">
                                <div>cell</div>
                                <div>cell</div>
                                <div>cell</div>
                                <div>cell</div>
                                <div>cell</div>
                            </div>
                            <MoreOptionsMenu />
                        </div>

                        <div className="user-v-id-list-info-body">
                            <input type="checkbox" />
                            <div className="user-v-id-list-info-body-wrapper">
                                <div>cell</div>
                                <div>cell</div>
                                <div>cell</div>
                                <div>cell</div>
                                <div>cell</div>
                            </div>
                            <MoreOptionsMenu />
                        </div>

                        <div className="user-v-id-list-info-body">
                            <input type="checkbox" />
                            <div className="user-v-id-list-info-body-wrapper">
                                <div>cell</div>
                                <div>cell</div>
                                <div>cell</div>
                                <div>cell</div>
                                <div>cell</div>
                            </div>
                            <MoreOptionsMenu />
                        </div>

                        <div className="user-v-id-list-info-body">
                            <input type="checkbox" />
                            <div className="user-v-id-list-info-body-wrapper">
                                <div>cell</div>
                                <div>cell</div>
                                <div>cell</div>
                                <div>cell</div>
                                <div>cell</div>
                            </div>

                            <MoreOptionsMenu />
                        </div>

                        <div className="user-v-id-list-info-body">
                            <input type="checkbox" />
                            <div className="user-v-id-list-info-body-wrapper">
                                <div>cell</div>
                                <div>cell</div>
                                <div>cell</div>
                                <div>cell</div>
                                <div>cell</div>
                            </div>

                            <MoreOptionsMenu />
                        </div>

                        <div className="user-v-id-list-info-body">
                            <input type="checkbox" />
                            <div className="user-v-id-list-info-body-wrapper">
                                <div>cell</div>
                                <div>cell</div>
                                <div>cell</div>
                                <div>cell</div>
                                <div>cell</div>
                            </div>

                            <MoreOptionsMenu />
                        </div>
                    </div>

                    <div className="user-v-id-list-bottom-pagination-container">
                        <div>Showing: <span className="val">100</span></div>
                        <div><Pagination /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerificationIdList
