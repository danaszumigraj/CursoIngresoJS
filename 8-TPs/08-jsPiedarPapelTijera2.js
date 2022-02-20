var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;
var mensaje;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	eleccionMaquina = Math.floor((Math.random() * (3 - 1 + 1)) + 1);
	alert(eleccionMaquina);

}
//FIN DE LA FUNCIÓN
function piedra()
{
	switch (eleccionMaquina)
    {
        case 1:
            mensaje = "Empate";
        break;
        
        case 2:
            mensaje = "Perdio";
        break;
        
        case 3:
            mensaje = "Gano";
        break;
    }
	alert(mensaje);

}
//FIN DE LA FUNCIÓN
function papel()
{
	switch (eleccionMaquina)
    {
        case 1:
            mensaje = "Gano";
        break;
        
        case 2:
            mensaje = "Empate";
        break;
        
        case 3:
            mensaje = "Perdio";
        break;
    }
    alert(mensaje);

}
//FIN DE LA FUNCIÓN
function tijera()
{
	switch (eleccionMaquina)
    {
        case 1:
            mensaje = "Perdio";
        break;
        
        case 2:
            mensaje = "Gano";
        break;
        
        case 3:
            mensaje = "Empate";
        break;
    }
	
	
    alert(mensaje);
	
}
//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	if (mensaje == "Gano")
	{
		ContadorDeEmpates = ContadorDeEmpates + 1;
		document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates;
	}
	else if (mensaje == "Empate")
		{
			ContadorDeEmpates = ContadorDeEmpates + 1;
			document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates;
		}
		else
		{
			ContadorDePerdidas = ContadorDePerdidas + 1
			document.getElementById("txtIdPerdidas").value = ContadorDePerdidas
		}
	
	/*
	switch(mensaje)
	{
		case "Empate":
			ContadorDeEmpates = ContadorDeEmpates + 1;
			document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates;
		break;

		case "Gano":
			ContadorDeGanadas = ContadorDeGanadas + 1;
			document.getElementById("txtIdGanadas").value = ContadorDeGanadas;
		break;

		case "Perdio":
			ContadorDePerdidas = ContadorDePerdidas + 1
			document.getElementById("txtIdPerdidas").value = ContadorDePerdidas
		break;
	}
	*/
}