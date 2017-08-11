var nombre = $("#first_name");
var apellido = $("#last_name");
var placas = $('#placas');
var telefono = $('#celphone');
var btnSiguiente = $('#btnSiguiente');


var cargarPagina = function(){
	nombre.keyup(validacionNombres);
	apellido.keyup(validacionNombres);
	telefono.keyup(validacionCelular);
	btnSiguiente.click(validarVacio);
	placas.keyup(validacionPlacas);
};

var validacionNombres = function (e){
	e.preventDefault();
	/*numeros*/
	if(e.keyCode >= 48 && e.keyCode <= 57){
		$(this).removeClass('validate');
		$(this).addClass('invalid');
	}
	/*letras*/
	else if(e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode >= 97 && e.keyCode <= 122 && e.keyCode == 46){
		$(this).removeClass('invalid');
		$(this).addClass('validate');
	}
	if(nombre.val().length == "" && apellido.val().length == ""){
	  $(this).removeClass('invalid');
	  $(this).addClass('validate');
		
	}
};

var validarVacio = function(nombre,telefono,apellido,placas){
	if( this == ""){
		alert("Debes completar todos los campos");
	}
}

var validacionCelular = function(){
	var valorTel = telefono.val().length;
	if((event.keyCode < 48 || event.keyCode > 57)) {
		$(this).removeClass('validate');
		$(this).addClass('invalid');
	}
	if(valorTel > 11){
	  $(this).removeClass('validate');
		$(this).addClass('invalid');
		alert("ingresa solo 10 números")
	}
	if(valorTel == ""){
	  $(this).removeClass('invalid');
	  $(this).addClass('validate');
		
	}
	event.returnValue = false;
	}

var validacionPlacas = function(){
	
	if(placas.val() === ""){	
	  $(this).removeClass('invalid');
	  $(this).addClass('validate');
		
	}
	 if(this !== Number || this !== String){
		$(this).addClass('validate');
		$(this).removeClass('invalid');
	}
	
	if( placas.val().length == 6){
		btnSiguiente.removeClass("disabled");
	}
		}


   



$(document).ready(function(){
	cargarPagina();
});
