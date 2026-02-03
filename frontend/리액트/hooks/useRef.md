# useRef

## 핵심 개념

**useState vs useRef**

- `useState`: 값 변경 시 컴포넌트 재렌더링
- `useRef`: 렌더링 없이 값 유지, `.current`로 접근

## 기본 사용법

```ts
import { useRef } from "react";

const inputRef = useRef(null);
// JSX: <input ref={inputRef} />
// 사용: inputRef.current.focus();
```

## 주요 사용 사례

### 1. 렌더링 없이 값 저장

```ts
const countRef = useRef<number>(0);

const increase = () => {
  countRef.current += 1; // UI는 안 바뀌지만 값은 증가
  console.log(countRef.current);
};
```

### 2. DOM 직접 접근

```ts
const inputRef = useRef<HTMLInputElement>(null);

const handleFocus = () => {
  inputRef.current?.focus(); // input 요소에 포커스
};

return (
  <>
    <input ref={inputRef} />
    <button onClick={handleFocus}>포커스 이동</button>
  </>
);
```

## 어디에 쓸까?

### 메시지 도착 시 스크롤을 맨 아래로 내려야 할때

채팅 앱을 사용해본 사람이라면 누구나 익숙한 기능이 있습니다.
새로운 메시지가 생기면 자동으로 스크롤이 아래로 내려가는 것
이걸 구현하려면 마지막 메시지 엘리먼트를 직접 선택해서 스크롤을 이동시켜야 합니다.
그래서 이렇게 ref를 만들었습니다.

```js
const messagesEndRef = useRef(null);
```

그리고 메시지가 업데이트될 때 실행해줍니다.

```js
messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
```

- state로 DOM을 직접 선택할 수 없다
- state는 값의 변경 → 렌더링이 목적
- 그러나 스크롤처럼 DOM 조작은 렌더링과 무관한 영역

따라서 이러한 경우에는 useRef를 사용해야합니다.

### 스크롤을 움직임을 감지 할때

채팅에 자동 스크롤이 있다고 해서 항상 스크롤을 내려가면 안 됩니다.
사용자가 과거 메시지를 읽으려고 위로 올렸는데
아래 메시지가 올 때마다 자동으로 내려가 버리면 안됩니다.

그래서 실시간으로 사용자가 스크롤을 올렸는지를 감지해야 했는데,
또 DOM 요소에 직접 이벤트를 달아야 했습니다.

<hr>
먼저 채팅 메시지 전체를 감싸는 DOM 요소를 ref로 가져옵니다.

```js
const messagesContainerRef = useRef(null);
```

이제 이 DOM 요소에 직접 scroll 이벤트를 붙입니다.

```js
useEffect(() => {
  const handleScroll = () => {
    if (!messagesContainerRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } =
      messagesContainerRef.current;

    // 사용자가 맨 아래에 있는지 여부
    const isAtBottom = scrollHeight - scrollTop - clientHeight < 50;

    setIsUserScrolling(!isAtBottom);
  };

  const container = messagesContainerRef.current;
  if (container) {
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }
}, []);
```

| 속성           | 의미                                   |
| -------------- | -------------------------------------- |
| `scrollTop`    | 현재 얼마나 내려왔는지 (위로 갈수록 0) |
| `scrollHeight` | 전체 스크롤 가능한 높이                |
| `clientHeight` | 현재 보이는 영역의 높이                |

#### 사용자가 맨 아래에 있는지 확인하는 공식

```js
scrollHeight - scrollTop - clientHeight < 50;
```

scrollHeight - clientHeight → 스크롤 가능한 가장 아래 위치

거기서 현재 scrollTop을 빼서
얼마나 아래에 가까운지를 측정

50px 정도 여유를 둔 이유는
미세한 스크롤 변화에도 갑자기 자동 스크롤이 꺼지거나 켜지는 걸 방지하기 위함입니다.

#### 최종 결정

```js
useEffect(() => {
  if (messages.length > previousMessagesLengthRef.current && !isUserScrolling) {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  previousMessagesLengthRef.current = messages.length;
}, [messages, isUserScrolling]);
```

#### 새 메시지가 추가됐는지 체크

```js
messages.length > previousMessagesLengthRef.current;
```

- 이전 렌더 때 저장해둔 메시지 개수(previousMessagesLengthRef.current)보다
  지금 메시지 개수가 많으면 → 새 메시지가 도착한 상황이라고 판단.

#### 사용자가 스크롤을 위로 올려서 읽고 있는 중인지 체크

```js
!isUserScrolling;
```

- 사용자가 과거 메시지 읽으려고 스크롤을 위쪽에 두고 있는 중이면 자동 스크롤하면 안 됨.
- 따라서 사용자가 아래쪽(최신 위치)에 있을 때만 자동 스크롤 가능.

#### 조건 충족 시 자동 스크롤 실행

```js
messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
```

- 새 메시지가 추가되었고
  사용자가 현재 스크롤 맨 아래에 있다면
  → 부드럽게(smooth) 맨 아래로 자동 이동.

#### 현재 메시지 개수를 ref에 저장

```js
previousMessagesLengthRef.current = messages.length;
```

- 다음 렌더 때 “이전 메시지 개수”로 사용하기 위해 업데이트해 둠.
- ref는 값이 바뀌어도 리렌더링이 일어나지 않음 → 이 용도에 최적.
