$(document).ready(function() {  
  
      //hide all the div containers inside div with id=accordion  
      $("#accordion div").hide();  
  
      //append click event  
      $("#accordion h2").click(function() {  
                  
         //get immediate next sibling, slide it down, slide up all the remaining siblings         
         $(this).next("#accordion div").slideDown("slow").siblings("#accordion div").slideUp("slow");  
  
      });  
  
});  
     