/*
Dana Szumigraj DIV E
E/S ej3
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//declaramos variable
	var nombreIngresado;

	//guardamos el nombre
	nombreIngresado = document.getElementById("txtIdNombre").value;
	//nombreIngresado = txtIdNombre.value; (forma alternativa, lo lee el navegador)

	//mostrarlo por alert
	alert("Su nombre es " + nombreIngresado);

}

//txtIdNombre
/*

entrada:
-prompt (es un comando aparte para generar una entrada de texto y obtener un dato, hay ventana emergente)
-id (tomas el identificador de la entrada de texto del html, no hay ventana emergente)

procesos:

salida:
-alert

*/


