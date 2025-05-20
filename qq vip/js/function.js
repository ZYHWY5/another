//获得privilege-nav下面的全部a标签
let privilegeListItems = document.querySelectorAll(".privilege-nav>li>a");
//记录当前点击的列表项目的索引
let currentIndex = 0;
//获得列表元素
let privilegeLists = document.querySelectorAll(".privilege-list");
//获得列表元素的父背景元素
let privilegeBackground = document.getElementById("privilege-background");
//获得列表元素的父包含元素
let privilegeContainer = document.getElementById("privilege-container");

//获取所有privilege-list-item-h3的元素，用于给超链接的title赋值
let listItemH3 = document.querySelectorAll(".privilege-list-item-h3");
//获取所有.privilege-list中的图片
let listItemImgs = document.querySelectorAll(".privilege-list>li>a>div");
//获取页面中回到顶部的按钮
let uiTop = document.getElementById("ui-top");
//获取页面中的function-list-aniplays的第一个div
let aniplaysDiv1 = document.querySelectorAll(".function-list-aniplays>div:nth-child(1)");
let aniplaysDiv2 = document.querySelectorAll(".function-list-aniplays>div:nth-child(2)");
let aniplayH3 = document.querySelectorAll(".function-list-a>h3");
let aniplayP = document.querySelectorAll(".function-list-a>p");
let aniplayListItem = document.querySelectorAll(".banner-container-function-list>li");
//两个高度值
let heights = [294,478];


//根据点击的按钮，更改对应的下边框样式
function changeBottomBorder(index){
    privilegeListItems[currentIndex].classList.remove("current");
    privilegeListItems[index].classList.add("current");
    changeDisplayStyle(index)
    currentIndex = index;
}

//方法：改变显示的样式
function changeDisplayStyle(index){
    //索引为1的是高度大的
    if(index!=1){
        privilegeLists[index].style.height = `${heights[0]}px`;
        privilegeBackground.style.height = `${heights[0]}px`;
        privilegeContainer.style.height = `${heights[0]}px`;
        privilegeBackground.style["margin-bottom"] = "50px";

    }else{
        privilegeLists[index].style.height = `${heights[1]}px`;
        privilegeBackground.style.height = `${heights[1]}px`;
        privilegeContainer.style.height = `${heights[1]}px`;
        privilegeBackground.style["margin-bottom"] = "90px";
    }

    for(var i = 0; i <privilegeLists.length;i++){
        if(i!=index){
            privilegeLists[i].style.display = 'none';
        }else{
            privilegeLists[i].style.display = 'flex';
        }
    }
}

/*
初始化图片中的title
*/ 
function initialItemTitle(){
    for(var i = 0 ; i< listItemH3.length ; i++){
        listItemImgs[i].setAttribute("title",`${listItemH3[i].innerHTML}`)
       // console.log(listItemH3[i].innerHTML);
    }
}

//检查滚动状态
function checkScroll(){
    if(window.scrollY+window.innerHeight+10>=this.document.documentElement.scrollHeight)
    {
        uiTop.style.opacity = 1;
    }else{
        uiTop.style.opacity = 0;
    }
}

//给窗口添加滚动事件
window.addEventListener('scroll',checkScroll);
//给窗口添加缩放事件
window.addEventListener('resize',checkScroll);

//给'回到顶部'的按钮添加点击事件
uiTop.addEventListener("click",function(){
    window.scrollTo(0,0);
})

//鼠标移入的事件
function mouseEnterAnimation(index){
    aniplaysDiv1[index].classList.add('function-list-aniplays-div1');
    aniplaysDiv2[index].classList.add('function-list-aniplays-div2');
    aniplayH3[index].classList.add('function-list-a-h3');
    aniplayP[index].classList.add('function-list-a-p');
}

//鼠标移出事件
function mouseLeaveAnimation(index){
    aniplaysDiv1[index].classList.remove('function-list-aniplays-div1');
    aniplaysDiv2[index].classList.remove('function-list-aniplays-div2');
    aniplayH3[index].classList.remove('function-list-a-h3');
    aniplayP[index].classList.remove('function-list-a-p');
}

//初始化动画加载事件
function initialAnimation(){
    for(let i = 0 ; i < aniplayListItem.length ; i++){
        aniplayListItem[i].addEventListener("mouseenter",function(){
            mouseEnterAnimation(i);
            //console.log(`${i}进入`);
        });

        aniplayListItem[i].addEventListener("mouseleave",function(){
            mouseLeaveAnimation(i);
           // console.log(`${i}移开`);
        });
    }
}



//加载网页的时候初始化图片中的title
initialItemTitle();
changeDisplayStyle(0);
initialAnimation();