$(function(){

  //Plugin socials media
  $('#social-share').jsSocials({
    shares: ["twitter", "facebook", "googleplus", "linkedin", "pinterest", "stumbleupon", "whatsapp"]
  });


  //Plugin Mask
  $('input[name=data]').mask('99/99/9999');
  $('input[name=telefone]').mask('(99)99999-9999');

  //Plugin fancybox
  $('a').fancybox({
    'openEffect':'elastic',
    arrows:'true'
  });

});