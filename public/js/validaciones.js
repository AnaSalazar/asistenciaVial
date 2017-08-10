var nombre = $("#first_name");
var apellido = $("#last_name");
var cargarPagina = function(){
	nombre.keyup(validacionNombres);
	apellido.keyup(validacionNombres);
};
var validacionNombres = function (e){
	e.preventDefault();
	if(e.keyCode >= 48 && e.keyCode <= 57){
		$(this).removeClass('validate');
		$(this).addClass('invalid');
	}
	else if(e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode >= 97 && e.keyCode <= 122 && e.keyCode == 46){
		$(this).removeClass('invalid');
		$(this).addClass('validate');
	}
};


$(document).ready(function(){
	cargarPagina();
});
