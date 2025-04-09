class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.next = null;
    }
}

class ListaEnlazada {
    constructor() {
        this.head = null;
    }

    add(valor) {
        const newNodo = new Nodo(valor);

        if (!this.head) {
            this.head = newNodo;
        } else {
            let actual = this.head;
            while (actual.next) {
                actual = actual.next;
            }
            actual.next = newNodo;
        }
    }

    print() {
        let actual = this.head;
        let resultado = "";

        while (actual) {
            resultado += actual.valor + " -> ";
            actual = actual.next;
        }
        console.log(resultado + "null");
    }
}

const fruits = new ListaEnlazada();
fruits.add("Apple");
fruits.add("Mango");
fruits.add("Orange");
fruits.add("Papaya");
fruits.add("Banana");

fruits.print();
