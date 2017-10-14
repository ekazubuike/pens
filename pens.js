$(document).ready(function(){
  $('.ui.dropdown').dropdown();
  $('.ui.radio.checkbox').checkbox();

  $('#yesDisclosed').on("click", function(){
    $('#dateDisclosed').removeClass("conditionalDisplay");
  });
  $('#noDisclosed').on("click", function(){
    $('#dateDisclosed').addClass("conditionalDisplay");
  });
});