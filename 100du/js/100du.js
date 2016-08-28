/**
 * Created by Administrator on 2016/8/28.
 */
$(function(){
    //搜索切换
    (function(){
        var aLi = $('#menu li');
        var oText = $('#search').find('.form .text');
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
});
