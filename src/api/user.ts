import {USER_MODULE} from "./_prefix";
import {Axios} from "../utils/request"
import axios from 'axios'
import {ref} from "vue";
//import axios from "axios";

type LoginInfo = {
    username:string,
    password:string
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
    return Axios.get(`${USER_MODULE}`)
        .then(res => {
            console.log(res)
            return res;
        });
};