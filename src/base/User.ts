export default class User {
    public role: number;
    public id: number;
    public isbaned: number;
    public ispublished: number = 0;
    public html: string;
    public avator: string;
    public username:string;
    public email:string;
    public style:string;

    constructor() {
        // 初始化一些默认值
        this.role = 0;
        this.id = 0;
        this.isbaned = 0;
        this.html = '';
        this.avator = '';
        this.style='简约,言简意赅,尽量使用成语总结,给人一种大师风范';
    }
}