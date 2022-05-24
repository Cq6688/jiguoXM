
window.onload = function () {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");

    ajax_.open('get', 'http://127.0.0.1:3000/useing/master');
    ajax_.send();
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var data = JSON.parse(ajax_.responseText);
                // console.log(data);
                show(data);
                look(data);
                fn(data);
                gn(data);

            }
        }
    }
}


function show(data_) {
    console.log(data_);
    var str = '';
    for (var i = 8; i < 12; i++) {
        console.log(data_[i]);
        str += ` <dt>
            <a href="use/detail.html">
                <span class="top-tip shoufa">${(data_[i]).info_ty}</span>
                <img src="${(data_[i]).img}" width="220" height="130" />
                <div class="hot-con">
                    <h2 class="name">${(data_[i]).text}</h2>
                    <p class="tabs red">
                        <span>${(data_[i]).totalnum}</span>
                        <span>${(data_[i]).num}</span>
                    </p>
                    <p class="sq"><span>${(data_[i]).apply}</span>申请</p>
                    <p class="current red">剩余时间2天</p>
                </div>
            </a>
        </dt>`;

    }
    // 点击加载更多
    var dl1_ = document.getElementById('dl1');
    // console.log(dl1_);
    dl1_.innerHTML = str;

}
// 报告精选
function look(data_) {
    var str = '';
    for (var i = 0; i < 8; i++) {
        // console.log(data_[i]);
        str += ` <li>
            <a href="guid/detail.html">
                <img src="${(data_[i]).img}" width="220" height="130" />
                <div class="info">
                    <p class="name">${(data_[i]).text}</p>
                    <div class="tip fix">
                        <span class="nick left">●${(data_[i]).uName}</span>
                        <div class="right icon">
                            <span class="zan">3</span>
                            <span class="look">3</span>
                        </div>
                    </div>
                </div>
            </a>
        </li>`;

    }
    var ul1_ = document.getElementById('ul1');
    console.log(ul1_);
    ul1_.innerHTML = str;
}
// 导购精选
function fn(data_) {

    var str = '';
    for (var i = 12; i < 16; i++) {
        // console.log(data_[i]);
        str += `<li>
        <div class="s-body tip fix">
            <a href="./detail.html">
                <img src="${(data_[i]).img}">
                <p>${(data_[i]).text}</p>
            </a>
            <div class="right icon">
                <span class="xin">3</span>
                <span class="look">3</span>
            </div>
        </div>
        <div class="s-block1"></div>
        <div class="s-block2"></div>
        </li>`;
    }
    var guid1_ = document.getElementById('guid1');
    guid1_.innerHTML = str;
}
// 发现酷玩
function gn(data_) {
    var str = '';
    for (var i = 0; i < 12; i++) {
        console.log(data_[i]);

        str += `<li>
                    <a href="use/detail.html">
                        <img src="${(data_[i]).img}" width="220" height="130" />
                        <div class="info">
                            <p class="name">XPLORER 2 航拍飞行器<span>搭载自动避障系统</span></p>
                            <div class="tip fix">
                                <span class="price left">￥ 433</span>
                                <div class="right icon">
                                    <span class="xin">3</span>
                                    <span class="look">3</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>`;
    }
    var myDiv_ = document.getElementById('myDiv');
    console.log(myDiv_);
    myDiv_.innerHTML = str;
}

// 点击加载更多
var play_ = document.getElementsByClassName('more-btn')[0];
play_.onclick = function () {
    this.style.backgroundImage = "url('../css/img/loading-icon.gif')";
}


// var play_ = document.getElementsByClassName('more-btn')[0];
// console.log(play_);
//     play_.onclick = function () {
//         this.style.backgroundImage = "url('./css/img/loading-icon.gif')";
//     }




