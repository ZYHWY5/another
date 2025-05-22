$(function(){
  let width = 420
  let n = 1;
  $(".left img").on("click",function(){ 
      $(".news_box").css({
        transform: `translateX(${-width*(n-1)}px)`
        })
        if(n>1){
          n--;
        }
        //console.info(n);
   
    }) 
    $(".right img").on("click",function(){
      $(".news_box").css({
        transform: `translateX(${-width*n}px)`
      })  
      if(n<10){
        n++;
      }
      //console.info(n);
      if(n == 10){
        $(".news_box").css({
          transform: `translateX(-4200px)`
        }) 
      }
    })
})


//获取列表
let list = document.getElementById("list");

//注册事件
list.onmousedown = function(){
  holdDown();
};
list.onmouseleave = function(){
  clearInterval(time);
}
list.onmouseup = function(){
  holdUp();
}

//申明全局变量
var timeStart, timeEnd, time;

//获取此刻时间
function getTimeNow() {
    var now = new Date();
    return now.getTime();
}

let clientXStart;
let clientXEnd;

//鼠标按下时触发
function holdDown(event) {

  function mousemoveStart(event) {
    clientXStart = event.clientX;
  } 

  //鼠标移动事件
  function mousemove(event) {
    //clientXStart = event.clientX;
    clientXEnd = event.clientX;
  } 
  
  list.addEventListener('mousemove', mousemove);
  list.addEventListener('mousedown', mousemoveStart);
    //获取鼠标按下时的时间
    timeStart = getTimeNow();

    //setInterval会每100毫秒执行一次，也就是每100毫秒获取一次时间
    time = setInterval(function (event) {
        timeEnd = getTimeNow();
        //如果此时检测到的时间与第一次获取的时间差有1000毫秒
        if (timeEnd - timeStart > 50 ) {
            //便不再继续重复此函数 （clearInterval取消周期性执行）
            //console.log(clientX);
            console.log(clientXStart);
            console.log(clientXEnd);
            $(document).ready(function(){
              $(".news_box").css({
                transform: `translateX(${clientXEnd - clientXStart - 500  }px)`
              });
            })
        }
        if (timeEnd - timeStart < 50) { 
          //便不再继续重复此函数 （clearInterval取消周期性执行）
          clearInterval(time);
        }
    }, 50);
}
function holdUp() {
    //如果按下时间不到1000毫秒便弹起，
    clearInterval(time);
}