$(document).ready(function(){
    /*导航选中特效*/
    $(".uncontral").eq(0).addClass("contral");
    $(".uncontral").on("click", function(){
        $(this).addClass("contral").siblings().removeClass("contral");
    })

    $(".uncontral").hover(function(){
        let index = $(this).index();
        $(".nav_border").eq(index).css({
            "opacity":"1"
        });
    },function(){
        let index = $(this).index();
        $(".nav_border").eq(index).css({
            "opacity":"0"
        });
    })

    /*二级菜单*/
    console.log($(".words_ul").children());
    $(".words_ul").children().mouseenter(function(){
        let index = $(this).index();
        if(index > 0){
            $(".second").eq(index - 1).css({
                "display":"block"
            });
        }
    })
    /*在鼠标进入一级菜单的进入函数中写二级菜单的出现和消失函数*/
    $(".words_ul").children().mouseleave(function(){
        /*通过一个变量来判断鼠标进入一级菜单后是否进入二级菜单*/
        let i = 0;
        $(".second").mouseenter(function(){
            $(this).css({
                "display":"block"
            });
            i = 1;
        })
        $(".second").mouseleave(function(){
            $(this).css({
                "display":"none"
            });
            i = 1;
        })
        if(i == 0){
            let index = $(this).index();
            $(".second").eq(index - 1).css({
            "display":"none"
        });
        }
    })
})
