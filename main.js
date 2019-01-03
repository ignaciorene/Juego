
//biblioteca con las opciones
var arrayFacil=["DUDE","DUDA","DUCO","DUDO","DUGO","ECHO","ECHE","ECUA","ECUO","EDEN","ESER","ESOS","ESES","FAÑO","FABA","FAJE","FAJA","ERRA","EROS","ELLE","ELLA","ELFO","ELLO","DIJE","DIME","CUYO","CUYE","CUTA","CUSO","CUSI","CUTE","CUTI","CUYA","HAYO","HAYA","HEÑI","HEDE","HELA","HEDI","GURA","GULA","GOZO","HILO","HOLA","HOME","BAÑE","BAÑA","BABA","BABI","BAGA","BADA","BACA","AZUT","AZUR","AZOR","BOJE","BOJO","BOLI","BOLA","ÑAÑA"];
var arrayNormal=["Jubile","Iguana","Jugaba","Agonía","Agosto","Pintar","Obispo","Multar","Copete","Anillo","Omitir","Asalto","Arruga","Octavo","Azteca","Quedar","Innato","Azúcar","Cabaña","Caviar","Apelar","Chisme","Cuarzo","Cúpula","Ocular","Ínfima","Indico","Grabar","Poster","Exigir","Ingles","Asesor","Cáncer","Imitar","Vestir","Hundir","Formar","Sobrio","Gestar","Juzgar","Ataque","Forzar","Fingir","Sultán","Sirena","Vulgar","Cárcel","Apoyar","Servir","Carril"];
var arrayDificil=["ablandar","aborigen","abreviar","acarrear","acogedor","bailarín","baluarte","baratija","barbacoa","bebedizo","cabestro","cafetera","calcular","califato","callejón","dactilar","decisión","degradar","degustar","delgadez","empalmar","emplazar","encantar","fabricar","fabuloso","fanático","fandango","herético","holgazán","homónimo","hospital","humildad","ilustrar","imaginar","imprenta","langosta","lanzador","lastimar","licencia","liquidez","luchador","magnolia","maletero","mamífero","maniobra","medieval","ondulado","opositor","original","orquídea","pabellón","palomita","paraguas","pasajero","pastoril","repuesto","reservar","revolcar","rupestre","sacudida","seductor","segmento","sencillo","sensible","tornillo","torrente","traducir","travesía","vainilla","variedad","ventisca","vocativo"];
var array=[]; 




var encendido=false;
var contador=0;
var opciones=[];
var ganar=false;
var opcionganadora=0;
var cont=0;
var dificultadElegida="";

function prendido(){	//funcion del boton ON/OFF
	sonidoOn();

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
		document.getElementById('juego-titulo').style="display: none";
		document.getElementById('intentos').style="display: none";
		document.getElementById('principal').style="display: none";
		document.getElementById('cuadro-ganar').style="display: none";
		document.getElementById('cuadro-perder').style="display: none";

		encendido=false;
	}	
};

function dificultad(){	//abre botones de dificultad
	sonidoclick();

	document.getElementById('output').style="display: none";
	document.getElementById('dificultad').style="display: block";
};

function instrucciones(){ //abre instrucciones
	sonidoclick();

	document.getElementById('output').style="display: none";
	document.getElementById('instrucciones').style="display: block";
};

function menu(){	//vuelve al menu principal
	sonidoclick();

	document.getElementById('output').style="display: block";
	document.getElementById('instrucciones').style="display: none";
	document.getElementById('dificultad').style="display: none";
	document.getElementById('juego-titulo').style="display: none";
	document.getElementById('intentos').style="display: none";
	document.getElementById('principal').style="display: none";
	document.getElementById('respuesta-1').style="display: none";
	document.getElementById('respuesta-2').style="display: none";
	document.getElementById('respuesta-3').style="display: none";
	document.getElementById('respuesta-4').style="display: none";
	document.getElementById('respuesta-5').style="display: none";
	document.getElementById('cuadro-ganar').style="display: none";
	document.getElementById('cuadro-perder').style="display: none";
};

