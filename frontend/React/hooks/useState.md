# useState

useState란 상태정의 및 상태를 관리 해주는 훅이다.
<br/>
useState는 계속 변경되는 값을 선언할 때 사용 하면 편합니다.

```ts
import { useState } from "react";
const [state, setState] = useState(초기값);
```

위 코드는 기본적인 useState 선언 예시 입니다.

## useState를 사용 하는 예

```ts
import { useState } from "react";

export function CountPage() {
  const [count, setCount] = useState(0);
}
```

이런식으로 useState는 초기 값을 파라미터로 받습니다
이 코드는 수를 증가시키는 코드로 쓸려고 하기 때문에 초기 값은 0으로 했습니다.
<br/>
반환 값은 `count`, `setCount`가 있는 배열 입니다.
<br/>
이때 `count`는 현재 상태 값입니다. 그리고 `setCount`는 상태 값을 업데이트할 수 있는 함수 입니다.

### setCount 사용 하기

```js
import { useState } from "react";

export function CountPage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>현재 값: {count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
      <button onClick={() => setCount(count - 1)}>감소</button>
    </>
  );
}
```

`setCount`가 호출되면 컴포넌트가 CountPage가 리렌더링되며 UI가 자동으로 업데이트됩니다.

이런식으로 useState를 사용하면 매우 간편하게 상태관리를 할 수 있습니다. 따라서 ui가 자주 바뀌는 환경에서 유용하게 사용할 수 있습니다.
