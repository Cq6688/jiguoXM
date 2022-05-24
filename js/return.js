/**热门试用 轮播js**/
var slide = {
    stop: true,
    index: 0,
    len: null,
    animate: false,
    prevEvent: function () {
        var prev = $(".prev");
        prev.live("mouseover", function () {
            slide.stop = false;
        });
        prev.live("mouseout", function () {
            slide.stop = true;
        });
        var animate1 = false;
        prev.live("click", function () {
            if (animate1 || slide.animate) return;
            animate1 = true;
            slide.index--;
            if (slide.index < 0) slide.index = slide.len - 1;
            $(".slide-box").css("left", "-1000px");
            $(".slide-box dl").css("left", "1000px");
            $(".slide-box dl").eq(slide.index).css("left", "0");
            $(".slide-box").animate({ "left": "0" }, 800, function () {
                $(".slide-box dl").removeClass("on");
                $(".slide-box dl").eq(slide.index).addClass("on");
                animate1 = false;
            });
        });
    },
    nextEvent: function () {
        var next = $(".next");
        next.live("mouseover", function () {
            slide.stop = false;
        });
        next.live("mouseout", function () {
            slide.stop = true;
        });
        var animate1 = false;
        next.live("click", function () {
            if (animate1 || slide.animate) return;
            animate1 = true;
            slide.index++;
            if (slide.index >= slide.len) slide.index = 0;
            $(".slide-box dl").css("left", "0");
            $(".slide-box dl").eq(slide.index).css("left", "1000px");
            $(".slide-box").animate({ "left": "-1000px" }, 800, function () {
                $(".slide-box dl").eq(slide.index).css("left", "0");
                $(".slide-box dl").removeClass("on");
                $(".slide-box dl").eq(slide.index).addClass("on");
                $(".slide-box").css("left", "0");
                animate1 = false;
            });
        });
    },
    init: function () {
        slide.len = $(".slide-box dl").size();
        $('.slide-box').width(2000);
        /**自动 轮播**/
        setInterval(function () {
            if (!slide.stop) return;
            slide.animate = true;
            slide.index++;
            if (slide.index >= slide.len) slide.index = 0;
            $(".slide-box dl").css("left", "0");
            $(".slide-box dl").eq(slide.index).css("left", "1000px");
            $(".slide-box").animate({ "left": "-1000px" }, 800, function () {
                $(".slide-box").css("left", "0");
                $(".slide-box dl").eq(slide.index).css("left", "0");
                $(".slide-box dl").removeClass("on");
                $(".slide-box dl").eq(slide.index).addClass("on");
                slide.animate = false;
            });
        }, 3000);
        /**左右箭头点击**/
        this.prevEvent();
        this.nextEvent();
    }
}