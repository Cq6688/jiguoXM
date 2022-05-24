
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
            }
        }
    }
    function show(data_) {
        // console.log(data_);
        var str = '';
        for (var i = 2; i < 6; i++) {
            // console.log(data_[i]);
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
        for (var i = 6; i < 10; i++) {
            // console.log(data_[i]);
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
        for (var i = 10; i < 14; i++) {
            // console.log(data_[i]);
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
        var dl1_ = document.getElementById('dl1');
        // console.log(dl1_);
        dl1_.innerHTML = str;

        // 点击加载更多
        var play_ = document.getElementsByClassName('more-btn')[0];
        // console.log(play_);
        play_.onclick = function () {
            this.style.backgroundImage = "url('../css/img/loading-icon.gif')";
        }
        var slide_box = document.getElementsByClassName('slide-box');
        index = 0;
        timer = null;
        timer = setInterval(autoPlay, 2000);
        slide_box.onmouseover = function () {
            clearInterval(timer);
        }
        slide_box.onmouseout = function () {
            timer = setInterval(autoPlay, 2000);
        }
        for (var i = 0; i < dl1_.length; i++) {
            console.log(dl1_.length);
            dl1_[i].onmousedown = function () {
                index = this.innerText - 1;
                changePic(index);
            }
        }
        function autoPlay() {
            if (++index >= dl1_.length) index = 0;
            changePic(index);
        }
        function changePic(curIndex) {
            for (var i = 0; i < dl1_.length; ++i) {
                // dl1_[i].style.display = "none";
                // list[i].className = "";
            }
            // dl1_[curIndex].style.display = "block";
            // list[curIndex].className = "on";
        }
    }


}




