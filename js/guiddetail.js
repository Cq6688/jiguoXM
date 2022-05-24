var left_ = document.getElementsByClassName("a-r-left")[0];
var right_ = document.getElementsByClassName("a-r-right")[0];
left_.onmouseover = function(){
    left_.style.color = 'red';
    left_.style.backgroundImage = "url('../css/img/xinRedh.png')";
}
right_.onmouseover = function(){
    right_.style.color = 'red';
    right_.style.backgroundImage = "url('../css/img/shareh_yj1.png')";
}
left_.onmouseout = function(){
    left_.style.color = 'gray';
    left_.style.backgroundImage = "url('../css/img/xinRedo.png')";
}
right_.onmouseout = function(){
    right_.style.color = 'gray';
    right_.style.backgroundImage = "url('../css/img/share_yj1.png')";
}

