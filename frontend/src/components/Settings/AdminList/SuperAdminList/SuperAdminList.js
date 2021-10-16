import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import place_hldr_img from '../../../../assets/images/placeholder-profile-img.png';
import { listSuperAdmins } from '../../../../redux/actions/userActions';
import {BeatLoader, CircleLoader, RingLoader, RotateLoader} from 'react-spinners'

import './SuperAdminList.css';

const SuperAdminList = () => {
    const dispatch = useDispatch()
    const superAdminList = useSelector(state => state.superAdminList)
    const {loading, error, superAdmins:{results}} = superAdminList;

    useEffect(()=>{
        dispatch(listSuperAdmins());
   
    },[dispatch])

    return (
        <div>
            {loading
            ? <BeatLoader color="#03A678" loading={loading} />
            :(<>
                {results.length > 0 ? <div className="super-admin-list">Super Admin</div>: null}
                {results.map( supAdm => (
                    <div className="admin-list-item" key={supAdm.id}>
                    <div className="adm-list-item-prof-info-wrpper">
                        <img className="adm-list-item-thumbnail" src={place_hldr_img} alt="placeholder-img" />
                        <div className="adm-list-item-prof-info">
                            <div className="name">{supAdm.first_name} {supAdm.last_name}</div>
                            <div className="role">Super Admin</div>
                        </div>
                    </div>
                    <Link className="admin-list-item-btn" to="/settings/admin-manager/update-admin">Manage Account</Link>
                </div>
                ))}
            </>)
            }
            {results?.length > 0 ?<hr className="super-adm-hr-line" />: null }
        </div>
    )
}

export default SuperAdminList
