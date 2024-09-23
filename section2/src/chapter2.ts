// 배열 타입 정의
let numArr : number[] = [1,2,3];
let strArr : string[] = ["hello", "im", "winterlood"];

// Array<배열요소타입> 형태로도 배열의 타입을 정의할 수 있다.
let boolArr : Array<boolean> = [true, false, true];

// 다양한 타입 요소를 갖는 배열 타입 정의
let multiArr : (number | string)[] = [1, "hello"];

// 다차원 배열 타입 정의
let doubleArr : number[][] = [
    [1,2,3],
    [4,5],
];

// 길이와 타입이 고정된 배열을 의미하는 튜플
let tup1 : [number, number] = [1,2];
let tup2 : [number, string, boolean] = [1, "hello", true];

// 컴파일 하게 되면 튜플도 결국 자바스크립트 배열로 변환되므로 배열 메서드인 push, pop 을 이용해 고정된 길이를 무시하고 요소가 추가되거나 삭제되므로 주의해야 한다.
tup1.push(1);
tup1.push(1);
tup1.push(1);
tup1.push(1);

console.log(tup1);

const users = [
    ["이정환", 1],
    ["이아무개", 2],
    ["김아무개", 3],
    ["박아무개", 4],
    [5, "조아무개"], // 순서를 잘못 배치한 경우 자바스크립트에서는 이러한 문제를 확인할 수 없다.
];

console.log(`users : ${users}`);

const users2 : [string, number][] = [
    ["이정환", 1],
    ["이아무개", 2],
    ["김아무개", 3],
    ["박아무개", 4],
    // [5, "조아무개"], 타입 스크립트에서는 이러한 실수를 컴파일 전에 알 수 있게 된다.
];

console.log(`users2 : ${users2}`);
