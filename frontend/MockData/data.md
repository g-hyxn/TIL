# Mock Data

## Mock Data란?

mock은 모의, 가짜라는 뜻으로  
**Mock Data**는 실제 API 대신 사용하는 임시 데이터입니다.

즉, 서버에서 데이터를 받기 전  
프론트엔드 개발을 위해 미리 만들어 사용하는 데이터입니다.

## 왜 쓸까?

### 1. API 개발이 안 끝났을 때

백엔드를 기다리지 않고 UI 개발과 테스트를 진행할 수 있습니다.

### 2. 개발 속도 향상

데이터 렌더링, 예외 처리 등을 미리 구현할 수 있어 전체 개발 속도가 빨라집니다.

## 사용 방법

Mock Data는 실제 API 응답 형태와 동일한 **JSON 구조**로 작성합니다.

```json
{
  "id": 1,
  "title": "게시글 제목",
  "likes": 3
}
```

npm run mock으로 별도의 mock 서버를 실행해 실제 API와 통신하는 것처럼 개발할 수 있습니다.

또는

```ts
export const posts = [{ id: 1, title: "게시글", likes: 3 }];
```

```ts
posts.map((post) => <PostItem key={post.id} {...post} />);
```

이런식으로 코드 안에 직접 넣어서 사용할 수도 있습니다.
