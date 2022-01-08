import React, { useEffect, useState } from 'react';
import CurrencyOptionsBtn from '../../components/CurrencyOptionsBtn/CurrencyOptionsBtn';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import SubNav from '../../components/SubNav/SubNav';
import UserAccountBalance from '../../components/UserInfo/UserAccountBalance/UserAccountBalance';
import UserDetails from '../../components/UserInfo/UserDetails/UserDetails';
import UserInvestmentAndTransactionTab from '../../components/UserInfo/UserInvestmentAndTransactionTab/UserInvestmentAndTransactionTab';
import './UserInfo.css';

import {useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getInvestorsDetail } from '../../redux/actions/userActions';


const UserInfo = ({match, arrLinks}) => {
    const history = useHistory();
    const [currentPage, setCurrentPage] = useState("Investors");
    


    const dispatch = useDispatch();
    const investorsDetailItem = useSelector(state => state.investorsDetailItem);
    const [investorInfo, setInvestorInfo] = useState({});
    const [investmentData, setInvestmentData] = useState({});

    useEffect(() => {
        dispatch(getInvestorsDetail(match.params.id))
    },[dispatch, match.params.id]);

    useEffect(() => {
        console.log(investorsDetailItem.investorsDetail,'errrmmm');
        if(investorsDetailItem.loading === false){
            // let dt = new Date(investorsDetailItem.investorsDetail.data.created_at)

            setInvestorInfo({
                first_name: investorsDetailItem.investorsDetail.user.first_name,
                last_name: investorsDetailItem.investorsDetail.user.last_name,
                username: investorsDetailItem.investorsDetail.user.username,
                country: investorsDetailItem.investorsDetail.user.country,
                gender: investorsDetailItem.investorsDetail.user.gender,
                email: investorsDetailItem.investorsDetail.user.email,
                date_of_birth: investorsDetailItem.investorsDetail.user.date_of_birth.toLocaleString(),
                phone: investorsDetailItem.investorsDetail.user.phone,
                bvn: investorsDetailItem.investorsDetail.user.bvn,
                address: investorsDetailItem.investorsDetail.user.address,
                verification_data:investorsDetailItem.investorsDetail.verification_data[0],
            })

            setInvestmentData({
                total_asset: investorsDetailItem.investorsDetail.investment_data.total_asset === null? 0:investorsDetailItem.investorsDetail.investment_data.total_asset.toLocaleString() ,
                account_balance: investorsDetailItem.investorsDetail.investment_data.account_balance === null ? 0 :investorsDetailItem.investorsDetail.investment_data.account_balance.toLocaleString()
            })
        }

    },[investorsDetailItem])

    // useEffect(()=>{
    //     const fetchInvestorInfo = async()=>{
    //         // Request data from api 
    //         let id = history.location.search.split('=')[1];
    //         setInvestorInfo({
    //             firstname: 'Ahmed',
    //             lastname: 'Ola', 
    //             nick: 'Ahmedinho',
    //             number: '0803000009',
    //             id: id, 
    //             amount: '#36,353,333', 
    //             duration: 'six years', durationLeft: '10 years', 
    //             startDate: '23/20/2018'});
    //     }
    //     fetchInvestorInfo();
    // }, [])
    

    return (
        <div>
            <SideBar setCurrentPage={setCurrentPage} />
            <div className="header-and-center-container">
                <Header />
                <SubNav currentPage={currentPage} arrLinks={arrLinks} rightButtons={<CurrencyOptionsBtn />}/>
                <div className="user-info-container">
                    <UserDetails userInfo={investorInfo} />
                    <UserAccountBalance investmentData={investmentData} />
                    <UserInvestmentAndTransactionTab userId={match.params.id}/>
                </div>
            </div>

        </div>
    )
}

export default UserInfo
