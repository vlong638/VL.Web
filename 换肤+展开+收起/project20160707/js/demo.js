/// <reference path="jquery-1.10.2.min.js" />

$(function () {
    if (localStorage.getItem("bgscr") == null) {//页面打开之后判断本地储存的图片是否存在
        $("body").css("background-image", "url('image/bg0.jpg')");
        //localStorage.removeItem("bgscr"); //清除本地储存的bgsrc
    }
    else {
        $("body").css("background-image", "url(" + localStorage.getItem("bgscr") + ")");
    }
    $("#dchange a").click(function () {
        $("#dcpics").slideDown();//显示
    });
    $(".dup a").click(function () {
        $("#dcpics").slideUp();//隐藏
    });
    $(".dpic img").click(function () {//当点击图片的时候
        var bgscr = $(this).attr("src");//获取到当前点击的图片的src值
        $("body").css("background-image", "url(" + bgscr + ")");
        localStorage.setItem("bgscr", bgscr);//运用h5里面的localStorage将图片地址保存在本地
    });
});