/// <reference path="jquery-1.10.2.min.js" />
var raNum = 0;
$(function () {//页面加载完毕之后
    var i = 0;
    $("#darrow").click(function () {//点击转盘之后
        i++;
        if (i > 3) {
            alert("只有3次抽奖的机会");
            return;
        }
        raNum = Math.random() * 360;//产生0~360之间的随机数
        if ((247.5 < raNum && raNum <= 292.5) || (292.5 < raNum && raNum <= 337.5))
        {
            raNum = Math.random() * 22.5;
        }
        $(this).rotate({
            duration: 2000,//从开始到结束的时间
            angle: 0,//开始的角度
            animateTo: raNum + 1080,//旋转的角度
            callback: function () {//回调函数（转完之后。。。）
                A();
            }
        });
    });
    function A() {
        if (0 < raNum && raNum <= 22.5) {
            alert("谢谢参与，您木有中奖");
            return;
        }
        else if (22.5 < raNum && raNum <= 67.5) {
            alert("恭喜，您中了5元代金券");
            return;
        }
        else if (67.5 < raNum && raNum <= 112.5) {
            alert("恭喜，您中了1元代金券");
            return;
        }
        else if (112.5 < raNum && raNum <= 157.5) {
            alert("恭喜，您中了10元代金券");
            return;
        }
        else if (157.5 < raNum && raNum <= 202.5) {
            alert("谢谢参与，您木有中奖");
            return;
        }
        else if (202.5 < raNum && raNum <= 247.5) {
            alert("恭喜，您中了20元代金券");
            return;
        }
        else if (247.5 < raNum && raNum <= 292.5) {
            alert("恭喜，您中了50元代金券");
            return;
        }
        else if (292.5 < raNum && raNum <= 337.5) {
            alert("恭喜，您中了30元代金券");
            return;
        }
        else {
            alert("谢谢参与，您木有中奖");
            return;
        }
    }
});