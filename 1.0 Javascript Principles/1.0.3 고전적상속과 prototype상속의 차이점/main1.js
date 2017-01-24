function Animal() {
    this.cry = "Animal!!";
    this.name = "animal";
    this.sayHello = function() {
        console.log("Hello this is my name " + this.name);
    };
}

function Monkey() {
    var obj = new Animal();
    obj.name = "Chimp";
    obj.chop = "Doom of Chop Chop!!";
    return obj;
}

var chimp = new Monkey();
console.log(chimp)
console.log(chimp.cry);
console.log(chimp.chop);
chimp.sayHello();


console.log(chimp instanceof Monkey);   // false
console.log(chimp instanceof Animal);   // true

