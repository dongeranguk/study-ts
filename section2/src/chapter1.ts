/**
 * number 타입에는 단순한 정수뿐만 아니라 소수, 음수, Infinity, NaN 등의 특수한 숫자들도 포함한다.
 */
let num1 : number = 123;
let num2 : number = -123;
let num3 : number = 0.123;
let num4 : number = -0.123;
let num5 : number = Infinity;
let num6 : number = -Infinity;
let num7 : number = NaN;

// 정적으로 타입을 선언해주었기 때문에, 다른 타입의 변수는 할당 불가하며, 다른 타입의 메소드 또한 사용할 수 없다.
// num1 = 'hello';
// num1.toUpperCase();

// 문자열 타입인 `string` 에 변수를 할당할 때에는 쌍따옴표 뿐만 아니라, 따옴표, 백틱(`) 도 가능하며, 백틱을 사용하면 템플릿 리터럴도 사용 가능하다.
let str1 : string = "hello";
let str2 : string = 'hello';
let str3 : string = `hello`;
let str4 : string = `hello ${str1}`;

console.log(`hello ${str4}`);

// boolean 타입은 true, false 값을 할당 가능
let bool1 : boolean = true;
let bool2 : boolean = false;

// null 타입은 오직 null 값만 할당 가능
let null1 : null = null;

// undefined 타입 또한 undefined 값만 할당 가능
let unde1 : undefined = undefined;

let numA = null;
numA = 1;
// 타입을 명시하지 않고 null 을 할당했을 때 해당 변수를 null 타입으로 추론할 줄 알았으나, any 타입으로 추론하여 해당 변수에 null 값이 아닌 1 을 대입할 수 있다.
console.log(`numA : ${numA}`);

// let numB : number = null;
// 타입을 명시한 경우에는 해당 타입이 아닌 값을 대입할 수 없게 된다.

// 리터럴 타입으로 타입으로 지정한 값 이외의 값을 할당할 수 없다.
let numC : 10 = 10;
// numC = 20;
numC = 10;

let strX : 'hello' = 'hello';
// let strY : 'hi' = 'hello'; 초기화할 때에도 이외의 값을 할당할 수 없다.

let boolA : true = true;
let boolB : false = false;
