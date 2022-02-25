function mostrar()
{
	function mostrar()

{
	var respuesta = "si";
	var origen;
	var cantidadVacunas;
	var costoVuelo;
	
	var banderaPrimerOrigen = 0
	var menorCantidadVacunas;
	var origenMenorCantidad;

	var costoTotalVuelos = 0;

	var cantidadTotalVacunas = 0;
	var descuento = "0%"
	var totalConDescuento;

	while(respuesta == "si")
	{
		origen = prompt("Ingrese el origen del vuelo");
		while(!(origen == "Asia" || origen == "Europa" || origen == "America"))
		{
			origen = prompt("Error, ingrese el origen del vuelo (Asia, Europa o America)");
		}

		
		
		cantidadVacunas = parseInt(prompt("Ingrese la cantidad de vacunas"));
		while(cantidadVacunas < 500000 || cantidadVacunas > 2500000 )
		{
			cantidadVacunas = prompt("Error, ingrese la cantidad de vacunas (entre 500000 y 2500000)");
		}
		cantidadTotalVacunas = cantidadTotalVacunas + cantidadVacunas;

		if (banderaPrimerOrigen == 0)
		{
			origenMenorCantidad = origen;
			menorCantidadVacunas = cantidadVacunas;
			banderaPrimerOrigen = 1;
		}
		else if(cantidadVacunas < menorCantidadVacunas)
		{
			menorCantidadVacunas = cantidadVacunas;
			origenMenorCantidad = origen;
		}

		
		
		costoVuelo = parseInt(prompt ("Ingrese el costo del vuelo"));
		while(costoVuelo < 1000000 || costoVuelo > 5000000)
		{
			costoVuelo = prompt("Ingrese el costo del vuelo (entre un millon y cinco millones, debe escribir el numero");
		}

		costoTotalVuelos = costoTotalVuelos + costoVuelo;


		respuesta = prompt("Quiere ingresar mas datos?")
	}

	if(cantidadTotalVacunas > 10000000)
	{
		descuento = "25%"
		totalConDescuento = costoTotalVuelos - (costoTotalVuelos * 0.25);
	}
	else if(cantidadTotalVacunas > 5000000)
		{
			descuento = "15%"
			totalConDescuento = costoTotalVuelos - (costoTotalVuelos * 0.15);
		}
		else{
			totalConDescuento = costoTotalVuelos;
		}

	document.write("El origen que envio menor cantidad de vacunas es: " + origenMenorCantidad + "<br>");
	document.write("El total sin descuentos a pagar por los gastos de los viajes es: " + costoTotalVuelos + "<br>");
	document.write("El descuento es del " + descuento + " y el total a pagar es " + totalConDescuento + "<br>");
		
}
}
