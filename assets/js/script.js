$(function(){
  $('#Button_1').click(function() {
    if( $('#rectangle').height() < 100 ) {
      $('#rectangle').css('height', '+=10px');
    } else {
      $('#rectangle').css('height', '10px');
    }
});
  $('#Button_2').click(function() {
    $('#rectangle').css({'background-color' : 'green'});
  });
  $('#Button_3').click(function() {
    $('#rectangle').css({'background-color' : 'orange'});
  });
  $('#Button_4').click(function() {
    $('#rectangle').css({'visibility' : 'hidden'});
  });
  $('#Button_5').click(function() {
    $('#rectangle').css({'visibility' : 'visible'});
  });
});
