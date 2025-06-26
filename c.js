// 게임 상태
let gameState = {
  playerHp: 100,
  enemyHp: 100,
  score: 0,
  battleCount: 1,
  isPlayerTurn: true,
  enemies: ["피카츄", "꼬부기", "이상해씨", "파이리"],
}

// DOM 요소들
const elements = {
  playerHp: document.getElementById("playerHp"),
  enemyHp: document.getElementById("enemyHp"),
  messageText: document.getElementById("messageText"),
  score: document.getElementById("score"),
  enemyName: document.getElementById("enemyName"),
  playerName: document.getElementById("playerName"),
  actionMenu: document.getElementById("actionMenu"),
  gameOver: document.getElementById("gameOver"),
  victory: document.getElementById("victory"),
  finalScore: document.getElementById("finalScore"),
  enemySprite: document.getElementById("enemySprite"),
  playerSprite: document.getElementById("playerSprite"),
}

// 게임 초기화
function initGame() {
  updateDisplay()
  showMessage("야생의 " + gameState.enemies[0] + "가 나타났다!")
}

// 화면 업데이트
function updateDisplay() {
  elements.playerHp.style.width = gameState.playerHp + "%"
  elements.enemyHp.style.width = gameState.enemyHp + "%"
  elements.score.textContent = gameState.score

  // HP 색상 변경
  if (gameState.playerHp < 30) {
    elements.playerHp.style.background = "linear-gradient(to right, #f44336, #ff5722)"
  } else if (gameState.playerHp < 60) {
    elements.playerHp.style.background = "linear-gradient(to right, #ff9800, #ffc107)"
  }

  if (gameState.enemyHp < 30) {
    elements.enemyHp.style.background = "linear-gradient(to right, #f44336, #ff5722)"
  } else if (gameState.enemyHp < 60) {
    elements.enemyHp.style.background = "linear-gradient(to right, #ff9800, #ffc107)"
  }
}

// 메시지 표시
function showMessage(message) {
  elements.messageText.textContent = message
}

// 공격 함수
function attack(moveName) {
  if (!gameState.isPlayerTurn) return

  gameState.isPlayerTurn = false
  elements.actionMenu.style.pointerEvents = "none"

  // 플레이어 공격
  const damage = Math.floor(Math.random() * 25) + 15
  gameState.enemyHp = Math.max(0, gameState.enemyHp - damage)

  showMessage(`파이리의 ${moveName}! ${damage}의 데미지!`)

  // 공격 애니메이션
  elements.enemySprite.classList.add("damage-animation")
  elements.playerSprite.classList.add("attack-animation")

  setTimeout(() => {
    elements.enemySprite.classList.remove("damage-animation")
    elements.playerSprite.classList.remove("attack-animation")
  }, 500)

  updateDisplay()

  // 적 처치 확인
  if (gameState.enemyHp <= 0) {
    setTimeout(() => {
      victory()
    }, 1000)
    return
  }

  // 적 공격
  setTimeout(() => {
    enemyAttack()
  }, 1500)
}

// 적 공격
function enemyAttack() {
  const moves = ["전기충격", "몸통박치기", "울음소리", "꼬리흔들기"]
  const moveName = moves[Math.floor(Math.random() * moves.length)]
  const damage = Math.floor(Math.random() * 20) + 10

  gameState.playerHp = Math.max(0, gameState.playerHp - damage)

  showMessage(`${elements.enemyName.textContent}의 ${moveName}! ${damage}의 데미지!`)

  // 공격 애니메이션
  elements.playerSprite.classList.add("damage-animation")
  elements.enemySprite.classList.add("attack-animation")

  setTimeout(() => {
    elements.playerSprite.classList.remove("damage-animation")
    elements.enemySprite.classList.remove("attack-animation")
  }, 500)

  updateDisplay()

  // 플레이어 패배 확인
  if (gameState.playerHp <= 0) {
    setTimeout(() => {
      gameOver()
    }, 1000)
    return
  }

  // 플레이어 턴으로 변경
  setTimeout(() => {
    gameState.isPlayerTurn = true
    elements.actionMenu.style.pointerEvents = "auto"
    showMessage("무엇을 할까?")
  }, 1500)
}

// 아이템 사용
function useItem() {
  if (!gameState.isPlayerTurn) return

  const healAmount = Math.floor(Math.random() * 30) + 20
  gameState.playerHp = Math.min(100, gameState.playerHp + healAmount)

  showMessage(`상처약을 사용했다! HP가 ${healAmount} 회복되었다!`)
  updateDisplay()

  gameState.isPlayerTurn = false
  elements.actionMenu.style.pointerEvents = "none"

  setTimeout(() => {
    enemyAttack()
  }, 1500)
}

// 도망가기
function runAway() {
  if (Math.random() < 0.7) {
    showMessage("무사히 도망쳤다!")
    setTimeout(() => {
      nextBattle()
    }, 1500)
  } else {
    showMessage("도망칠 수 없다!")
    gameState.isPlayerTurn = false
    elements.actionMenu.style.pointerEvents = "none"

    setTimeout(() => {
      enemyAttack()
    }, 1500)
  }
}

// 승리
function victory() {
  gameState.score += 100
  elements.victory.style.display = "block"
  updateDisplay()
}

// 다음 배틀
function nextBattle() {
  elements.victory.style.display = "none"
  gameState.battleCount++
  gameState.enemyHp = 100
  gameState.playerHp = Math.min(100, gameState.playerHp + 20) // 약간의 회복
  gameState.isPlayerTurn = true
  elements.actionMenu.style.pointerEvents = "auto"

  // 새로운 적 선택
  const newEnemy = gameState.enemies[Math.floor(Math.random() * gameState.enemies.length)]
  elements.enemyName.textContent = newEnemy

  // 적 스프라이트 변경
  changeEnemySprite(newEnemy)

  updateDisplay()
  showMessage(`야생의 ${newEnemy}가 나타났다!`)
}

// 적 스프라이트 변경
function changeEnemySprite(enemyName) {
  const spriteContainer = elements.enemySprite
  spriteContainer.innerHTML = ""

  let spriteClass = "pikachu"
  if (enemyName === "꼬부기") spriteClass = "squirtle"
  else if (enemyName === "이상해씨") spriteClass = "bulbasaur"
  else if (enemyName === "파이리") spriteClass = "charmander"

  const sprite = document.createElement("div")
  sprite.className = spriteClass
  spriteContainer.appendChild(sprite)
}

// 게임 오버
function gameOver() {
  elements.finalScore.textContent = gameState.score
  elements.gameOver.style.display = "block"
}

// 게임 재시작
function restartGame() {
  gameState = {
    playerHp: 100,
    enemyHp: 100,
    score: 0,
    battleCount: 1,
    isPlayerTurn: true,
    enemies: ["피카츄", "꼬부기", "이상해씨", "파이리"],
  }

  elements.gameOver.style.display = "none"
  elements.victory.style.display = "none"
  elements.actionMenu.style.pointerEvents = "auto"
  elements.enemyName.textContent = "피카츄"

  // 스프라이트 초기화
  elements.enemySprite.innerHTML = '<div class="pikachu"></div>'
  elements.playerSprite.innerHTML = '<div class="charmander"></div>'

  // HP 바 색상 초기화
  elements.playerHp.style.background = "linear-gradient(to right, #4CAF50, #8BC34A)"
  elements.enemyHp.style.background = "linear-gradient(to right, #4CAF50, #8BC34A)"

  updateDisplay()
  showMessage("야생의 피카츄가 나타났다!")
}

// 게임 시작
initGame()
