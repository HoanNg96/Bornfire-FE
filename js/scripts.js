$(document).ready(function () {
    $('.menu-icon').click(function (e) { 
        e.preventDefault();
        $('.menu-bar').addClass('active');
        $('.cover').addClass('active');
    });
    $('.cover').click(function (e) { 
        e.preventDefault();
        $('.menu-bar').removeClass('active');
        $('.cover').removeClass('active');
    });
    /* $('.slider-social li').click(function (e) { 
        e.preventDefault();
        $(this).find('.item').addClass('active');
        $(this).siblings().find('.item').removeClass('active');
    }); */
    /* $('.social .item').click(function (e) { 
        e.preventDefault();
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    }); */
    /* $('.nav-item').click(function (e) { 
        e.preventDefault();
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    }); */
});