/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    var marcaLamparas = document.getElementById("Marca").value;
    var precioLampara = 35;

    switch (marcaLamparas)
     {
         case "ArgentinaLuz":
            if(cantidadLamparas = 5)
                {
                    alert("El descuento es del 40%, precio final: " + (precioLampara * cantidadLamparas)*40/100);
                }

            else if(cantidadLamparas = 4)
                {
                    alert("El descuento es del 25%, precio final: " + (precioLampara * cantidadLamparas)*25/100);
                }
                else if (cantidadLamparas = 3)
                    {
                        alert("El descuento es del 15%, precio final: " + (precioLampara * cantidadLamparas)*15/100);
                    }
                    else
                    {
                        alert("No hay descuento, precio final: " + precioLampara * cantidadLamparas)
                    }
        break;

        case "FelipeLamparas":
            if(cantidadLamparas = 5)
                {
                    alert("El descuento es del 30%, precio final: " + (precioLampara * cantidadLamparas)*30/100);
                }
            else if(cantidadLamparas = 4)
            {
                alert("El descuento es del 25%, precio final: " + (precioLampara * cantidadLamparas)*25/100);
            }
                else if (cantidadLamparas = 3)
                {
                    alert("El descuento es del 10%, precio final: " + (precioLampara * cantidadLamparas)*10/100)
                }
                else
                    {
                        alert("No hay descuento, precio final: " + precioLampara * cantidadLamparas)
                    }
        break;
        
        case "JeLuz":
        case "HazIluminacion":
        case "Osram":
            if(cantidadLamparas = 5)
                {
                    alert("El descuento es del 30%, precio final: " + (precioLampara * cantidadLamparas)*30/100);
                }
            else if(cantidadLamparas = 4)
                {
                    alert("El descuento es del 20%, precio final: " + (precioLampara * cantidadLamparas)*20/100);
                }
                else if (cantidadLamparas = 3)
                {
                    alert("El descuento es del 5%, precio final: " + (precioLampara * cantidadLamparas)*5/100)
                }
                else
                    {
                        alert("No hay descuento, precio final: " + precioLampara * cantidadLamparas)
                    }
        break;

        default:
            alert("El descuento es del 50%, precio final: " + (precioLampara * cantidadLamparas)*50/100)
        
     }

     /*switch (cantidadLamparas)
    {
        case "1":
        case "2":
        alert("No hay descuento, precio final: " + precioLampara * cantidadLamparas);
        

        case "3":
            if (marcaLamparas == "ArgentinaLuz")
            {
                alert("El descuento es del 15%, precio final: " + (precioLampara * cantidadLamparas)*15/100);
            }
            else if (marcaLamparas == "FelipeLamparas")
                {
                    alert("El descuento es del 10%, precio final: " + (precioLampara * cantidadLamparas)*10/100);
                }
                else
                {
                    alert("El descuento es del 5%, precio final: " + (precioLampara * cantidadLamparas)*5/100);
                }
        

        case "4":
            if (marcaLamparas == "ArgentinaLuz" || "FelipeLamparas" )
            {
                alert("El descuento es del 25%, precio final: " + (precioLampara * cantidadLamparas)*25/100);
            }
            else
            {
                alert("El descuento es del 20%, precio final: " + (precioLampara * cantidadLamparas)*20/100);
            }
        

        case "5":
            if(marcaLamparas == "ArgentinaLuz")
            {
                alert("El descuento es del 40%, precio final: " + (precioLampara * cantidadLamparas)*40/100);
            }
            else
            {
                alert("El descuento es del 30%, precio final: " + (precioLampara * cantidadLamparas)*30/100);
            }
        

    }*/

     

}
