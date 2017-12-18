// 专业选择多手指滑动效果
var needMoveLeft = false;
var needMoveRight = false;
$("#professional").on("touchstart", function(e) {
        e.preventDefault();
        startX = e.originalEvent.changedTouches[0].pageX;
        needMoveLeft = false;
        needMoveRight = false;
});

$("#professional").on("touchmove", function(e) {
    e.preventDefault();
    moveEndX = e.originalEvent.changedTouches[0].pageX;
    X = moveEndX - startX;
    if ( X > 0 ) {
            needMoveLeft = true;
    }
    else if (X < 0 ) {
            needMoveRight = true;
    }
    else{
        // console.log("just touch");
    }
});
$("#professional").on("touchend", function(e) {
    if(needMoveLeft){
        var last = $("#professional").find("li:last");
        $("#professional").find("li").first().before(last);
    }
    if(needMoveRight){
        var first = $("#professional").find("li:first");
        $("#professional").find("li").last().after(first);
    }
})
// 专业选择多手指滑动效果 --E
// 移民加拿大的优势手指滑动效果 --S
$("#immiAdvantageWrap").on("touchstart", function(e) {
    e.preventDefault();
    startX = e.originalEvent.changedTouches[0].pageX;
    needMoveLeft = false;
    needMoveRight = false;
});

$("#immiAdvantageWrap").on("touchmove", function(e) {
    e.preventDefault();
    moveEndX = e.originalEvent.changedTouches[0].pageX;
    X = moveEndX - startX;
    if ( X > 0 ) {
        needMoveLeft = true;
    }
    else if (X < 0 ) {
        needMoveRight = true;
    }
    else{
        console.log("just touch");
    }
});
$("#immiAdvantageWrap").on("touchend", function(e) {
    if(needMoveLeft){
        var last = $("#immiAdvantageWrap").find("li:last");
        $("#immiAdvantageWrap").find("li").first().before(last);
    }
    if(needMoveRight){
        var first = $("#immiAdvantageWrap").find("li:first");
        $("#immiAdvantageWrap").find("li").last().after(first);
    }
})

// 移民加拿大的优势手指滑动效果 --E
// 移动到相应锚点
function hreflink(obj) {
    $("html, body").stop().animate({ scrollTop: $("#" + obj).offset().top - 45}, 1000)
}

// 导航栏浮动
var _nav_obj = $("#nav");
var _nav_top = _nav_obj.offset().top;
function navFixed() {
    if ($(window).scrollTop() > _nav_top) {
        _nav_obj.addClass("nav_fixed");
    } else {
        _nav_obj.removeClass("nav_fixed");
    }
}
navFixed();

$(window).bind('scroll resize', function () {
    navFixed();
    $("#QQFixedWrap").hide();
    $("#QQFixed").css({"right":"-25px"});
});

// QQ小图标是否出现
$("#QQFixed").on("click", function() {
    $("#QQFixedWrap").show();
    $("#QQFixed").css({"right":"0px"});
});

// 打开关闭移民评估
$("#openEvaluate").click(function () {
    $("#MessageBG").fadeIn();
    $("#MessageBook").slideDown();
})
$("#colseEvaluate").click(function () {
    $("#MessageBook").slideUp();
    $("#MessageBG").fadeOut();
})
