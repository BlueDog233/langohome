import {reactive} from "vue";
import {SingleAll, Template} from "./model/model";
import {User} from "./model/model";


const userData: User = reactive({
    avatar: 'https://via.placeholder.com/150',
    username: '李华',
    isPublished: false,
    html: '<h1>欢迎访问我的主页</h1>',
    style: '狂野的',
    textData: '爱好包括但不限于：打球、踢球、阅读、旅游、摄影、游泳、烹饪',
    photoData: [
        {url: 'https://via.placeholder.com/600/92c952', describe: '美丽的风景照', personality: '活泼'},
        {url: 'https://via.placeholder.com/600/771796', describe: '和家人一起出去玩', personality: '家庭型'},
        {url: 'https://via.placeholder.com/600/24f355', describe: '在海边的日出', personality: '冒险'},
        {url: 'https://via.placeholder.com/600/d32776', describe: '山顶上的雪景', personality: '冷静'},
        {url: 'https://via.placeholder.com/600/f66b97', describe: '市中心夜景', personality: '城市'}
    ],
    template: 4,
    email: '2052774863@qq.com',
    stars: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    json: '{"key":"value"}'
});

const templates: Template[] = reactive([
    {
        photos: [
            {url: 'https://via.placeholder.com/600/24f355', describe: '测试图片1'},
            {url: 'https://via.placeholder.com/600/d32776', describe: '测试图片2'},
            {url: 'https://via.placeholder.com/600/33f877', describe: '测试图片5'},
            {url: 'https://via.placeholder.com/600/77d981', describe: '测试图片6'},
            {url: 'https://via.placeholder.com/600/25d876', describe: '测试图片7'}
        ],
        author: '模板作者',
        describe: '这是一个测试模板',
        starcount: 5,
        name: '测试模板1'
    },
    {
        photos: [
            {url: 'https://via.placeholder.com/600/f66b97', describe: '测试图片3'},
            {url: 'https://via.placeholder.com/600/56a8c2', describe: '测试图片4'},
            {url: 'https://via.placeholder.com/600/92f234', describe: '测试图片8'},
            {url: 'https://via.placeholder.com/600/56f298', describe: '测试图片9'},
            {url: 'https://via.placeholder.com/600/92c955', describe: '测试图片10'}
        ],
        author: '梨花',
        describe: '这是第二个测试模板',
        starcount: 120,
        name: '测试模板2'
    }
]);

const singleData: SingleAll = reactive({
    user: userData,
    view: {
        chooseTemplate: {
            isVisible: false,
            select: 'template',
            choose_template: templates[0],
            templates: templates
        },
        settingTemplate: {
            isVisible: false,
            infomode: false
        },
        multi_mediaDisplay: {
            isVisible: false,
            photoUrl: 'https://via.placeholder.com/600/92c952',
            title: '展示标题',
            markdownStr: '# 这是Markdown示例文本'
        },
        message2Ai: {
            data: [
                {
                    message: 'Hello',
                    from: 'System',
                    type: 2
                }, {
                    message: 'HelloTOO Iam human',
                    from: 'User',
                }
            ],
            describe: "messages",
            status: 0
        }
    }

});

export {
    singleData,
    templates
}