function juego(num){	//inicia juego
	sonidoclick();

	document.getElementById('output').style="display: none";
	document.getElementById('instrucciones').style="display: none";
	document.getElementById('dificultad').style="display: none";

	document.getElementById('juego-titulo').style="display: inline";
	document.getElementById('intentos').style="display: inline";
	document.getElementById('principal').style="display: flex";
	document.getElementById('respuesta-1').innerHTML=">_";
	document.getElementById('respuesta-2').innerHTML="";
	document.getElementById('respuesta-3').innerHTML="";
	document.getElementById('respuesta-4').innerHTML="";
	document.getElementById('respuesta-5').innerHTML="";
	document.getElementById('respuesta-1').style="display:inline";
	document.getElementById('respuesta-2').style="display:inline";
	document.getElementById('respuesta-3').style="display:inline";
	document.getElementById('respuesta-4').style="display:inline";
	document.getElementById('respuesta-5').style="display:inline";
	document.getElementById('intento-1').style="display:inline";
	document.getElementById('intento-2').style="display:inline";
	document.getElementById('intento-3').style="display:inline";
	document.getElementById('intento-4').style="display:inline";

	dificultadElegida=num;

	ganar=false;
	opcionganadora=Math.floor((Math.random() * 14) + 1);	//elijo la respuesta correcta aleatoriamente
	contador=0;
	cont=0;
	opciones=[];

	switch (dificultadElegida){	//le doy a array las palabras de acuerdo a la dificultad elegida

		case 1:
			for(var t=0;t<arrayFacil.length;t++){
				array=arrayFacil.slice(0,arrayFacil.length-1);
			}
			break;

		case 2:
			for(var t=0;t<arrayNormal.length;t++){
				array=arrayNormal.slice(0,arrayNormal.length-1);
			}
			break;

		case 3:
			for(var t=0;t<arrayDificil.length;t++){
				array=arrayDificil.slice(0,arrayDificil.length-1);
			}
			break;
	}
	

	//desordeno la lista para q cada vez q se juege sea random las opciones
	for(var i=1;i<array.length;i++){
		var ran=Math.floor((Math.random()*array.length)+1);
		if (array[ran]!=undefined) {	//chequeo q no me de undefined antes de moverlo de lugar
			var ant=array[i-1] //valor anterior
			array[i-1]=array[ran]; //cambio de lugar el valor por uno random
			array[ran]=ant; //el valor reemplazado ahora ocupa el lugar del valor anterior
		}	
		else{
			i--; //en caso que de undefined vuelve a intentarlo
		}
	}

	opciones=array.slice(0,15); //tomo 15 valores y los muestro en pantalla

	for(var i=0;i<15;i++){

		if (i==0) {
			document.getElementById('opcion1').innerHTML=opciones[0];
		}
		if (i==1) {
			document.getElementById('opcion2').innerHTML=opciones[1];
		}
		if (i==2) {
			document.getElementById('opcion3').innerHTML=opciones[2];
		}
		if (i==3) {
			document.getElementById('opcion4').innerHTML=opciones[3];
		}
		if (i==4) {
			document.getElementById('opcion5').innerHTML=opciones[4];
		}
		if (i==5) {
			document.getElementById('opcion6').innerHTML=opciones[5];
		}
		if (i==6) {
			document.getElementById('opcion7').innerHTML=opciones[6];
		}
		if (i==7) {
			document.getElementById('opcion8').innerHTML=opciones[7];
		}
		if (i==8) {
			document.getElementById('opcion9').innerHTML=opciones[8];
		}
		if (i==9) {
			document.getElementById('opcion10').innerHTML=opciones[9];
		}
		if (i==10) {
			document.getElementById('opcion11').innerHTML=opciones[10];
		}
		if (i==11) {
			document.getElementById('opcion12').innerHTML=opciones[11];
		}
		if (i==12) {
			document.getElementById('opcion13').innerHTML=opciones[12];
		}
		if (i==13) {
			document.getElementById('opcion14').innerHTML=opciones[13];
		}
		if (i==14) {
			document.getElementById('opcion15').innerHTML=opciones[14];
		}
	}

	document.getElementById('respuesta').innerHTML= opcionganadora + " " + opciones[opcionganadora];
};

