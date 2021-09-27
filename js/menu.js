
/// Cuadro horizontal del menu

	var cuadroMenu = document.getElementById("cuadro-menu");

	//window.onscroll = function(){
	  var anchoWindow = $(window).width();
	  if (anchoWindow > 800) 
	  {
	  	window.onscroll = function(){
		if (window.pageYOffset > 100) {
			cuadroMenu.style.background = "#000";
		   } else {
			cuadroMenu.style.background = "#000";
		   }
		}
	  } else {
	  		cuadroMenu.style.background = "#000";
	  }
	//}


/// Cuadro vertical del menu 
$(document).ready(menu);

var contador = 1;

function menu(){
	$("#iconoMenu2").click(function(){
		
		if (contador == 1) {
			$(".menu").animate({
				left: "0"
			});
			contador = 0;
		} else {
			$(".menu").animate({
				left: "-100%"
			});
			contador = 1;
		}
	
	});

}