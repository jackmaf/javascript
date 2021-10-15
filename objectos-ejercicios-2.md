
# Examen objectos clases y metodos contructores
Crear una clase o metodo constructor para crear 3 objetos empresa inicializandolos y declarandolos con los siguientes atributos y funciones:
1. nombre(nombre completo de la empresa)
"Jack company"
2. nit(un numero de 10 digitos los ultimos 4 digitos corresponde al tipo de empresa)
3. tipo_empresa
4. empleados(arreglo con todos los nombre de los empleados)
["Lina Maria Sepulveda", "Luis miguel"]
5. edades(arreglo con todas las edades de los empleados)
[18,34]
6. Genero(arreglo con cada sexo de los empleados)
["F","M","O"]
7. es_cabeza_de_hogar(arreglo con verdadero o falso)
[true,false]
8. nomina(arreglo que guardara el valor a pagar de cada empleado)
9. metodo crear_datos_iniciales() que mediante prompt solicitara nombre y nit de la empresa tener encuenta que existen las siguientes validaciones:
A. el nombre y el nit no puede estar vacio si se colocan vacio alguno  se deben requerir denuevo los datos
B. el nit de la empresa es un numero de 10 digitos si no es de este tamaño se debe requerir denuevo los 2 datos
10. metodo ingresar_empleado()  que mediante prompt solicitara nombre completo, genero, es cabeza de hogar y los ingresara a los atributos de la empresa correspondientes
11. metodo mujeres() que traera todas las mujeres de la empresa en forma de arreglo
12. metodo hombres() que traera todos los hombres de la empresa en forma de arreglo
13. metodo generar_nomina() que generara la nomina a pagar a cada persona con las siguientes condicciones:
A. si es su edad esta entre 20 o 30 ganara $200.000 cop extra al sueldo base
B. si es su edad esta entre 30 o 40 ganara $400.000 cop extra al sueldo base
C. si es su edad esta entre 40 o 50 ganara $500.000 cop extra al sueldo base
D. si es su edad esta entre 50 o 60 ganara $600.000 cop extra al sueldo base
E. si es su edad es mayor de 60 ganara $700.000 cop extra al sueldo base
F. si es cabeza de hogar ganara un 30% mas de su sueldo base
G. si es mujer ganara un 10% mas de su sueldo base
H. el sueldo base de cada trabajador es el salario minimo legal vigente
14. metodo total_nomina() que dara el total de la nomina de la empresa
15. metodo generar_tipo_empresa() que tomara el nit y sus 4 numeros finales y dira el tipo de la empresa
A. si la suma de los 4 sus digitos es divisible entre 7 es
-Sociedad por Acciones Simplificadas (S.A.S.)
B. si la suma de los 4 sus digitos es divisible entre 5 es
-Sociedad Anónima (S.A.)
C. si la suma de los 4 sus digitos es divisible entre 3 es
-Sociedades Limitadas (LTDA)
D. si la suma de los 4 sus digitos es divisible entre 2 es
-Sociedad Comandita por Acciones (S. C. A.)
16. metodo liquidar(nombre_trabajador) que buscara por el nombre de un trabajo y eliminara de la empresa pero sacara un mensaje de la siguiente forma:"El trabajado Juan tuesta Masculino cabeza de hogar se liquida de la empresa Jack company S.A.S con nit 1234567890 con un saldo a favor de (el valor total nomina*3)"


Crear una clase o metodo constructor para crear 3 objetos plantas inicializandolos y declarandolos con los siguientes atributos y funciones:

1. es_de_sol (que guardara true o false)
2. tipos_de_farmacos (que guardara en un arreglo los tipos de farmacos que puede tener la planta en orden ejemplo ["remedio", "colorante artificial"])
3. quimica (que guardara en un arreglo los tipos de sustancias quimicas que pueden tener las planta)
4. tiempo_crecimiento_final (dato que guardara un numero que son el total de horas para llegar a la edad adulta o de floracion de la planta)
5. tiempo_crecimiento_actual (dato que guardara un numero que son el total de horas para llegar a la edad adulta o de floracion de la planta)
6. plagas (un arreglo que guardara el historico de plagas que ha sufrido la planta)
7. luz (numero de 1% a 100%)
8. humedad  (numero de 1% a 100%)
9. nutrientes  (numero de 1% a 100%)
10. metodo descripcion() dara la ficha tecnica completa de la planta con todos los atributos he informacion necesaria
11. metodo agregar_horas_de_vida() que realizara lo siguiente:

*si la planta es_de_sol tomara porcentaje de luz y sumara ese valor con el total de horas este dato sera el resultado en minutos y se lo sumara a tiempo_crecimiento_actual

*tomara humedad y multiplicara ese valor con el total de horas este dato sera el resultado en segundos y se lo sumara a tiempo_crecimiento_actual

*tomara nutrientes y restara ese valor con el total de horas este dato sera el resultado horas y se lo sumara a tiempo_crecimiento_actual

12. metodo agregar_luz() para agregar luz teniendo encuenta que 1000 lumens es el 1% ademas tener encuenta que si la luz es negativa o se pasa del 100% el valor restante para quedar en el rango de 0 a 100 se pasara en signo a la humedad
13. metodo agregar_humedad() para agregar humedad teniendo encuenta que 7 g/m3 es el 1% ademas tener encuenta que si la humedad es negativa o se pasa del 100% el valor restante para quedar en el rango de 0 a 100 se pasara en signo a los nutrientes
14. metodo agregar_nutrientes() para agregar nutrientes teniendo encuenta que 1 ml es el 1% ademas tener encuenta que si los nutrientes son negativos o se pasa del 100% se llamara automaticamente el metodo random_plaga()
15. metodo random_plaga() que dara un numero random del 1 al 10 y si sale un numero del 1 al 5 se agregara la plaga correspondiente a ese numero y restara los valores de los atributos como se ve en la tabla de plagas de lo contrario si da un numero del 6 al 10 no se hara nada

16. metodo antidotos() que dara un arreglo de los antidotos si la planta tiene venenos o es toxica

## Datos complementarios:
Tipos de farmacos:
"remedio", "veneno", "antídoto", "droga"

## Quimicos segun su tipo:
1. Remedio:
Vitamina C, Vitamina A, Vitamina E, Vitamina D, Biotina, Glicina, Colageno
2. Veneno - toxico:
Hierro, Digoxina, Yodo, Benzodiazepinas, Cianuro
3. Antidoto:
DEFEROXAMINA, ANTIDIGITAL, ALMIDÓN, FLUMAZENILO, TIOSULFATO SÓDICO
4. Droga:
Psilocibina, Psilocina, AMIDA DE ÁCIDO D-LISÉRGICO, ERGINA, LA-111

## Plagas:
1. Cochinillas - 10 horas maduracion - 1000 luz(lumens)
2. Pulgones - 23 horas maduracion - 17 humedad(g/m3)
3. Mosca blanca - 5 horas maduracion - 23 nutrientes
4. Ácaros - 1 horas maduracion - 5600 luz(lumens) - 5 humedad(g/m3)
5. Gusanos - 13 horas maduracion - 3 humedad(g/m3) - 23 nutrientes

grupo 1 hara los siguientes puntos:
1,2,3,4,5,6,7,8,9,10,12,16
grupo 2 hara los siguientes puntos:
1,2,3,4,5,6,7,8,9,10,13,11,16
grupo 3 hara los siguientes puntos:
1,2,3,4,5,6,7,8,9,10,14,15