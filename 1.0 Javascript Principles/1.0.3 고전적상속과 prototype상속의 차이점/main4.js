function Animal() {
    this.cry = "Animal!!";
    this.name = "animal";
}

Animal.prototype.sayHello = function() {
    console.log("My name is " + this.name);
}

Animal.prototype.shout = function() {
    console.log(this.cry);
}

function Monkey() {
    // this.name = "Chimp";
}

Monkey.prototype = Object.create(Animal.prototype);
Monkey.prototype.constructor = Monkey;

console.log(Object.getOwnPropertyNames(Animal));

var chimp = new Monkey();

console.log(chimp);

chimp.shout();
chimp.sayHello();

console.log(chimp instanceof Monkey);   // true
console.log(chimp instanceof Animal);   // true

