/*
1. Una empresa de venta de cosméticos necesita un programa que permita la carga de productos
vendidos,
junto a los datos del vendedor. Se requiere ingresar los siguientes campos:
• Vendedor: Juan, María, Lucrecia
• Tipo producto: Perfume, Shampoo o Maquillaje
• Importe de la venta (Numero mayor que cero)
No hay un límite total de ventas, y cada vendedor puede realizar varias ventas.
Una vez finalizada la carga de productos vendidos se debe calcular la comisión del vendedor.
Si la suma de las ventas realizadas por cada vendedor está entre 5000 y 10000, la comisión será del
15%.
Si la comisión supera los 10000, la comisión será del 20%. En caso contrario la comisión será del
5%.
Se debe mostrar:
a. Promedio de ventas por cada vendedor.
b. Cantidad de perfumes que vendió María
c. El importe mas barato junto con el vendedor que lo vendió.
d. El nombre del vendedor con menor comisión.
*/



function mostrar()
	
{
	var vendedor;
	var tipoProducto;
	var precioProducto;
	var respuesta = "si";
	var precioMasBarato = 0;
	var banderaDelPrimero = 0;
	var vendedorMasBarato;
	
	var ventasJuan = 0;
	var comisionJuan;
	var contadorJuan = 0;
	
	var ventasMaria = 0;
	var comisionMaria;
	var cantidadPerfumesMaria = 0;
	var contadorMaria = 0;

	var ventasLucrecia = 0;
	var comisionLucrecia;
	var contadorLucrecia = 0;
	

	while(respuesta == "si")
	{
		//VENDEDOR
		vendedor = prompt("Ingrese el nombre del vendedor");
		vendedor = vendedor.toLowerCase();
		while(vendedor != "juan" && vendedor != "maria" && vendedor != "lucrecia")
		{
			vendedor = prompt("Error, ingrese el nombre del vendedor (Juan, Maria o Lucrecia)");
			vendedor = vendedor.toLowerCase();
		}
		
		//TIPO PRODUCTO
		tipoProducto = prompt("Ingrese el tipo de producto");
		tipoProducto = tipoProducto.toLowerCase();
		while(tipoProducto != "perfume" && tipoProducto != "shampoo" && tipoProducto != "maquillaje")
		{
			tipoProducto = prompt("Error, ingrese el tipo de producto (Perfume, Shampoo o Maquillaje)");
			tipoProducto = tipoProducto.toLowerCase();
		}
		
		
		//PRECIO PRODUCTO
		precioProducto = parseInt(prompt("Ingrese el precio del producto"));
		while(isNaN(precioProducto) == true || precioProducto < 1)
		{
			precioProducto = prompt("Error, ingrese el precio del producto (debe ser un numero)");
		}
		
		
		

	//A

	
		switch(vendedor)
		{
			//JUAN
			case "juan":
				ventasJuan = ventasJuan + precioProducto;
				contadorJuan = contadorJuan + 1;
			break;

			//MARIA
			case"maria":
				ventasMaria = ventasMaria + precioProducto;
				contadorMaria = contadorMaria + 1;
				if (tipoProducto == "perfume")
				{
					cantidadPerfumesMaria = cantidadPerfumesMaria + 1;
				}
			break;

			//LUCRECIA
			case "lucrecia":
				ventasLucrecia = ventasLucrecia + precioProducto;
				contadorLucrecia = contadorLucrecia + 1
			break;
		}

		if(precioProducto < precioMasBarato || banderaDelPrimero == 0)
		{
			precioMasBarato = precioProducto;
			vendedorMasBarato = vendedor;
			banderaDelPrimero = 1;

		}
		respuesta = prompt("Desea seguir ingresando datos?");
		respuesta = respuesta.toLowerCase();
		while(respuesta!="si" && respuesta!="no")
		{
			respuesta = prompt("Error, desea seguir ingresando datos? (si o no)");
			respuesta = respuesta.toLowerCase();
		}

	}

	/*Si la suma de las ventas realizadas por cada vendedor está entre 5000 y 10000, la comisión será del
15%.
Si la comisión supera los 10000, la comisión será del 20%. En caso contrario la comisión será del
5%.*/

if(ventasJuan >10000)
{
	comisionJuan = ventasJuan * 0.2;
}
else 
{
	if (ventasJuan > 5000)
	{
		comisionJuan = ventasJuan * 0.15;
	}
	else
	{
		comisionJuan = ventasJuan * 0.05;
	}
}

if(ventasMaria >10000)
{
	comisionMaria = ventasMaria * 0.2;
}
else 
{
	if (ventasMaria > 5000)
	{
		comisionMaria = ventasMaria * 0.15;
	}
	else
	{
		comisionMaria = ventasMaria * 0.05;
	}
}

if(ventasLucrecia >10000)
{
	comisionLucrecia = ventasLucrecia * 0.2;
}
else 
{
	if (ventasLucrecia > 5000)
	{
		comisionLucrecia = ventasLucrecia * 0.15;
	}
	else
	{
		comisionLucrecia = ventasLucrecia * 0.05;
	}
}

//d. El nombre del vendedor con menor comisión.

if(comisionJuan<comisionMaria && comisionJuan<comisionLucrecia)
{
	vendedorMasBarato = "Juan";
}
else
{
	if(comisionMaria<comisionLucrecia)
	{
		vendedorMasBarato="Maria";
	}
	else
	{
		vendedorMasBarato = "Lucrecia";
	}
}
document.write("El promedio de ventas de Juan es: " + (ventasJuan/contadorJuan) + "<br>");
document.write("El promedio de ventas de Maria es: " + (ventasMaria/contadorMaria) + "<br>");
document.write("Cantidad de perfumes que vendió Maria: " + cantidadPerfumesMaria + "<br>");
document.write("El promedio de ventas de Lucrecia es: " + (ventasLucrecia/contadorLucrecia) + "<br>");
document.write("El importe mas barato es " + precioMasBarato + " y lo vendio " + vendedorMasBarato + "<br>");
document.write("El vendedor con menor comision es: " + vendedorMasBarato + "<br>");

}
