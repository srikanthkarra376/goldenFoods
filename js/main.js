$(document).ready(function(){
     $('#side-menu-div i').on('click',function(){
       $(this).fadeIn(200).css('display','none');
      $('#side-menu-div ul').fadeIn(200).css('display','block');
   });

     $("#side-menu-div li.close").click(function(){
     $('#side-menu-div ul').fadeIn(500).css('display','none');
     $('#side-menu-div i').fadeIn(200).css('display','block');

   });
});



// smooth scrrolling 
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
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
//animate css


$(window).scroll(function() {
	var height1 = $(window).height();
   if($(window).scrollTop()+ height1> 800 ) {
      $('#about p').addClass('animated fadeInDown').delay(1000);
      
   }
});
