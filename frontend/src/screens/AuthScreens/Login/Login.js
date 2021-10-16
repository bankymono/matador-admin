import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import './Login.css';
import Swal from 'sweetalert2'

import {useFormik} from 'formik';
import * as Yup from 'yup';
import { ClipLoader } from 'react-spinners'

import matador_logo from '../../../assets/images/MATADOR-LOGO.png';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../redux/actions/userActions';

const validationSchema = Yup.object({
    email:Yup.string().email('Invalid email format').required('required'),
    password:Yup.string().required('required'),
})

const Login = ({history}) => {
    const dispatch = useDispatch()

    const adminLogin = useSelector(state => state.adminLogin);

    const {loading, error, adminInfo} = adminLogin;

    useEffect(()=>{
        if(adminInfo){
            history.push('/')
        } 
    },[adminInfo,error,history])


    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        onSubmit: async values => {

            await dispatch(login(values.email,values.password))
            
        },

        //     Swal.fire({
        //         icon: 'success',
        //         title: 'Login Successful',
        //         showConfirmButton: false,
        //         timer: 2000
        //       }).then(()=>{
        //           history.push('/')
        //       })

        // },,
        validationSchema,
    })

    return (
        <div className="login-container">
            <img className="auth-matador-logo"  src={matador_logo} alt="matador-logo" />
            <div className="login-card-wrapper">
                <div className="login-heading">Sign in</div>

                <form onSubmit={formik.handleSubmit}>
                    <div className="login-input-wrapper">
                        <div className="login-label">Email Address</div>
                        <input 
                            name="email" 
                            className={formik.touched.email && formik.errors.email ? "login-input login-input-error": "login-input"} 
                            type="text" 
                            value={formik.values.email}
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            />
                    </div>

                    <div className="login-input-wrapper">
                        <div className="login-label">Password</div>
                        <input 
                            name="password" 
                            className={formik.touched.password && formik.errors.password ? "login-input login-input-error": "login-input"} 
                            type="password" 
                            value={formik.values.password} 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            />
                        <div className="login-forgot-password">forgot password?</div>
                    </div>
                    {error ? <div className="login-error-msg">Invalid email or password</div>: null}
                    <button type="submit" className="login-submit-button">{loading ? <ClipLoader size={12} />: <span>Login</span>}</button>
                </form>
            </div>
        </div>
    )
}

export default Login
