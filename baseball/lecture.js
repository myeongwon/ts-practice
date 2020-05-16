"use strict";
var num;
num = 3;
var str = num.toString();
var arr1 = [true, 2, '3'];
var arr2 = [true, 2, '3']; // Tuple
arr2[1] = 3;
// arr2[3] = 5;  // error
// 상수, 타입고정
var arr = [true, 2, '3']; // read only
var str2 = 'hello';
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
Color[0] == 'Red';
Color['Red'] === 0;
Color[1] === 'Green';
var obj = { a: 'b' };
var a = true ? 'b' : 'c';
// void
// 매개변수, 리턴값의 타입을 지정
// 리턴이 없는 경우? type이 void가 된다.
function add(a, b) {
    return a + b;
}
// 복잡한 함수의 경우 읽기 불편해짐.
function add2(a, b) {
    return function (c) {
        return function (d) {
            return false;
        };
    };
}
// 객체
var obj2 = {
    a: function (b, c) {
        return 'hello';
    }
};
obj2.a();
obj2.a(3);
obj2.a(3, 'type');
// never
var arr3 = [];
arr3.push(3); // Argument of type '3' is not assignable to parameter of type 'never'.
// 배열에 어떤 요소도 들어가지 못한다.
// 배열을 잘 못만들면 never라는 에러가 발생한다.
// any
// 웬만하면 any는 사용하지 않는다. 타입 정의할때 너무 복잡해서 못 만들겠을 경우만 any를 쓴다.
var hi = [];
// d.ts
var hello2;
// 강제로 type 변환
hello2.substr(1, 2);
hello2.substr(1, 2);
