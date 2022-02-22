/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo = 0;
	var numeroMinimo = 0;
	var respuesta;
	//iniciar variables
	
	banderaDelPrimero=0;
	respuesta="si";

	
	while(respuesta == "si")
	{
	
	do
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero"));	
	}while(isNaN(numeroIngresado)==true)
		
	if (banderaDelPrimero == 0)
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = 1
		}
	else
		{
			if (numeroIngresado > numeroIngresado)
			{
				numeroMaximo = numeroIngresado;
			}
			else
			{
				numeroMinimo = numeroIngresado;
			}
		}	

		respuesta=prompt("desea continuar? (si o no)");

		while (respuesta != "si" && respuesta != "no")
		{
			respuesta = prompt("Error, quiere ingresar otro numero? (si o no)");
		}
	}
	
	txtIdMaximo.value=numeroMaximo;
	
	txtIdMinimo.value=numeroMinimo;
}
//FIN DE LA FUNCIÓN