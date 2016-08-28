/**
 * Created by Administrator on 2016/8/28.
 */
$(function(){
    //搜索切换
    (function(){
        var aLi = $('#menu li');
        var oText = $('#search .form .text');
        var iNow = 0;
        var arrText = [
            '例如：荷棠鱼坊烧鱼 或 樱花日本料理',
            '例如：昌平区育新站龙旗广场2号楼609室',
            '例如：万达影院双人情侣券',
            '例如：东莞出事了，大老虎是谁？',
            '例如：北京初春降雪，天气变幻莫测'
        ];
        oText.val(arrText[iNow]);
        aLi.each(function( index ){
            $(this).click(function(){
                aLi.attr('class','gradient');
                $(this).attr('class','active');
                iNow = index;
                oText.val(arrText[iNow]);
            })
        });

        oText.focus(function(){

            if ($(this).val() == arrText[iNow]){
                $(this).val('');
            }
        });

        oText.blur(function(){
            if ($(this).val() == ''){
                $(this).val(arrText[iNow]);
            }
        });

    })();

    //update文字滚动;
    (function(){
        var arrData = [
            { 'name':'萱萱', 'time':1, 'title':'那些灿烂华美的瞬间' },
            { 'name':'畅畅', 'time':2, 'title':'广东3天抓获涉黄疑犯' },
            { 'name':'萱萱', 'time':3, 'title':'国台办回应王郁琦' },
            { 'name':'畅畅', 'time':4, 'title':'那些灿烂华美的瞬间' },
            { 'name':'萱萱', 'time':5, 'title':'那些灿烂华美的瞬间' },
            { 'name':'畅畅', 'time':6, 'title':'广东3天抓获涉黄疑犯' },
            { 'name':'萱萱', 'time':7, 'title':'国台办回应王郁琦' },
            { 'name':'畅畅', 'time':8, 'title':'那些灿烂华美的瞬间' }
        ];
        var oDiv = $('.update');
        var oUl = $('.update ul');
        var iH = 0;
        var str = '';
        var oBtnUp = $('.update .triangle_up');
        var oBtnDown = $('.update .triangle_down_red');
        var iNow = 0;
        for ( var i=0;i<arrData.length;i++ ){
            str += '<li><a href="#"> <strong>'+ arrData[i].name +'</strong> <span>'+ arrData[i].time +'分钟前</span> 写了一篇文章：'+ arrData[i].title +'...</a></li>';
        }
        oUl.html(str);
        //console.log(str);
        //console.log(iH);
        iH = oUl.find('li').height();
        oBtnUp.click(function(){
            doMove(-1);
        });
        oBtnDown.click(function(){
            doMove(1);
        });

        function doMove( num ){
            iNow += num;
            if (Math.abs(iNow) > arrData.length - 1 ){
                iNow = 0;
            }else if( iNow > 0){
                iNow = -(arrData.length - 1);
            }
            oUl.stop().animate({'top':iH*iNow},1200);
        }
        function autoPlay(){
            oDiv.timer = setInterval(function(){
                doMove(-1);
            },2000)
        }
        autoPlay();
        oDiv.hover(function(){
            clearInterval(oDiv.timer)
        },function(){
            autoPlay();
        });
        //oUl.animate({'top':iH*-1},2000);

    })();

    //options选项切换;
    (function(){
        fnTab($('.navTab1'),$('.tabCon1'));
        function fnTab(oNav,aCon){
            var aElem = oNav.children();
            aCon.hide().eq(0).show();

            aElem.each(function(index){
                $(this).click(function(){
                    aElem.removeClass('active').addClass('gradient');
                    $(this).removeClass('gradient').addClass('active');
                    aElem.find('div').attr('class','triangle_down_gray');
                    $(this).find('div').attr('class','triangle_down_red');

                    aCon.hide().eq(index).show();
                })
            })
        }
    })();

    // 自动播放的焦点图;
    (function(){
        var arr = [ '爹爹去哪儿啦~', '人像摄影中的光影感', '娇柔妩媚、美艳大方' ];
        var oDiv = $('#fade');
        var aULi = oDiv.find('ul li');
        var aOLi = oDiv.find('ol li');
        var oP = oDiv.find('p');
        var iNow = 0;
        var timer = null;

        //fnFade();
        aOLi.click(function(){
            iNow = $(this).index();
            fnFade();
        });
        autoPlay();
        function autoPlay(){
           timer =  setInterval(function(){
                iNow++;
                iNow %= arr.length;
                fnFade();
            },1500)
        }
        oDiv.hover(function(){
            clearInterval(timer);
        },autoPlay);
        function fnFade(){
            aULi.each(function(i){
                if (i != iNow){
                    aULi.eq(i).fadeOut().css('zIndex',1);
                    aOLi.eq(i).removeClass('active');
                }else{
                    aULi.eq(i).fadeIn().css('zIndex',2);
                    aOLi.eq(i).addClass('active');
                }
            });

            oP.text(arr[iNow])
        }
    })();

    //日历提示说明
    (function(){
        var aSpan = $('.calendar h3 span');
        var aImg = $('.calendar img');
        var oPrompt = $('.today_info');
        var oImg = oPrompt.find('img');
        var oStrong = oPrompt.find('strong');
        var oP = oPrompt.find('p');

        aImg.hover(function(){
            var iTop = $(this).parent().position().top - 30;
            var iLeft = $(this).parent().position().left + 50;
            var Index = $(this).parent().index()%aSpan.size();
            oPrompt.show().css({'top': iTop,'left': iLeft});
            oP.text($(this).attr('info'));
            oImg.attr('src',$(this).attr('src'));
            oStrong.text(aSpan.eq(Index).text())
        },function(){
            oPrompt.hide();
        })

    })();

    //BBS
    (function(){
        $('.bbs ol li').mouseover(function(){
            $('.bbs ol li').removeClass('active').eq($(this).index()).addClass('active');
        })
    })();

    //pic
    (function(){
        var arr = [
            '',
            '用户1<br />人气1',
            '用户名：性感宝贝<br />区域：朝阳CBD<br />人气：124987',
            '用户3<br />人气3',
            '用户4<br />人气4',
            '用户5<br />人气5',
            '用户6<br />人气6',
            '用户7<br />人气7',
            '用户8<br />人气8',
            '用户9<br />人气9',
            '用户10<br />人气10'
        ];
        $('.hot_area li').mouseover(function(){
            if ($(this).index() == 0){
                return;
            }
            $('.hot_area li p').remove();
            $(this).append('<p style="width: '+ ($(this).width()-12) + 'px; height:'+ ($(this).height()-12) + 'px;">' + arr[$(this).index()] + '</p>');
        })
    })();
});
