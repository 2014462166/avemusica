import {USER_MODULE} from "./_prefix";
 import {axios} from "../utils/request"
// import axios from 'axios'
import {ref} from "vue";
//import axios from "axios";

type LoginInfo = {
    username:string,
    password:string
}

type UpdateInfo ={
    username:string,
    telephone:string,
    sex:string,
    nickname:string,
    address:string
}
type RegisterInfo={
    username:string,
    password:string,
    nickname:string,
    address:string,
    telephone:string,
    sex:string
}

//用户登录
export const userLogin = async (loginInfo:LoginInfo)=>
{
    return axios.post(`${USER_MODULE}/login`,null,{params:loginInfo})
        .then(res=>{
         //   console.log(res)
            return res;
        })
}
// 用户注册
export const userRegister = async (registerInfo: RegisterInfo) => {
    return axios.post(`${USER_MODULE}/register`, registerInfo,
        {headers: {'Content-Type': 'application/json'}})
        .then(res => {
           // console.log(323233232)
            //console.log(res)
           // console.log(registerInfo)
            return res;
        });
};


// 获取用户信息
export const userInfo = async () => {
    return axios.get(`${USER_MODULE}`)
        .then(res => {
            //console.log(res)
            return res;
        });
};

//更新用户信息
export const UpdateUserInfo = async (updateInfo:UpdateInfo)=>{
    return axios.post(`${USER_MODULE}`,updateInfo,{headers: {'Content-Type': 'application/json'}})
        .then(res=>{
            return res;
        })
};