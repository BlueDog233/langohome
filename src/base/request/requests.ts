import Request, {AIRequest, BASE_URL} from './config.ts'
import User from "../User.ts";
import {Photo, Template} from "../model/model.ts";
import {AIRequestDTO, LoginDTO, RegisterDTO} from "../model/dto-model.ts";
import axios from "axios";
export const reservePublish = () =>{
    return Request.post({
        url: '/user/publish',
    })
}
//user为差异性更新,若根本没有userid 则为直接更新
export const refreshUser = (user:User) =>{ //更新用户的信息
    return Request.post({
        url: '/user/upload',
        data: user
    })
}
export const getTemplates=()=>{
    return Request.post({
        url: '/template/get',
    })
}
export const getUser=()=>{
    return Request.post({
        url:'/user/get'
    })
}
export const saveTemplate=(template:Template)=>{
    return Request.post({
        url:'/template/upload',
        data:template,
    })
}
export const saveInfo=(info:Photo)=>{
    return AIRequest.post({
        url:'/user/info',
        data:info,

    })
}
export const registe=(registerDTO:RegisterDTO)=>{
    return Request.post({
        url:'/user/register',
        data:registerDTO
    })
}
export const login=(loginDTO:LoginDTO)=>{
    return Request.post({
        url:'/user/login',
        data:loginDTO
    })
}


export const useTemplate=(template:Template)=>{
    return Request.post({
        url:'/user/usetemplate',
        data:template
    })
}
export const aiCommand=(aiDTO:AIRequestDTO)=>{
    return Request.post({
        url:'/user/ai',
        data:aiDTO
    })
}
export const getHtml=(username:string,mountedEle:string)=>{
    axios.get(BASE_URL+'/visit/'+username)
        .then(response => {
            // 将获取到的HTML内容插入到页面中的div中
            document.getElementById(mountedEle).innerHTML = response.data;
        })
        .catch(error => {
            // 处理请求失败的情况
            console.error('Error fetching HTML:', error);
        });
}
