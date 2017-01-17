# 1. QuizAndStudy-JS
Javascript에 관한 퀴즈 및 그에 대한 세부 정리하는 Repository입니다.

## 1.1 참고 자료
이 Repository를 만든 것은 우연찮게 알게된 한 [사이트](https://github.com/ggomaeng/awesome-js#a1.0.3)에 올라온 글이였으며, 실제 질문에 대한 정답도 정답이지만 정답에 따른 세부적인 사항을 알고 싶고 정리할려고 만들었습니다. ggomaeng님에게 감사합니다.

## 1.2 목차

### 1.2.1 기본
* 1.0 - Javascript Principles
  * 1.0.1 Can you name two programming paradigms important for JavaScript app developers?
  * 1.0.2 What is functional programming?
  * 1.0.3 What is the difference between classical inheritance and prototypal inheritance?
  * 1.0.4 What are the pros and cons of functional programming vs object-oriented programming?
  * 1.0.5 When is classical inheritance an appropriate choice?
  * 1.0.6 What does “favor object composition over class inheritance” mean?
  * 1.0.7 What are two-way data binding and one-way data flow, and how are they different?
  * 1.0.8 What are the pros and cons of monolithic vs microservice architectures?
  * 1.0.9 What is asynchronous programming, and why is it important in JavaScript?
  * 1.0.10 What is Javascript's hoisting?
  * 1.0.11 What Is AMD, CommonJS, and UMD?
  * 1.0.12 What is IIFE, or Immediately-Invoked Function Expression?
  * 1.0.13 Explain why the following doesn't work as an IIFE: function foo(){ }();. What needs to be changed to properly make it an IIFE?
  * 1.0.14 What's the difference between feature detection, feature inference, and using the UA string?
  * 1.0.15 Explain AJAX in as much detail as possible-JavaScript. What are some advantages and disadvantages to using AJAX?
  * 1.0.16 What's the difference between an "attribute" and a "property"?
  * 1.0.17 Why is extending built-in JavaScript objects not a good idea?
* 1.1 - Typeof
  * 1.1.1 What is a potential pitfall with using
  
        typeof bar === "object" 
  
  to determine if bar is an object? How can this pitfall be avoided?
  * 1.1.2 What is NaN? What is its type? How can you reliably test if a value is equal to NaN?
  * 1.1.3 What will the code below output to the console and why ?
        
        console.log(1 +  "2" + "2");
        console.log(1 +  +"2" + "2");
        console.log(1 +  -"1" + "2");
        console.log(+"1" +  "1" + "2");
        console.log( "A" - "B" + "2");
        console.log( "A" - "B" + 2);
        
  * 1.1.4 What's the difference between using “let” and “var” to declare a variable?
  * 1.1.5 What's the difference between null and undefined?
* 1.2 - Scope
  * 1.2.1 What will the code below output to the console and why?
    
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
  * 1.2.3 Consider the following code snippet:
    
        for (var i = 0; i < 5; i++) {
          var btn = document.createElement('button');
          btn.appendChild(document.createTextNode('Button ' + i));
          btn.addEventListener('click', function(){ console.log(i); });
          document.body.appendChild(btn);
        }
    
    (a) What gets logged to the console when the user clicks on “Button 4” and why?
    (b) Provide one or more alternate implementations that will work as expected.
  * 1.2.4 What is a “closure” in JavaScript? Provide an example.
  * 1.2.5 What will be the output of the following code:
    
        for (var i = 0; i < 5; i++) {
            setTimeout(function() { console.log(i); }, i * 1000 );
        }
    
    Explain your answer. How could the use of closures help here?
  * 1.2.6 Consider the code snippet below. What will the console output be and why?
    
        (function(x) {
            return (function(y) {
                console.log(x);
            })(2)
        })(1);
  * 1.2.7 What will the following code output to the console and why:
    
        var hero = {
            _name: 'John Doe',
            getSecretIdentity: function (){
                return this._name;
            }
        };
        
        var stoleSecretIdentity = hero.getSecretIdentity;
        
        console.log(stoleSecretIdentity());
        console.log(hero.getSecretIdentity());
    
    What is the issue with this code and how can it be fixed.
  * 1.2.8 How and why would you use closure?
* 1.3 - Error Handling
  * 1.3.1 What is the significance, and what are the benefits, of including 'use strict' at the beginning of a JavaScript source file?
  * 1.3.2 Consider the two functions below. Will they both return the same thing? Why or why not?
    
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
        
  * 1.3.3 The following recursive code will cause a stack overflow if the array list is too large. How can you fix this and still retain the recursive pattern?
    
        var list = readHugeList();
        
        var nextListItem = function() {
            var item = list.pop();
        
            if (item) {
                // process the list item...
                nextListItem();
            }
        };
        
* 1.4 - Numbers
  * 1.4.1 What will the code below output? Explain your answer.
    
        console.log(0.1 + 0.2);
        console.log(0.1 + 0.2 == 0.3);
        
  * 1.4.2 Discuss possible ways to write a function isInteger(x) that determines if x is an integer.
* 1.5 - Events and Timing
  * 1.5.1 In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?
    
        (function() {
            console.log(1); 
            setTimeout(function(){console.log(2)}, 1000); 
            setTimeout(function(){console.log(3)}, 0); 
            console.log(4);
        })();
        
  * 1.5.2 What is Javascript's Event Bubbling and Capturing?
* 1.6 - Functions
  * 1.6.1 Write a sum method which will work properly when invoked using either syntax below.
    
        console.log(sum(2,3));   // Outputs 5
        console.log(sum(2)(3));  // Outputs 5
        
  * 1.6.2 What will the following code output to the console:
    
        console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
    
    Explain your answer.
  * 1.6.3 Difference between: function Person(){}, var person = Person(), and var person = new Person()?
  * 1.6.4 What's the difference between .call and .apply?
  * 1.6.5 When would you use document.write()?
* 1.7 - Reference
  * 1.7.1 What will the code below output to the console and why?
    
        var arr1 = "john".split('');
        var arr2 = arr1.reverse();
        var arr3 = "jones".split('');
        arr2.push(arr3);
        console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
        console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
        
* 1.8 - Comparison and Logical Operators
  * 1.8.1 What would the following lines of code output to the console?
    
        console.log("0 || 1 = "+(0 || 1));
        console.log("1 || 2 = "+(1 || 2));
        console.log("0 && 1 = "+(0 && 1));
        console.log("1 && 2 = "+(1 && 2));
        
    Explain your answer.
  * 1.8.2 What will be the output when the following code is executed? Explain.
    
        console.log(false == '0')
        console.log(false === '0')
        
* 1.9 - Objects
  * 1.9.1 What is the output out of the following code? Explain your answer.
    
        var a={},
            b={key:'b'},
            c={key:'c'};
        
        a[b]=123;
        a[c]=456;
        
        console.log(a[b]);
        
  * 1.9.2 Compare and contrast objects and hashtables in JavaScript.
  * 1.9.3 What's the difference between host objects and native objects?
* 1.10 - DOM
  * 1.10.1 Create a function that, given a DOM Element on the page, will visit the element itself and all of its descendents (not just its immediate children). For each element visited, the function should pass that element to a provided callback function.
    
    The arguments to the function should be:
    
    a DOM element
    
    a callback function (that takes a DOM element as its argument)
  * 1.10.2 Given a node from a DOM tree find the node in the same position from an identical DOM tree. See diagram below for clarity.
    
         A         B
        
         O        O
         |\       |\
         O O      O O
          /|\      /|\
         O O O    O O O
              \        \
               O        O
* 1.11 - Prototype
  * 1.11.1 Describe inheritance and the prototype chain in JavaScript. Give an example.
  * 1.11.2 When is prototypal inheritance an appropriate choice?
  * 1.11.3 Explain Function.prototype.bind

### 1.2.2 알고리즘

* 2.1 - String Palindrome

  Write a simple function (less than 80 characters) that returns a boolean indicating whether or not a string is a palindrome.

* 2.2 - Square Root

  Manually calculate the square root of a number with Javascript.

* 2.3 - Flattening Array

  Can you write a function that deeply flattens an array?

      //example
      input = [0, 1, [2, 3], [[4, [5]]]];
      output = [0, 1, 2, 3, 4, 5];

* 2.4 - Reordering Objects in an Array

  We have an array of objects A and an array of indexes B. Reorder objects in array A with given indexes in array B. Do not change array A's length. 
  
      //example
      var A = [C, D, E, F, G];
      var B = [3, 0, 4, 1, 2];
      
      sort(A, B);
      // A is now [D, F, G, C, E];

* 2.5 - Replacing Substring

  Given a string Sting="ABCSC" Check whether it contains a Substring="ABC"?
  
  1) If no , return "-1". 
  
  2) If yes , remove the substring from string and return "SC". 

* 2.6 - Move Zeroes

  Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
  
  For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].
  
  Note:
  
  You must do this in-place without making a copy of the array.
  Minimize the total number of operations.



 

기본상속, prototype상속
http://unikys.tistory.com/320