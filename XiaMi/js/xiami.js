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
        var inum = 0;
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
        arrA.mouseover(function(){
            clearInterval(timer);
        });
        arrA.mouseout(function(){
            autoPlay();
        });
        arrA.each(function(index){
            $(this).click(function(){
                arrA.removeClass('current');
                $(this).addClass('current');
                inum = arrA.eq($(this));

                doMove2(-index,0);
                function doMove2(num,iNow){
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
                console.log($(this).index())
            })
        });
        function autoPlay(){
            timer = setInterval(function(){
                doMove(-1);
            },2000)
        }
        autoPlay();

    })();

    //切换a
    (function(){
        var oPrev = $('#album .prev');
        var oNext = $('#album .next');
        var oCon = $('#album .content_block');
        var aImg = oCon.children();
        var iW = oCon.find('.album').width();
        var iNow = 0;
        function doMove(num){
            iNow += num;
            if(Math.abs(iNow) > aImg.length - 5){
                iNow = 0;
            } else if( iNow > 0){
                iNow = -(aImg.length - 5)
            }
            oCon.stop().animate({'left':iW*iNow},1200);
            console.log(iNow)
        }
        oPrev.click(function(){
            doMove(1);
        })
        oNext.click(function(){
            doMove(-1);
        })
    })();

    //切换b
    (function(){
        var oPrev = $('#collects .prev');
        var oNext = $('#collects .next');
        var oCon = $('#collects .content_block');
        var aImg = oCon.children();
        var iW = oCon.find('.album').width();
        var iNow = 0;
        function doMove(num){
            iNow += num;
            if(Math.abs(iNow) > aImg.length - 5){
                iNow = 0;
            } else if( iNow > 0){
                iNow = -(aImg.length - 5)
            }
            oCon.stop().animate({'left':iW*iNow},1200);
            console.log(iNow)
        }
        oPrev.click(function(){
            doMove(1);
        })
        oNext.click(function(){
            doMove(-1);
        })
    })();

    //展开内容
    (function(){
        var aLi = $('#charts ul li')
        aLi.each(function(){

            $(this).mouseover(function(){
                aLi.removeClass('active');
                $(this).addClass('active');
            })
        })
    })();
});