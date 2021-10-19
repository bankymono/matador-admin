import React, { useEffect, useState } from 'react';
import './AdminList.css';

import SuperAdminList from './SuperAdminList/SuperAdminList';
import ManagerialAdminList from './ManagerialAdminList/ManagerialAdminList';
import SalesAdminList from './SalesAdminList/SalesAdminList';

import empty_state_img from '../../../assets/images/empty-state-img.png';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { listAdmins } from '../../../redux/actions/userActions';

const AdminList = () => {
    const [managerialAdmList, setManagerialAdmList] = useState([]);
    const [salesAdmList, setSalesAdmList] = useState([]);

    const dispatch = useDispatch()
    const adminList = useSelector(state => state.adminList);

    const {loading, error, admins:{results}} = adminList;

    useEffect(() => {
        dispatch(listAdmins())
        
        // if(results){
        //     setManagerialAdmList(results.filter(adm => adm.role && adm.role === 'managerial_admin'))
        //     setSalesAdmList(results.filter(adm => adm.role && adm.role === 'sales_admin'))

        // }
        
    }, [dispatch]);


    return (
        <div className="admin-list-comp-wrapper">
            <div className="adm-list-heading-wrapper"> 
                <div className="adm-list-heading">Admin Manager</div>
                {results?.length >= 1 ?<Link className="admin-list-item-btn" to="/settings/admin-manager/create-admin">Create Admin</Link>:null}
            </div> 
            <SuperAdminList />

            { results?.length >=1 ?
            (<>
                <ManagerialAdminList managerialAdmList={results.filter(adm => adm.role && adm.role === 'managerial_admin')} loading={loading} />
                <SalesAdminList salesAdmList={results.filter(adm => adm.role && adm.role === 'sales_admin')} loading={loading} />
                </>)
            :
            (<div className="adm-list-empty-state-container">
                    <img className="adm-list-empty-state-img" src={empty_state_img} alt="empty" />
                    <div className="adm-list-empty-state-text">Add more admin</div>
                    <Link className="admin-list-item-btn" to="/settings/admin-manager/create-admin">Create Admin</Link>
            </div>)
            }
        </div>
    )
}

export default AdminList
