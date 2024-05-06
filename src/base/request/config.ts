import axios from "axios";
import {refreshData} from "../model/dto-model.ts";
import {ElMessage, ElNotification} from "element-plus";

export const FRONT_URL='http://localhost:5173'
export const BASE_URL = 'http://localhost:8000/api';
export const TIMEOUT = 3000;


class Request {
    instance
    constructor(baseURL, timeout = 3000) {
        this.instance = axios.create({
            responseEncoding:'utf-8',
            baseURL,
            timeout,
        });

        this.instance.interceptors.request.use(
            config => {
                config.url=decodeURIComponent(config.url)
                // 当前路由不是登录页时，添加token
                let token = localStorage.getItem('token');
                console.log(token)
                if (token && config.url !== '/login') {
                    config.headers.token = token;
                }
                if(config.timeout>10000){

                }
                return config;

            },
            err => {
                return Promise.reject(err)
            }
        );

        this.instance.interceptors.response.use(
            res => {
                if(res.data.json??false){
                    refreshData(res.data.json)
                }
                return res;
            },
            err => {
                console.log('发生错误',err)

                return Promise.reject(err)
            }
        );
    }

    request(config) {
        return new Promise((resolve, reject) => {
            this.instance
                .request(config)
                .then(res => {
                    resolve(res.data);
                    if(res.data.code==0){
                        ElMessage({
                            message: res.data.message,
                            type: 'error'
                        })
                    }
                })
                .catch(err => {
                    ElMessage({
                        message: err,
                        type: 'error'

                    })
                });
        });
    }

    get(config) {
        return this.request({...config, method: 'get'});
    }

    post(config) {
        return this.request({...config, method: 'post'});
    }

    put(config) {
        return this.request({...config, method: 'put'});
    }

    delete(config) {
        return this.request({...config, method: 'delete'});
    }
}
class AIRequestC extends Request{

    constructor(baseURL) {

        super(baseURL, 120000);


        this.instance.interceptors.request.use(
            config => {
                config.url=decodeURIComponent(config.url)
                // 当前路由不是登录页时，添加token
                let token = localStorage.getItem('token');
                console.log(token)
                if (token && config.url !== '/login') {
                    config.headers.token = token;
                }

                return config;

            },
            err => {
                ElNotification.success({
                    title: 'error',
                    message: 'ai请求异常',
                    showClose: true,
                })
                return Promise.reject(err)
            }
        );

        this.instance.interceptors.response.use(
            res => {
                if(res.data.json??false){
                    refreshData(res.data.json)
                }
                return res;
            },
            err => {
                console.log('发生错误',err)
                return Promise.reject(err)
            }
        );
    }
    postAI(config,message) {
        const no=  ElNotification({
            message: message+ ' 正在处理中',
            type: 'info',
            duration: 0,
            showClose: false
        })

        return this.request({...config, method: 'post'}).then(res=>{
            no.close()

            if(res.code==1){
                ElNotification.success({
                    type: 'success',
                    message: message+ " 执行完成",
                    showClose: true,
                })
            }
            return res;
        });
    }

}
export default new Request(BASE_URL,TIMEOUT)
export const AIRequest=new AIRequestC(BASE_URL)
