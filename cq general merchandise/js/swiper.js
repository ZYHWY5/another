//对swiper进行初始化
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    //循环
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    //自动播放
    autoplay:true,
    //执行时间
    speed:3500,
});
//鼠标悬停时停止自动播放
swiper.el.onmouseover = function(){
  swiper.autoplay.stop();
}
//鼠标离开时重启自动播放
swiper.el.onmouseleave = function(){
  swiper.autoplay.start();
}