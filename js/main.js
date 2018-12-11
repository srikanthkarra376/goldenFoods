$(document).ready(function(){
     $('#side-menu-div i').on('click',function(){
       $(this).fadeIn(200).css('display','none');
      $('#side-menu-div ul').addClass('animated bounceIn').fadeIn(200).css('display','block');
   });
    

     $("#side-menu-div li.close").on('click',function(){
      $('#side-menu-div i.fa-bars').fadeIn(200).css('display','block');
     $('#side-menu-div ul ').css('display','none');
    });
});
//function to occur when user clicks on anchor tag
$(document).ready(function(){
   $("#side-menu-div ul li a").click(function(){
    $("#side-menu-div ul").css('display','none');
     $('#side-menu-div i.fa-bars').fadeIn(200).css('display','block'); 
    });
  });


// ABOUT ANIMATION


$(window).scroll(function() {
	var height1 = $(window).height();
   if($(window).scrollTop()+ height1> 800 ) {
      $('#about p').addClass('animated fadeInRight').delay(1500);
      
   }
});





// -------------------smooth scrrolling---------------- 
$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {

  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

    if (target.length) {
    
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 800, function() {
      
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { 
          return false;
        } else {
          $target.attr('tabindex','-1'); 
          $target.focus(); 
        };
      });
    }
  }
});



