# 1. QuizAndStudy-JS
Javascript에 관한 퀴즈 및 그에 대한 세부 정리하는 Repository입니다.

## 1.1 참고 자료
이 Repository를 만든 것은 우연찮게 알게된 한 [사이트](https://github.com/ggomaeng/awesome-js#a1.0.3)에 올라온 글이였으며, 실제 질문에 대한 정답도 정답이지만 정답에 따른 세부적인 사항을 알고 싶고 정리할려고 만들었습니다. ggomaeng님에게 감사합니다.

## 1.2 목차

### 1.2.1 기본
* 1.0 - Javascript Principles
  * 1.0.1 javascript 어플리케이션을 위한 2개의 개발 패러다임은 무엇이라고 생각하시나요?
  * 1.0.2 함수형 프로그래밍이란 무엇일까요?
  * 1.0.3 고전적 상속과 prototype상속에 대한 차이점이 무엇일까요?
  * 1.0.4 함수형 프로그래밍과 객체지향적 프로그래밍의 대한 장단점은 무엇일까요? 
  * 1.0.5 고전적 상속은 어떨때 적절한 선택이죠?
  * 1.0.6 클래스 상속보다 Object 구성을 선호하는 이유는 무엇이나요?
  * 1.0.7 양방향 데이터 바인딩이랑 단방향 데이터 바인딩 흐름이 무엇이 다른것이며 어떻게 다른 것이죠?
  * 1.0.8 monolithic와 microservice 아키택쳐의 장단점은 무엇이나요?
  * 1.0.9 비동기 프로그래밍이란 무엇이며 왜 Javascript에서 중요할까요?
  * 1.0.10 Javascript 호이스팅이란 무엇이나요?
  * 1.0.11 AMD, CommonJs, UMD가 무엇이나요?
  * 1.0.12 IIFE란 무엇이며 Immediately-Invoked Function Expression은 무엇이나요?
  * 1.0.13 아래 코드가 IIFE로 작동하지 않는 이유를 설명해주시고   
    
    code
    
        function foo(){ }();
         
    제데로 IIFE로 동작하려면 무엇을 해주어야 하나요?
        
  * 1.0.14 feature detection, feature inference, using UA string의 차이점이 무엇입니까?
  * 1.0.15 Ajax를 설명해주시고 Ajax의 장단점이 무엇입니까?
  * 1.0.16 attribute와 property의 차이점은 무엇입니까?
  * 1.0.17 내장 javascript 객체를 확장하는것이 좋은 생각이 아닌 이유는 무엇입니까?
* 1.1 - Typeof
  * 1.1.1 이코드는 잠재적인 문제가 있습니다 무엇일까요?
  
  code
  
        typeof bar === "object" 
  
  bar가 객체인지 확인하려면? 이 함정을 어떻게 해결할 수 있을까요?
  * 1.1.2 NaN란 무엇인가요? 그 유형은 무엇인가요? 값이 NaN과 동등한지 안정적으로 테스트가 가능하나요?
  * 1.1.3 아래의 코드가 콘솔에 어떻게 출력이 될꺼 같나요? 그리고 그렇게 출력되는 이유는 무엇일까요?
  
    code
        
        console.log(1 +  "2" + "2");
        console.log(1 +  +"2" + "2");
        console.log(1 +  -"1" + "2");
        console.log(+"1" +  "1" + "2");
        console.log( "A" - "B" + "2");
        console.log( "A" - "B" + 2);
        
  * 1.1.4 변수 선언시 let과 var의 차이점을 무엇인가요?
  * 1.1.5 null과 undefined의 차이점은 무엇인가요?
* 1.2 - Scope
  * 1.2.1 아래코드의 결과가 왜 그렇게 나오는지 설명을 해주세요.
  
    code
    
        var myObject = {
        foo: "bar",
            func: function() {
                var self = this;
                console.log("outer func:  this.foo = " + this.foo);
                console.log("outer func:  self.foo = " + self.foo);
                (function() {
                    console.log("inner func:  this.foo = " + this.foo);
                    console.log("inner func:  self.foo = " + self.foo);
                }());
            }
        };
        myObject.func();
    
  * 1.2.2 What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?
  * 1.2.3 다음 코드를 보고 질문에 답해주세요.
  
    code
    
        for (var i = 0; i < 5; i++) {
          var btn = document.createElement('button');
          btn.appendChild(document.createTextNode('Button ' + i));
          btn.addEventListener('click', function(){ console.log(i); });
          document.body.appendChild(btn);
        }
    
    (a) Button 4를 클릭시 호출되는 로직에 관해서 설명해주세요?
    (b) 원하는 기능을 구현하기 위해선 어떻게 해야할지 만들어보세요.
  * 1.2.4 클로저란 무엇인가요?
  * 1.2.5 다음 코드의 결과는 무엇인가요?:
    
    code
    
        for (var i = 0; i < 5; i++) {
            setTimeout(function() { console.log(i); }, i * 1000 );
        }
    
    원하는 결과를 만들기 위해서 클로저를 어떻게 쓸 수 있을까요?
  * 1.2.6 (1),(2)를 살펴보고 왜 이런 출력이 나오는지 설명해주세요 
  
    code
    
        (function(x) {
            return (function(y) {
                console.log(x);
            })(2)
        })(1);
        
  * 1.2.7 아래로직을 실행하면 출력되는 항목에 대해서 왜 그렇게 출력되는지 설명해주세요. :
  
    code
    
        var hero = {
            _name: 'John Doe',
            getSecretIdentity: function (){
                return this._name;
            }
        };
        
        var stoleSecretIdentity = hero.getSecretIdentity;
        
        console.log(stoleSecretIdentity());
        console.log(hero.getSecretIdentity());
    
    이코드의 문제점은 무엇이며 어떻게 고칠 수 있을까요?
  * 1.2.8 클로저를 왜 사용하나요?
* 1.3 - Error Handling
  * 1.3.1 Javascript에서 소스 시작시점에 'use strict'를 사용하는 이유는 무엇인가요?
  * 1.3.2 아래 코드는 동일한 것을 반환하는데 왜그런지 설명해주세요.
    
    code
    
        function foo1()
        {
          return {
              bar: "hello"
          };
        }
        
        function foo2()
        {
          return
          {
              bar: "hello"
          };
        }
        
  * 1.3.3 아래 재귀호출 코드는 배열목록이 너무크면 stack overflow를 발생시킵니다. 이문제를 어떻게 해결하고 재귀패턴을 유지 할 수 있을까요?
    
    code
    
        var list = readHugeList();
        
        var nextListItem = function() {
            var item = list.pop();
        
            if (item) {
                // process the list item...
                nextListItem();
            }
        };
        
* 1.4 - Numbers
  * 1.4.1 아래코드는 무엇을 출력할까요? 왜 그렇게 출력되는지 설명해주세요.
    
    code
    
        console.log(0.1 + 0.2);
        console.log(0.1 + 0.2 == 0.3);
        
  * 1.4.2 x가 정수인지 판단하는 isInteger(x) 함수를 만들어주세요.
* 1.5 - Events and Timing
  * 1.5.1 아래코드에서 console.log(4)가 콘솔에 찍히는 순서를 알려주시고 왜 그런지 설명해주세요?
    
    code
    
        (function() {
            console.log(1); 
            setTimeout(function(){console.log(2)}, 1000); 
            setTimeout(function(){console.log(3)}, 0); 
            console.log(4);
        })();
        
  * 1.5.2 javascript의 버블링 캡쳐링이란 무엇인가요?
* 1.6 - Functions
  * 1.6.1 아래 로직을 제데로 동작시킬수 있는 sum을 구현해 주세요.
    
    code
    
        console.log(sum(2,3));   // Outputs 5
        console.log(sum(2)(3));  // Outputs 5
        
  * 1.6.2 다음코드는 콘솔에 어떤 것을 출력 시켜주나요?:
    
    code
    
        console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
    
    왜 그렇게 출력되는지 설명해주세요.
  * 1.6.3 다른점이 뭐죠? : function Person(){}, var person = Person(), and var person = new Person()?
  * 1.6.4 .call()과 .apply()의 차이점을 설명해주세요. 
  * 1.6.5 document.write()를 언제 사용 하시겠습니까?
* 1.7 - Reference
  * 1.7.1 아래 코드가 출력되는 결과물이 왜 그렇게 출력되는지 설명해주세요.
    
    code
    
        var arr1 = "john".split('');
        var arr2 = arr1.reverse();
        var arr3 = "jones".split('');
        arr2.push(arr3);
        console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
        console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
        
* 1.8 - Comparison and Logical Operators
  * 1.8.1 아래 코드들이 뭐가 출력될까요? 그리고 그렇게 출력되는 이유를 설명해주세요.
    
    code
    
        console.log("0 || 1 = "+(0 || 1));
        console.log("1 || 2 = "+(1 || 2));
        console.log("0 && 1 = "+(0 && 1));
        console.log("1 && 2 = "+(1 && 2));
        
  * 1.8.2 아래코드는 무엇을 출력할까요? 그리고 왜 그런지 설명해주세요.
    
    code
    
        console.log(false == '0')
        console.log(false === '0')
        
* 1.9 - Objects
  * 1.9.1 다음 출력의 결과는 무엇입니까? 그리고 왜 그렇게 되는지 설명해주세요.
    
    code
    
        var a={},
            b={key:'b'},
            c={key:'c'};
        
        a[b]=123;
        a[c]=456;
        
        console.log(a[b]);
        
  * 1.9.2 Compare and contrast objects and hashtables in JavaScript.
  * 1.9.3 host object와 native object의 차이점은 무엇입니까?
* 1.10 - DOM
  * 1.10.1 Create a function that, given a DOM Element on the page, will visit the element itself and all of its descendents (not just its immediate children). For each element visited, the function should pass that element to a provided callback function.
    
    The arguments to the function should be:
    
    a DOM element
    
    a callback function (that takes a DOM element as its argument)
  * 1.10.2 Given a node from a DOM tree find the node in the same position from an identical DOM tree. See diagram below for clarity.
    
    code
    
         A         B
        
         O        O
         |\       |\
         O O      O O
          /|\      /|\
         O O O    O O O
              \        \
               O        O
* 1.11 - Prototype
  * 1.11.1 javascript에서 상속 및 prototype 체인에 관해서 설명해주세요.
  * 1.11.2 prototype상속은 언제 쓰는게 적절한가요??
  * 1.11.3 Function.prototype.bind에 대해서 설명해보세요.

### 1.2.2 알고리즘

* 2.1 - String Palindrome

  문자열이 회문(앞으로/반대로 읽어도 동일한 문자열)인지 알아내는 코드를 만들어주세요 (80자 내외로).

* 2.2 - Square Root

  숫자의 제곱근을 수동(?)으로 계산 합니다.

* 2.3 - Flattening Array

  아래처럼 배열을 한배열로 만들어 주는 함수를 만들어주세요.

      //example
      input = [0, 1, [2, 3], [[4, [5]]]];
      output = [0, 1, 2, 3, 4, 5];

* 2.4 - Reordering Objects in an Array

  A와 B배열이 있습니다 B는 A의 인덱스를 나타내고 있습니다. 인덱스 배열(B)를 통해서 A배열을 정렬해주세요. A배열의 크기는 증가 하면 안됩니다. 
  
      //example
      var A = [C, D, E, F, G];
      var B = [3, 0, 4, 1, 2];
      
      sort(A, B);
      // A is now [D, F, G, C, E];

* 2.5 - Replacing Substring

  ABCSC문자열이 있는데 만약 여기 안에 ABC가 포함되는지 확인하는 함수를 만들어주세요/
  
  1) 없다면 -1을 리턴합니다. 
  
  2) 있다면 ABC를 제거 하고 SC를 리턴합니다. 

* 2.6 - Move Zeroes

  배열 num에서 0이 아닌 모든 수의 순서를 유지하며 0을 가장 뒤로 이동시키는 함수를 만들어주세요.
  
  예를들면, nums = [0, 1, 0, 3, 12], 함수호출후 다음과 같은 결과가 나와야 합니다. [1, 3, 12, 0, 0].
  
  Note:
  
  별도 배열 사본을 만들지 않고 최소한의 코드로 만들어주세요.

기본상속, prototype상속
http://unikys.tistory.com/320