$(document).ready(function(){
    $(".swiper").on("mouseenter", function(){
        $(".t_right").css({
            display:"block"
        })
        $(".t_left").css({
            display:"block"
        })
    })
    $(".swiper").on("mouseleave", function(){
        $(".t_right").css({
            display:"none"
        })
        $(".t_left").css({
            display:"none"
        })
    })
})