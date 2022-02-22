
function mostrar()
{
    var anchoRectangulo; 
    var largoRectangulo;
    var perimetro;

    anchoRectangulo = parseFloat(prompt("Ingrese el ancho del rectangulo."));
    while(isNaN(anchoRectangulo) == true)
    {
        anchoRectangulo = parseFloat(prompt("Ingrese el ancho del rectangulo, debe ser un numero."));
    }

    largoRectangulo = parseFloat(prompt("Ingrese el largo del rectangulo"));
    while(isNaN(largoRectangulo) == true)
    {
        largoRectangulo = parseFloat(prompt("Ingrese el largo del rectangulo, debe ser un numero."));
    }

    perimetro = anchoRectangulo * 2 + largoRectangulo * 2;
    alert("El perimetro del rectangulo es: " + perimetro);


}
