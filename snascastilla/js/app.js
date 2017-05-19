
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


    if ( $(window).width() > 739) {      
        //large screen view
    } 
    else {
        var $orbit = $('.orbit');
        var orbitPlugin = new Foundation.Orbit($orbit);

        setTimeout(function() {
          orbitPlugin.destroy();
          orbitPlugin.timer.stop;
        }, 1000)

        setTimeout(function() {
          orbitPlugin = new Foundation.Orbit($orbit);
        }, 4000)

        var classobj = orbitPlugin;
        console.log(Object.getOwnPropertyNames(classobj).filter(function (x) {
          return typeof classobj[x] === 'function'
        }));
    }
    

});



