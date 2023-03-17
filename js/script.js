// const hanburger = document.querySelector(".hanburger");

// hanburger.addEventListener('click', function() {
//     this.classList.toggle('is-active');
// });

$(document).ready(function(){
    $('.hanburger').click(function(){
        $(".hanburger").toggleClass('is-active');
        $(".nav-mobile").slideToggle(500);
    });

    $(".nav-mobile ul li").click(function(){
        $(".nav-mobile").slideToggle(500);
        $(".hanburger").toggleClass('is-active');
    });
    
});