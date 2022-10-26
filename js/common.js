// 네비게이션, 버튼 설정

$('#nav .menu li a, .button > div a').on('click', function(){
    let lino = $(this).parent().index()
    console.log(lino)
    let sectdist = $('section').eq(lino).offset().top
    $(this).parent().addClass('on').siblings().removeClass('on')
    $('html, body').animate({
        scrollTop:sectdist
    }, 500)
    return false
})

$('#header .opennav').on('click', function(){
    $('#navbox').addClass('on')
    $('#header #nav').addClass('on')
    $('#header #nav')
    .append('<div class="closenav"><i class="fa-solid fa-xmark"></i></div>')
    $('.closenav').css({
        position:'absolute',
        top:'20px', right:'30px',
        fontSize:'35px'
    })
    $('html').css({ overflowY:'hidden' })
})

$('body').on('click', '#header #nav .closenav, #navbox', function(){
    $('#nav').removeClass('on')
    $('#navbox').removeClass('on')
    $('#header #nav .closenav').remove()
    $('html').css({
        overflowY:'auto'
    })
})