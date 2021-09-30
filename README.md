1.historia de javascript
https://www.youtube.com/watch?v=NmaHJxanMcA
2. la consola del navegador
3. imprencion en consola console.log
4. Documentación en javascript
5. correr código javascript desde un archivo .html
6. correr código javascript desde un archivo externo .js
7. variables declaración y asignación y toma de datos
8. tipos de variables
https://www.w3schools.com/js/js_datatypes.asp
9. concatenación he interpelación
10.Operadores
https://www.w3schools.com/js/js_operators.asp
https://www.w3schools.com/js/js_arithmetic.asp
11.condicionales
https://www.w3schools.com/js/js_if_else.asp
12.switch
https://www.w3schools.com/js/js_switch.asp
13.array o arreglo(estructuras de datos)
 - declarar asignar y tomar datos
https://www.w3schools.com/js/js_arrays.asp
- metodos con arreglos
https://www.w3schools.com/js/js_array_methods.asp
14.debugger y Snippets por consola
15.loops fors whiles
https://www.w3schools.com/js/js_loop_for.asp
16. funciones
    declarativas
    function jack(){
      return;
    }
    expresion
    var jack = function(){
      return "hola";
    }
    entrada de parametros
    llamado
    nota recordar:
Diferencias:
A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.

Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.
https://www.w3schools.com/js/js_functions.asp

17. scope(universos)
tengo imagen
https://www.youtube.com/watch?v=s-7C09ymzK8&list=PLfWyZ8S-XzecAttp3QU-gBBXvMqEZTQXB&index=6
18. Hoisting
variables y funciones se ejecuten antes que se procese cualquier tipo de codigo
emascript6

console.log(a);//undefined
var a = "asd";

saludar('Diego');
function saludar(nombre) {
console.log(`Hola ${nombre}`);
}

https://www.youtube.com/watch?v=uI6o97A4IrI

19. const let var
https://www.youtube.com/watch?v=ojrvxYcKeYg


20. typeof ""
https://www.w3schools.com/js/js_typeof.asp

21.conversion de datos explicita
https://www.w3schools.com/js/js_type_conversion.asp

22. Coercion de datos
implicita por el lenguaje
explicita obligamos al dato

4+"7"//47
4*"7"//28
2+true//3
false-3//-3
https://www.youtube.com/watch?v=YaEzY9h7_Hw
23. ingreso de datos utilizando el metodo prompt
var response = prompt("Hey there, what's your name?");  alert("You typed: " + response);
https://developer.mozilla.org/es/docs/Web/API/Window/prompt

24.objectos
OBJECTOS
var mi_auto = {
marca: "Chevrolet",
modelo: "Onix",
annio: 2021
}


mi_auto.marca


var mi_auto = {
marca: "Chevrolet",
modelo: "Onix",
annio: 2021, 
nombre_completo: function() {
return `Auto ${this.marca} ${this.modelo} ${this.annio}`;
}
}


mi_auto.nombre_completo();


FUNCIONES CONSTRUCTORAS


function auto(marca, modelo, annio){
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}


var auto_juan = new auto("Renault", "Sandero", 1990);
var auto_luis = new auto("Audi", "R8", 2012);


reto 1
utilizar una funcion constructora y utilizando un ciclo hacer una funcion que solicite por consola 10 carros diferentes con marca modelo annio