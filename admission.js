$(document).ready(function() {  
  
 //append click event to the link  
 $('.tabs .tabs-nav a').click(function(e) {  
  
    //remove class "current" from the old current link  
    //and add it to the clicked one  
    $('.tabs .tabs-nav a.current').removeClass('current');  
    $(this).addClass('current');  
  
    //hide the old visible tab  
    //use this.hash to recognise a hash in the clicked link,  
    //$(this.hash) is equivalent to $("#faqs"), $("#contact") or $("#about")  
    //as href="#about" or href="#faqs" or href="#contact  
    //show the new tab  
    $('.tabs div:not(:hidden)').hide();  
    $(this.hash).show();  
  
    //prevent the default action for the link  
    e.preventDefault;  
 });  
  
});  
