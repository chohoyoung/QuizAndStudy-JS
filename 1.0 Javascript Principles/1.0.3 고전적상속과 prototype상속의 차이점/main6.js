class Animal {
    constructor(pName, nName) {
        this.name = pName;
        this.nName = nName;
    }

    payHello() {
        console.log(this.nName);
    }
}

class Monkey extends Animal {
    constructor(pName) {
        super();
        this.name = pName;
    }

    sayHello() {
        console.log(this.name);
    }
}

var chimp = new Monkey('Global');

console.log(chimp);
chimp.sayHello()
chimp.payHello();

console.log(chimp instanceof Animal);
console.log(chimp instanceof Monkey);