import Request, {AIRequest, BASE_URL} from './config.ts'
import User from "../User.ts";
import {Photo, Template} from "../model/model.ts";
import {AIRequestDTO, LoginDTO, RegisterDTO} from "../model/dto-model.ts";
import axios from "axios";
import { encode } from 'querystring';
import {ElMessage, ElNotification} from "element-plus";
import * as store from "../store.ts";
export const reservePublish = () =>{
    return Request.post({
        url: '/user/publish',
    })
}
//user为差异性更新,若根本没有userid 则为直接更新
export const refreshUser = (user:User) =>{ //更新用户的信息
    return Request.post({
        url: '/user/upload',
        data: user,

    }).then(res=>{
        if(res.code==1){
            ElMessage({
                message: "用户信息已更新",
                type: 'success'
            })
        }
    })
}
export const getTemplates=()=>{
    return Request.get({
        url: '/template/queryall',
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
    return Request.post({
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

    return AIRequest.postAI({
        url:`/user/use${template.id}`,
    },"模板使用任务").then((res)=>{
        location.reload()
        return res
    })
}
export const mixedai=()=>{
    return AIRequest.postAI({
        url:`/user/aimix`,
    },"AI混合数据").then(res=>{
        store.singleData.user.textData=res.data
    })
}
export const aiCommand=(aiDTO:AIRequestDTO)=>{
    return Request.post({
        url:'/user/ai',
        data:aiDTO
    })
}
export const getHtml=(username:string,mountedEle:string)=>{
    return Request.get({
        url:'/visit/'+username,

    }).then((response)=>{
        if (typeof response === "string") {
            document.getElementById(mountedEle).innerHTML = response;
        }
    })
}
export const uploadTemplate=(form)=>{
    return AIRequest.postAI({
        data:form,
        url:'/template/upload'
    },"模板上传任务")
}
