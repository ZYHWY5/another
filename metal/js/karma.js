//初始化
$(function (){
    FontChange();
})

function FontChange(){  
    //公司动态
    $('.Plate_cont1>li').hover(function (){  
        let index=$(this).index();
        $('.Plate_cont1>li>a>p').eq(index).addClass('FontChange');
    },function(){  
        let index=$(this).index();
        $('.Plate_cont1>li>a>p').eq(index).removeClass('FontChange');
    });
    //新闻中心
    $('.Plate_cont2>li').hover(function (){  
        let index=$(this).index();
        $('.Plate_cont2>li>a>p').eq(index).addClass('FontChange');
    },function(){  
        let index=$(this).index();
        $('.Plate_cont2>li>a>p').eq(index).removeClass('FontChange');
    });
}