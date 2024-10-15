import {USER_MODULE} from "./_prefix";
import axios from "axios";
import {ref} from "vue";

type LoginInfo = {
    username:string,
    password:string
}

//用户登录
export const userLogin = async (loginInfo:LoginInfo)=>
{
    return axios.post(`${USER_MODULE}/login`,null,{params:loginInfo})
        .then(res=>{
            return res;
        })
}
