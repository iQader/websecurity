/* jquerydemo.com */

$(document).ready(function() {

  $('#menu li').hover(function() {
      $(this).stop().animate({ paddingLeft: '50px' },500,'easeOutCirc');
  }, function() {
      $(this).stop().animate({ paddingLeft: '0px' },500,'easeOutBounce');
  });

});