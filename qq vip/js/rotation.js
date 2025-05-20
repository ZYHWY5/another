let ui = document.getElementsByClassName("ui-slider-content")[0];//获取无序列表
let pb = document.getElementsByClassName("point-box")[0];//获取点的父标签
let first = ui.children[0].cloneNode(true);//克隆ul 第一个li， cloneNode() 加 true，深克隆，复制里面的子节点； false， 浅克隆 
ui.appendChild(first);//加在数组的最后
let t=2;
/*
初始化
*/
pb.children[0].className="p_li_1";
pb.children[1].className="p_li";
pb.children[2].className="p_li";
pb.children[3].className="p_li";
/*
函数功能：位移列表
*/
let transul = function(ul){
    ul.style.transition = "all,0.3s";
    ul.style.transform = "translateX(" + (-1025*t) + "px)";
    t+=1;
    if(t==7){
        ul.style.transform = "translateX(" + (-1025*t) + "px)";
        ul.style.transition = "none";
        ul.style.transform = "translateX(" + (-1025*1) + "px)";
        t=2;
    }
    if(ul.style.transform == "translateX(" + (-1025) + "px)"){
        pb.children[0].className="p_li_1";
        pb.children[1].className="p_li";
        pb.children[2].className="p_li";
        pb.children[3].className="p_li";
        return;
    }
    if(ul.style.transform == "translateX(" + (-2050) + "px)"){
        pb.children[0].className="p_li";
        pb.children[1].className="p_li_1";
        pb.children[2].className="p_li";
        pb.children[3].className="p_li";
        return;
    }
    if(ul.style.transform == "translateX(" + (-3075) + "px)"){
        pb.children[0].className="p_li";
        pb.children[1].className="p_li";
        pb.children[2].className="p_li_1";
        pb.children[3].className="p_li";
        return;
    }
    if(ul.style.transform == "translateX(" + (-4100) + "px)"){
        pb.children[0].className="p_li";
        pb.children[1].className="p_li";
        pb.children[2].className="p_li";
        pb.children[3].className="p_li_1";
        return;
    }
    if(ul.style.transform == "translateX(" + (-5125) + "px)"){
        pb.children[0].className="p_li_1";
        pb.children[1].className="p_li";
        pb.children[2].className="p_li";
        pb.children[3].className="p_li";
        return;
    }
}
let myset = setInterval("transul(ui)",4000);

let tl = document.getElementsByClassName("turn_l")[0];//左按钮
let tr = document.getElementsByClassName("turn_r")[0];//右按钮
let last = ui.children[3].cloneNode(true);//克隆ul 最后一个li， cloneNode() 加 true，深克隆，复制里面的子节点； false， 浅克隆

