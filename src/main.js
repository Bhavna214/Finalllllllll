$(document).ready(function(){


    $('.fa-bars').click(function(){
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
    });
  
    $(window).on('load scroll',function(){
      $('.fa-bars').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');
  
      if($(window).scrollTop() > 30){
        $('.header').css({'background':'#6C5CE7','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
      }else{
        $('.header').css({'background':'none','box-shadow':'none'});
      }
    });
  
  
    $('.accordion-header').click(function(){
      $('.accordion .accordion-body').slideUp();
      $(this).next('.accordion-body').slideDown();
      $('.accordion .accordion-header span').text('+');
      $(this).children('span').text('-');
    });
  
  
  
  });

function verify() {
  code = document.getElementById('code').value
  // console.log(code.length)
  if (code.length != 6) {
    document.getElementById('error').innerHTML = "Code should be six digits only"
    return false;

  }
  else {
    document.getElementById('error').innerHTML = ""
  }
  }
function verifycode() {
  code = document.getElementById('code').value
  // console.log(code.length)
  if (code != '123456') {
    document.getElementById('error').innerHTML = "Invalid Code!! Please create a new team or enter valid code"
    return false;

  }
  else {
    document.getElementById('error').innerHTML = ""
  }
  }