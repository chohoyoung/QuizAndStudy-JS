// 함수형 프로그래밍 - 기능적으로 어떠한 상태나 정보를 변경하는것이 없이 데이터를 넣으면 예상하는 데이터가 나온다.
function f_square(arr) {
    return arr.map(x => x * x);
}

console.log(f_square([1,2,3,4,5]));

// 절차식 프로그래밍
function p_square(arr) {
    var resultArr = [],
        arrLength = arr.length;

    for(var i=0; i<= arr.length; i++) {
        resultArr.push(arr[i] * arr[i]);
    }

    return resultArr;
}

// prototype을 통한 상속 - 차후 정리