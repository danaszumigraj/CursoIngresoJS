
/*Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total
*/

function mostrar()
{
	var tipoProducto;
	var precioProducto;
	var cantidadUnidades;
	var precioFinal;
	var marcaProducto;
	var contadorVeces = 1;

	var banderaJabonCaro = 0;
	var precioJabonCaro;
	var unidadJabonCaro = 0;
	var marcaJabonCaro;

	var banderaMayorUnidad = 0;
	var cantidadMayorUnidad;
	var productoMayorUnidad;
	var precioMayorUnidad;

	var unidadBarbijo;

	do
	{
		//TIPO PRODUCTO
		tipoProducto = prompt("Ingrese el tipo de producto");
		tipoProducto = tipoProducto.toLowerCase();
		while (tipoProducto!="barbijo" && tipoProducto!="jabon" && tipoProducto!="alcohol")
		{
			tipoProducto = prompt("Error, ingrese el tipo de producto (barbijo, jabon o alcohol)");
			tipoProducto = tipoProducto.toLowerCase();
		}
		//PRECIO	
		precioProducto = parseFloat(prompt("Ingrese el precio del producto"));
		while(isNaN(precioProducto)==true || precioProducto < 100 || precioProducto > 300)
		{
			precioProducto = parseFloat(prompt("Error, ingrese el precio del producto (entre 100 y 300)"));
		}
		//CANTIDAD DE UNIDADES
		cantidadUnidades = parseInt(prompt("Ingrese la cantidad de unidades"));
		while(isNaN(cantidadUnidades)==true || cantidadUnidades<1 || cantidadUnidades>1000)
		{
			cantidadUnidades = parseInt(prompt("Error, ingrese la cantidad de unidades (un numero entre 1 y 1000)"));
		}

		precioFinal = precioProducto * cantidadUnidades;
		//MARCA
		marcaProducto = prompt("Ingrese la marca del producto");
		marcaProducto = marcaProducto.toLowerCase();

		switch(tipoProducto)
		{
			case "jabon":
				if(banderaJabonCaro == 0 || precioProducto < precioJabonCaro)
					{
						precioJabonCaro = precioProducto;
						unidadJabonCaro = unidadJabonCaro + cantidadUnidades;
						marcaJabonCaro = marcaProducto;
						banderaJabonCaro = 1;
					}
				break;
			case "barbijo":
				unidadBarbijo = unidadBarbijo + cantidadUnidades;
			break;
			
		}

		if(banderaMayorUnidad == 0 || cantidadMayorUnidad < cantidadUnidades)
		{
			productoMayorUnidad = tipoProducto;
			cantidadMayorUnidad = cantidadUnidades;
			precioMayorUnidad = precioProducto;
			banderaMayorUnidad = 1;
		}

		contadorVeces++

	}while (contadorVeces < 6)


	//A
	document.write("Se vendieron " + unidadJabonCaro + " unidades del jabon mas caro y su marca es " + marcaJabonCaro + "<br>");
	//B
	document.write("El tipo de producto que se vendio en mayor cantidad es " + productoMayorUnidad + ", se vendieron " + cantidadMayorUnidad + " unidades y el promedio de los precios es " + (precioMayorUnidad/cantidadMayorUnidad) + "<br>");
	//C
	document.write("Se vendieron " + unidadBarbijo + " barbijos" + "<br>");

}
