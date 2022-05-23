
window.onload = function () {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");

    ajax_.open('get', 'http://127.0.0.1:3000/report/new');
    ajax_.send();

    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var data = JSON.parse(ajax_.responseText);
                // console.log(data);
                show(data);
            }
        }
    }
}
function show(data_) {
    // console.log(data_);
    var str = '';
    for (var i = 1; i < 5; i++) {
        // console.log((data_[i]));
        str += `<li>
        <a href="../guid/detail.html">
        <img src="${(data_[i]).img}" width="700" height="412" />
        <div class="info">
            <p class="title">${(data_[i]).text}</p>
            <div class="btm fix">
                <div class="userInfo left">
                    <span class="avt"></span>
                    <span class="name">${(data_[i]).uName}</span>
                    <span class="time">${(data_[i]).endTime}</span>
                </div>
                <div class="right icon">
                    <span class="zan">${(data_[i]).num}</span>
                    <span class="look">${(data_[i]).apply}</span>
                </div>
            </div>
        </div>
    </li>`;
        str += `<li>
           <a href="../guid/detail.html"></a>
              <div class="click-look">关于格林威特空气净化器还有 4 篇报告，点击查看</div>
            </li>`;
    }
    var ul_ = document.getElementById('myDiv');
    ul_.innerHTML = str;
}
var play_ = document.getElementsByClassName('more-btn')[0];
console.log(play_);
play_.onclick = function () {
    this.style.backgroundImage = "url('../css/img/loading-icon.gif')";
}

