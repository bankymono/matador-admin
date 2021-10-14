import React, { useState } from 'react'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import './CreateAdminComponent.css'
import {CountryDropdown} from 'react-country-region-selector'


import profile_placeholder from '../../../assets/images/create-profile-placeholder.png'
import { Link } from 'react-router-dom'

const CreateAdminComponent = () => {
    const [selectedProfileImg, setSelectedProfileImg] = useState('')
    
    const encodeFileToBase64 = (file) => {
        return new Promise((resolve, reject)=> {
            var reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onload = () => resolve(reader.result)
            reader.onerror = error => reject(error)
        })
    }

    const handleProfileImgUpload = (e) => {
        if(e.target.files){
                encodeFileToBase64(e.target.files[0])
                .then(result =>{
                    setSelectedProfileImg(result)
                })
        

        }
    }
    return (
        <div className="create-admin-container">
            <div className="create-adm-nav-back">
                <Link className="create-back-arr-link" to="/settings/admin-manager"><AiOutlineArrowLeft className="arr-back-icon" /></Link>
                <div>Create Admin</div>
            </div>

            <div className="create-adm-profile-img-wrapper">
                {
                    selectedProfileImg !== '' 
                    ?<img className="create-profile-holder-with-img" src={selectedProfileImg} alt="profile placeholder" />
                    :<img className="create-profile-holder" src={profile_placeholder} alt="profile placeholder" />
                }
                
                <div className="create-adm-upload-btn-wrapper">
                    <input onChange={handleProfileImgUpload} id="create-adm-upload-btn" className="create-adm-img-input" type="file" accept="image/png, image/jpeg, image/jpg" />
                    <label className="create-adm-upload-btn" htmlFor="create-adm-upload-btn">Upload Avatar</label>
                </div>
            </div>

            <div className="create-adm-form-wrapper">
                <div className="create-input-item">
                    <label>First Name</label>
                    <input type="text" />
                </div>

                <div className="create-input-item">
                    <label>Last Name</label>
                    <input type="text" />
                </div>

                <div className="create-input-item">
                    <label>Middle Name</label>
                    <input type="text" />
                </div>

                <div className="create-input-item">
                    <label>Email</label>
                    <input type="email" />
                </div>

                <div className="create-input-item">
                    <label>Phone</label>
                    <input type="tel" />
                </div>

                <div className="create-input-item">
                    <label>D.O.B</label>
                    <div>
                        <div className="inp-side-1">
                            <input type="text" placeholder="DD" />
                            <input type="text" placeholder="MM" />
                            <input type="text" placeholder="YYYY" />
                        </div>

                        <div className="create-adm-select-country-wrapper">
                            <label>Country</label>
                            <CountryDropdown className="create-adm-country-select" />
                        </div>
                    </div>
                </div>

                <div className="create-input-item">
                    <label>Gender</label>
                    <div>
                        <div className="inp-side-radio">
                            <div>
                                <label>Male</label>
                                <input type="radio" name="create-adm-gender" />
                            </div>

                            <div>
                                <label>Female</label>
                                <input type="radio" name="create-adm-gender" />
                            </div>

                        </div>

                        <div className="create-adm-select-country-wrapper">
                            <label>Admin Role</label>
                            <select className="adm-role">
                                <option>Select Admin role</option>
                                <option>Super Admin</option>
                                <option>Managerial Admin</option>
                                <option>Sales Admin</option>
                            </select>
                        </div>


                    </div>
                </div>

                <div className="create-input-item">
                    <label>Address</label>
                    <textarea></textarea>
                </div>

                <div className="create-input-item">
                    <div></div>
                    <button className="create-adm-submit-btn" >Create Admin</button>                    
                </div>


            </div>
        </div>
    )
}

export default CreateAdminComponent
