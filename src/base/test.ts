const str:string=
    `# Markdown Syntax Guide

## Headers

# This is an \`<h1>\` tag
## This is an \`<h2>\` tag
### This is an \`<h3>\` tag
#### This is an \`<h4>\` tag
##### This is an \`<h5>\` tag
###### This is an \`<h6>\` tag

## Emphasis

*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

_You **can** combine them_

## Lists

### Unordered

* Item 1
* Item 2
  * Item 2a
  * Item 2b

### Ordered

1. Item 1
2. Item 2
3. Item 3
   1. Item 3a
   2. Item 3b

## Images

![This is an image](https://via.placeholder.com/150)

## Links

[Visit GitHub!](http://github.com)

## Blockquotes

As Kanye West said:

> We're living the future so
> the present is our past.

## Inline code

I think you should use an
\`<addr>\` tag here.

## Code Blocks

\`\`\`javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
`
const myinfoD=`
# MY INFO

==AI自动生成模板信息机制==

>通过与AI的交互,AI会自动保存信息到信息集 中,在切换模板时,模板信息将自动从信息库与图片集中提取。信息库的数据包含了,所有与微网站Ai交互过程中得到的信息,上传图片的描述,以及图片中的内容(指AI识图得到的文字内容)。图片集的内容为二进制数据,以及描述。

## 个性值

即,该项占比权重,权重越高,生成信息集采纳度越高

## 描述

若传入图片,则为对图片的描述。二进制图片与描述进入图片集,描述可被AI再次用于索引图片。描述与图片文字内容进入信息集。并会根据图片内容,进行喜好归类(如 二次元图片上传过多 会打上二刺螈的标签)。

## 生成风格

在每次AI自动提取描述,图片信息到图像集与信息集时 以及在模板json生成时,将会掺入该prompt,该prompt能极大程度影响生成语句的风格。(如:生成风格中写   “酷爱网络,知道非常非常多的梗,能熟练运用",在信息集的生成 与模板的生成,将会看到很多的梗出现)

`
export {
    str,
    myinfoD
}