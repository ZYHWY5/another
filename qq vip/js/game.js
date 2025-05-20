let tp = document.getElementsByClassName("tp")[0]; //获取图片列表
let sq = document.getElementsByClassName("squal")[0]; //获取点的列表
let t=0;
tp.children[0].style.opacity = "1";
let change = function(ui){
  ui.children[0].style.opacity = "0";
  ui.children[1].style.opacity = "0";
  ui.children[2].style.opacity = "0";
  ui.children[3].style.opacity = "0";
  ui.children[4].style.opacity = "0";
  ui.children[t].style.opacity = "1";
  switch(t){
    case 0:sq.children[0].style.background = "#6f211e";sq.children[1].style.background = "#fff";
    sq.children[2].style.background = "#fff";sq.children[3].style.background = "#fff";sq.children[4].style.background = "#fff";break;
    case 1:sq.children[0].style.background = "#fff";sq.children[1].style.background = "#6f211e";
    sq.children[2].style.background = "#fff";sq.children[3].style.background = "#fff";sq.children[4].style.background = "#fff";break;
    case 2:sq.children[0].style.background = "#fff";sq.children[1].style.background = "#fff";
    sq.children[2].style.background = "#6f211e";sq.children[3].style.background = "#fff";sq.children[4].style.background = "#fff";break;
    case 3:sq.children[0].style.background = "#fff";sq.children[1].style.background = "#fff";
    sq.children[2].style.background = "#fff";sq.children[3].style.background = "#6f211e";sq.children[4].style.background = "#fff";break;
    case 4:sq.children[0].style.background = "#fff";sq.children[1].style.background = "#fff";
    sq.children[2].style.background = "#fff";sq.children[3].style.background = "#fff";sq.children[4].style.background = "#6f211e";break;
  }
  t++;
  if(t==5){
    t=0;
  }
}
let myset = setInterval("change(tp)",3000);
sq.children[0].onmouseover = function(){
  clearTimeout(myset);
  tp.children[0].style.opacity = "1";
  tp.children[1].style.opacity = "0";
  tp.children[2].style.opacity = "0";
  tp.children[3].style.opacity = "0";
  tp.children[4].style.opacity = "0";
  sq.children[0].style.background = "#6f211e";
  sq.children[1].style.background = "#fff";
  sq.children[2].style.background = "#fff";
  sq.children[3].style.background = "#fff";
  sq.children[4].style.background = "#fff";
}
sq.children[0].onmouseleave = function(){
  t=1;
  myset = setInterval("change(tp)",3000);
}
sq.children[1].onmouseover = function(){
  clearTimeout(myset);
  tp.children[0].style.opacity = "0";
  tp.children[1].style.opacity = "1";
  tp.children[2].style.opacity = "0";
  tp.children[3].style.opacity = "0";
  tp.children[4].style.opacity = "0";
  sq.children[0].style.background = "#fff";
  sq.children[1].style.background = "#6f211e";
  sq.children[2].style.background = "#fff";
  sq.children[3].style.background = "#fff";
  sq.children[4].style.background = "#fff";
}
sq.children[1].onmouseleave = function(){
  t=2;
  myset = setInterval("change(tp)",3000);
}
sq.children[2].onmouseover = function(){
  clearTimeout(myset);
  tp.children[0].style.opacity = "0";
  tp.children[1].style.opacity = "0";
  tp.children[2].style.opacity = "1";
  tp.children[3].style.opacity = "0";
  tp.children[4].style.opacity = "0";
  sq.children[0].style.background = "#fff";
  sq.children[1].style.background = "#fff";
  sq.children[2].style.background = "#6f211e";
  sq.children[3].style.background = "#fff";
  sq.children[4].style.background = "#fff";
}
sq.children[2].onmouseleave = function(){
  t=3;
  myset = setInterval("change(tp)",3000);
}
sq.children[3].onmouseover = function(){
  clearTimeout(myset);
  tp.children[0].style.opacity = "0";
  tp.children[1].style.opacity = "0";
  tp.children[2].style.opacity = "0";
  tp.children[3].style.opacity = "1";
  tp.children[4].style.opacity = "0";
  sq.children[0].style.background = "#fff";
  sq.children[1].style.background = "#fff";
  sq.children[2].style.background = "#fff";
  sq.children[3].style.background = "#6f211e";
  sq.children[4].style.background = "#fff";
}
sq.children[3].onmouseleave = function(){
  t=4;
  myset = setInterval("change(tp)",3000);
}
sq.children[4].onmouseover = function(){
  clearTimeout(myset);
  tp.children[0].style.opacity = "0";
  tp.children[1].style.opacity = "0";
  tp.children[2].style.opacity = "0";
  tp.children[3].style.opacity = "0";
  tp.children[4].style.opacity = "1";
  sq.children[0].style.background = "#fff";
  sq.children[1].style.background = "#fff";
  sq.children[2].style.background = "#fff";
  sq.children[3].style.background = "#fff";
  sq.children[4].style.background = "#6f211e";
}
sq.children[4].onmouseleave = function(){
  t=0;
  myset = setInterval("change(tp)",3000);
}
/*
当鼠标移到列表和按钮上时停止计时器
*/
tp.onmouseover = function(){
  clearTimeout(myset);
}
tp.onmouseleave = function(){
  myset = setInterval("change(tp)",3000);
}

//回到顶部
let uiTop = document.getElementById("ui-top");
/*
函数功能：获取纵向滚动条高度
*/ 
function getScrollTop() {
  let doc = document;
  return Math.max(doc.body.scrollTop, doc.documentElement.scrollTop);
}
onmousewheel = function(){
  let h = Math.ceil(getScrollTop());
  console.log(h);
  if(h>=870){
    uiTop.style.opacity = 1;
  }
  else{
    uiTop.style.opacity = 0;
  }
}
//给'回到顶部'的按钮添加点击事件
uiTop.addEventListener("click",function(){
  window.scrollTo(0,0);
  uiTop.style.opacity = 0;
})