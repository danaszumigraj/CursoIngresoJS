/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
	var sueldoBruto;
	var numeroLegajo;
	var nacionalidad;

	
	edadIngresada = parseInt(prompt("Ingrese su edad (entre 18 y 90 años inclusive)"));
	while(isNan(edadIngresada) || edadIngresada < 18 || edadIngresada > 90)
	{
		edadIngresada = parseInt(prompt("Error, ingrese su edad (entre 18 y 90 años inclusive)"));
	}
	
	do
	{
		sexoIngresado = prompt("Ingrese su sexo (F o M)");
	}while(sexoIngresado != "M" || sexoIngresado != "F")

	do
	{
		estadoCivilIngresado = prompt("Ingrese su estado civil: 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos (solo el numero)");
	}while (estadoCivilIngresado > 4 || estadoCivilIngresado <= 0)

	do
	{

	}while (sueldoBruto)



}
