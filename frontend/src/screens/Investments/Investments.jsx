import React, { useState } from 'react'
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import SubNav from '../../components/SubNav/SubNav';
import './Investments.css';
import {BsChevronCompactRight} from 'react-icons/bs'

import eq_img from '../../assets/icons/investment_equity.png'
import fx_img from '../../assets/icons/investment_fixed.png'
import { Link } from 'react-router-dom';


const Investments = ({arrLinks}) => {
    const [currentPage, setCurrentPage] = useState("Investments");


    return (
        <div>
            <SideBar setCurrentPage={setCurrentPage} />

            <div className="header-and-center-container">
                <Header />
                <SubNav currentPage={currentPage} arrLinks={arrLinks}  />
                <div className="investments-container">
                    <div className="investments-wrapper">
                        <Link to="/" className="investments-link">
                        <div className="investment-type-card">
                            <img src={eq_img} alt=""  />    

                            <div className="text-and-icon">
                                <div className="">
                                    <div className="main-text">Equity Investment</div>
                                    {false && <div className="sub-text">4 Investments</div>}
                                </div>
                                <BsChevronCompactRight className="iv-icon" />
                            </div>
                        </div>
                        </Link>
                        
                        <Link to="/investments/fixed-income" className="investments-link">
                        <div className="investment-type-card">
                            <img src={fx_img} alt=""  />    

                            <div className="text-and-icon">
                                <div className="">
                                    <div className="main-text">Fixed Income</div>
                                    <div className="sub-text">4 Investments</div>
                                </div>
                                <BsChevronCompactRight className="iv-icon" />
                            </div>

                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Investments
