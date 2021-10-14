import React from 'react'
import { Link } from 'react-router-dom'
import { BeatLoader } from 'react-spinners';
import place_hldr_img from '../../../../assets/images/placeholder-profile-img.png';

const ManagerialAdminList = ({managerialAdmList, loading}) => {
    return (
        <div>
            <div className="super-admin-list">Managerial Admin</div>
            {loading? <BeatLoader color="#03A678" loading={loading} />:
                managerialAdmList?.map(adm => 
                    <div className="admin-list-item" key={adm.id}>
                        <div className="adm-list-item-prof-info-wrpper">
                            <img className="adm-list-item-thumbnail" src={place_hldr_img} alt="placeholder-img" />
                            <div className="adm-list-item-prof-info">
                                <div className="name">{adm.first_name} {adm.last_name}</div>
                                <div className="role">Managerial Admin</div>
                            </div>
                        </div>
                        <Link className="admin-list-item-btn" to="/settings/admin-manager/update-admin">Manage Account</Link>
                    </div>                        
                )
            }
            <div className="admin-list-item">
                <div className="adm-list-item-prof-info-wrpper">
                    <img className="adm-list-item-thumbnail" src={place_hldr_img} alt="placeholder-img" />
                    <div className="adm-list-item-prof-info">
                        <div className="name">Halima Mustafa</div>
                        <div className="role">Managerial Admin</div>
                    </div>
                </div>
                <Link className="admin-list-item-btn" to="/settings/admin-manager/update-admin">Manage Account</Link>
            </div>
            <hr />
        </div>
    )
}

export default ManagerialAdminList
