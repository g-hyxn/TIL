# 디바운싱 (Debouncing)

## 그게 뭔데?!

디바운싱은 **짧은 시간 안에 여러 번 발생하는 이벤트를 하나로 묶어 처리하는 기법**입니다.  
주로 검색 입력, scroll, resize 같은 이벤트에서 **성능 최적화와 UX 개선**을 위해 사용됩니다.

---

## 왜 쓸까?

사용자가 검색창에 `안녕하세요`를 입력한다고 가정하면,  
글자 하나하나 입력할 때마다 이벤트가 발생하면서 **불필요한 렌더링이나 API 호출**이 생길 수 있습니다.

이때 디바운싱을 적용하면:

> **마지막 입력 이후 일정 시간 동안 추가 입력이 없을 때만 실행**되므로  
> 불필요한 연산을 줄이고 성능을 개선할 수 있습니다.

---

## 동작 원리

1. 이벤트 발생 → 타이머 시작
2. 일정 시간 안에 다시 이벤트 발생 → 기존 타이머 취소
3. 마지막 이벤트 이후 설정한 시간이 지나면 함수 실행

---

## 예제 코드

```js
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const input = document.getElementById("search");

const handleSearch = debounce((e) => {
  console.log(e.target.value);
}, 300);

input.addEventListener("input", handleSearch);
```

<video controls src="코드 실행.mp4" title="debounce-demo"></video>

setTimeout의 시간 값을 변경하면 디바운싱이 적용되는 실행 시점을 늦추거나 앞당길 수 있습니다.
이처럼 디바운싱을 적용하면 연속된 이벤트를 한 번의 실행으로 묶을 수 있어,
성능과 사용자 경험을 모두 개선할 수 있습니다.
