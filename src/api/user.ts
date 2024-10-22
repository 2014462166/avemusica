import {USER_MODULE} from "./_prefix";
import axios from "axios";
import {ref} from "vue";

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
            console.log(res)
            return res;
        })
}
// 用户注册
export const userRegister = async (registerInfo: RegisterInfo) => {
    return axios.post(`${USER_MODULE}/register`, registerInfo,
        {headers: {'Content-Type': 'application/json'}})
        .then(res => {
            console.log(323233232)
            console.log(res)
            console.log(registerInfo)
            return res;
        });
};


// 获取用户信息
export const userInfo = async () => {
    return axios.get(`${USER_MODULE}`)
        .then(res => {
            return res;
        });
};