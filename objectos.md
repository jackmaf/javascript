# OBJECTOS
## 1. INICIALIZACION Y DECLARACION DE OBJECTOS
### 1.1 ESTRUCTURA
```javascript
var NOMBRE_OBJECTO = {
  NOMBRE_ATRIBUTO: "DATO QUE GUARDA",
  NOMBRE_ATRIBUTO_DOS: 2,
  NOMBRE_ATRIBUTO_TRES: [2,3,4,5]
}
```
### 1.2 EJEMPLOS
```javascript
var mi_auto = {
  marca: "Chevrolet",
  modelo: "Onix",
  annio: 2021
}

let pokemon = {
  nombre: "Pikachu",
  elemento: "Electrico",
  hp: 1350
}
```
## 2. LLAMADO DE ATRIBUTOS DE UN OBJECTO
### 2.1 ESTRUCTURA
```javascript
NOMBRE_OBJECTO.NOMBRE_ATRIBUTO // DEVUELVE "DATO QUE GUARDA"
NOMBRE_OBJECTO.NOMBRE_ATRIBUTO_DOS // DEVUELVE 2
```
### 2.2 EJEMPLOS
```javascript
mi_auto.marca// DEVUELVE "Chevrolet"
pokemon.nombre// DEVUELVE "Pikachu"
```

## 3. FUNCIONES O METODOS DENTRO DE UN OBJECTO
### 3.1 ESTRUCTURA
```javascript
var NOMBRE_OBJECTO = {
  NOMBRE_ATRIBUTO: "DATO QUE GUARDA",
  NOMBRE_ATRIBUTO_DOS: 2,
  NOMBRE_ATRIBUTO_TRES: [2,3,4,5],
  NOMBRE_METODO: function(PARAMETROS_UNO, PARAMETROS_DOS){
    // OPERACIONES LOGICA PROGRAMACIONAL SUMAR Y ASIGNAR
    let aux = PARAMETROS_UNO + PARAMETROS_DOS;
    return `la suma de los 2 parametros es ${aux}`
  }
}
```

### 3.2 EJEMPLOS
```javascript
var mi_auto = {
  marca: "Chevrolet",
  modelo: "Onix",
  annio: 2021, 
  nombre_completo: function(){
    return `Auto ${this.marca} ${this.modelo} ${this.annio}`;
  },
  kilometraje: function(maximo){
    return `${Math.floor(Math.random()*maximo)} Kilometros`;
  }
}

let pokemon = {
  nombre: "Pikachu",
  elemento: "Electrico",
  hp: 1350,
  tirar_pokeball: function(){
    let acciones_posibles = [
      "Tu pokemon no quiere salir de la pokeball",
      "Tu pokemon esta debilitado",
      "Tu pokemon salio y esta listo para pelear"
    ]
    let numero_ramdom_de_0_a_2 = Math.floor(Math.random()*acciones_posibles.length);
    return acciones_posibles[numero_ramdom_de_0_a_2];
  }
}
```

## 4. LLAMADO DE FUNCIONES O METODOS EN UN OBJECTO
### 4.1 ESTRUCTURA
```javascript
NOMBRE_OBJECTO.NOMBRE_FUNCION();
NOMBRE_OBJECTO.NOMBRE_FUNCION(PARAMETRO_UNO, PARAMETRO_DOS);
```
### 4.2 EJEMPLOS
```javascript
mi_auto.nombre_completo();
pokemon.tirar_pokeball();
mi_auto.kilometraje(34);
```

## 5. FUNCIONES CONSTRUCTORAS DE OBJECTOS
### 5.1 ESTRUCTURA CREAR TU MOLDE
```javascript
function NOMBRE_FUNCION_CONSTRUCTORA(PARAMETRO_UNO, PARAMETRO_DOS){
  this.NOMBRE_ATRIBUTO = PARAMETRO_UNO;
  this.NOMBRE_ATRIBUTO_DOS = PARAMETRO_DOS;
}

function NOMBRE_FUNCION_CONSTRUCTORA(PARAMETRO_UNO, PARAMETRO_DOS){
  this.NOMBRE_ATRIBUTO = PARAMETRO_UNO;
  this.NOMBRE_ATRIBUTO_DOS = PARAMETRO_DOS;
  this.NOMBRE_METODO(){
    return "mensaje";  
  }
}
```

### 5.2 EJEMPLOS CREAR MOLDE
```javascript
function molde_galleta(nombre_ingresado, sabor_ingresado, ingrediente_secreto_ingresado){
  this.nombre = nombre_ingresado;
  this.sabor = sabor_ingresado;
  this.ingrediente_secreto = ingrediente_secreto_ingresado;
}

function molde_auto(marca_ingresada, modelo_ingresada, annio_ingresada){
  this.marca = marca_ingresada;
  this.modelo = modelo_ingresada;
  this.annio = annio_ingresada;
}

function molde_pokemon(nombre_ingresado, elemento_ingresado, hp_ingresado){
  this.nombre = nombre_ingresado;
  this.elemento = elemento_ingresado;
  this.hp = hp_ingresado;
  this.tirar_pokeball = function(){
    let acciones_posibles = [
      `${this.nombre} no quiere salir de la pokeball`,
      `${this.nombre} esta debilitado`,
      `${this.nombre} salio y esta listo para pelear`
    ]
    let numero_ramdom_de_0_a_2 = Math.floor(Math.random()*acciones_posibles.length);
    return acciones_posibles[numero_ramdom_de_0_a_2];
  }
}
```

### 5.3 ESTRUCTURA USAR UN MOLDE Y CREA UN NUEVO OBJECTO :D
```javascript
let NOMBRE_OBJECTO_UNO = new NOMBRE_FUNCION_CONSTRUCTORA(PARAMETRO_UNO, PARAMETRO_DOS);
var NOMBRE_OBJECTO_DOS = new NOMBRE_MODEL_CONSTRUCTOR(PARAMETRO_UNO, PARAMETRO_DOS);
var NOMBRE_OBJECTO_TRES = new NOMBRE_MODEL_CONSTRUCTOR();
```

### 5.4 