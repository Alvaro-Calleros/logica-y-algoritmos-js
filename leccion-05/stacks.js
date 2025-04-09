let stack = [];
stack.push("Abeja");
stack.push("Bisonte");
stack.push("Cabra");
stack.push("Delfin");
stack.push("Elefante");
stack.push("Leon");

console.log(stack);

let ultimo = stack.pop();

console.log(ultimo);
console.log(stack);

class Pila{
    constructor(){
        this.items =[];
    }

    push(eleento){
        this.items.push(eleento);
    }

    pop(){
        if (this.isEmpty()){
            return "El stack esta vacio";
        }
        return this.items.pop();
    }
    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }

    print(){
        return this.items.join(" <- ")
    }
}

const breakfast = new Pila()
breakfast.push("Huevos con machaca")
breakfast.push("Huevos con tortilla")
breakfast.push("Protein pancakes")
breakfast.push("Chilaquiles con pollo")

console.log("Desayunos pendientes:", breakfast.print());

console.log("Entregado: ", breakfast.pop());

console.log("Desayunos pendientes:", breakfast.print());
