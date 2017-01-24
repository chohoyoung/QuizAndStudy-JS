var Animal = {
    cry: "Animal!!",
    name: "animal",
    sayHello: function() {
        console.log("My name is " + this.name);
    },
    shout: function() {
        console.log(this.cry);
    }

}

var chimp = Object.create(Animal);

chimp.name = "Yop"

console.log(chimp)

chimp.shout();
chimp.sayHello();

// console.log(chimp instanceof Animal);   // typeError
console.log(Animal.isPrototypeOf(chimp));   // object리터널로 생성된 Animal은 더이상 Function이 아니므로 prototype가 없어서 instanceof로 비교를 못한다.

