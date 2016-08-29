/**
 * Created by Administrator on 2016/8/29.
 */
$(function(){
    (function(){
        var oNav = $('#top .nav');
        var oA = oNav.find('a');

        oA.each(function(index){
            $(this).click(function(){
                oA.removeClass('active');
                $(this).addClass('active');
                console.log(oA)
            })
        })
    })();

    (function(){
        var oSubnav = $('#top .subnav');
        var aA = oSubnav.find('a');

        aA.each(function(){
            $(this).mouseover(function(){
                aA.removeClass('active');
                $(this).addClass('active');
            })
        })
    })();

    (function(){
        var oSubnav = $('#nav .nav');
        var aA = oSubnav.find('a');

        aA.each(function(){
            $(this).click(function(){
                aA.removeClass('active');
                $(this).addClass('active');
            })
        })
    })();

    //轮播图
    (function(){
       var oLunbo = $('.lunbo');
        var iNow = 0;
        var iH = 0;
        var timer = null;
        var aA = oLunbo.find('a');
        var arrA = $('#slider a');
        iH = oLunbo.find('a').height();
        function doMove(num){
            iNow += num;
            if(Math.abs(iNow) > aA.length -1){
                iNow = 0;
            }else if(iNow > 0){
                iNow = -(aA.length - 1 )
            }
            oLunbo.stop().animate({'top':iH*iNow},1200);
            //arrA.removeClass('current');
            if( arrA[Math.abs(iNow)]){
                arrA.removeClass('current')

            }
            arrA.eq(Math.abs(iNow)).addClass('current')
        }

        function autoPlay(){
            timer = setInterval(function(){
                doMove(-1)
            },2000)
        }
        autoPlay();

    })();
});