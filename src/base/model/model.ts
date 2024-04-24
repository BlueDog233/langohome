// src/model.ts

// 定义接口并使用 export type 导出类型，以符合 isolatedModules 要求
import MessageContainer from "./aimessage-model.ts";

export interface Photo {
    url?: string;
    describe?: string;
    personality?: string;
}

export interface Template {
    photos: Photo[];
    author: string;
    describe: string;
    starcount: number;
    name: string;
}

export interface View {
    chooseTemplate: {
        isVisible: boolean;
        select: 'template' | 'create' | 'stars';
        choose_template: Template;
        templates: Template[];
    };
    settingTemplate: {
        isVisible: boolean;
        infomode: boolean;
    };
    multi_mediaDisplay: {
        isVisible: boolean;
        photoUrl: string;
        title: string;
        markdownStr: string;
    };
    message2Ai: MessageContainer;
}

export interface SingleAll {
    view: View;
    user: User;
}

export interface User {
    avatar: string;
    username: string;
    isPublished: boolean;
    html: string;
    style: string;
    textData: string;
    photoData: Photo[];
    template: number;
    email: string;
    stars: number[];
    json: string;
}

export interface Data2AI {
    data: any;
    describe?: string;
}

