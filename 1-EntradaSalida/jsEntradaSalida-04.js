/* 
Dana Szumigraj DIV E
E/S ej4
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//creo variable
	var nombreIngresado

	//defino variable
	nombreIngresado = prompt ("Ingrese su nombre")

	//asigno nombre a la caja de texto
	//txtIdNombre.value = nombreIngresado; (forma alternativa)
	document.getElementById("txtIdNombre").value = nombreIngresado;

}

