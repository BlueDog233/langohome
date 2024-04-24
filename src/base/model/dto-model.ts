import {SingleAll, User, View} from "./model.ts";
import * as store from '../store.ts'

export interface AIRequestDTO{
    data: View
    message:string
}
export interface LoginDTO{
    username:string,
    password:string,
    verifycode:string
}

export interface RegisterDTO{
    nickname: string,
    password: string,
    checkPassword: string,
    email: string,
    verifyCode: string
}
function getByPath(obj: any, path: string): any {
    const keys = path.split('.');
    let current = obj;
    for (const key of keys) {
        if (current[key] === undefined) {
            return undefined; // 如果路径不存在，则返回 undefined
        }
        current = current[key];
    }
    return current;
}
function setByPath(obj: any, path: string, value: any) {
    const keys = path.split('.');
    let current = obj;
    for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        if (current[key] === undefined) {
            current[key] = {};
        }
        current = current[key];
    }
    current[keys[keys.length - 1]] = value;
}

function exportData(data:any,jsonPath?:string):User{
    if(jsonPath??true){
        store.singleData.user={
            ...store.singleData.user,
            ...data
        }
        return store.singleData.user
    }
    refreshData(data,'view.user.')
    const newUser: User = {
        avatar: "",
        email: "",
        html: "",
        isPublished: false,
        json: "",
        photoData: [],
        stars: [],
        style: "",
        template: 0,
        textData: "",
        username: ""
    };
    setByPath(newUser, jsonPath, data);
    return newUser;
}
function refreshData(data:SingleAll,jsonPath?:string){
    if(jsonPath??true){
        store.singleData.user={
            ...store.singleData.user,
            ...data.user
        }
        store.singleData.view={
            ...store.singleData.view,
            ...data.view
        }
    }
    const dataToUpload = getByPath(data, jsonPath);
    if (dataToUpload !== undefined) {
        setByPath(store.singleData, jsonPath, dataToUpload);
    }
}
export{
    exportData,
    refreshData
}