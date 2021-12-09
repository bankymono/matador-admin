import React, { useEffect, useState } from 'react'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import './CreateAdminComponent.css';
import Swal from 'sweetalert2';


import profile_placeholder from '../../../assets/images/create-profile-placeholder.png';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { createAdmin, createSuperAdmin, listCountries } from '../../../redux/actions/userActions';
import { ClipLoader } from 'react-spinners';


const CreateAdminComponent = ({history}) => {
    const [selectedProfileImg, setSelectedProfileImg] = useState('')

    const dispatch = useDispatch()
    const superAdminCreate = useSelector(state => state.superAdminCreate);
    const {superAdmin, success, loading, error} = superAdminCreate

    const adminCreate = useSelector(state => state.adminCreate);
    const {admin, admSuccess, admLoading, admError} = adminCreate

    const countryList = useSelector(state => state.countryList)
    const {countries, countryError, countryLoading} = countryList

    const [dateDay, setDateDay] = useState('');
    const [dateDayError, setDateDayError] = useState('');

    const [dateMonth, setDateMonth] = useState('');
    const [dateMonthError, setDateMonthError] = useState('');

    const [dateYear, setDateYear] = useState('');
    const [dateYearError, setDateYearError] = useState('');

    const [dateIsInvalid, setDateIsInvalid] = useState('');

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [passwordMisMatch, setPasswordMisMatch] = useState('');

    const [username, setUserName] = useState('');
    const [usernameError, setUserNameError] = useState('');

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const [firstName, setFirstName] = useState('');
    const [firstNameError, setFirstNameError] = useState('');

    const [lastName, setLastName] = useState('');
    const [lastNameError, setLastNameError] = useState('');

    const [middleName, setMiddleName] = useState('');
    const [middleNameError, setMiddleNameError] = useState('');

    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('');

    const [gender, setGender] = useState('');
    const [genderError, setGenderError] = useState('');

    const [address, setAddress] = useState('');
    const [addressError, setAddressError] = useState('');

    const [country, setCountry] = useState(1);
    const [countryInputError, setCountryInputError] = useState('');

    const [role, setRole] = useState('');
    const [roleError, setRoleError] = useState('');

    // const [avatar, setAvatar] = useState('');

    useEffect(()=>{
        dispatch(listCountries())
        if(success || admSuccess){
            Swal.fire({
                icon: 'success',
                title: 'Admin Created Successfully',
                showConfirmButton: false,
                timer: 2000
              }).then(()=>{
                  history.push('/settings/admin-manager')
              })
        }
    },[history,
        loading, 
        success,admSuccess, 
        dispatch
])


    
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
        
        let isValid = validateInputs()
        

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
                  if(selectedProfileImg !== ""){
                    data.avatar = selectedProfileImg
                    }
                    if(isValid){
                        if(role !== 'super_admin'){
                            data.role = role;
                            dispatch(createAdmin(data))
                            console.log('got here')
                        }else{
                          dispatch(createSuperAdmin(data))
                        }            
                    }


    }

    const validateInputs = () => {
        let usernameError = '';
        let firstNameError = '';
        let lastNameError = '';
        let middleNameError = '';
        let emailError = '';
        let passwordError = '';
        let confirmPasswordError = '';
        let passwordMisMatch = '';
        let addressError = '';
        let phoneError = '';
        let dateDayError = '';
        let dateMonthError = '';
        let dateYearError = '';
        let roleError = '';

        if(username.trim() === '') {
            usernameError="Field is required";
        }

        if(firstName.trim() === ''){
            firstNameError="Field is required";
        }

        if(lastName.trim() === ''){
            lastNameError = "Field is required";
        }

        if(middleName.trim() === '') {
            middleNameError = "Field is required";
        }

        if(email.trim() === ''){
            emailError = "Field is required";
        }

        if(password.trim() === ''){
            passwordError="Field is required";
        }

        if(confirmPassword.trim() === ''){
            confirmPasswordError="Field is required";
        }

        if(password !== confirmPassword){
            passwordMisMatch = "Password mismatch";
        }

        if(phone === '' || phone === 0){
            phoneError="Field is required";
        }

        if(dateDay.trim() === ''){
            dateDayError="Field is required";
        }

        if(dateMonth.trim() === ''){
            dateMonthError = "Field is required";
        }

        if(dateYear.trim() === ''){
            dateYearError="Field is required";
        }


        if(role === ''){
            roleError = "Field is required";
        }

        if(address.trim() === ''){
            addressError="Field is required";
        }

        if(
            firstNameError 
        || lastNameError
        || middleNameError
        || emailError
        || usernameError
        || passwordError
        || confirmPasswordError
        || passwordMisMatch
        || addressError
        || dateDayError
        || dateMonthError
        || dateYearError
        || phoneError
        || roleError){
            setFirstNameError(firstNameError)
            setLastNameError(lastNameError)
            setUserNameError(usernameError)
            setMiddleNameError(middleNameError)
            setPasswordError(passwordError)
            setEmailError(emailError)
            setConfirmPasswordError(confirmPasswordError)
            setPasswordMisMatch(passwordMisMatch)
            setAddressError(addressError)
            setDateDayError(dateDayError)
            setDateMonthError(dateMonthError)
            setDateYearError(dateYearError)
            setPhoneError(phoneError)
            setRoleError(roleError)
            return false;
        }
        
        return true;
    }

    const handleChange = (e) => {
        switch(e.target.name){
            case 'username':
                setUserNameError('');
                setUserName(e.target.value);
                break;
            case 'first-name':
                setFirstNameError('');
                setFirstName(e.target.value);
                break;
            case 'last-name':
                setLastNameError('');
                setLastName(e.target.value);
                break;
            case 'middle-name':
                setMiddleNameError('');
                setMiddleName(e.target.value);
                break;
            case 'email':
                setEmailError('');
                setEmail(e.target.value);
                break;
            case 'password':
                setPasswordError('');
                setPassword(e.target.value);
                break;
            case 'c-password':
                setConfirmPasswordError('');
                setConfirmPassword(e.target.value);
                if(password === confirmPassword) setPasswordMisMatch('')
                break;
            case 'phone':
                setPhoneError('');
                setPhone(e.target.value);
                break;
            case 'day':
                setDateDayError('');
                setDateDay(e.target.value);
                break;
            case 'month':
                setDateMonthError('');
                setDateMonth(e.target.value);
                break;
            case 'year':
                setDateYearError('');
                setDateYear(e.target.value);
                break;
            case 'gender':
                setGender(e.target.value);
                break;
            case 'role':
                setRoleError('');
                setRole(e.target.value);
                break;
            case 'address':
                setAddressError('');
                setAddress(e.target.value);
                break;

            case 'country':
                setCountryInputError('');
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

            <form onSubmit={handleSubmit}>

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
                    <input name="username" value={username} onChange={handleChange} type="text" className={usernameError ?"error-border":""} />
                        {usernameError  ? <span className="input-err-msg">{usernameError}</span>: null}
                </div>


                <div className="create-input-item">
                    <label>First Name</label>
                    <input name="first-name" value={firstName} onChange={handleChange} type="text" className={firstNameError ?"error-border":""} />
                    {firstNameError ? <span className="input-err-msg">{firstNameError}</span>: null}
                </div>

                <div className="create-input-item">
                    <label>Last Name</label>
                    <input name="last-name" value={lastName} onChange={handleChange} type="text" className={lastNameError ?"error-border":""}/>
                    {lastNameError ? <span className="input-err-msg">{lastNameError}</span>: null}
                </div>

                <div className="create-input-item">
                    <label>Middle Name</label>
                    <input name='middle-name' value={middleName} onChange={handleChange} type="text" className={middleNameError ?"error-border":""}/>
                    {middleNameError ? <span className="input-err-msg">{middleNameError}</span>: null}
                </div>

                <div className="create-input-item">
                    <label>Email</label>
                    <input name="email" value={email} onChange={handleChange} type="email" className={emailError ?"error-border":""}/>
                    {emailError ? <span className="input-err-msg">{emailError}</span>: null}
                </div>

                <div className="create-input-item">
                    <label>Password</label>
                    <input name="password" value={password} onChange={handleChange} type="password" className={passwordError  || passwordMisMatch ?"error-border":""}/>
                    {passwordError ? <span className="input-err-msg">{passwordError}</span>: null}
                    {passwordMisMatch ? <span className="input-err-msg">{passwordMisMatch}</span>: null}
                </div>

                <div className="create-input-item">
                    <label>Confirm Password</label>
                    <input name="c-password" value={confirmPassword} onChange={handleChange} type="password" className={confirmPasswordError|| passwordMisMatch ?"error-border":""}/>
                    {confirmPasswordError  ? <span className="input-err-msg">{confirmPasswordError}</span>: null}
                    {passwordMisMatch ? <span className="input-err-msg">{passwordMisMatch}</span>: null}
                </div>

                <div className="create-input-item">
                    <label>Phone</label>
                    <input name="phone" value={phone} onChange={handleChange} type="tel" className={phoneError ?"error-border":""}/>
                    {phoneError ? <span className="input-err-msg">{phoneError}</span>: null}
                </div>

                <div className="create-input-item">
                    <label>D.O.B</label>
                    <div>
                        <div className="dob_input">
                            <div className="inp-side-1">
                                <input name="day" value={dateDay} onChange={handleChange} type="number" placeholder="DD" className={dateDayError ?"error-border":""} />
                                <input name="month" value={dateMonth} onChange={handleChange} type="number" placeholder="MM" className={dateMonthError ?"error-border":""}/>
                                <input name="year" value={dateYear}onChange={handleChange} type="number" placeholder="YYYY" className={dateYearError ?"error-border":""}/>
                            </div>
                        </div>


                        <div className="create-adm-select-country-wrapper">
                            <label>Country</label>
                            <select name="country" value={country} onChange={handleChange} className={countryInputError ? "adm-role error-border" : "adm-role"} >
                                {countryLoading === false ? countries?.country.map(el => (<option key={el.id} value={el.id}>{el.name}</option>)): null}
                            </select>
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
                            <select name="role" value={role} onChange={handleChange} className={roleError ? "adm-role error-border" : "adm-role"} >
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
                    <textarea name="address" value={address} onChange={handleChange} className={addressError ?"error-border":""}></textarea>
                    {addressError ? <span className="input-err-msg">{addressError}</span>: null}
                </div>

                <div className="create-input-item">
                    <div></div>
                    <button type='submit' className="create-adm-submit-btn" >{loading || admLoading ? <ClipLoader size={12} />:<span>Create Admin</span>}</button> 
                </div>


            </div>
            </form>
        </div>
    )
}

export default CreateAdminComponent
