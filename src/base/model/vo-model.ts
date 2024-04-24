import {SingleAll} from "./model.ts";

export interface Response{
    data:any
    json:SingleAll
    message:string
    code:0|1|2//0为成功 1为失败 2为AI信息回复成功
    type?:1 |2 |3|4//AI回复信息type
}