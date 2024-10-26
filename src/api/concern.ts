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