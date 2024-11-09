import {axios} from "../utils/request";
import {CONCERN_MODULE} from "./_prefix";

export type GetConcernListInfo = {
    id:number,
    username:string,
    imgURL:string,
    nickname:string,
}

export type GetMusicListInfo = {
    id:number,
    musicname:string,
    author:string,
    description:string,
    musicurl:string,
    createTime:string,
    imgurl:string
}


export const getConcernList = async ()=> {
    return axios.get(`${CONCERN_MODULE}/following`,null,)
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


