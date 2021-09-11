## Operaciones básicas, Tipos de datos, Prompt y Alert

1. Escribir un programa que muestre un prompt donde el usuario ingresa un número, luego muestra otro prompt pidiendo otro número, finalmente el programa muestra una alerta con el resultado de la suma.

2. Crear un programa donde el usuario ingrese en un prompt la temperatura en Celcius y el programa muestre en una alerta la temperatura en Fahrenheit.

3. Pedir un número a un usuario a través de un prompt y luego dividirlo por 10, ejemplo: 5 / 10  igual 0.5

4. Si a = [1,2,3] crear un script que determine de muestre un alert del tipo de dato de a.

## If and else

5. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en una alerta.

6. Crear un programa que determine si un número introducido en un Prompt es divisible por 5 o no, mostrar el resultado con console.log

7. Crear un programa que determine si un número introducido en un popup es divisible por 11 y 5 o no, mostrar el resultado con console.log

8. Crear un programa  que le pida al usuario dos números en un Prompt y luego muestre en un alerta el número mayor.

9. Crear un programa que le pida al usuario primero un  números al usuario a través de un prompt y luego un segundo número para luego mostrar en un alerta el número mayor, esta vez realizar el ejercicio ocupando un if ternario.

10. Crear un programa que determine si un string introducido por un usuario empieza con un número o con una letra.

11. Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se determine si el triángulo es válido o no.

12. Determinar si una palabra empieza con mayúscula o no.

13. Determinar si un año dado es bisiesto.

14. Escribir un programa JavaScript en el que el programa escoge al azar un entero entre 1 y 10, el usuario , luego a el usuario se le pedirá que introduzca un número en un popup para intentar adivinarlo. Si la entrada del usuario coincide con el número de conjetura, el programa mostrará un mensaje de "buen trabajo" de lo contrario mostrará un mensaje de "No corresponde"

15. El siguiente código tiene un error que se produce en algunos casos especiales, descubrirlo y arreglarlo:

	~~~javascript
	// Obtener edad

	if(edad < 13) {
		console.log("Es niño");
	}if(edad < 18 ){
	 	console.log("Es adolecente");
	} else{
	 	console.log("Es adolecente");
	}
	~~~

16. Negar las siguientes expresión de forma de mantener la tabla de verdad, crear el programa que muestre el valor de la expresión a medida que se cambia los valores de a y b.

	- !a && !b	
	- !a || !b	

	
## Loops
17. ingresa por consola el tamaño o cantidad de numeros que se solicitaran y realizar los siguientes ejercicios:

17.1. imprimir por consola los numeros inpares si no existen sacar un mensaje dando feedback de lo sucedido
17.2. imprimir por consola los numeros pares  si no existen sacar un mensaje dando feedback de lo sucedido
17.3. imprimir por consola los numeros primos  si no existen sacar un mensaje dando feedback de lo sucedido
17.4.ordenarlos de menor a mayor
17.5. imprimir los tipos de datos que existen en el arreglo
17.6. imprimir por cada tipo de dato cuantos elementos existen en ese arreglo
17.7. imprimir los multiplos de 4


### While

18. Mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo ingresa el usuario en un prompt.

19. Mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo ingresa el usuario en un prompt.

20. Mostrar todos los números de N a 1 disminuyendo de 1 en 1 donde n lo ingresa el usuario en un prompt.

21. Escribir utilizando console.log la tabla del 9 hasta 9x10.

22. Pedir al usuario que ingrese un número en un prompt, hacer la suma de todos los dígitos, validar que el número ingresado no contenga letras.

23. Realizar la suma de todos los números pares entre N y M donde N y M los ingresa un usuario.

24. Realizar la sumatoria de los primeros N números, donde N es ingresado por el usuario.

25. Realizar el factorial de los primeros N números.

### Ejercicios de divisores con while (o for)
26. Encontrar todos los divisores de un número.

27. Determinar si un número ingresado por el usuario en un loop es primo o no, validar que el número ingresado sea mayor o igual a dos.

28. Crear un programa que determine si un número es perfecto o no, (se dice que un número es perfecto si el número es igual a sus divisores, ejemplos 6 = 1 + 2 + 3)

### Doble loop

29. Generar los primeros N números primos, donde n es ingresado por el usuario.

30. Generar los primeros N números perfectos.

