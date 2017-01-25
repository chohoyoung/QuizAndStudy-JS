function Animal() {
    this.cry = "Animal!!";
    this.name = "animal";
    this.sayHello = function() {
        console.log("Hello this is my name " + this.name);
    }
}

function Monkey() {
    this.name = "Chimp";
    this.chop = "Doom of Chop Chop!!";
}

Monkey.prototype = new Animal();


var chimp = new Monkey();
console.log(chimp.cry);
console.log(chimp.chop);
chimp.sayHello();

console.log(chimp)

console.log(chimp instanceof Monkey);   // true
console.log(chimp instanceof Animal);   // true

