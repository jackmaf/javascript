// Arbol Binario
// Los árboles (trees) son una estructura de datos muy común, 
// que se define de forma recursiva como una colección de nodos,
// empezando por un nodo raíz, donde cada nodo es una estructura de datos 
// que contiene un valor, y opcionalmente una lista de referencias a otros nodos (sus hijos),
// con la limitación de que ninguna referencia esté duplicada,
// y que ninguna apunte al nodo raíz.

//1.[x] Clase Nodo
//2.[x] Clase ArbolBinario
//3.[x] esta_vacio()
//4.[x] agregar()
//5.[x] 
//6.[x] 
//10. ORDENAMIENTOS
//11. Preorder
// Raiz, Izquierda, Derecha
//12. Postorder
// Izquierda, Derecha, Raiz
//13. Inorder
// 
// 1. Clase Nodo
class Nodo {
  constructor(value){
    this.valor = value;
    this.derecha = null;
    this.izquierda = null;
  }
}

//2. Clase ArbolBinario
class ArbolBinario {
  constructor(){
    this.cabeza = null;
  }

  //3. esta_vacio()
  esta_vacio(){
    return this.cabeza === null;
  }

  //4. agregar()
  agregar(value){
    // arbol no tiene elementos
    if(this.esta_vacio()){
      // se le crea la cabeza al arbol
      this.cabeza = new Nodo(value);
      // termina el metodo
      return;
    }

    // asignamos a una variable auxiliar para recorrer
    var aux = this.cabeza;

    while(aux){
      // SI EL VALOR ES MENOR al valor actual del aux
      // vamos hacia la izquierda
      if (value < aux.valor){
        if (aux.izquierda){
          aux = aux.izquierda
        }else{
          aux.izquierda = new Nodo(value);
          // termina el metodo
          return;
        }
        // SI EL VALOR ES MAYOR al valor actual del aux
      } else { // vamos hacia la derecha
        if (aux.derecha){
          aux = aux.derecha
        }else{
          aux.derecha = new Nodo(value);
          // termina el metodo
          return;
        }
      }
    }
  }

  /**
    * Imprime primero la raíz, luego
    * toda la rama izquierda de izquierda al centro.
    * y finalmente recorre la rama derecha,
    * del centro hacia la derecha.
    */
  pre_order(nodo = this.cabeza){
    if (!nodo){
      return;
    }
    console.log(nodo.valor);
    this.pre_order(nodo.izquierda);
    this.pre_order(nodo.derecha);
  }
  /**
    * Recorre el árbol de izquierda hacia el centro.
    * Luego del centro hacia la derecha, y finalmente
    * imprime la raíz.
    */
  post_order(nodo = this.cabeza){
    if (!nodo){
      return;
    }
    this.post_order(nodo.izquierda);
    this.post_order(nodo.derecha);
    console.log(nodo.valor);
  }

  /**
    * recorre primero toda la rama izquierda
    * de izquierda al centro.
    * Luego imprime la raíz, y finalmente
    * recorre la rama derecha, del centro hacia
    * la derecha.
    */
  in_order(nodo = this.cabeza){
    if(!nodo){
      return;
    }
    this.in_order(nodo.izquierda);
    console.log(nodo.valor);
    this.in_order(nodo.derecha);
  }
}

let arbol = new ArbolBinario();
// agregaremos 5,3,2,7,12,11,1,0,13
arbol.agregar(5);
arbol.agregar(3);
arbol.agregar(2);
arbol.agregar(7);
arbol.agregar(12);
arbol.agregar(11);
arbol.agregar(1);
arbol.agregar(0);
arbol.agregar(13);

