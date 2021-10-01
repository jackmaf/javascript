// Pila-Stack
// Lista ordenada o estructura de datos que permite almacenar y recuperar datos

//1.[] Constructor
//2.[] Insertar
//3.[] Extraer
//4.[] Longitud
//5.[] Ver proximo
//6.[] Ver Elementos o toda la pila

class PilaStack {
  // 1. Constructor
  // se crea el constructor con los atributos basicos que necesita la clase
  constructor(){
    this.elementos = [];
  }
  // 2. Insertar
  insertar(elemento){
    // se agrega el elemento al arreglo
    this.elementos.push(elemento);
  }
  // 3. Extraer
  extraer(){
    // se toma el ultimo elemento con el tamaño - 1 recordar que los arreglos empiezan en 0 no en 1
    const ultimo = this.elementos[this.elementos.length - 1];
    // se elimina del arreglo el ultimo elemento ingresado
    this.elementos.pop();
    // devuelve el ultimo elemento
    return ultimo;
  };
  // 4. Longitud
  longitud(){
    // tamaño de la pila
    return this.elementos.length;
  }
  // 5. Ver proximo
  ver_proximo(){
    // se mira el siguiente elemento a salir de la pila pero sin eliminarlo del arreglo
    return this.elementos[this.elementos.length - 1];
  }
  // 6. Ver Elementos o toda la pila
  ver_elementos(){
    // se mira toda la pila como esta
    return this.elementos;
  }
}

const pila = new PilaStack();

pila.insertar({url:'Lila'});
pila.insertar({url:'Milo'});
pila.insertar({url:'Goku'});
console.log(pila.ver_elementos())

pila.extraer();

const longitud = pila.longitud();
console.log(longitud)

const proximo = pila.ver_proximo()
console.log(proximo)

console.log(pila.ver_elementos())

console.log(pila);