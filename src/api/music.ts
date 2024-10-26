import {MUSIC_MODULE} from "./_prefix";
import {axios} from "../utils/request"
export type MusicInfo={
    musicName:string,
    username:string,
    author:string,
    description:string,
    musicUrl:string,
    imgUrl:string
}
export type MusicsInfo={
    id:string,
    musicName:string,
    username:string,
    author:string,
    description:string,
    musicUrl:string,
    imgUrl:string
}

// 上传音乐文件
export const uploadMusic = async (payload: FormData) => {
    return axios.post(`${MUSIC_MODULE}/uploadMusic`, payload, {
        headers: {
            'Content-Type': "multipart/form-data;"
        }
    })
        .then(res => {
            return res;
        });
};

//更新音乐信息
export const UpdateMusicInfo = async (musicInfo:MusicInfo)=>{
    return axios.post(`${MUSIC_MODULE}/addMusic`,musicInfo,{headers: {'Content-Type': 'application/json'}})
        .then(res=>{
            return res;
        })
};

//获取音乐列表
export const musicsPageInfo = async (page: number, size: number) => {
    return axios.get(`${MUSIC_MODULE}`, {params: {page: page, size: size}})
        .then(res => {
            return res;
        })
        .catch(err => {
            return err.response;
        });
};