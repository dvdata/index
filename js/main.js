(function($) {
  "use strict";

  $('.btn-buy').click(function(e){
    e.preventDefault();
    $(this).html('<i class="fa  fa-spinner fa-spin"></i>');
    $('.cart-number').removeClass('animated bounce');
    var vj =$(this);
    setTimeout(function(){
      if(vj.hasClass('small-cart'))
      {
        vj.html('<i class="fa fa-check"></i>');
      }
      else
      {
        vj.html('in cart <i class="fa fa-check"></i>');  
      }
        var cartNumber = parseInt($('.cart-number').text(),10)+1;
        $('.cart-number').html(cartNumber);
        $('.cart-number').addClass('animated bounce');
    },2000);

    //setTimeout(function(){alert("Hello")}, 3000);

  });
    if($('#audiozy-client').length)
      {
        var owl = $("#audiozy-client");
      owl.owlCarousel({
        navigation : true, // Show next and prev buttons    
          items :5, //10 items above 1000px browser width
          itemsDesktop : [1000,2], //5 items between 1000px and 901px
          itemsDesktopSmall : [900,2], // 3 items betweem 900px and 601px
          itemsTablet: [600,1], //2 items between 600 and 0;
          itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option  

        });    
      }
      if($('.selectpicker').length)
      {
         $('.selectpicker').selectpicker({
                    iconBase: 'fa',
                    tickIcon: 'fa-check-circle',
                }); 
      }
      // marquee
      if($('h4.title').length)
      {
         $('h4.title').marquee();         
      }
      //marquee
      // nicescroll
      if($('html').length)
      {
          $("html").niceScroll();         
      }
      // nicescroll
      if($('.hero-unit').length)
      {
          $('.hero-unit').parallax("50%",0.1);       
      }
      if($('.audiozy-question').length)
      {
          $('.audiozy-question').parallax("50%",0.3);       
      }
      if($('.audiozy-waiting-quote').length)
      {
          $('.audiozy-waiting-quote').parallax("50%",0.3);       
      }

      if($('.recent-blocks').length)
      {
         $('.recent-blocks').hover(function(){
          $('.recent-over').removeClass('show');
          $(this).find('.recent-over').addClass('show');
        })
      }

      if($('#audiozy-client').length)
      {
        var owl = $("#audiozy-client");
      owl.owlCarousel({
        navigation : true, // Show next and prev buttons    
          items :5, //10 items above 1000px browser width
          itemsDesktop : [1000,2], //5 items between 1000px and 901px
          itemsDesktopSmall : [900,2], // 3 items betweem 900px and 601px
          itemsTablet: [600,1], //2 items between 600 and 0;
          itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option  

        });    
      }
      if($('#testimonial-carousel').length)
      {
        $("#testimonial-carousel").owlCarousel({
            navigation : true, // Show next and prev buttons
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem:true

            // "singleItem:true" is a shortcut for:
            // items : 1, 
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false
          });  
      }
      if($('.isotope').length)
      {
         // init Isotope
        var $container = $('.isotope').isotope({
          itemSelector: '.element-item',
          layoutMode: 'fitRows'
        });
            // filter functions
            var filterFns = {
              // show if number is greater than 50
              numberGreaterThan50: function() {
                var number = $(this).find('.number').text();
                return parseInt( number, 10 ) > 50;
              },
              // show if name ends with -ium
              ium: function() {
                var name = $(this).find('.name').text();
                return name.match( /ium$/ );
              }
            };
            // bind filter button click
            $('#filters').on( 'click', 'button', function() {
              var filterValue = $( this ).attr('data-filter');
              // use filterFn if matches value
              filterValue = filterFns[ filterValue ] || filterValue;
              $container.isotope({ filter: filterValue });
            });
            // change is-checked class on buttons
            $('.button-group').each( function( i, buttonGroup ) {
              var $buttonGroup = $( buttonGroup );
              $buttonGroup.on( 'click', 'button', function() {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $( this ).addClass('is-checked');
              });
            }); 
      }
      


$('.bsg-player').waypoint('sticky');
})(jQuery);