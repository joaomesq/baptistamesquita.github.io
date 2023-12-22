var slide = new Array("logo.png", "cha.jpg", "a1.jpg", "4.jpg", "5.jpg");
var tamanho = slide.length;
var atual = 0;
var timeSlide;

function troca_automatica(){
	atual++;

	if( atual >= tamanho){
		atual = 0;
	}
	document.getElementById('slide').style.backgroundImage="url('"+slide[atual]+"')";
	var x = document.getElementById("slide");
	x.backgroundPosition="center";
	x.backgroundRepeat="no-repeat";
	document.getElementById("slide").backgroundSize="contain";
}

function iniciar_slide(){
	document.getElementById("slide").style.backgroundImage="url('"+slide[atual]+"')";
	timeSlide = setInterval(troca_automatica, 1000);
}

function parar_slide(){
	clearInterval(timeSlide);
}