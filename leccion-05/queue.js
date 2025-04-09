class Queue{
    constructor(){
        this.items = []
    }


    enqueue(elemento){
        this.items.push(elemento)
    }

    dequeue(){
        if(this.isEmpty()){
            return "La lista esta vacia"
        }
        return this.items.shift();
    }
    isEmpty(){
        return this.items.length === 0;
    }
    front(){
        return this.items[0]
    }
    print(){
        return this.items.join(" -> ");
    }
}


const breakfast = new Queue();

breakfast.enqueue("Huevos con machaca")
breakfast.enqueue("Huevos con tortilla")
breakfast.enqueue("Protein pancakes")
breakfast.enqueue("Chilaquiles con pollo")

console.log("Desayunos pendientes:", breakfast.print());

console.log("Entregado: ", breakfast.dequeue());

console.log("Desayunos pendientes:", breakfast.print());
