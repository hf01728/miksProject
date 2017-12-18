

///办理流程切换
$("div[name='selectLiuCheng']").mouseover(function () {
    var idx = $("div[name='selectLiuCheng']").index(this);
    for (var i = 0; i < 4; i++) {
        $("#select_" + i).hide();
        $("div[name='selectLiuCheng']").eq(i).removeClass("two").addClass("one");
    }
    $("#select_" + idx).show();
    $("div[name='selectLiuCheng']").eq(idx).addClass("two");
})
///移民加拿大的优势
$(".youshiwai").mouseover(function () {
    var idx = $(".youshiwai").index(this);
    $(".flost").eq(idx).show();
    //$(".flost").eq(idx).animate({ speed: "slow" });
}).mouseout(function () {
    $(".flost").hide();
    //$(".flost").animate({ speed: "fast" });
})

$(".TableTdMove").mouseover(function () {
    var idx = $(".TableTdMove").index(this);
    $(".DivFole").eq(idx).show();
}).mouseout(function () {
    $(".DivFole").hide();
})///
$(".TableTdMove_Two").mouseover(function () {
    var idx = $(".TableTdMove_Two").index(this);
    $(".DivFole_Two").eq(idx).stop();
    $(".DivFole_Two").eq(idx).show();
    $(".DivFole_Two").eq(idx).animate({ height: 105 },500);
}).mouseout(function () {
    $(".DivFole_Two").stop();
    $(".DivFole_Two").animate({ height: 83 },500);
    $(".DivFole_Two").hide();
})
$(".TableTdMove_Tree").mouseover(function () {
    var idx = $(".TableTdMove_Tree").index(this);
    $(".DivFole_Tree").eq(idx).show();
}).mouseout(function () {
    $(".DivFole_Tree").hide();
})

///链接地址
function hreflink(obj) {
    $("html, body").stop().animate({ scrollTop: $("#" + obj).offset().top - 100 }, 1000)
}




