
# Examen objectos clases y metodos contructores
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