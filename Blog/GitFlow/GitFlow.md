## 시작하며

안녕하세요 오늘은 깃 브랜치 전략 **'Git Flow'**에 대해 알아 보겠습니다.
그전에 먼저 깃 브랜치 전략은 뭘까요? 바로 알아보도록 하겠습니다.

## Git Branch 전략?

여러 개발자가 더 효율적이고 효과적으로 협업 하기위해
git branch에 규칙을 정하고
저장소를 잘 활용하기 위한 workflow를 정의하는 것 입니다.
workflow란 특정 순서에 따라 발생하는
반복적인 프로세스와 작업을 관리하는 시스템입니다.

그럼 왜 git branch 전략을 쓸까요?
여러 개발자가 협업할때 중요합니다.
각자 다른 기능을 담당하는 브랜치를 사용하여 작업하면,
개발 중인 기능이나 수정사항이 서로 독립적이게 되며
영향을 주지 않고 동시에 진행될 수 있습니다.

## Git Flow 전략

그럼 이제 git branch 전략에 가장 핵심 가장 많이 쓰는
git flow 전략을 알아볼게요.

브랜치 종류는 5가지가 있습니다.

- master: 제품 출시 버전을 관리하는 메인 브랜치
- develop: 다음 출시 버전을 위해 개발하는 브랜치
- feature: 새로운 기능을 개발하는 브랜치
- release: 다음 출시 버전을 준비하는 브랜치
- hotfix: 출시된 제품의 버그를 고치기 위한 브랜치

![](https://velog.velcdn.com/images/mgang0_0/post/009fb56c-dfa2-4eec-8963-15d0d07b3a8b/image.png)

여러 사람이 함께 협업할때는 이러한 git flow 전략이 중요 합니다.
자세히 살펴보면 master branch가 사용자들이 쓰는 버젼?main?이라고 생각 하시면 편합니다.
master에서 develop 브랜치를 파서 거기서 feature 브랜치를 팝니다.
그리고 feature에서 기능 개발을 하다 완성 되었으면
develop으로 push후 1차 test를 합니다.
이상이없다면 바로 master로 push해도 됩니다.
하지만 정말 큰 프로젝트라면 눈에 안보이는 작은 오류가 있을 수도 있습니다.
그렇다면 develop에서 release브랜치를 팝니다.
마지막으로 최종 test를 한뒤 안전하게 master로 push 하면 됩니다.
하지만 master로 push 했을때 버그가 났다면
이때는 긴급하게 바로 고쳐야하기 때문에
복잡한 develop feature release 과정을 거치지 않고
바로 hotfix브랜치를 파서 고친후 master로 push 합니다.

# 마무리

오늘은 개발자가 협업을 할때 꼭 알아야하는 git branch 전략 그중에서도 git flow에 대해 알아 보았습니다.
git branch 전략에는 github flow, gitlab flow등 여러가지 전략이 있습니다.
이것은 제가 더 공부를 열심히 한 뒤 꼭 추가하고 또 협업할때 꼭 유용하 써보겠습니다.
글 읽어주셔서 감사합니다.

출처 : [Git Branch 전략 비교 - Git Flow vs GitHub Flow](https://devocean.sk.com/blog/techBoardDetail.do?ID=165571&boardType=techBlog)
