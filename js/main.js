$(document).ready(function(){
     $('#side-menu-div i').on('click',function(){
       $(this).fadeIn(200).css('display','none');
      $('#side-menu-div ul').fadeIn(200).css('display','block');
   });
});

$("#side-menu-div li.close").click(function(){
     $('#side-menu-div ul').fadeIn(500).css('display','none');
     $('#side-menu-div i').fadeIn(200).css('display','block');
});



