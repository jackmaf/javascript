# EJERCICIOS OBJECTOS JAVASCRIPT

1. Crear un metodo constructor llamada persona. Sus atributos son: nombre, edad y cedula. Construye los siguientes métodos para la clase:

1.1 mostrar(): Muestra los datos de la persona.
1.2 es_mayor_de_edad(): Devuelve un valor lógico indicando si es mayor de edad.

2. Crea un metodo constructor llamado cuenta que tendrá los siguientes atributos: titular (que es nombre de la persona) y cantidad. El titular será obligatorio y la cantidad es opcional. Construye los siguientes métodos para el metodo:

2.1 mostrar(): Muestra los datos de la cuenta.
2.2 ingresar(cantidad): se ingresa una cantidad a la cuenta, si la cantidad introducida es negativa, no se hará nada.
2.3 retirar(cantidad): se retira una cantidad a la cuenta. La cuenta puede estar en números rojos.


3. Crear un metodo constructor llamado formulas. Construye los siguiente metodos
para la clase:

3.1 sumar(entero, entero)
3.2 fibonacci(cantidad) a partir de una entero sacar los numeros
3.3 operacion_modulo(cantidad) a partir de una cantidad mostrar cuales dan residuo 0
3.4 primos(cantidad) a partir de una cantidad mostrar cuales son numeros primos


4. Crear un metodo constructor llamado persona. Sus atributos son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura
Construye los siguiente metodos para la clase:

4.1 calcularIMC(): calculara si la persona esta en su peso ideal (peso en kg/(altura^2  en m)), si esta fórmula devuelve un valor menor que 20, la función devuelve un -1, si devuelve un número entre 20 y 25 (incluidos), significa que esta por debajo de su peso ideal la función devuelve un 0  y si devuelve un valor mayor que 25 significa que tiene sobrepeso, la función devuelve un 1. Te recomiendo que uses constantes para devolver estos valores.
4.2 esMayorDeEdad(): indica si es mayor de edad, devuelve un booleano.
4.3 comprobarSexo(char sexo): comprueba que el sexo introducido es correcto. Si no es correcto, sera H.


5. Crear un metodo constructor llamado contraseña. Sus atributos longitud y contraseña Construye los siguiente metodos
para la clase:

5.1 esFuerte(): devuelve un booleano si es fuerte o no, para que sea fuerte debe tener mas de 2 mayúsculas, mas de 1 minúscula y mas de 5 números.
5.2 generarPassword():  genera la contraseña del objeto con la longitud que tenga.
5.3 seguridadPaswword(); indicar si la contraseña es debil contiene entre 1 a 6 caracteres (caracteres numeros y letras), media (7 a 10 caracteres numeros y letras) o fuerte (11 a 20 caracteres letras y caracteres especiales)


6.  Implementar un objeto que modele un contador. Un contador se puede incrementar o decrementar, recordando el valor actual. Al resetear un contador, se pone en cero.

Además es posible indicar directamente cual es el valor actual. Este objeto debe
entender los siguientes mensajes:
6.1 reset()
6.2 inc()
6.3 dec()
6.4 valorActual()
6.5 valorActual(nuevoValor)
P.ej. si se evalúa la siguiente secuencia
contador.valorActual(10)
contador.inc()
contador.inc()
contador.dec()
contador.inc()
contador.valorActual()
el resultado debe ser 12.

7.  Agregar al contador del ejercicio 6, la capacidad de recordar un String que representa el último comando que se le dio. Los Strings posibles son "reset",
"incremento", "decremento" o "actualizacion" (para el caso de que se invoque valorActual con un parámetro). Para saber el último comando, se le envía
al contador el mensaje ultimoComando().

En el ejemplo del ejercicio 3, si luego de la secuencia indicada se evalúa
contador.ultimoComando()
el resultado debe ser "incremento"

8. Implementar un objeto que modele a Chimuela, una dragona de la que nos interesa
saber qué energía tiene en cada momento, medida en joules. En el metodo constructor simplicado que nos piden implementar, las únicas acciones que vamos a contemplar
son:
cuando Chimuela come una cantidad de comida especicada en gramos, en este
caso adquiere 4 joules por cada gramo, y
cuando Chimuela vuela una cantidad de kilómetros, en este caso gasta un joule
por cada kilómetro, más 10 joules de costo jo de despegue y aterrizaje.
La energía de Chimuela nace en 0. El objeto que implementa este metodo constructor de Chimuela,
debe entender los siguientes mensajes:
8.1 comer(gramos)
8.2 volar(kilometros)
8.3 energia()
P.ej. si sobre un REPL(Read-Eval-Print-Loop)(Lectura-Evaluación-Impresión) recién lanzado se evalúa la siguiente secuencia
Chimuela.comer(100)
Chimuela.volar(10)
Chimuela.volar(20)
Chimuela.energia()
el resultado debe ser 350.

9. Agregar al metodo constructor de Chimuela del ejercicio 8, la capacidad de entender estos mensajes:
estaDebil(), Chimuela está débil si su energía es menos de 50.
estaFeliz(), Chimuela está feliz si su energía está entre 500 y 1000.
cuantoQuiereVolar(), que es el resultado de la siguiente cuenta. De base,
quiere volar (energía / 5) kilómetros, p.ej., si tiene 120 de energía, quiere volar
24 kilómetros. Si la energía está entre 300 y 400, entonces hay que sumar 10
a este valor, y si es múltiplo de 20, otros 15. Entonces, si Chimuela tiene 340 de
energía, quiere volar 68 + 10 + 15 = 93 kilómetros. Para probar esto, sobre
un REPL recién lanzado darle de comer 85 a Chimuela, así la energía queda en
340.
Para saber si n es múltiplo de 20 hacer: n % 20 == 0. Probarlo en el REPL(Read-Eval-Print-Loop)(Lectura-Evaluación-Impresión)

