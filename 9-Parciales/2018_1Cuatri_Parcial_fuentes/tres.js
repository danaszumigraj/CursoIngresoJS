function mostrar()
{
    var precio;
    var descuento;
    var precioFinal;

    precio = parseFloat(prompt("Ingrese el precio"));
    while(isNaN(precio) == true)
    {
        precio = parseFloat(prompt("Error, ingrese el precio nuevamente (debe ser un numero)"));
    }
    
    descuento = parseFloat (prompt("Ingrese el descuento"));
    while(isNaN(descuento) == true)
    {
        descuento = parseFloat(prompt("Error, ingrese el descuento nuevamente (debe ser un numero)"));
    }

    precioFinal = precio - (precio * descuento / 100)
    document.getElementById("elPrecioFinal").value = precioFinal;

}
