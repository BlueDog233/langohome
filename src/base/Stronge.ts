import {reactive, ssrContextKey} from "vue";


const page=reactive({
    page: 'default'
})
const content=reactive(new Map())

const hidden=reactive({
    show:false,
    title:'标题',
    src:'https://photofortypora.oss-cn-beijing.aliyuncs.com/image-20240415004543474.png'
})
function sendContent(title,src){
    hidden.title=title
    hidden.src=src
    hidden.show=true
}
var data=JSON.parse('{\n' +
    '  "title": [\n' +
    '    "Hello",\n' +
    '    "I am ",\n' +
    '    "Lango",\n' +
    '    ",a coder",\n' +
    '    "Hope everything I want, everything I can do, everything I can make. Become a super man"\n' +
    '  ],\n' +
    '  "avatar": "https://photofortypora.oss-cn-beijing.aliyuncs.com/BlueDog.png",\n' +
    '  "info": {\n' +
    '    "18": "正在读大一",\n' +
    '    "Swust": "西南科技大学"\n' +
    '  },\n' +
    '  "label": {\n' +
    '    "JAVA": "编程技术",\n' +
    '    "跑者": "跑步爱好",\n' +
    '    "奇门": "玄学之术"\n' +
    '  },\n' +
    '  "nav": [\n' +
    '    {\n' +
    '      "src": "https://photofortypora.oss-cn-beijing.aliyuncs.com/image-20240417221827274.png",\n' +
    '      "title": "这个是弹出窗口的title",\n' +
    '      "img": "",\n' +
    '      "href": "https://github.com/BlueDog233"\n' +
    '    }\n' +    ',{\n' +
    '      "src": "https://photofortypora.oss-cn-beijing.aliyuncs.com/image-20240417221953724.png",\n' +
    '      "title": "这个是弹出窗口的title",\n' +
    '      "img": "https://photofortypora.oss-cn-beijing.aliyuncs.com/71eda666c63f65696bd0f726b0d78895.jpg",\n' +
    '      "href": ""\n' +
    '    }\n' +
    '  ],\n' +
    '  "href": "https://blog.cn",\n' +
    '  "say": {\n' +
    '    "word": "BlueDOgOOOOOOOOOG",\n' +
    '    "author": "GHR"\n' +
    '  },\n' +
    '  "works": [\n' +
    '    {\n' +
    '      "name": "指令脚本中间件",\n' +
    '      "href": "https://github.com/BlueDog233/BlogCommandScript"\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "商城",\n' +
    '      "href": "https://baidu.com"\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "个人博客",\n' +
    '      "href": "https://blog.cn"\n' +
    '    }\n' +
    '  ],\n' +
    '  "skills": [\n' +

    '    {\n' +
    '      "src": "https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg",\n' +
    '      "name": "Spring"\n' +
    '    },\n' +

    '    {\n' +
    '      "src": "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",\n' +
    '      "name": "Vue"\n' +
    '    },\n' +
    '    {\n' +
    '      "src": "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",\n' +
    '      "name": "HTML"\n' +
    '    },\n' +
    '    {\n' +
    '      "src": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",\n' +
    '      "name": "TypeScript"\n' +
    '    }\n' +
    '  ],\n' +
    '  "photos": [\n' +
    '    {\n' +
    '      "src": "https://photofortypora.oss-cn-beijing.aliyuncs.com/image-20240129200837786.png",\n' +
    '      "describe": "BlueDog的头像"\n' +
    '    },\n' +
    '    {\n' +
    '      "src": "https://photofortypora.oss-cn-beijing.aliyuncs.com/image-20240404200336179.png",\n' +
    '      "describe": "示例图片3"\n' +
    '    },\n' +
    '    {\n' +
    '      "src": "https://img.zcool.cn/community/0196015df4ee32a8012097b35d5a13.jpg@2o.jpg",\n' +
    '      "describe": "风景照片"\n' +
    '    },\n' +
    '    {\n' +
    '      "src": "https://s2.best-wallpaper.net/wallpaper/2560x1600/2010/Beautiful-park-in-autumn-yellow-maple-leaves-trees-wet-road_2560x1600.jpg",\n' +
    '      "describe": "城市景观"\n' +
    '    },\n' +
    '    {\n' +
    '      "src": "https://img.zcool.cn/community/019bfc5a5ce046a80120121f8a6f5d.jpeg@3000w_1l_2o_100sh.png",\n' +
    '      "describe": "夜景图片"\n' +
    '    }\n' +
    '  ]\n' +
    '}\n')
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
    sendContent,
    hidden,
    data
}