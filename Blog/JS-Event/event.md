![alt text](image.png)

## 시작하며
이벤트가 무엇인지 무슨 역할을 하는 것인지 작성해보고 어떻게 사용하는지 또 어떤 종류가 있는지 내가 배운 내용을 토대로 작성 해보려고 합니다.
## Event?
이벤트란 웹페이지에서 발생하는 동작이나 사건을 의미 합니다. 사용자의 클릭, 키보드 입력, 페이지 로딩 등 다양한 상호작용이나 브라우저 자체에서 발생하는 변화를 포함합니다. 이러한 이벤트를 감지하고 처리하는 기능을 통해 동적인 웹 페이지를 만들 수 있습니다. 

## 이벤트의 여러가지 종류
###  마우스 이벤트

| 이벤트        | 설명                                                        |
| ------------- | ----------------------------------------------------------- |
| **click**         | 마우스 버튼을 클릭했을 때 이벤트 발생&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
| **dblclick**      | 마우스 버튼을 더블 클릭했을 때 이벤트 발생 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
| **mousedown**     | 마우스 버튼을 누르고 있을 때 이벤트 발생&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
| **mouseup**       | 누르고 있던 마우스 버튼을 뗄 때 이벤트 발생 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
| **mousemove**     | 마우스를 움직일 때 이벤트 발생&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
| **mouseover**     | 마우스를 요소 위로 움직였을 때 이벤트 발생 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
| **mouseout**      | 마우스를 요소 밖으로 움직였을 때 이벤트 발생 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
| **mouseenter**    | 해당 요소에 마우스 커서를 올려놓았을 때 이벤트 발생 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
| **mouseleave**    | 해당 요소에 마우스 커서를 빼낼 때 이벤트 발생 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |

### form 이벤트

| 이벤트   | 설명                                                        |
| -------- | ----------------------------------------------------------- |
| **focus**    | 요소에 포커스가 이동되었을 때 이벤트 발생 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
| **blur**     | 요소에 포커스가 벗어났을 때 이벤트 발생 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
| **change**   | 요소에 값이 변경되었을 때 이벤트 발생 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
| **submit**   | submit 버튼을 눌렀을 때 이벤트 발생 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
| **reset**    | reset 버튼을 눌렀을 때 이벤트 발생 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
| **select**   | input이나 textarea 요소 안의 텍스트를 드래그하여 선택했을 때 이벤트 발생 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |

### key 이벤트
| **이벤트**   | **설명**                                                        |
| ------------ | --------------------------------------------------------------- |
| **keydown**  | 키를 눌렀을 때 이벤트가 발생 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
| **keyup**    | 키를 떼었을 때 이벤트가 발생 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
| **keypress** | 키를 누른 상태에서 이벤트가 발생 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |

등등 여기에 못담은 여러 이벤트 들이 있습니다.

## how?
이제 어떻게 사용하는지 알아보겠습니다.
```javascript
const title = document.querySelector("div.hello:first-child h1")

console.dir(title);

function handleTitleClick(){
    title.style.color="blue";
}

function handleMouseEnter(){
    title.innerText = "Mouse in here";
}

function handleMouseLeave(){
    title.innerText = "Mouse is gone";
}

function handleWindowRisize(){
    document.body.style.background="tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("No wifi");
}

function handleWindowOnline(){
    alert("All good");
}

title.addEventListener("click",handleTitleClick);
title.addEventListener("mouseenter",handleMouseEnter);
title.addEventListener("mouseleave",handleMouseLeave);

window.addEventListener("resize",handleWindowRisize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("offline",handleWindowOffline);
window.addEventListener("online",handleWindowOnline);
```

#### 이코드엔 7가지의 이벤트가 있습니다. 
- click : 마우스 클릭시 이벤트 발생
- mouseenter : 마우스가 요소 안에 들어왔을 때 이벤트 발생
- mouseleave : 마우스가 요소 밖으로 나갔을 때 이벤트 발생

![](https://velog.velcdn.com/images/mgang0_0/post/6b15ea82-cfc0-4c0d-912a-985183cd1d2e/image.gif)



- resize : 화면 크기가 바뀌었을때 이벤트 발생

![](https://velog.velcdn.com/images/mgang0_0/post/332c512c-0578-471b-82f7-9f3a9c31dd6b/image.gif)


- copy : 복사를 감지 했을때 이벤트 발생
![](https://velog.velcdn.com/images/mgang0_0/post/9bf61702-c11d-4a52-9818-1ab35b652e77/image.gif)




- offline : 인터넷 연결이 끊겼을때 이벤트 발생
![](https://velog.velcdn.com/images/mgang0_0/post/291f2dba-4010-48dc-bb29-5f32da86bd1e/image.png)

- online : 인터넷이 연결 됬을때 이벤트 발생
![](https://velog.velcdn.com/images/mgang0_0/post/9ca5417c-1013-40b4-b298-238ce8463758/image.png)

이런 식으로 이벤트를 이용해 동적인 웹페이지를 만들 수 있습니다.

## 마무리
이 글을 통해 제가 배운 내용을 토대로 이벤트의 종류 또 어떻게 사용하는지 작성 해보았습니다. 아직 부족한 점이 많지만 앞으로 더 열심히 공부해서 나중에 내용 추가도 해보겠습니다 감사합니다.

<br>

### 출처
https://inpa.tistory.com/entry/JS-📚-이벤트-💯-총-정리 [Inpa Dev 👨‍💻:티스토리] , [JavaScript - 이벤트(Event), 이벤트의 종류, 이벤트 연결](https://jenny-daru.tistory.com/17)


