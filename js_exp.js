$(function(){
    $('#title').css("text-decoration", "underline")
    
    console.log( "ready!" );
    $('div.disapear').fadeOut().show(300).slideUp().slideToggle();
});