## Patrones con Loop anidados 

Dibujar los siguientes patrones ocupando `document.write`, para rellenar los espacios vacíos se debe imprimir un espacio vacío.

31.Cuadrado lleno:

<pre><center>*****
*****
*****
*****
*****</center></pre>

32.Cuadrado hueco:

<pre><center>*****
*   *
*   *
*   *
*****</center></pre>

33.Tablero de Ajedrez:

<pre><center>* * * * * * * *
 * * * * * * * 
* * * * * * * *
 * * * * * * * 
* * * * * * * *
 * * * * * * * 
* * * * * * * *
 * * * * * * * 

</center></pre>
34.Cuadrado hueco:

<pre><center>*****
*   *
*   *
*   *
*****</center></pre>

35.Piramide Izquierda:

<pre><center>*     
**    
***   
****  
***** </center></pre>

36.Pirámide centrada

<pre><center>*
***
*****
*******
*********</center></pre>

37.Pirámide invertida

<pre><center>*********
*******
*****
***
*
</center></pre>


38.Diamante:

<pre><center>*
***
*****
*******
*********
*******
*****
***
*
</center></pre>

## Funciones

39. Crear una función que reciba un valor cualquiera y lo muestre ocupando console.log(), llamar a la función pasando el valor 5

40. La siguiente función devuelve undefined en lugar de la multiplicación, se pide arreglarla
  
  ~~~js
	function multiply(a, b){
	  a * b
	}
   ~~~

41. Crear una función que reciba dos valores y devuelva la suma de ellos.

42. Crear una función que reciba un número entero y muestre un error si el tipo de dato pasado es de otro tipo.

43. Crear una función autoejecutable que muestre "muuu" en pantalla

## Array

- Dado el array = [1,2,3,4,5,6]

	44. Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla.
	
	45. Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla.
	
	46. Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos en pantalla.
	
	47. Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
	
	48. Generar una copia de un array pero con todos los elementos incrementado en 1.

	49. Calcular el promedio

50. Crear un array vacío, luego generar 20 números al azar y guardarlos en un array.

51. Crear un array vacío, luego generar N números al azar y guardarlos en un array, N es introducido por el usuario a través de un prompt.

52. Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.

## String y arrays

53. El usuario ingrese un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en [1,2,3,4,5])

54. Convertir un array ingresado dentro del código en un string (existe un método en javascript para hacerlo)


## Arreglos de arreglos 

55. Crear una función que permite aplanar un arreglo dado, Ejemplo: 

	~~~javascript
	var arr = [[1,2,3],[4,5,6],[7,8,9]];
	console.log(aplanar(arr)); // [1,2,3,4,5,6,7,8,9]
	~~~

56. Crear una función que divida un arreglo en dos partes con la misma cantidad de elementos (o una diferencia de máximo un elemento) y devuelva un arreglo que contenga al grupo1 y al grupo2

	~~~javascript
	var arr = [1,2,3,4,5,6,7,8];
	console.log(split(arr)); // [[1,2,3,4], [5,6,7,8]]
	~~~

## Funciones y arreglos

57. Crear una función que reciba un arreglo como parámetro y devuelva una copia del arreglo.

58. Crear una función que devuelva el promedio de un arreglo, en caso de que el arreglo esté vacío debe devolver cero.

59. Crear una función que calcule el promedio dentro de un arreglo pero dentro de un rango, esta función recibe el arreglo, un punto de partida y uno de termino y devuelve el promedio de los valores dentro del rango especificado.

## Objetos

60. Personas
	60.1 Crear un objeto literal persona con nombre y edad y una método que determine si es mayor de edad o no.
	
	60.2 Crear una función constructora que permita crear objetos del tipo personas pasándole solo un nombre y edad, agregar el método.
	
	60.3 Crear un array que contenga varios objetos persona
	
	60.4 Crear una función que reciba el array y devuelva la edad promedio del grupo de personas.
 
61. Teléfono
	- Crear una función constructora que devuelva objetos del tipo teléfono, como argumento debe recibir un número de teléfono, el objeto creado tiene el número de llamadas que debe ser inicializado en cero y un método llamar que debe aumentar el número de llamados en uno.

## DOM

62. Utilizando getElementById y innerHTML transformar el emoticon en un smiley

	~~~html
	<p id="demo"> :( </p>
	~~~