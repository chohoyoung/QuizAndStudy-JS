var Animal = {
    cry : "Animal!!",
    name : "animal",
    sayHello : function() {
        console.log("Hello this is my name " + name);
    }
}

function Monkey() {
    this.name = "Chimp";
    this.chop = "Doom of Chop Chop!!";
}

Monkey.prototype = Animal;

Animal.cry = "Power";

var chimp = new Monkey();

console.log(chimp);

console.log(chimp.cry);
console.log(chimp.chop);
chimp.sayHello();

console.log(chimp.__proto__);

console.log(chimp instanceof Monkey);   // true
//console.log(chimp instanceof Animal);   // Error

