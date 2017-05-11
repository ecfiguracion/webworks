
$(document).ready(function(){
    $(document).foundation();

    $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
        return false;
        }
    }});    

    var burger = $('.burger-container');
        header = $('.the-header');

    burger.click(function(){
        header.toggleClass('menu-opened');
    })

    $('.menu-item a').click(function(){
        $('.the-header').toggleClass('menu-opened');
    });

});

