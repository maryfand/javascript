//选项卡的实现思路，鼠标滑到某一个li上面，让当前的li和对应的div有select样式，让其他没有这个样式

//分析需求和思路

//要操作谁就先获取谁

var oTab =document.getElementById("tab");
var oLis=oTab.getElementsByTagName("li");
var oDivs=oTab.getElementsByTagName("div");

//实现一个功能方法
function tabChange(nindex) {
    for (var i = 0; i < oLis.length; i++) {
        oLis[i].className = "";
        oDivs[i].className = "";
        console.log("ok");
    }
    oLis[nindex].className = "select";
    oDivs[nindex].className = 'select';  
}
//给我们的li绑定鼠标移上去的事件
for (var i = 0; i < oLis.length; i++) {
    oLis[i].lilun = i;
    oLis[i].onmouseover = function () {  
        tabChange(this.lilun);     
    }

}
//index是我们定义的形参，代表当前被选中元素的索引
