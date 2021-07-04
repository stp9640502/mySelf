let lists = [
    {
        "tag": "六角學院",
        "img": "./static/Group 7.svg",
        "title": "拼拼電商",
        "introduction": "使用bootstrap5完成六角設計稿",
        "link": "https://stp9640502.github.io/HEXproject/Bootstrap5%E6%96%B0%E6%89%8B%E5%AF%A6%E6%88%B0/index.html"
    },
    {
        "tag": "JS練習",
        "img": "./static/Group 7.svg",
        "title": "我是測試",
        "introduction": "隨便一串測試文字",
        "link": ""
    },
    {
        "tag": "JS練習",
        "img": "./static/Group 7.svg",
        "title": "我是測試",
        "introduction": "隨便一串測試文字",
        "link": ""
    },
    {
        "tag": "JS練習",
        "img": "./static/Group 7.svg",
        "title": "我是測試",
        "introduction": "隨便一串測試文字",
        "link": ""
    }
];

const Lists = document.querySelector(".content-lists");
const menu = document.querySelector(".content-menu");

function createLists() {
    let data = "";
    lists.forEach(function (item) {
        data += `
        <li class="content-list">
        <div class="tag">${item.tag}</div>
        <img src="${item.img}" alt="">
        <h4 class="h2">${item.title}</h4>
        <p>簡介 :<span class="ps-1">${item.introduction}</span></p>
        <a href="${item.link}" target="_blank">點此進入</a>
        </li>`;
    })
    Lists.innerHTML = data;
}
/* 網頁初始化 */
createLists();

menu.addEventListener("click", function (e) {
    if (e.target.getAttribute("class") != "getlist") {
        return;
    }
    let data = "";

    lists.forEach(function (item) {
        if (e.target.text == "全部作品") {
            data += `
            <li class="content-list">
            <div class="tag">${item.tag}</div>
            <img src="${item.img}" alt="">
            <h4 class="h2">${item.title}</h4>
            <p>簡介 :<span class="ps-1">${item.introduction}</span></p>
            <a href="${item.link}" target="_blank">點此進入</a>
            </li>`
        }
        else if (e.target.text == item.tag) {
            data += `
        <li class="content-list">
        <div class="tag">${item.tag}</div>
        <img src="${item.img}" alt="">
        <h4 class="h2">${item.title}</h4>
        <p>簡介 :<span class="ps-1">${item.introduction}</span></p>
        <a href="${item.link}" target="_blank">點此進入</a>
        </li>`;
        }
    });
    Lists.innerHTML = data;
})
