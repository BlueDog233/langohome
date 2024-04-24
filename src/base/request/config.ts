import axios from "axios";
import {refreshData} from "../model/dto-model.ts";

export const BASE_URL = '/api';
export const TIMEOUT = 3000;
class Request {
    instance
    constructor(baseURL, timeout = 10000) {
        this.instance = axios.create({
            baseURL,
            timeout,
        });

        this.instance.interceptors.request.use(
            config => {
                // 当前路由不是登录页时，添加token
                let token = sessionStorage.getItem('token');
                if (token && config.url !== '/login') {
                    config.headers.token = token;
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
                // 401 "token过期" 处理
                // if (err.response?.status === 500) {
                //     myNotification('服务器错误', 'error')
                // }
                // const msg = err.response.data || '请求失败';
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
                })
                .catch(err => {
                    // reject(err);
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
export default new Request(BASE_URL,TIMEOUT)