ui.insertBefore(last,ui.children[0]);//加在数组的开头
/*
函数功能：改变transform的值
*/
let changel = function(ul){
    if(ui.style.transform=="translateX(" + (0) + "px)"){
        ui.style.transition = "none";
        ui.style.transform = "translateX(" + (-4100) + "px)";
        ui.style.transition = "all.0.3s";
    }
}
let changer = function(ul){
    ul.style.transform = "translateX(" + (-1025) + "px)";
}
//ui.style.transition = "all.0.3s";
tl.onmousedown = function(){
    ui.style.transition = "all.0.3s";
    if(ui.style.transform=="translateX(" + (-1025) + "px)"){
        ui.style.transition = "all.0.3s";
        ui.style.transform="translateX(" + (0) + "px)";
        ui.style.transform = "translateX(" + (-4100) + "px)";
        pb.children[0].className="p_li";
        pb.children[1].className="p_li";
        pb.children[2].className="p_li";
        pb.children[3].className="p_li_1";
    }
    else{
        if(ui.style.transform=="translateX(" + (-4100) + "px)"){
            ui.style.transform = "translateX(" + (-3075) + "px)";
            pb.children[0].className="p_li";
            pb.children[1].className="p_li";
            pb.children[2].className="p_li_1";
            pb.children[3].className="p_li";
            return;
        }
        if(ui.style.transform=="translateX(" + (-3075) + "px)"){
            ui.style.transform = "translateX(" + (-2050) + "px)";
            pb.children[0].className="p_li";
            pb.children[1].className="p_li_1";
            pb.children[2].className="p_li";
            pb.children[3].className="p_li";
            return;
        }
        if(ui.style.transform=="translateX(" + (-2050) + "px)"){
            ui.style.transform = "translateX(" + (-1025) + "px)";
            pb.children[0].className="p_li_1";
            pb.children[1].className="p_li";
            pb.children[2].className="p_li";
            pb.children[3].className="p_li";
            return;
        }
    }
}
tr.onmousedown = function(){
    ui.style.transition = "all.0.3s";
    if(ui.style.transform=="translateX(" + (-4100) + "px)"){
        ui.style.transform="translateX(" + (-5125) + "px)";
        ui.style.transform="translateX(" + (-1025) + "px)";
        pb.children[0].className="p_li_1";
        pb.children[1].className="p_li";
        pb.children[2].className="p_li";
        pb.children[3].className="p_li";
    }
    else{
        if(ui.style.transform=="translateX(" + (-1025) + "px)"){
            ui.style.transform = "translateX(" + (-2050) + "px)";
            pb.children[0].className="p_li";
            pb.children[1].className="p_li_1";
            pb.children[2].className="p_li";
            pb.children[3].className="p_li";
            return;
        }
        if(ui.style.transform=="translateX(" + (-2050) + "px)"){
            ui.style.transform = "translateX(" + (-3075) + "px)";
            pb.children[0].className="p_li";
            pb.children[1].className="p_li";
            pb.children[2].className="p_li_1";
            pb.children[3].className="p_li";
            return;
        }
        if(ui.style.transform=="translateX(" + (-3075) + "px)"){
            ui.style.transform = "translateX(" + (-4100) + "px)";
            pb.children[0].className="p_li";
            pb.children[1].className="p_li";
            pb.children[2].className="p_li";
            pb.children[3].className="p_li_1";
            return;
        }
    }
}

pb.children[0].onmouseover = function(){
    clearTimeout(myset);
    ui.style.transform = "translateX(" + (-1025) + "px)";
    pb.children[0].className="p_li_1";
    pb.children[1].className="p_li";
    pb.children[2].className="p_li";
    pb.children[3].className="p_li";
}
pb.children[0].onmouseleave = function(){
    t=2;
    myset = setInterval("transul(ui)",4000);
}
pb.children[1].onmouseover = function(){
    clearTimeout(myset);
    ui.style.transform = "translateX(" + (-2050) + "px)";
    pb.children[0].className="p_li";
    pb.children[1].className="p_li_1";
    pb.children[2].className="p_li";
    pb.children[3].className="p_li";
}
pb.children[1].onmouseleave = function(){
    t=3;
    myset = setInterval("transul(ui)",4000);
}
pb.children[2].onmouseover = function(){
    clearTimeout(myset);
    ui.style.transform = "translateX(" + (-3075) + "px)";
    pb.children[0].className="p_li";
    pb.children[1].className="p_li";
    pb.children[2].className="p_li_1";
    pb.children[3].className="p_li";
}
pb.children[2].onmouseleave = function(){
    t=4;
    myset = setInterval("transul(ui)",4000);
}
pb.children[3].onmouseover = function(){
    clearTimeout(myset);
    ui.style.transform = "translateX(" + (-4100) + "px)";
    pb.children[0].className="p_li";
    pb.children[1].className="p_li";
    pb.children[2].className="p_li";
    pb.children[3].className="p_li_1";
}
pb.children[3].onmouseleave = function(){
    t=5;
    myset = setInterval("transul(ui)",4000);
}

/*
当鼠标移到列表和按钮上时停止计时器
*/
ui.onmouseover = function(){
    clearTimeout(myset);
}
ui.onmouseleave = function(){
    myset = setInterval("transul(ui)",4000);
}
tl.onmouseover = function(){
    clearTimeout(myset);
}
tl.onmouseleave = function(){
    myset = setInterval("transul(ui)",4000);
}
tr.onmouseover = function(){
    clearTimeout(myset);
}
tr.onmouseleave = function(){
    myset = setInterval("transul(ui)",4000);
}