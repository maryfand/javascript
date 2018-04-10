
    //获取元素
   /*var oTab = document.getElementById("tab");
    var oLis = oTab.getElementsByTagName("li");
    var oDivs = oTab.getElementsByTagName("div");
    
 function tabChange(n){
     for (var i=0;i<oLis.length;i++){
         oLis[i].className="";
         oDivs[i].className="";
     }
     oLis[n].className="select";
     oDivs[n].className="select";
 }
for (var i=0;i<oLis.length;i++)
{  oLis[i].lilun=i;
    oLis[i].onmouseover=function()
    {
        tabChange(this.lilun);
    }
}*/

    var oTab = document.getElementById("tab");
    var oLis = oTab.getElementsByTagName("li");
    var oDivs = oTab.getElementsByTagName("div");

    for(var i=0;i<oLis.length;i++){
        var oLi =oLis[i]
        oLi.lilun = i;
        oLi.onmouseover=function(){
            for(var j=0;j<oLis.length;j++){
                oLis[j].className="";
                oDivs[j].className="";
            }
            this.className="select";
            oDivs[this.lilun].className="select";
        }
    }