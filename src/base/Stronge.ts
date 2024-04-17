import {reactive} from "vue";


const page=reactive({
    page: 'default'
})
const content=reactive(new Map())
content.set('Java','testaaaaaaaaaaaaaaaaa')
content.set('18','dasdasdsssssssssaaaaaaaaaavdsf')
export{
    page,
    content
}