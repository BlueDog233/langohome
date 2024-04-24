import {Data2AI} from "./model.ts";

export default class MessageContainer implements Data2AI{
    data: Message[];
    describe: 'messages';
    status: 0 | 1=0//0为空闲,1为繁忙
}

export interface Message{
    from: 'User' | 'System',
    message: string
}

export interface AIMessage extends Message{
    from: 'System',
    type: 4 | 3 | 1 | 2    //消息类型,1.执行成功 2.执行失败 3.INFO 4.WARNING
}
export interface UserMessage extends Message{
    from: 'User'
}
export const build=(message:string):UserMessage=>{
    return {
        from:"User",
        message:message
    }
}
