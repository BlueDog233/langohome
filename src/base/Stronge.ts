import {reactive, ssrContextKey} from "vue";
// @ts-ignore
import User from "./User.ts";

const userStroge=reactive({
    user: new User()
})
// @ts-ignore

const page=reactive({
    page: 'default'
})
const content=reactive(new Map())

const hidden=reactive({
    show:false,
    title:'标题',
    src:'https://photofortypora.oss-cn-beijing.aliyuncs.com/image-20240415004543474.png',
    source:'aa'
})

var data=JSON.parse('{\n' +
    '  "title": [\n' +
    '    "Hi, I\'m Li Hua",\n' +
    '    "Software Engineer",\n' +
    '    "from Chengdu, Sichuan",\n' +
    '    "I love tech & programming",\n' +
    '    "Hope to connect with like-minded friends!"\n' +
    '  ],\n' +
    '  "avatar": "https://photofortypora.oss-cn-beijing.aliyuncs.com/BlueDog.png",\n' +
    '  "info": {\n' +
    '    "Age": "30 years old",\n' +
    '    "Occupation": "Software Engineer at a Tech Company"\n' +
    '  },\n' +
    '  "label": {\n' +
    '    "Programming": "Passionate about coding and new technologies",\n' +
    '    "Traveling": "Loves to travel and explore different cultures",\n' +
    '    "Photography": "Enjoys capturing beautiful moments",\n' +
    '    "Cooking": "Expert in Sichuan cuisine"\n' +
    '  },\n' +
    '  "nav": [\n' +
    '    {\n' +
    '      "src": "{补齐githubicon地址}",\n' +
    '      "title": "Visit my GitHub",\n' +
    '      "img": "NOTFOUND",\n' +
    '      "href": "https://github.com/LiHua"\n' +
    '    }\n' +
    '  ],\n' +
    '  "href": "blog.cn",\n' +
    '  "say": {\n' +
    '    "word": "Embrace technology, explore the world.",\n' +
    '    "author": "Li Hua"\n' +
    '  },\n' +
    '  "works": [\n' +
    '    {\n' +
    '      "name": "Software Development Projects",\n' +
    '      "href": "https://github.com/LiHua"\n' +
    '    }\n' +
    '  ],\n' +
    '  "skills": [\n' +
    '    {\n' +
    '      "src": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",\n' +
    '      "name": "react"\n' +
    '    }\n' +
    '  ],\n' +
    '  "photos": [\n' +
    '    {\n' +
    '      "src": "https://photofortypora.oss-cn-beijing.aliyuncs.com/image-20240129200837786.png",\n' +
    '      "describe": "Exploring cultures through my lens"\n' +
    '    }\n' +
    '  ]\n' +
    '}')
// data['info'].forEach(((value,key)=>{
//     content.set(key,value)
// }))
Object.keys(data['info']).forEach((key)=>{
    content.set(key,data['info'][key])
})
Object.keys(data['label']).forEach((key)=>{
    content.set(key,data['label'][key])
})
export{
    page,
    content,
    hidden,
    data,
    userStroge
}