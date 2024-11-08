/* class Nodo {
  constructor(dato){
    this.dato = dato
    this.siguiente = null
  }
}

class ListaEnlazada {
  constructor(){
    this.cabeza = null
    this.longitud = 0
  }
  agregarNodo(dato){
    const nuevoNodo = new Nodo(dato)
    if(this.cabeza === null){
      this.cabeza = nuevoNodo
    }else{
      let nodoActual = this.cabeza
      while(nodoActual.siguiente !== null){
        nodoActual = nodoActual.siguiente
      }
      nodoActual.siguiente = nuevoNodo
    }
    this.longitud ++
  }

  insertarNodo(dato, posicion){
    if(dato<0 || posicion >this.longitud){
      console.log("el dato introducido no es valido")
      return
  }
    const nuevoNodo = new Nodo(dato)
    if(posicion === 0){
      nuevoNodo.siguiente = this.cabeza
      this.cabeza = nuevoNodo
  }else {
    let nodoActual = this.cabeza
    for(let i = 0; i < posicion - 1; i++){
      nodoActual = nodoActual.siguiente
    }
    nuevoNodo.siguiente = nodoActual.siguiente
    nodoActual.siguiente = nuevoNodo
  }
    this.longitud ++
}
}

const lista = new ListaEnlazada()


lista.agregarNodo(1)
lista.agregarNodo(2)

lista.agregarNodo(3)
lista.agregarNodo(4)
lista.agregarNodo(5)
lista.insertarNodo(7,1)
console.log(lista); */

class Node {
  // constructor
  constructor(element) {
      this.element = element;
      this.next = null
  }
}
// linkedlist class
class LinkedList {
  constructor() {
      this.head = null;
      this.size = 0;
  }

  // adds an element at the end
  // of list
  add(element) {
      // creates a new node
      let node = new Node(element);

      // to store current node
      let current;

      // if list is Empty add the
      // element and make it head
      if (this.head == null)
          this.head = node;
      else {
          current = this.head;

          // iterate to the end of the
          // list
          while (current.next) {
              current = current.next;
          }

          // add node
          current.next = node;
      }
      this.size++;
  }

  // insert element at the position index
  // of the list
  insertAt(element, index) {
      if (index < 0 || index > this.size)
          return console.log("Please enter a valid index.");
      else {
          // creates a new node
          let node = new Node(element);
          let curr, prev;

          curr = this.head;

          // add the element to the
          // first index
          if (index == 0) {
              node.next = this.head;
              this.head = node;
          } else {
              curr = this.head;
              let it = 0;

              // iterate over the list to find
              // the position to insert
              while (it < index) {
                  it++;
                  prev = curr;
                  curr = curr.next;
              }

              // adding an element
              node.next = curr;
              prev.next = node;
          }
          this.size++;
      }
  }

  // removes an element from the
  // specified location
  removeFrom(index) {
      if (index < 0 || index >= this.size)
          return console.log("Please Enter a valid index");
      else {
          let curr, prev, it = 0;
          curr = this.head;
          prev = curr;

          // deleting first element
          if (index === 0) {
              this.head = curr.next;
          } else {
              // iterate over the list to the
              // position to remove an element
              while (it < index) {
                  it++;
                  prev = curr;
                  curr = curr.next;
              }

              // remove the element
              prev.next = curr.next;
          }
          this.size--;

          // return the remove element
          return curr.element;
      }
  }

  // removes a given element from the
  // list
  removeElement(element) {
      let current = this.head;
      let prev = null;

      // iterate over the list
      while (current != null) {
          // comparing element with current
          // element if found then remove the
          // and return true
          if (current.element === element) {
              if (prev == null) {
                  this.head = current.next;
              } else {
                  prev.next = current.next;
              }
              this.size--;
              return current.element;
          }
          prev = current;
          current = current.next;
      }
      return -1;
  }


  // finds the index of element
  indexOf(element) {
      let count = 0;
      let current = this.head;

      // iterate over the list
      while (current != null) {
          // compare each element of the list
          // with given element
          if (current.element === element)
              return count;
          count++;
          current = current.next;
      }

      // not found
      return -1;
  }

  // checks the list for empty
  isEmpty() {
      return this.size == 0;
  }

  // gives the size of the list
  size_of_list() {
      console.log(this.size);
  }


  // prints the list items
  printList() {
      let curr = this.head;
      let str = "";
      while (curr) {
          str += curr.element + " ";
          curr = curr.next;
      }
      console.log(str);
  }

}

// creating an object for the
// Linkedlist class
let ll = new LinkedList();

// testing isEmpty on an empty list
// returns true
console.log(ll.isEmpty());

// adding element to the list
ll.add(10);

// prints 10
ll.printList();

// returns 1
console.log(ll.size_of_list());

// adding more elements to the list
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);

// returns 10 20 30 40 50
ll.printList();

// prints 50 from the list
console.log("is element removed ?" + ll.removeElement(50));

// prints 10 20 30 40
ll.printList();

// returns 3
console.log("Index of 40 " + ll.indexOf(40));

// insert 60 at second position
// ll contains 10 20 60 30 40
ll.insertAt(60, 2);

ll.printList();

// returns false
console.log("is List Empty ? " + ll.isEmpty());

// remove 3rd element from the list
console.log(ll.removeFrom(3));

// prints 10 20 60 40
ll.printList();

