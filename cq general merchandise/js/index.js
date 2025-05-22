function InitialCompanyFormat(){
    //调用ajax
    $.ajax({
        //请求的类型
        type:"GET",
        //规定发送请求的 URL，也就是要发送到的服务器的地址，也可以是一个静态路径
        url:"data/companyFormat.json",
        datatype:"jsonp",
        //允许跨源请求
        //data表示服务器返回的数据，status表示状态，xhr表示原生JS的数据
        success:function(data,status,xhr)
        {
             //获取列表容器
             let list = $(".business_list");
             for(let i = 0 ; i<data.length ; i++){
                 //创建元素
                 let li = $(
                     `<li>
                         <a href="javascript:void(0)">
                             <img src="${data[i].picture}" alt="">
                                 <div class="business_list_li_info">
                                     <h4 class="business_list_li_info_title">${data[i].title}</h4>
                                     <p class="business_list_li_info_content">                
                                             ${data[i].content}
                                     </p>
                                 </div>
                             <span class="business_arrow_default"></span>
                         </a>
                     </li>`
                 );
                 li.appendTo(list);
             }
             //获得第一个li
             let firstLi = $(".business_list>li:nth-child(1)");
             firstLi.css({ width: "556px" }) //改自身宽度
             .siblings("li") //找其余兄弟元素
             .css({ width: "240px" }) //修改兄弟元素的宽度
             .find(".business_list_li_info") //寻找兄弟元素中的子元素
             .css({ height: "54px" }); //修改其高度
             ToggleArrow(firstLi, true);

             //注册事件：指定的子元素被鼠标选中
            $(".business_list li").on("mouseenter", function () {
                console.info($(this).index());
                let myli = $(this);
                myli.css({ width: "556px" }) //改自身宽度
                .siblings("li") //找其余兄弟元素
                .css({ width: "240px" }) //修改兄弟元素的宽度
                .find(".business_list_li_info") //寻找兄弟元素中的子元素
                .css({ height: "54px" }); //修改其高度
                //改自身的后代的content的高度
                 myli.find(".business_list_li_info").css({ height: "120px" });
                //修改箭头样式
                ToggleArrow(myli, true);
                //修改其它li的箭头样式
                ToggleArrow(myli.siblings("li"));
            });
        }   
    });
}

$('.notice_list').hover(function (){
    //获取当前索引位置
    let index=$(this).index();
    //console.info(index);
    $('.notice_list').eq(index).find('.notice_content').find('p').addClass('active');
},function (){
    //获取当前索引位置
    let index=$(this).index();
    $('.notice_list').eq(index).find('.notice_content').find('p').removeClass('active');
});

 //初始化
$(function () {
    InitialCompanyFormat();
});


//切换箭头状态
//true表示活跃，false表示默认
function ToggleArrow(target, condition) {
    if (condition == true) {
        target.find("span").removeClass("business_arrow_default").addClass("business_arrow_active");
    } else {
        target.find("span").removeClass("business_arrow_active").addClass("business_arrow_default");
    }
}