10. Implementar un objeto que represente una calculadora sencilla, que permita sumar,
restar y multiplicar. Este objeto debe entender los siguientes mensajes:
10.1 cargar(numero)
10.2 sumar(numero)
10.3 restar(numero)
10.4 multiplicar(numero)
10.5 valorActual()
P.ej. si se evalúa la siguiente secuencia
calculadora.cargar(0)
calculadora.sumar(4)
calculadora.multiplicar(5)
calculadora.restar(8)
calculadora.multiplicar(2)
calculadora.valorActual()
el resultado debe ser 24.

11. Crear un metodo constructor llamado Libro. Sus atributos título del libro, autor, número de ejemplares del libro y número de ejemplares prestados
 los siguiente metodos para la clase:

préstamo() que incremente el atributo correspondiente cada vez que se realice un préstamo del libro. No se podrán prestar libros de los que no queden ejemplares disponibles para prestar. Devuelve true si se ha podido realizar la operación y false en caso contrario.
devolucion() que decremente el atributo correspondiente cuando se produzca la devolución de un libro. No se podrán devolver libros que no se hayan prestado. Devuelve true si se ha podido realizar la operación y false en caso contrario.
toString() para mostrar los datos de los libros.

12. Se está pensando en el diseño de un juego que incluye la nave espacial Enterprise.
En el juego, esta nave tiene un nivel de potencia de 0 a 100, y un nivel de coraza
de 0 a 20. La Enterprise puede
encontrarse con una pila atómica, en cuyo caso su potencia aumenta en 25.
encontrarse con un escudo, en cuyo caso su nivel de coraza aumenta en 10.
recibir un ataque, en este caso se especican los puntos de fuerza del ataque recibido. La Enterprise para el ataque con la coraza, y si la coraza no
alcanza, el resto se descuenta de la potencia. P.ej. si la Enterprise con 80
de potencia y 12 de coraza recibe un ataque de 20 puntos de fuerza, puede
parar solamente 12 con la coraza, los otros 8 se descuentan de la potencia. La
nave debe quedar con 72 de potencia y 0 de coraza. Si la Enterprise no tiene
nada de coraza al momento de recibir el ataque, entonces todos los puntos de
fuerza del ataque se descuentan de la potencia.
La potencia y la coraza tienen que mantenerse en los rangos indicados, p.ej. si la
Enterprise tien 16 puntos de coraza y se encuentra con un escudo, entonces queda
en 20 puntos de coraza, no en 26. Tampoco puede quedar negativa la potencia, a
lo sumo queda en 0.
La Enterprise nace con 50 de potencia y 5 de coraza.
Implementar este metodo constructor de la Enterprise, que tiene que entender los siguientes
mensajes:
12.1 potencia()
12.2 coraza()
12.3 encontrarPilaAtomica()
12.4 encontrarEscudo()
12.5 recibirAtaque(puntos)

P.ej. sobre un REPL recién lanzado, después de esta secuencia
enterprise.encontrarPilaAtomica()
enterprise.recibirAtaque(14)
enterprise.encontrarEscudo()
la potencia de la Enterprise debe ser 66, y su coraza debe ser 10.

13. Agregar al metodo constructor de la Enterprise del ejercicio 12, la capacidad de entender estos
mensajes.
fortalezaDefensiva(), que es el máximo nivel de ataque que puede resistir,
o sea, coraza más potencia.
necesitaFortalecerse(), tiene que ser true si su coraza es 0 y su potencia
es menos de 20.
fortalezaOfensiva(), que corresponde a cuántos puntos de fuerza tendría
un ataque de la Enterprise. Se calcula así: si tiene menos de 20 puntos de
potencia entonces es 0, si no es (puntos de potencia - 20) / 2.

14. Un taller de diseño de autos quiere estudiar un nuevo prototipo. Para eso, nos
piden hacer un metodo constructor concentrado en las características del motor. El prototipo
de motor tiene 5 cambios (de primera a quinta), y soporta hasta 5000 RPM.
La velocidad del auto se calcula así: (rpm / 100) * (0.5 + (cambio / 2)). P.ej. en
tercera a 2000 rpm, la velocidad es 20 * (0.5 + 1.5) = 40.
También nos interesa controlar el consumo. Se parte de una base de 0.05 litros por
kilómetro. A este valor se le aplican los siguientes ajustes:
Si el motor está a más de 3000 rpm, entonces se multiplica por
(rpm - 2500) / 500.
P.ej., a 3500 rpm hay que multiplicar por 2, a 4000 rpm por 3, etc.
Si el motor está en primera, entonces se multiplica por 3.
Si el motor está en segunda, entonces se multiplica por 2.
Los efectos por revoluciones y por cambio se acumulan. P.ej. si el motor está en
primera y a 5000 rpm, entonces el consumo es 0.05 * 5 * 3 = 0.75 litros/km.
El metodo constructor debe entender estos mensajes:
arrancar(), se pone en primera con 500 rpm.
subirCambio()
bajarCambio()
subirRPM(cuantos)
bajarRPM(cuantos)
velocidad()
consumoActualPorKm()