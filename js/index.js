// 그래프 설정

function graph(jumsu, cname, time) {
    let num = 0;
    let stop = setInterval(function(){
        num++
        if ( num<=jumsu ) {
            $(cname).css({
                width:num+'%'
            })
            $(cname).text(num+'%')
        } else {
            clearInterval(stop)
        }
    }, time)
}

// 스크롤, 그래프 이벤트

var sect1, sect2, sect3, sect4, sect5;
function sect(){
sect1 = $('section').eq(0).offset().top
sect2 = $('section').eq(1).offset().top
sect3 = $('section').eq(2).offset().top
sect4 = $('section').eq(3).offset().top
sect5 = $('section').eq(4).offset().top
}

sect()

$(window).resize(function(){
    sect()
})

$(window).on('scroll', function(){
    let sct = $(this).scrollTop()
    if ( sct>=0 && sct<sect2 ) {
        $('#nav .menu li').eq(0).addClass('on').siblings().removeClass('on')
        $('.button > div').eq(0).addClass('on').siblings().removeClass('on')
        $('.myscore').css({
            width:'0%'
        })
        $('#about').removeClass('on')
    } else if ( sct>=sect2 && sct<sect3 ) {
        $('#nav .menu li').eq(1).addClass('on').siblings().removeClass('on')
        $('.button > div').eq(1).addClass('on').siblings().removeClass('on')
        if ( !$('#about').hasClass('on') ) {
            $('#about').addClass('on')
            graph(90, '.photo', 15)
            graph(80, '.illur', 16)
            graph(80, '.html', 17)
            graph(70, '.css', 18)
            graph(60, '.js', 19)
            graph(60, '.jq', 20)
        }
    } else if ( sct>=sect3 && sct<sect4 ) {
        $('#nav .menu li').eq(2).addClass('on').siblings().removeClass('on')
        $('.button > div').eq(2).addClass('on').siblings().removeClass('on')
    } else if ( sct>=sect4 && sct<sect5 ) {
        $('#nav .menu li').eq(3).addClass('on').siblings().removeClass('on')
        $('.button > div').eq(3).addClass('on').siblings().removeClass('on')
    } else if ( sct>=sect5 ) {
        $('#nav .menu li').eq(4).addClass('on').siblings().removeClass('on')
        $('.button > div').eq(4).addClass('on').siblings().removeClass('on')
    }
})

$('#photo .tex-box4 .image-box li a').on('click', function(){
    var src = $(this).find('img').attr('src')
    $('body').append('<div class="bodycover"></div>')
    $('.bodycover').append(`<img src="${src}" alt="" style="border:30px solid #fff">`)
    $('.bodycover').css({
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99999999999999,
        overflow: 'auto',
        color: '#ddd'
    })
    
    .append('<div class="btn"><i class="fa-solid fa-xmark"></i></div>')
    var imgh = ($('.bodycover img').height()+43)/2 + 'px'
    var imgw = ($('.bodycover img').width()+43)/2 + 'px'

    $('.bodycover .btn').css({
        position: 'absolute',
        top: '50%',
        right: '50%',
        marginTop: '-'+imgh,
        marginRight: '-'+imgw,
        fontSize: '20px'
    })

    $('html').css({
        overflow: 'hidden',
    })

return false;

})

$('body').on('click', '.bodycover, .bodycover .btn', function(){
    $(this).remove()
    $('html').css({
        overflow: 'auto',
    })
})

$('body').on('click', '.bodycover img', function(e){
    e.stopPropagation()
})