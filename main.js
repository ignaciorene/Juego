var encendido=false;

function prendido(){

	if (encendido==false) {
		var luz=document.getElementById('luz');
		luz.style="background: rgb(0, 230, 0); -webkit-box-shadow: 0px 10px 13px -7px #000000, 0px 0px 30px 2px #00e600; box-shadow: 0px 10px 13px -7px #000000, 0px 0px 30px 2px #00e600;";

		var pantalla=document.getElementById('interior');
		pantalla.style="animation: crt-output 10ms infinite; background-color: @console-bg; pointer-events: auto; text-shadow: 0rem 0.2rem 1rem lighten(@console-bg,20%);z-index: -1";

		encendido=true;
	}
	else{
		var luz=document.getElementById('luz');
		luz.style="background: red; -webkit-box-shadow: 0px 10px 13px -7px #000000, 0px 0px 30px 2px #FF0000; box-shadow: 0px 10px 13px -7px #000000, 0px 0px 30px 2px #FF0000;";
		var pantalla=document.getElementById('interior');
		pantalla.style.background="rgba(0, 0, 0, 0.9)";

		encendido=false;
	}
	
	console.log(encendido);
	
}