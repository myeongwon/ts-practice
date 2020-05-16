let num: number;
num = 3;
let str: string = num.toString();

let arr1: (string | number | boolean)[] = [true, 2, '3'];
let arr2 : [boolean, number, string] = [true, 2, '3']; // Tuple
arr2[1] = 3;
// arr2[3] = 5;  // error



// 상수, 타입고정
let arr = [true, 2, '3'] as const; // read only
let str2 = 'hello' as const;


// enum
enum Color { Red, Green, Blue };
let c: Color = Color.Green;

Color[0] == 'Red';
Color['Red'] === 0;
Color[1] === 'Green';


const obj: {a: string, b?: number } = {a: 'b'};

const a = true ? 'b' : 'c';



// void
// 매개변수, 리턴값의 타입을 지정
// 리턴이 없는 경우? type이 void가 된다.
function add (a: number, b: number): number {
  return a + b;
}

// 복잡한 함수의 경우 읽기 불편해짐.
function add2 (a: number, b: number): (c: string) => (d: string) => boolean {
  return (c: string) => {
    return (d: string) => {
      return false;
    };
  }
}



// 객체
const obj2: { a: (b?: number, c?: string) => string } = {
  a(b?: number, c?: string) {
    return 'hello';
  }
}

obj2.a();
obj2.a(3);
obj2.a(3, 'type');



// never
const arr3:[] = [];
arr3.push(3); // Argument of type '3' is not assignable to parameter of type 'never'.
// 배열에 어떤 요소도 들어가지 못한다.
// 배열을 잘 못만들면 never라는 에러가 발생한다.



// any
// 웬만하면 any는 사용하지 않는다. 타입 정의할때 너무 복잡해서 못 만들겠을 경우만 any를 쓴다.
const hi: any = [];


// d.ts
const hello2: number;
// 강제로 type 변환
(hello2 as unknown as string).substr(1,2);
(<string><unknown>hello2).substr(1,2);

