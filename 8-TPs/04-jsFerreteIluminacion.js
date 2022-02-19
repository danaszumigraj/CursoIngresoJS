/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

/*

    if (cantidadLamparas >= 6)
    {
        descuento = (precioFinal * 50/100);
    }
    else if (cantidadLamparas == 5)
    {
        if(marcaLamparas == "ArgentinaLuz")
        {

            descuento = precioFinal * 40/100;
        }
        else
        {
            descuento = precioFinal * 30/100;
        }
    }
    else  if (cantidadLamparas == 4)
    {
        if(marcaLamparas =='ArgentinaLuz' || marcaLamparas == 'FelipeLamparas')
        {
            descuento = precioFinal * 25/100;
        }
        else
        {
            descuento = precioFinal * 20/100;
        }
    }
    else if(cantidadLamparas == 3)
    {
       
        if(marcaLamparas == 'ArgentinaLuz')
        {
       
            descuento = precioFinal * 15/100;
        }
        else if(marcaLamparas =='FelipeLamparas')
        {
            descuento = precioFinal * 10/100;
        }
        else
        {
            descuento = precioFinal * 5/100;
        }
    }
    else 
    {
        descuento = 0
    }

    precioFinal = precioFinal - descuento;
    document.getElementById("txtIdprecioDescuento").value = precioFinal;

    if ( precioFinal > 120 )
	{
		impuesto = precioFinal * 10/100;
		precioFinal = precioFinal + impuesto;
		alert("Usted pago $" + impuesto + " de IIBB.");
	}
     
*/



/*
    //A
    if (cantidadLamparas >= 6)
    {
        descuento = precioFinal * 0.5;
    }

//B
    else if (cantidadLamparas == 5)
    {
        switch(marcaLamparas)
        {
            case "ArgentinaLuz":
                descuento = precioFinal * 0.4;
            break;

            default:
                descuento = precioFinal * 0.3;
            break;
        }
    }
//C
    
    else  if (cantidadLamparas == 4)
    {
        switch(marcaLamparas)
        {
            case "ArgentinaLuz":
            case "FelipeLamparas":
                descuento = precioFinal * 0.25;
            break;

            default:
                descuento = precioFinal * 0.2;
            break;
        }
    }
//D
    
    else if(cantidadLamparas == 3)
    {
       switch(marcaLamparas)
       {
            case "ArgentinaLuz":
                descuento = precioFinal * 0.15;
            break;

            case "FelipeLamparas":
                descuento = precioFinal * 0.1;
            break;

            default:
                descuento = precioFinal * 0.05;
            break;
       }
    }

    precioFinal = precioFinal - descuento;
//E
    
    if (precioFinal > 120)
	{
		impuesto = precioFinal * 0.1;
		precioFinal = precioFinal + impuesto;
		alert("Usted pago $" + impuesto + " de IIBB.");
	}

    document.getElementById("txtIdprecioDescuento").value = precioFinal;
*/


function CalcularPrecio () 
{
 	var cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    var marcaLamparas = document.getElementById("Marca").value;
    var precioLampara = 35;
    var precioFinal = precioLampara * cantidadLamparas;
    var descuento = precioFinal * 0.5
    var impuesto;

//A queda por defecto
//B
switch (cantidadLamparas)
{
    case "5":
    
        switch(marcaLamparas)
            {
            case "ArgentinaLuz":
                descuento = precioFinal * 0.4;
            break;

            default:
                descuento = precioFinal * 0.3;
            break;
            }
    
    break;
//C

    case "4":
    
        switch(marcaLamparas)
            {
            case "ArgentinaLuz":
            case "FelipeLamparas":
                descuento = precioFinal * 0.25;
            break;

            default:
                descuento = precioFinal * 0.2;
            break;
            }
    
    break;
//D

    case "3":
    
        switch(marcaLamparas)
        {
            case "ArgentinaLuz":
                descuento = precioFinal * 0.15;
            break;

            case "FelipeLamparas":
                descuento = precioFinal * 0.1;
            break;

            default:
                descuento = precioFinal * 0.05;
            break;
        }
    
    break;

    case "2":
    case "1":
        descuento = 0
    break;

}

precioFinal = precioFinal - descuento;
//E

if (precioFinal > 120)
{
    impuesto = precioFinal * 0.1;
    precioFinal = precioFinal + impuesto;
    alert("Usted pago $" + impuesto + " de IIBB.");
}

document.getElementById("txtIdprecioDescuento").value = precioFinal

}
