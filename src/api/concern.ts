import {axios} from "../utils/request";
import {CONCERN_MODULE} from "./_prefix";

type GetConcernListInfo = {

}

export const getConcernList = async (getConcernListInfo : GetConcernListInfo)=> {
    return axios.post(`${CONCERN_MODULE}/getConcernList`,null,{params:getConcernListInfo})
        .then(res=>{
            return res;
        })
}


export const getConcernInfo  = async (username: string) => {
    return axios.get(`${CONCERN_MODULE}/getConcernInfo`, {params: {username: username}})
        .then(res => {
            return res;
        })

};

export const followUser = async (follower:number,followed:number)=>{
    return axios.post(`${CONCERN_MODULE}/follow`,null,{headers: {'Content-Type': 'application/json'},params:{followerId:follower,followedId:followed}})
        .then(res=>{
            return res;
        })
}
export const unfollowUser = async (follower:number,followed:number)=>{
    // @ts-ignore
    return axios.post(`${CONCERN_MODULE}/unfollow`,null,{headers: {'Content-Type': 'application/json'},params:{followerId:follower,followedId:followed}})
        .then(res=>{
            return res;
        })
}