/*Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro*/

function mostrar()
{
  var tipoProducto;
  var cantidadBolsas;
  var precioBolsa;
  var cantidadTotal = 0;
  var precioTotal = 0;
  var respuesta;

  var descuento = 0;

  var banderaMayorCant = 0;
  var tipoMasCant;
  var mayorCant = 0;

  var banderaPrecioCaro = 0
  var precioMasCaro;
  var tipoMasCaro;


  do
  {
    //TIPO PRODUCTO
    tipoProducto = prompt("Ingrese el producto")
    tipoProducto = tipoProducto.toLowerCase();
    while(tipoProducto!="arena" && tipoProducto!="cal" && tipoProducto!="cemento")
    {
      tipoProducto = prompt("Error, ingrese el producto (arena, cal o cemento)")
      tipoProducto = tipoProducto.toLowerCase();
    }
    
    //CANTIDAD DE BOLSAS
    cantidadBolsas = parseInt(prompt("ingrese la cantidad de bolsas"));
    while(isNaN(cantidadBolsas)==true)
    {
      cantidadBolsas = parseInt(prompt("Error, ingrese la cantidad de bolsas"));
    }

    //PRECIO
    precioBolsa = parseFloat(prompt("Ingrese el precio por bolsa"));
    while(isNaN(precioBolsa)==true || precioBolsa < 1)
    {
      precioBolsa = parseFloat(prompt("Error, ingrese el precio por bolsa (un numero mayor a 0)"));
    }

    cantidadTotal = cantidadTotal + cantidadBolsas;
    precioTotal = precioTotal + (precioBolsa * cantidadBolsas);



    if (banderaMayorCant == 0)
    {
      tipoMasCant = tipoProducto;
      mayorCant = cantidadBolsas;
      banderaMayorCant = 1;
    }
    else if(cantidadBolsas > mayorCant && tipoProducto == tipoMasCant)
        {
          mayorCant = mayorCant + cantidadBolsas;
        }
        else if(cantidadBolsas > mayorCant && tipoProducto != tipoMasCant)
            {
              mayorCant = cantidadBolsas;
              tipoMasCant = tipoProducto;
            }

    if (banderaPrecioCaro == 0 || precioMasCaro < precioBolsa)
    {
      tipoMasCaro = tipoProducto;
      precioMasCaro = precioBolsa;
      banderaPrecioCaro = 1;
    }



    respuesta = prompt("Quiere seguir ingresando datos?"); 
    respuesta = respuesta.toLowerCase(); 
    while(respuesta!="si" && respuesta!="no")
    {
      respuesta = prompt("Error, quiere seguir ingresando datos? (si o no)");
      respuesta = respuesta.toLowerCase(); 
    }
  }while(respuesta == "si")

  if (cantidadTotal > 30)
  {
    descuento = precioTotal * 0.25;
  }
  else if(cantidadTotal > 10)
      {
        descuento = precioTotal * 0.15;
      }
  
  
  //A
  document.write("El importe bruto a pagar es " + precioTotal + "<br>");
  //B
  if (descuento = 0)
  {
    document.write("No hay descuento" + "<br>");
  }
  else 
  {
    document.write("El importe con descuento es " + (precioTotal - descuento) + "<br>");
  }
  //C
  document.write("El producto con mas cantidad de bolsas es " + tipoMasCant + "<br>");
  //D
  document.write("El producto mas caro es " + tipoMasCaro + "<br>");


}
