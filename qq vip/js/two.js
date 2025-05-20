let droplist=document.getElementById("droplist");
let nav_item1=document.getElementById("nav_item1");
let nav_item2=document.getElementById("nav_item2");
let nav_item3=document.getElementById("nav_item3");
let nav_item4=document.getElementById("nav_item4");
let nav_item5=document.getElementById("nav_item5");
let nav_item6=document.getElementById("nav_item6");

let drop_item1=document.getElementById("drop_item1");
let drop_item2=document.getElementById("drop_item2");
let drop_item3=document.getElementById("drop_item3");
let drop_item4=document.getElementById("drop_item4");
function disp(){
    drop_item1.style.display="none"
    drop_item2.style.display="none"
    drop_item3.style.display="none"
    drop_item4.style.display="none"
}
function apper1(){
    droplist.style.display="block";
    drop_item1.style.display="block";
    drop_item2.style.display="block";
}
function apper2(){
    droplist.style.display="block";
    drop_item3.style.display="block";
    drop_item4.style.display="block";
}
nav_item1.addEventListener("mouseenter",function(){
    droplist.style.display="none";
    disp();
});
nav_item2.addEventListener("mouseenter",function(){
   apper1();
});
nav_item3.addEventListener("mouseenter",function(){
    droplist.style.display="none";
    disp();
});
nav_item4.addEventListener("mouseenter",function(){
    apper2();
});
nav_item5.addEventListener("mouseenter",function(){
    droplist.style.display="none";
    disp();
});
nav_item6.addEventListener("mouseenter",function(){
    droplist.style.display="none";
    disp();
});
droplist.addEventListener("mouseleave",function(){
    droplist.style.display="none";
    disp();
});