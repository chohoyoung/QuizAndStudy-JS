# 1.0.3 고전적상속과 prototype상속의 차이점

[참고](http://unikys.tistory.com/320)

## 소스
* main1.js : 초창기 고전적 상속.
* main2.js : 특정 객체에 prototype만을 추가.
* 

## Javascript에서 상속?

예전 2000년도의 Javascript는 마우스를 따라다니는 별, 버튼 클릭 했을때 alert창 보여주기 같은 간단한 수준의 이벤트를 처리하기 위해 사용했습니다.

웹의 개발 방법론에 따라 Javascript로만 웹페이지 동작 방식을 구현하기 시작하면서 점점 객체지향의 개념과 함께 상속이 활용되는것에 집중이 되면서 몇몇의 방법이 나오게 되었습니다.
 
초창기 상속 방식 및 prototype상속 방식에 관해서 정리를 하겠습니다.

## 고전적 상속
초창기에는 2개의 객체가 있으며 1개의 객체에서 다른 객체를 생성하고 관련된 속성을 주입하고 그것을 리턴하는 형태로 상속을 사용 해왔습니다.

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
    console.log(chimp.cry);
    console.log(chimp.chop);
    chimp.sayHello(); // Hello this is my name Chimp
    
## 초창기 상속 문제점
초창기 상속의 문제점은 Animal 인스턴스로 인식은 하지만 Monkey 인스턴스로 인식을 하지 못한다는 문제점이 있습니다.

    console.log(chimp instanceof Monkey);   // false
    console.log(chimp instanceof Animal);   // true
    
"무엇이 문제인거지? 사용성엔 문제 없는거 같은데?"라고 생각을 할 수 있습니다.
 
하지만 예를 들어 Monkey 인스턴스에게만 동작해야 하는 기능이 있을 경우에 위와 같은 chimp는 Monkey지만 Monkey인지 알수 없으니 Monkey만을 위한 기능을 사용할 수 없게 됩니다.
    
## prototype을 사용한 상속
그래서 Monkey자체의 prototype에 Animal의 속성들을 Monkey의 prototype로 설정해서 하는 방식으로도 상속이 가능한데 이것에도 문제점이 있습니다.
    
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
    
    var chimp = new Monkey();
    console.log(chimp.cry);
    console.log(chimp.chop);
    chimp.sayHello();
    
    console.log(chimp instanceof Monkey);   // true
    //console.log(chimp instanceof Animal);   // Error

prototype으로 지정한 Animal은 함수가 아니라서 instanceof로 비교가 안된다. instanceof는 객체의 프로토타입 체인을 대상 객체의 프로토타입과 비교하는것인데 Animal은 함수형 생성자가 아니다 보니 프로토타입이 없어서 오류가 발생하게 됩니다.

## prototype에 new operation을 통한 상속
위 문제를 해결하고자 prototype에 new operation을 통한 객체를 주입해서 사용하는 방식이 나왔습니다.
 
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
    
    Monkey.prototype = new Animal(); // (1)
    
    var chimp = new Monkey();
    console.log(chimp.cry);
    console.log(chimp.chop);
    chimp.sayHello();
    
    console.log(chimp instanceof Monkey);   // true
    console.log(chimp instanceof Animal);   // true
    
코드 (1)처럼 new operation을 사용해서 생성하고 그것을 prototype에 주입하므로써 Monkey나 Animal을 instanceof로 비교해도 이제 이상없이 true로 표시됩니다. 그리고 원하는 기능이 모두 동작도 하고 있습니다.

하지만 이코드도 문제가 존재는 합니다. 우선 chimp의 prototype의 constructor는 존재하지 않게 됩니다. 

하지만 constructor가 깨져도 instanceof를 통한 비교시 true가 나오는 이유는 instanceof는 좌측변과 우측변과의 prototype을 비교해서 true, false체크를 하기 때문에 chimp의 prototype은 Animal이고 Monkey의 프로토타입은 Animal이기 때문에 true로 표시가 되는 것일 뿐입니다.
 
## Object.create()와 new와의 조합

Constructor가 깨지는 것을 방지하기 위해서 Object.Create()를 표준으로 만들게 됩니다. 또한 new를 사용한 객체의 생성이 Javascript하지 않다(?)라는 건의도 포함되서요.

Object.create와 new의 조합을 통해서 기존에 발생했던 문제를 해결했고자 했었습니다. 그 방식은 아래와 같습니다.

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
        this.name = "Chimp";
        this.chop = "Doom of Chop Chop!!";
    }
    
    Monkey.prototype = Object.create(Animal.prototype);
    Monkey.prototype.constructor = Monkey;
    
    var chimp = new Monkey();
    
    chimp.shout(); // undefined
    chimp.sayHello();
    
    console.log(chimp instanceof Monkey);   // true
    console.log(chimp instanceof Animal);   // true
        
Construtor는 이상이 없지만 이 코드는 실제 부모의 값을 가져올 수 가 없게 되어 있습니다. shout는 부모의 prototype이고 자식의 cry가 없을경우 부모의 cry를 참조할 것이라 생각하지만 전혀 그렇지 않게 됩니다.

chimp의 shout는 this.cry를 가르키고 있습니다. 저 shout가 실행되는 순간 this는 chimp를 뜻하므로 chimp가 없을 경우 undefined이 뜨게 됩니다.
 
## Object를 Object.create로 생성

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
    
기존 Constructor를 살리면서 instanceof로 이상없이 비교하는 저 위에 코드는 prototype이 아닌 인자를 사용하지 못합니다.
    
그래서 그것을 포기하고 Constructor를 포기하고 기존 Object.create를 통해서 부모의 객체를 상속받아서 하는 방법으로 현재 상속을 구현을 하고 있는 추세입니다.

아직은 잘모르겟습니다. instanceof로 비교도 하고 싶기도 하고, prototype속성도 유지하고 싶은데.. 먼가 방법이 없을까요?
    

 
     

    
    
    



