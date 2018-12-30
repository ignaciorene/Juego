var encendido=false;

function prendido(){
	var pantalla=document.getElementById('interior');
	var luz=document.getElementById('luz');

	if (encendido==false) {
		luz.style="background: rgb(0, 230, 0); -webkit-box-shadow: 0px 10px 13px -7px #000000, 0px 0px 30px 2px #00e600; box-shadow: 0px 10px 13px -7px #000000, 0px 0px 30px 2px #00e600;";
		pantalla.style="animation: crt-output 10ms infinite; background-color: @console-bg; pointer-events: auto; text-shadow: 0rem 0.2rem 1rem lighten(@console-bg,20%);z-index: -1";
		document.getElementById('output').style="display: block";

		encendido=true;
	}
	else{
		luz.style="background: red; -webkit-box-shadow: 0px 10px 13px -7px #000000, 0px 0px 30px 2px #FF0000; box-shadow: 0px 10px 13px -7px #000000, 0px 0px 30px 2px #FF0000;";
		pantalla.style="animation: none;background-color: rgba(0, 0, 0, 0.9)";
		document.getElementById('output').style="display: none";
		document.getElementById('instrucciones').style="display: none";
		document.getElementById('dificultad').style="display: none";

		encendido=false;
	}	
};

function dificultad(){
	document.getElementById('output').style="display: none";
	document.getElementById('dificultad').style="display: block";
};

function instrucciones(){
	document.getElementById('output').style="display: none";
	document.getElementById('instrucciones').style="display: block";
};

function menu(){
	document.getElementById('output').style="display: block";
	document.getElementById('instrucciones').style="display: none";
	document.getElementById('dificultad').style="display: none";
	document.getElementById('juego-titulo').style="display: none";
	document.getElementById('intentos').style="display: none";
	document.getElementById('principal').style="display: none";
};

function juego(){
	document.getElementById('output').style="display: none";
	document.getElementById('instrucciones').style="display: none";
	document.getElementById('dificultad').style="display: none";

	document.getElementById('juego-titulo').style="display: inline";
	document.getElementById('intentos').style="display: inline";
	document.getElementById('principal').style="display: flex";
};