window.onload = function(){
    $('.loading').fadeOut(500);
};

$(document).ready(function(){
    $('.nav-bar .container .content .right button').focus(function(){
        $(this).css({
            "box-shadow" : "none"
        });
    });
    $('input').focus(function(){
        $(this).css({
            "outline" : "none"
        });
    });
    $('select').focus(function(){
        $(this).css({
            "outline" : "none"
        });
    });
    $('.sections .top .cont').click(function(){
        $(this).children().css({
            "color" : "#D10024"
        });
        $(this).siblings().children().css({
            "color" : "#ced4da" ,
            "border-bottom" : "none"
        })
    });
    $('.products .content .top .right h3').on('click' , function(){
        $(this).css({
            "color" : "black" ,
            "border-bottom" : "1px solid black"
        });
        $(this).siblings().css({
            "color" : "#D10024" ,
            "border-bottom" : "none"
        });
        $('.products .content .top .left h1').css({
            "color" : "#D10024" ,
            "border-bottom" : "none"
        })
    });
    $('.products .content .top .left h1').on('click' , function(){
        $(this).css({
            "color" : "black" ,
            "border-bottom" : "1px solid black"
        });
        $(this).siblings().css({
            "color" : "#D10024" ,
            "border-bottom" : "none"
        });
        $('.products .content .top .right h3').css({
            "color" : "#D10024" ,
            "border-bottom" : "none"
        })
    });


    $('#laptop').on('click' , function(){
        $('.products .content .bottom .cont').hide(0);
        $('.laptop').show(0);
    });
    $('#smart').on('click' , function(){
        $('.products .content .bottom .cont').hide(0);
        $('.smart').show(0);
    });
    $('#headphone').on('click' , function(){
        $('.products .content .bottom .cont').hide(0);
        $('.headphone').show(0);
    });
    $('#access').on('click' , function(){
        $('.products .content .bottom .cont').hide(0);
        $('.access').show(0);
    });

    $('.products .content .top .left h1').click(function(){
        $('.products .content .bottom .one').show( 0 );
        $('.products .content .bottom .one').siblings().hide(0);
    });


    $('.products .content .buttons .right').click(function(){
        $('.products .content .top .left h1').css({
            "color" : "#D10024" ,
            "border-bottom" : "none"
        });
        $('.products .content .top .right h3').css({
            "color" : "#D10024" ,
            "border-bottom" : "none"
        })
        $('.products .content .bottom .cont').first().siblings().fadeOut();
        $('.products .content .bottom .cont').first().delay(0).hide(0);
        $('.products .content .bottom .cont').first().appendTo($('.products .content .bottom .cont').parent());
        $('.products .content .bottom .cont').first().show(0);
    });
    $('.products .content .buttons .left').click(function(){
        $('.products .content .top .left h1').css({
            "color" : "#D10024" ,
            "border-bottom" : "none"
        });
        $('.products .content .top .right h3').css({
            "color" : "#D10024" ,
            "border-bottom" : "none"
        })
        $('.products .content .bottom .cont').first().siblings().fadeOut();
        $('.products .content .bottom .cont').first().delay(1000).hide(1000);
        $('.products .content .bottom .cont').last().prependTo($('.products .content .bottom .cont').parent());
        $('.products .content .bottom .cont').last().show(1000);
    });

    $('.products .content .bottom .cont').hover(function(){
        $(this).find('.buy').slideDown(500)
    } , function(){
        $(this).find('.buy').slideUp(500)
    });

    $('.sell .content .left .top .more').click(function(){
        $('.sell .content .left .bottom').children().children().first().hide(1000);
        $('.sell .content .left .bottom').children().append($('.sell .content .left .bottom').children().children().first());
        $('.sell .content .left .bottom').children().children().first().show(1000);
    });
    $('.sell .content .half .top .more').click(function(){
        $('.sell .content .half .bottom').children().children().first().hide(1000);
        $('.sell .content .half .bottom').children().append($('.sell .content .half .bottom').children().children().first());
        $('.sell .content .half .bottom').children().children().first().show(1000);
    });
    $('.sell .content .right .top .more').click(function(){
        $('.sell .content .right .bottom').children().children().first().hide(1000);
        $('.sell .content .right .bottom').children().append($('.sell .content .right .bottom').children().children().first());
        $('.sell .content .right .bottom').children().children().first().show(1000);
    });
    $('.sell .content .four .top .more').click(function(){
        $('.sell .content .four .bottom').children().children().first().hide(1000);
        $('.sell .content .four .bottom').children().append($('.sell .content .four .bottom').children().children().first());
        $('.sell .content .four .bottom').children().children().first().show(1000);
    });
    $('.sell .content .left .top .less').click(function(){
        $('.sell .content .left .bottom').children().children().first().hide(1000);
        $('.sell .content .left .bottom').children().append($('.sell .content .left .bottom').children().children().first());
        $('.sell .content .left .bottom').children().children().first().show(1000);
    });
    $('.sell .content .half .top .less').click(function(){
        $('.sell .content .half .bottom').children().children().first().hide(1000);
        $('.sell .content .half .bottom').children().append($('.sell .content .half .bottom').children().children().first());
        $('.sell .content .half .bottom').children().children().first().show(1000);
    });
    $('.sell .content .right .top .less').click(function(){
        $('.sell .content .right .bottom').children().children().first().hide(1000);
        $('.sell .content .right .bottom').children().append($('.sell .content .right .bottom').children().children().first());
        $('.sell .content .right .bottom').children().children().first().show(1000);
    });
    $('.sell .content .four .top .less').click(function(){
        $('.sell .content .four .bottom').children().children().first().hide(1000);
        $('.sell .content .four .bottom').children().append($('.sell .content .four .bottom').children().children().first());
        $('.sell .content .four .bottom').children().children().first().show(1000);
    });

    $(document).scroll(function(){
        var sec = $(window).scrollTop();
        if(sec >= 800){
            $('.up button').show(300);
            $('.up button').click(function(){
                $(window).scrollTop(0)
            });
        }
        else{
            $('.up button').hide(300);
        }
    });

    new WOW().init();
});