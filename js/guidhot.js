window.onload = function () {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");

    ajax_.open('get', 'http://127.0.0.1:3000/guid/hot');
    ajax_.send();

    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var data = JSON.parse(ajax_.responseText);


                render(data);
            }
        }
    }
}

function render(data_) {
    // console.log(data_);
    var str = '';
    for (var item of data_) {
        // console.log(item);
        str += `<li>
        <div class="s-body">
            <a href="./detail.html">
                <img src="${item.img}">
                <p>${item.text}</p>
            </a>
            <div class="s-icon s-icon1">
                <span class="s-xin" onclick="red(this)">${item.like}</span>
                <span class="s-look">${item.words}</span>
            </div>
        </div>
        <div class="s-block1"></div>
        <div class="s-block2"></div>
        </li>`;
    }
    for(var i=1;i<2;i++){
        console.log(data_[i]);
        str += `<li>
        <div class="s-body">
            <a href="./detail.html">
                <img src="${(data_[i]).img}">
                <p>${(data_[i]).text}</p>
            </a>
            <div class="s-icon s-icon1">
                <span class="s-xin" onclick="red(this)">${(data_[i]).like}</span>
                <span class="s-look">${(data_[i]).words}</span>
            </div>
        </div>
        <div class="s-block1"></div>
        <div class="s-block2"></div>
        </li>`;
       
    }
    var ul_ = document.getElementsByClassName('s-list')[0];
    ul_.innerHTML = str;
}
function loading(){
    var p_ = document.getElementsByClassName('s-footer')[0];
    p_.style.backgroundImage = "url('../css/img/loading-icon.gif')";
    p_.innerHTML ='正在加载中';
}
function red(that) {
    var xin_ = document.getElementsByClassName('s-xin')[0];
    console.log(xin_);
    for (var i = 0; i < xin_.clientHeight; i++) {
        if (that.className = 's-xin') {
            that.className = 's-xin1';
            that.innerHTML = '4';
        } else {
            that.className = 's-xin';
        }
    }
}