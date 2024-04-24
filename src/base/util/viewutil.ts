import * as store from '../store'


let view=store.singleData.view
function sendContent(title,src,source?:string){
    view.multi_mediaDisplay.title=title
    view.multi_mediaDisplay.markdownStr=source
    view.multi_mediaDisplay.photoUrl=src
    view.multi_mediaDisplay.isVisible=true
}

export {
    sendContent
}