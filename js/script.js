// const hanburger = document.querySelector(".hanburger");

// hanburger.addEventListener('click', function() {
//     this.classList.toggle('is-active');
// });

$(document).ready(function(){
    $('.hanburger').click(function(){
        $(".hanburger").toggleClass('is-active');
        $(".nav-mobile").slideToggle(1000);
    });
    
});