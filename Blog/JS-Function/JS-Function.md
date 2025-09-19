## 시작하며

오늘은 React를 배우며 아직 기본기가 제대로 안잡힌거 같은 JS복습 할겸 많이 쓰이는 JS 함수들에 대해서 알아보겠습니다

## 함수란?

함수는 특정 작업을 수행하도록 묶어 놓은 코드 블록입니다.
쉽게 말하면 필요할 때 불러 쓸 수 있는 코드 묶음 이라고 생각 하시면 됩니다.
함수는 코드 재사용, 가독성 향상, 유지보수를 위해 없어서는 안 되는 존재입니다.

다음은 기본적인 함수 예시입니다

```js
// 함수 선언
function sayHello(name) {
  return `hello ${name}`;
}

//함수 호출
console.log(sayHello("function")); //  hello function
```

`function` 함수 선언
`name` 매개변수 -> 호출할때 전달할 값
`return` 함수가 돌려주는 결과값

## 함수 선언 방법

대표적으로 3가지 소개해 보겠습니다

### 1. 선언식 함수

```js
function add(a, b) {
  return a + b;
}
```

- function 키워드로 생성
- hoisting이 적용돼 어디서든 호출 가능
  호이스팅이란 함수, 변수, 클래스 또는 임포트(import)의 선언문을 해당 범위의 맨 위로 끌어올리는 것처럼 보이는 현상입니다

### 2. 표현식 함수

```js
const add = function (a, b) {
  return a + b;
};
```

- 변수에 함수를 담는 방식
- 선언 이후에만 호출 가능

### 3. 화살표 함수

```js
const add = (a, b) => a + b;
```

-> 이런식으로 짧고 간결하게 작성 가능 하다는 장점이 있습니다.

<hr>

## 자주 쓰이는 함수

### 문자열 관련 함수

#### `trim()`

문자열 양쪽끝에 공백을 제거

```js
let str = "   hello world   ";
console.log(str.trim()); // 출력: "hello world"
```

사용 에 : 로그인 입력 창에서 사용자가 실수로 공백을 넣었을때

<br>

#### `toUpperCase()`/`toLowerCase()`

문자열을 모두 대문자/소문자로 변환

```js
let word = "JavaScript";
console.log(word.toUpperCase()); // 출력: "JAVASCRIPT"
console.log(word.toLowerCase()); // 출력: "javascript"
```

사용 예 : 검색 기능에서 대소문자 구분없이 검색할 때

<br>

#### `includes`

문자열에 특정 값이 포함 돼 있는지 확인

```js
let sentence = "I love JavaScript!";
console.log(sentence.includes("love")); // true
console.log(sentence.includes("hate")); // false
```

사용 예 : 키워드 검색, 비밀번호 검증(특정 문자 포함 여부)

<br>

#### `slice(start, end)`

문자열의 일부를 잘라서 반환

```js
let text = "Hello JavaScript";
console.log(text.slice(0, 5)); // 실행: "Hello"
console.log(text.slice(6)); // 실행: "JavaScript"
```

사용 예: 문자열 일부만 보여주고 싶을 때 게시글 미리보기 기능

<hr>

### 배열 관련 함수

#### `forEach()`

배열의 각 요소를 순회 하며 실행

```js
let arr = [1, 2, 3];
arr.forEach((num) => console.log(num));
// 실행
// 1
// 2
// 3
```

사용 예: 단순 반복작업 유용

#### `map()`

배열의 각 요소를 변환하여 새로운 배열을 반환

```js
let nums = [1, 2, 3];
let doubled = nums.map((n) => n * 2);
console.log(doubled); // 실행: [2, 4, 6]
```

사용 예: 데이터를 변환해서 새로운 리스트를 만들 때

#### `filter()`

조건에 맞는 요소만 걸러서 새로운 배열을 반환

```js
let nums = [1, 2, 3, 4, 5];
let even = nums.filter((n) => n % 2 === 0);
console.log(even); // 실행: [2, 4]
```

#### `reduce()`

배열을 순회하며 누적 값을 계산

```js
let nums = [1, 2, 3, 4, 5];
let sum = nums.reduce((acc, cur) => acc + cur, 0);
console.log(sum); //실행: 15
```

사용 예: 합계,평균,누적 계산 할 때

#### `find()`

조건을 만족하는 첫번째 요소 반환

```js
let users = [
  { id: 1, name: "JS" },
  { id: 2, name: "함수" },
];
console.log(users.find((user) => user.id === 2));
// 실행: { id: 2, name: "함수" }
```

사용 예: 특정 아이디, 특정 조건에 맞는 첫 데이터를 가져올 때

<hr>

### 수학 관련 함수

#### `Math.floor(), Math.ceil(), Math.round()`

- floor(): 내림
- ceil(): 올림
- round(): 내림

```js
console.log(Math.floor(4.9)); // 4
console.log(Math.ceil(4.1)); // 5
console.log(Math.round(4.5)); // 5
```

#### `Math.random()`

0 이상 1 미만의 난수를 반환

```js
console.log(Math.random()); // 예: 0.2743...
console.log(Math.floor(Math.random() * 10) + 1); // 1~10 사이 랜덤 숫자
```

사용 예: 랜덤 추첨, 주사위 게임 등에 활용됩니다

#### `Math.max() / Math.min()`

배열이나 여러 숫자 중 최대값/최솟값을 구합니다

```js
console.log(Math.max(3, 10, 7)); // 실행: 10
console.log(Math.min(3, 10, 7)); // 실행: 3
```

<hr>

### 날짜 관련 함수

#### Date()

- `getFullYear()` : 연도 가져옴
- `getMonth()` : 달 가져옴
- `getDate()` : 일 가져옴
- `getDay()` : 요일 가져옴
- `toLocaleDateString()` : 몇년 몇월 며칠 가져옴

```js
let now = new Date();

console.log(now.getFullYear()); // 2025
console.log(now.getMonth() + 1); // 9 (월은 0부터 시작)
console.log(now.getDate()); // 6
console.log(now.getDay()); // 요일 (0=일요일 ~ 6=토요일)
console.log(now.toLocaleDateString()); // "2025. 9. 6."
```

사용 예: 블로그 게시글 날짜, 예약시스템, 채팅 타임스탬프 등 활용

## 마치며

오늘은 함수 선언방법 그리고 어떤 종류가 있는지 간단하게 알아보았습니다.
이렇게 내장함수를 잘 활용하면 복잡한 반복문을 줄이고 코드 가독성을 크게 높일 수 있습니다.
여기에 적지 못한 수많은 함수가 있습니다 그건 제가 또 공부해서 점차 추가해보도록 하겠습니다.
부족한 점 있다면 피드백 많이 해주세요!!
글 읽어주셔서 감사합니다.
