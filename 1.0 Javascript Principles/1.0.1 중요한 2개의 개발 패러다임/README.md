# 1.0.1 javascript 프로그래밍 패러다임.
Javascript는 함수형프로그래밍과 절차식/객체지향적인 프로그래밍 패러다임을 지원합니다.

Javascript는 java나 c와 다르게 상속의 구조를 prototype을 통해서 지원하고 있습니다.

## 1. 함수형 프로그래밍 패러다임을 지원합니다.
함수형 프로그래밍은 기능적으로 어떠한 상태나 정보들을 변경하지 않습니다. 

    function f_square(arr) {
        return arr.map(x => x * x);
    }
    
    console.log(square([1,2,3,4,5]));
    
## 2. 절차식 프로그래밍 페러다임을 지원합니다.
        
    // 절차식 프로그래밍
    function p_square(arr) {
        var resultArr = [],
            arrLength = arr.length;
    
        for(var i=0; i<= arr.length; i++) {
            resultArr.push(arr[i] * arr[i]);
        }
    
        return resultArr;
    }
    






