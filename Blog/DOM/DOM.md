![](https://velog.velcdn.com/images/mgang0_0/post/4ea06bed-db0e-48b3-aa08-d117f260b588/image.png)

## 시작하며

저는 오늘 dom에 대한 개념을 간략하게 소개 해보려고 합니다.
부족한 점이 많을 수도 있지만 그런점 피드백 많이 해주시면 감사하겠습니다.

## DOM 이란?

문서 객체 모델 DOM은 **HTML,XML 문서 구조를 객체로 표현한 것입니다.
** DOM의 풀네임은 Document Object Model 이라고 합니다.

그럼 '문서 구조'는 무엇일까요?
HTML은 head body등 여러 태그가 문서구조를 이루고 있습니다.
HTML 요소의 계층을 반영해서 만든 객체가 DOM입니다.
HTML 문서를 객체로 표현하면 JavaScript와 같은 스크립트 및 프로그래밍 언어가 웹페이지에 접근할 수 있습니다.
즉 DOM은 HTML로 구성된페이지와 스크립트와 같은 프로그래밍 언어를 연결시켜 주는 역할을 합니다.

![](https://velog.velcdn.com/images/mgang0_0/post/a0c7dd2a-7651-4d8b-ba87-9ae98c92a19e/image.png)

## DOM 접근

각 언어마다 DOM에 접근하는 방법은 다 다릅니다.
java script에서는 `document.getElementByld("#id")`매서드가 있습니다.
html 코드에서 id선택자를 사용해 불러오는 것입니다.

#### 예시코드

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <link rel="stylesheet" href="darkMode.css" />
  </head>
  <body>
    <h1>안녕하세요</h1>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ol>
    <h2>자바스크립트 연습중</h2>

    <input type="button" value="다크모드" id="darkModeBtn" />
    <input type="button" value="라이트모드" id="lightModeBtn" />
  </body>
  <script src="darkMode.js"></script>
</html>
```

<br>

```javascript
const darkModeBtn = document.getElementById("darkModeBtn");
const lightModeBtn = document.getElementById("lightModeBtn");
const body = document.querySelector("body");

darkModeBtn.addEventListener("click", function () {
  body.style.backgroundColor = "black";
  body.style.color = "white";
});

lightModeBtn.addEventListener("click", function () {
  body.style.backgroundColor = "white";
  body.style.color = "black";
});
```

첫번째 코드는 html 이고 두번째는 js 입니다.
js,html 코드를 살펴 보시면 html 코드에
`input type="button"`의 id인 `darkModeBtn`을 `getElementById`로
js에 가져와서 click 이벤트로 버튼이 클릭시
바탕화면 폰트 컬러가 각각 다크 모드에 맞게 변하는 코드 입니다.

## DOM의 계층 구조

DOM은 HTML 문서의 구조의 계층을 표현하는 객체로
'tree(트리)구조'를 가집니다.
이때 트리구조란 노드들이 나무 가지처럼 연결된 자료구조입니다.
트리구조는 나무를 거꾸로 뒤집어 놓은 모양과 유사합니다.
![](https://velog.velcdn.com/images/mgang0_0/post/48f97ff4-0175-4124-91ba-ba257cb98c0d/image.png)
예시코드와 함께 설명을 해보겠습니다.

```<html>
  <body>
    <div>
      <h1>Hello</h1>
      <p>World</p>
    </div>
  </body>
</html>
```

![](https://velog.velcdn.com/images/mgang0_0/post/fcee3461-f56e-4a9e-bfc1-7dabfbc475e7/image.png)

예시 코드를 트리구조 처럼 표현 하면 다음과 같습니다.

- html은 document의 자식
- body는 html의 자식
- div는 body의 자식
- h1과 p는 div의 자식, 서로 형제
  이런식으로 구성 됩니다.

## 브라우저에서의 작동

브라우저는 HTML 코드를 해석해서
요소들을 트리 형태로 구조화해 표현하는 문서(데이터)를 생성 합니다.
이를 DOM이라 부릅니다.
브라우저는 DOM을 통해 화면에 웹 콘텐츠를 랜더링 합니다.
또한, JavaScript를 사용해 웹 화면에 콘텐츠를 추가, 수정, 삭제하고
이벤트를 처리할 수 있도록 프로그래밍 인터페이스 제공을 합니다.
![](https://velog.velcdn.com/images/mgang0_0/post/68e9e442-3ef9-461c-8645-a683455b245a/image.png)

## 마치며

오늘은 프론트엔드개발자라면 한번쯤은 들어봤을 DOM에 대해 알아보았습니다. 아직 부족한점 글에서 부실한 점 많지만 앞으로 많은 피드백 받으며 성장하는 개발자 되도록 하겠습니다.

출처 : [링크텍스트](https://docs.tosspayments.com/resources/glossary/dom)
