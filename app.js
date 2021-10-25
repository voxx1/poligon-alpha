$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
  


  $(document).ready(function() {
    $(window).scroll( function(){
        $('.fadedown').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).addClass('showme');
            }
            if( bottom_of_window < bottom_of_object ){
                $(this).removeClass('showme');
            }
        });
    });
  });
  
  $('.navbar-brand').css('display', 'none');
  $('.navbar-brand').fadeIn(1500);
  
  $('.nav-item').css('display', 'none');
  $('.nav-item').fadeIn(2500);
  
  $('.carousel').css('display', 'none');
  $('.carousel').fadeIn(3000);

  $('.carousel-caption h5').css('display', 'none');
  $('.carousel-caption h5').fadeIn(4500);
  
  $('.carousel-caption p').css('display', 'none');
  $('.carousel-caption p').fadeIn(5500);

  