function opcionelegida(num){	//accion al elegir una opcion, num es el numero de la posicion
	cont=0;
	sonidoclick();

	var palabra_elegida=opciones[num].slice(0,opciones[num].length);	//hago un array donde cada letra de la palabra es un valor para compararla despues
	var palabra_correcta=opciones[opcionganadora].slice(0,opciones[opcionganadora].length);

	if (num==opcionganadora) {	//si elegi la opcion correcta
		ganar=true;
		ganarTorta();
	}

	for(var i=0;i<palabra_elegida.length;i++){	//reviso cuantas letras coinciden
		for(var a=0;a<palabra_correcta.length;a++){
			if (palabra_elegida[i]==palabra_correcta[a]) {
				cont++;
			}
		}
	}

	if (cont>5) {	//para evitar confundir cuando aparecen varias veces la mismas letras
		cont=5;
	}

	switch(contador){	//intentos
		case 0:
			document.getElementById('intento-1').style="display:none";
			document.getElementById('respuesta-1').innerHTML=opciones[num]+" tiene "+cont+"/5 letras correctas";
			document.getElementById('respuesta-2').innerHTML=">_";
			contador++;
			break;
		case 1:
			document.getElementById('intento-2').style="display:none";
			document.getElementById('respuesta-2').innerHTML=opciones[num]+" tiene "+cont+"/5 letras correctas";
			document.getElementById('respuesta-3').innerHTML=">_";
			contador++;
			break;
		case 2:
			document.getElementById('intento-3').style="display:none";
			document.getElementById('respuesta-3').innerHTML=opciones[num]+" tiene "+cont+"/5 letras correctas";
			document.getElementById('respuesta-4').innerHTML=">_";
			contador++;
			break;
		case 3:
			if (ganar==false) {	//si se me acabo los intentos y no gane
				document.getElementById('intento-4').style="display:none";
				document.getElementById('respuesta-4').innerHTML=opciones[num]+" tiene "+cont+"/5 letras correctas";
				document.getElementById('respuesta-5').innerHTML=">_";
				perderTorta();
			}
			else{	//si se me acabo los intentos y gane
				document.getElementById('intento-4').style="display:none";
				document.getElementById('respuesta-5').innerHTML=opciones[num]+" tiene "+cont+"/5 letras correctas";	
				ganarTorta();
			}
			break;			
	}

}

function ganarTorta(){	//si ganas
	sonidoWin();

	document.getElementById('cuadro-ganar').style="display: block";

	document.getElementById('juego-titulo').style="display: none";
	document.getElementById('intentos').style="display: none";
	document.getElementById('principal').style="display: none";
	document.getElementById('respuesta-1').style="display: none";
	document.getElementById('respuesta-2').style="display: none";
	document.getElementById('respuesta-3').style="display: none";
	document.getElementById('respuesta-4').style="display: none";
	document.getElementById('respuesta-5').style="display: none";
}

function perderTorta(){	//si perdes
	sonidolose();
	
	document.getElementById('cuadro-perder').style="display: block";

	document.getElementById('juego-titulo').style="display: none";
	document.getElementById('intentos').style="display: none";
	document.getElementById('principal').style="display: none";
	document.getElementById('respuesta-1').style="display: none";
	document.getElementById('respuesta-2').style="display: none";
	document.getElementById('respuesta-3').style="display: none";
	document.getElementById('respuesta-4').style="display: none";
	document.getElementById('respuesta-5').style="display: none";
}

function sonidoclick(){
	var audio = new Audio('sound/click.mp3');

	audio.play();
}

function sonidoOn(){
	var audio = new Audio('sound/on.mp3');

	audio.play();
}

function sonidoWin(){
	var audio = new Audio('sound/win.mp3');

	audio.play();
}

function sonidolose(){
	var audio = new Audio('sound/lose.mp3');

	audio.play();
}