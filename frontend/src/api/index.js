import axios from 'axios';
import dotenv from 'dotenv';
import { getNewToken } from '../redux/actions/userActions';
import store from '../redux/store'

dotenv.config();


// const url = process.env.REACT_APP_BASE_URL;

const headers = {
    'Content-Type':'application/json'
};

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers
})
const {getState, dispatch} = store
const {adminLogin:{adminInfo}} = getState();


api.interceptors.request.use((req)=>{
    
    if(adminInfo){
        req.headers.Authorization = `Bearer ${adminInfo.token}`;
    }

    return req;
}, 
(error)=>{
    return Promise.reject(error)
})

api.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const originalConfig = err.config;

      if (originalConfig.url !== "/user/admin-login" && err.response) {
        
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;

          try {

            dispatch(getNewToken());

            return api(originalConfig);
          } catch (_error) {
            return Promise.reject(_error);
          }
        }
      }

      return Promise.reject(err);
    }
  );



export default api;