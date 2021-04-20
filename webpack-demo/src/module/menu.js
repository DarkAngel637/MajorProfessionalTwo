import baidu from '@/assets/baidu'

const menuOptions = {
    ex: '扩展迷',
    favor: '书签',
    history: '历史记录',
    jd: '京东商城',
    juejin: '掘金',
    translate: '百度翻译',
    weibo: '微博',
    setting: '设置',
    reader: '微信读书',
    weather: '天气'
}
const imgs = [];
// webapck的require.context去加载一个文件夹及后续文件夹中符合规则的所有图片
importAll(require.context('../assets/menu/', true, /\.webp$/));
function importAll(r) {
    r.keys().forEach((item)=>{
        imgs.push({
            text:  menuOptions[item.slice(2, -5)],
            value: r(item)
        })
    });
}

const menu = `<section>${
    imgs.map(item=>`<li>
        <img src=${item.value.default} />
        <span>${item.text}</span> 
    </li>`).join(" ")
}
</section>`


const headerOptions = ['网页', '新闻', '图片', '地图', '视频'];
const header = `<header>${
    headerOptions.map((item, index)=>`<span class=${index?'':'active'}>${item}</span>`).join(" ")
}</header>`;


const input = `<section class="input">
    <img class="icon" src=${baidu} /> 
    <input type="text"/>   
</section>`

let container = `<div class="menu">`;
container += header;
container += input;
container += menu;

document.body.innerHTML += container;