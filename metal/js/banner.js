$(document).ready(function(){
    /*点击切换*/
    /*初始化*/
    $(".uncon").eq(0).addClass("con");

    $(".uncon").on("click", function(){
        $(this).removeClass("uncon");
        $(this).addClass("con");
        $(this).siblings().removeClass("con");
        $(this).siblings().addClass("uncon");

        let index = $(this).index();
        $(".banner_img").eq(index).css({
            "opacity":"1",
            "transition":"all, 0.2s"
        });
        $(".banner_img").eq(index).siblings().css({
            "opacity":"0",
            "transition":"all, 0.2s"
        });
        $(".btn").css({
            "opacity":"1",
            "transition":"all, 0.2s"
        });
    })


    /*轮播*/
    let index = 0;
    let time;
    startInterval();
    
    function startInterval(){
        time = setInterval(change, 3000);
        function change(){
        $(".banner_img").eq(index).css({
            "opacity":"1",
            "transition":"all, 0.2s"
        });
        $(".banner_img").eq(index).siblings().css({
            "opacity":"0",
            "transition":"all, 0.2s"
        });
        $(".btn").css({
            "opacity":"1",
            "transition":"all, 0.2s"
        });
        $(".btn span").eq(index).addClass("con").siblings().removeClass("con");
        index++;
        if(index > 2){
            index = 0;
        }
    }
    }

    /*鼠标进入banner停止计时器*/
    $(".banner").hover(function(){
        clearInterval(time);
    }, function(){
        startInterval();
    })
})