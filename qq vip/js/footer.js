let l = document.getElementsByClassName("last-box")[0];
let logo = document.getElementsByClassName("last_logo")[0];
/*
函数功能：获取纵向滚动条高度
*/ 
function getScrollTop() {
    let doc = document;
    return Math.max(doc.body.scrollTop, doc.documentElement.scrollTop);
}
logo.style.opacity = 0;
onmousewheel = function(){
    let h = Math.ceil(getScrollTop());
    console.log(h);
    if(h>=113){
        l.style.height = "75px";
        logo.style.opacity = 1;
    }
    else{
        l.style.height = "0px";
        logo.style.opacity = 0;
    }
}