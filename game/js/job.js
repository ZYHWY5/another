let moshi = document.getElementsByClassName("moshi-photo")[0];
let qinshi = document.getElementsByClassName("qinshi-photo")[0];
let daojianshi = document.getElementsByClassName("daojianshi-photo")[0];
let yulingshi = document.getElementsByClassName("yulingshi-photo")[0];
let moshiButtom = document.getElementsByClassName("moshi")[0];
let qinshiButtom = document.getElementsByClassName("qinshi")[0];
let daojianshiButtom = document.getElementsByClassName("daojianshi")[0];
let yulingshiButtom = document.getElementsByClassName("yulingshi")[0];
let moshiStand = document.getElementsByClassName("moshi-stand")[0];
let qinshiStand = document.getElementsByClassName("qinshi-stand")[0];
let daojianshiiStand = document.getElementsByClassName("daojianshi-stand")[0];
let yulingshiStand = document.getElementsByClassName("yulingshi-stand")[0];
let a=1;
let b=0;
let c=0;
let d=0;
moshiButtom.onmousedown = function(){
    moshi.style.opacity="1";
    qinshi.style.opacity="0";
    daojianshi.style.opacity="0";
    yulingshi.style.opacity="0";
    moshiStand.style.opacity="1";
    qinshiStand.style.opacity="0";
    daojianshiiStand.style.opacity="0";
    yulingshiStand.style.opacity="0";
    a=1;
    b=0;
    c=0;
    d=0;
}
qinshiButtom.onmousedown = function(){
    moshi.style.opacity="0";
    qinshi.style.opacity="1";
    daojianshi.style.opacity="0";
    yulingshi.style.opacity="0";
    moshiStand.style.opacity="0";
    qinshiStand.style.opacity="1";
    daojianshiiStand.style.opacity="0";
    yulingshiStand.style.opacity="0";
    a=0;
    b=1;
    c=0;
    d=0;
}
daojianshiButtom.onmousedown = function(){
    moshi.style.opacity="0";
    qinshi.style.opacity="0";
    daojianshi.style.opacity="1";
    yulingshi.style.opacity="0";
    moshiStand.style.opacity="0";
    qinshiStand.style.opacity="0";
    daojianshiiStand.style.opacity="1";
    yulingshiStand.style.opacity="0";
    a=0;
    b=0;
    c=1;
    d=0;
}
yulingshiButtom.onmousedown = function(){
    moshi.style.opacity="0";
    qinshi.style.opacity="0";
    daojianshi.style.opacity="0";
    yulingshi.style.opacity="1";
    moshiStand.style.opacity="0";
    qinshiStand.style.opacity="0";
    daojianshiiStand.style.opacity="0";
    yulingshiStand.style.opacity="1";
    a=0;
    b=0;
    c=0;
    d=1;
}
moshiButtom.onmouseenter = function(){
    moshiStand.style.opacity="1";
}
moshiButtom.onmouseleave = function(){
    if(a!=1){
        moshiStand.style.opacity="0";
    }
}
qinshiButtom.onmouseenter = function(){
    qinshiStand.style.opacity="1";
}
qinshiButtom.onmouseleave = function(){
    if(b!=1){
        qinshiStand.style.opacity="0";
    }
}
daojianshiButtom.onmouseenter = function(){
    daojianshiiStand.style.opacity="1";
}
daojianshiButtom.onmouseleave = function(){
    if(c!=1){
        daojianshiiStand.style.opacity="0";
    }
}
yulingshiButtom.onmouseenter = function(){
    yulingshiStand.style.opacity="1";
}
yulingshiButtom.onmouseleave = function(){
    if(d!=1){
        yulingshiStand.style.opacity="0";
    }
}