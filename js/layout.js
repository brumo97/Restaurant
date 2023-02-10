$(function() {

	"use strict";

  //Au scroll dans la fenetre on déclenche la fonction
	$(window).scroll(function () {
    if ($(this).scrollTop() > 20) { //si on a défilé de plus de 50px du haut vers le bas
        $('.navbar').addClass("menu-fixe"); //on ajoute la classe "fixe" au header
    } else {
      $('.navbar').removeClass("menu-fixe");//sinon on retire la classe "fixe" (c'est pour laisser le header à son endroit de départ lors de la remontée
    }
 });

 $('.menu-burger').click(function(){
   console.log('zzzz')
   var attr = $('.cadre-burger').attr('class');

		if( attr == "cadre-burger close"){
      $('.menu-nav').slideUp();
      $('.cadre-burger').removeClass("close");
    }else{
      $('.menu-nav').slideDown();
      $('.cadre-burger').addClass("close");
    }

  

 });

});