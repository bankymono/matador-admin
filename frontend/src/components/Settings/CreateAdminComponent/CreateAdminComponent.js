import React, { useEffect, useState } from 'react'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import './CreateAdminComponent.css'
import {CountryDropdown} from 'react-country-region-selector'
import Swal from 'sweetalert2'


import profile_placeholder from '../../../assets/images/create-profile-placeholder.png'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { createSuperAdmin, listCountries } from '../../../redux/actions/userActions'
import { ClipLoader } from 'react-spinners'

const CreateAdminComponent = ({history}) => {
    const [selectedProfileImg, setSelectedProfileImg] = useState('')

    const dispatch = useDispatch()
    const superAdminCreate = useSelector(state => state.superAdminCreate);
    const {superAdmin, success, loading, error} = superAdminCreate

    const countryList = useSelector(state => state.countryList)
    const {countries, countryError, countryLoading} = countryList

    const [dateDay, setDateDay] = useState('');
    const [dateDayIsInvalid, setDateDayIsInvalid] = useState('');

    const [dateMonth, setDateMonth] = useState('');
    const [dateMonthIsInvalid, setDateMonthIsInvalid] = useState('');

    const [dateYear, setDateYear] = useState('');
    const [dateYearIsInvalid, setDateYearIsInvalid] = useState('');

    const [dateIsInvalid, setDateIsInvalid] = useState('');

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordIsInvalid, setPasswordIsInvalid] = useState('');
    const [confirmPasswordIsInvalid, setConfirmPasswordIsInvalid] = useState('');
    const [passwordMisMatch, setPasswordMisMatch] = useState('');

    const [username, setUserName] = useState('');
    const [usernameIsInvalid, setUserNameIsInvalid] = useState('');

    const [email, setEmail] = useState('');
    const [emailIsInvalid, setEmailIsInvalid] = useState('');

    const [firstName, setFirstName] = useState('');
    const [firstNameIsInvalid, setFirstNameIsInvalid] = useState('');

    const [lastName, setLastName] = useState('');
    const [lastNameIsInvalid, setLastNameIsInvalid] = useState('');

    const [middleName, setMiddleName] = useState('');
    const [middleNameIsInvalid, setMiddleNameIsInvalid] = useState('');

    const [phone, setPhone] = useState('');
    const [phoneIsInvalid, setPhoneIsInvalid] = useState('');

    const [gender, setGender] = useState('');
    const [genderIsInvalid, setGenderIsInvalid] = useState('');

    const [address, setAddress] = useState('');
    const [addressIsInvalid, setAddressIsInvalid] = useState('');

    const [country, setCountry] = useState(1);
    const [countryIsInvalid, setCountryIsInvalid] = useState('');

    const [role, setRole] = useState('');
    const [roleIsInvalid, setRoleIsInvalid] = useState('');

    // const [avatar, setAvatar] = useState('');

    useEffect(()=>{
        dispatch(listCountries())
        if(success){
            Swal.fire({
                icon: 'success',
                title: 'Admin Created Successfully',
                showConfirmButton: false,
                timer: 2000
              }).then(()=>{
                  history.push('/settings/admin-manager')
              })
        }
    },[history,loading, success,dispatch])


    // const [adminData, setAdminData] = useState({
    //     password:"",
    //     username:"",
    //     bvn: "",
    //     date_of_birth: "",
    //     email: "",
    //     first_name: "",
    //     last_name: "",
    //     middle_name: "",
    //     phone: "",
    //     status: true,
    //     gender: "",
    //     address: "",
    //     country: ""
    //   })

    
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

    const handleSubmit = (e) => {
        e.preventDefault();

        if(username.trim() === '') {
            setUserNameIsInvalid(true)
        }else{
            setUserNameIsInvalid(false);
        }

        if(firstName.trim() === ''){
            setFirstNameIsInvalid(true);
        } else{
            setFirstNameIsInvalid(false);
        }

        if(lastName.trim() === ''){
            setLastNameIsInvalid(true);
        }else{
            setLastNameIsInvalid(false);
        }

        if(middleName.trim() === '') {
            setMiddleNameIsInvalid(true);
        }else{
            setMiddleNameIsInvalid(false);
        }

        if(email.trim() === ''){
            setEmailIsInvalid(true)
        }else{
            setEmailIsInvalid(false)
        }

        if(password.trim() === ''){
            setPasswordIsInvalid(true)
        }else{
            setPasswordIsInvalid(false)
        }

        if(confirmPassword.trim() === ''){
            setConfirmPasswordIsInvalid(true)
        }else{
            setConfirmPasswordIsInvalid(false)
        }

        if(password !== confirmPassword){
            setPasswordMisMatch(true)
        }else{
            setPasswordMisMatch(false)
        }

        if(phone === '' || phone === 0){
            setPhoneIsInvalid(true)
        }else{
            setPhoneIsInvalid(false)
        }

        if(dateDay.trim() === ''){
            setDateDayIsInvalid(true)
        }else{
            setDateDayIsInvalid(false)
        }

        if(dateMonth.trim() === ''){
            setDateMonthIsInvalid(true)
        }else{
            setDateMonthIsInvalid(false)
        }

        if(dateYear.trim() === ''){
            setDateYearIsInvalid(true)
        }else{
            setDateYearIsInvalid(false)
        }

        // if(gender === ''){
        //     setGenderIsInvalid(true)
        // }else{
        //     setGenderIsInvalid(false)
        // }

        if(role === ''){
            setRoleIsInvalid(true)
        }else{
            setRoleIsInvalid(false)
        }

        if(address.trim() === ''){
            setAddressIsInvalid(true)
        }else{
            setAddressIsInvalid(false)
        }

        // if(country.trim() === ''){
        //     setCountryIsInvalid(true)
        // }else{
        //     setCountryIsInvalid(false)
        // }

        if(
            usernameIsInvalid === false 
        && firstNameIsInvalid === false
        && lastNameIsInvalid === false
        && middleNameIsInvalid === false
        && emailIsInvalid === false
        && passwordIsInvalid === false
        && confirmPasswordIsInvalid === false
        && passwordMisMatch === false
        && passwordMisMatch === false
        && phoneIsInvalid === false
        && dateDayIsInvalid === false
        && dateMonthIsInvalid === false
        && dateYearIsInvalid === false
        && roleIsInvalid === false
        && addressIsInvalid === false
            ){
                const data = {
                    password:password,
                    username:username,
                    date_of_birth: `${dateYear}-${dateMonth}-${dateDay}`,
                    email: email,
                    first_name: firstName,
                    last_name: lastName,
                    middle_name: middleName,
                    phone: phone,
                    status: true,
                    gender: gender,
                    address: address,
                    country: country
                  }
                  if(role !== 'super_admin'){
                      data.role = role;
                  }
                  if(selectedProfileImg !== ""){
                      data.avatar = selectedProfileImg
                  }

                dispatch(createSuperAdmin(data))
        }

    }

    const handleChange = (e) => {
        switch(e.target.name){
            case 'username':
                setUserNameIsInvalid(false);
                setUserName(e.target.value);
                break;
            case 'first-name':
                setFirstNameIsInvalid(false);
                setFirstName(e.target.value);
                break;
            case 'last-name':
                setLastNameIsInvalid(false);
                setLastName(e.target.value);
                break;
            case 'middle-name':
                setMiddleNameIsInvalid(false);
                setMiddleName(e.target.value);
                break;
            case 'email':
                setEmailIsInvalid(false);
                setEmail(e.target.value);
                break;
            case 'password':
                setPasswordIsInvalid(false);
                setPassword(e.target.value);
                break;
            case 'c-password':
                setConfirmPasswordIsInvalid(false);
                setConfirmPassword(e.target.value);
                break;
            case 'phone':
                setPhoneIsInvalid(false);
                setPhone(e.target.value);
                break;
            case 'day':
                setDateDayIsInvalid(false);
                setDateDay(e.target.value);
                break;
            case 'month':
                setDateMonthIsInvalid(false);
                setDateMonth(e.target.value);
                break;
            case 'year':
                setDateYearIsInvalid(false);
                setDateYear(e.target.value);
                break;
            case 'gender':
                setGenderIsInvalid(false);
                setGender(e.target.value);
                break;
            case 'role':
                setRoleIsInvalid(false);
                setRole(e.target.value);
                break;
            case 'address':
                setAddressIsInvalid(false);
                setAddress(e.target.value);
                break;

            case 'country':
                setCountryIsInvalid(false);
                setCountry(e.target.value);
                break;

            default:
                return null;
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
                    <label>Username</label>
                    <input name="username" value={username} onChange={handleChange} type="text" className={usernameIsInvalid === true ?"error-border":""} />
                    {usernameIsInvalid === true ? <span className="input-err-msg">Field is required</span>: null}
                </div>


                <div className="create-input-item">
                    <label>First Name</label>
                    <input name="first-name" value={firstName} onChange={handleChange} type="text" className={firstNameIsInvalid === true ?"error-border":""} />
                    {firstNameIsInvalid === true ? <span className="input-err-msg">Field is required</span>: null}
                </div>

                <div className="create-input-item">
                    <label>Last Name</label>
                    <input name="last-name" value={lastName} onChange={handleChange} type="text" className={lastNameIsInvalid === true ?"error-border":""}/>
                    {lastNameIsInvalid === true ? <span className="input-err-msg">Field is required</span>: null}
                </div>

                <div className="create-input-item">
                    <label>Middle Name</label>
                    <input name='middle-name' value={middleName} onChange={handleChange} type="text" className={middleNameIsInvalid === true ?"error-border":""}/>
                    {middleNameIsInvalid === true ? <span className="input-err-msg">Field is required</span>: null}
                </div>

                <div className="create-input-item">
                    <label>Email</label>
                    <input name="email" value={email} onChange={handleChange} type="email" className={emailIsInvalid === true ?"error-border":""}/>
                    {emailIsInvalid === true ? <span className="input-err-msg">Field is required</span>: null}
                </div>

                <div className="create-input-item">
                    <label>Password</label>
                    <input name="password" value={password} onChange={handleChange} type="password" className={passwordIsInvalid === true  || passwordMisMatch===true?"error-border":""}/>
                    {passwordIsInvalid === true ? <span className="input-err-msg">Field is required</span>: null}
                    {passwordMisMatch === true ? <span className="input-err-msg">Password Mismatch</span>: null}
                </div>

                <div className="create-input-item">
                    <label>Confirm Password</label>
                    <input name="c-password" value={confirmPassword} onChange={handleChange} type="password" className={confirmPasswordIsInvalid === true|| passwordMisMatch===true ?"error-border":""}/>
                    {confirmPasswordIsInvalid === true ? <span className="input-err-msg">Field is required</span>: null}
                    {passwordMisMatch === true ? <span className="input-err-msg">Password Mismatch</span>: null}
                </div>

                <div className="create-input-item">
                    <label>Phone</label>
                    <input name="phone" value={phone} onChange={handleChange} type="tel" className={phoneIsInvalid === true ?"error-border":""}/>
                    {phoneIsInvalid === true ? <span className="input-err-msg">Field is required</span>: null}
                </div>

                <div className="create-input-item">
                    <label>D.O.B</label>
                    <div>
                        <div className="dob_input">
                            <div className="inp-side-1">
                                <input name="day" value={dateDay} onChange={handleChange} type="number" placeholder="DD" className={dateDayIsInvalid === true ?"error-border":""} />
                                <input name="month" value={dateMonth} onChange={handleChange} type="number" placeholder="MM" className={dateMonthIsInvalid === true ?"error-border":""}/>
                                <input name="year" value={dateYear}onChange={handleChange} type="number" placeholder="YYYY" className={dateYearIsInvalid === true ?"error-border":""}/>
                            </div>
                        </div>


                        <div className="create-adm-select-country-wrapper">
                            <label>Country</label>
                            <select name="country" value={country} onChange={handleChange} className={countryIsInvalid === true ? "adm-role error-border" : "adm-role"} >
                                {countryLoading === false ? countries?.country.map(el => (<option key={el.id} value={el.id}>{el.name}</option>)): null}
                            </select>
                            {/* <CountryDropdown 
                                value={country}
                                onChange={(val) => {
                                    setCountry(val)
                                    setCountryIsInvalid(false)
                                }}
                                className= "create-adm-country-select" /> */}
                        </div>
                    </div>
                </div>

                <div className="create-input-item">
                    <label>Gender</label>
                    <div>
                        <div className="inp-side-radio">
                            <div>
                                <label>Male</label>
                                <input checked={gender === 'male'} value="male" onChange={handleChange} type="radio" name="gender" />
                            </div>

                            <div>
                                <label>Female</label>
                                <input checked={gender === 'female'} value="female" onChange={handleChange} type="radio" name="gender" />
                            </div>

                        </div>

                        <div className="create-adm-select-country-wrapper">
                            <label>Admin Role</label>
                            <select name="role" value={role} onChange={handleChange} className={roleIsInvalid === true ? "adm-role error-border" : "adm-role"} >
                                <option value="">Select Admin role</option>
                                <option value="super_admin">Super Admin</option>
                                <option value="managerial_admin">Managerial Admin</option>
                                <option value="sales_admin">Sales Admin</option>
                            </select>
                        </div>


                    </div>
                </div>

                <div className="create-input-item">
                    <label>Address</label>
                    <textarea name="address" value={address} onChange={handleChange} className={addressIsInvalid === true ?"error-border":""}></textarea>
                    {addressIsInvalid === true ? <span className="input-err-msg">Field is required</span>: null}
                </div>

                <div className="create-input-item">
                    <div></div>
                    <button onClick={handleSubmit} className="create-adm-submit-btn" >{loading ? <ClipLoader size={12} />:<span>Create Admin</span>}</button>                    
                </div>


            </div>
        </div>
    )
}

export default CreateAdminComponent
