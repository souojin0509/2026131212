const questions = [
  {
    question: "시험 기간이 시작되면 나는?",
    answers: [
      { text: "바로 계획표부터 만든다.", type: "planner" },
      { text: "일단 미루다가 급해지면 몰아친다.", type: "survivor" },
      { text: "기분이 잡히는 과목부터 시작한다.", type: "flow" },
      { text: "노트와 자료를 완벽하게 정리한다.", type: "perfectionist" }
    ]
  },
  {
    question: "공부할 때 가장 중요한 것은?",
    answers: [
      { text: "명확한 목표와 일정", type: "planner" },
      { text: "마감 직전의 집중력", type: "survivor" },
      { text: "몰입되는 분위기", type: "flow" },
      { text: "깔끔한 필기와 정리", type: "perfectionist" }
    ]
  },
  {
    question: "갑자기 시간이 비면 나는?",
    answers: [
      { text: "남은 할 일을 체크한다.", type: "planner" },
      { text: "쉬다가 나중에 한다.", type: "survivor" },
      { text: "지금 끌리는 걸 한다.", type: "flow" },
      { text: "자료를 다시 정리한다.", type: "perfectionist" }
    ]
  },
  {
    question: "어려운 과제를 만나면?",
    answers: [
      { text: "단계를 나눠서 해결한다.", type: "planner" },
      { text: "마감이 다가오면 어떻게든 해낸다.", type: "survivor" },
      { text: "감이 올 때까지 기다렸다가 몰입한다.", type: "flow" },
      { text: "완벽한 답을 찾을 때까지 수정한다.", type: "perfectionist" }
    ]
  },
  {
    question: "나에게 잘 맞는 공부 방식은?",
    answers: [
      { text: "체크리스트를 하나씩 지우기", type: "planner" },
      { text: "짧고 강하게 벼락치기", type: "survivor" },
      { text: "음악이나 분위기 속에서 몰입하기", type: "flow" },
      { text: "요약본을 예쁘게 정리하기", type: "perfectionist" }
    ]
  },
  {
    question: "공부가 잘 안 될 때 나는?",
    answers: [
      { text: "계획을 다시 조정한다.", type: "planner" },
      { text: "일단 쉬고 막판에 한다.", type: "survivor" },
      { text: "장소나 분위기를 바꾼다.", type: "flow" },
      { text: "왜 안 되는지 분석한다.", type: "perfectionist" }
    ]
  },
  {
    question: "시험 전날의 나는?",
    answers: [
      { text: "정리한 계획대로 복습한다.", type: "planner" },
      { text: "밤새 최대한 많이 본다.", type: "survivor" },
      { text: "중요해 보이는 부분에 감으로 집중한다.", type: "flow" },
      { text: "필기와 예상문제를 다시 다듬는다.", type: "perfectionist" }
    ]
  },
  {
    question: "내 공부 스타일을 한마디로 표현하면?",
    answers: [
      { text: "계획적", type: "planner" },
      { text: "실전형", type: "survivor" },
      { text: "감각적", type: "flow" },
      { text: "꼼꼼함", type: "perfectionist" }
    ]
  }
];

const results = {
  planner: {
    title: "계획형 전략가",
    desc: "목표를 세우고 차근차근 실행할 때 가장 안정적으로 성과를 내는 타입입니다. 흐름을 직접 설계할수록 집중력이 올라가요.",
    tips: [
      "하루 공부량을 작게 나누어 실천하세요.",
      "체크리스트를 활용해 완료감을 느껴보세요.",
      "예비 시간을 넣어 계획이 무너지지 않게 하세요."
    ],
    place: "조용한 도서관, 스터디룸, 정돈된 책상"
  },
  survivor: {
    title: "벼락치기 생존형",
    desc: "압박감이 생겼을 때 집중력이 폭발하는 타입입니다. 다만 체력 소모가 크기 때문에 최소한의 안전장치가 필요해요.",
    tips: [
      "마감 전날이 아니라 2~3일 전을 개인 마감으로 정하세요.",
      "핵심 개념과 기출 중심으로 우선순위를 잡으세요.",
      "짧게 몰입하고 반드시 쉬는 시간을 넣으세요."
    ],
    place: "적당히 긴장감 있는 카페, 시험 분위기가 나는 열람실"
  },
  flow: {
    title: "감각형 몰입러",
    desc: "분위기와 감정의 영향을 많이 받는 타입입니다. 잘 맞는 환경만 찾으면 누구보다 깊게 몰입할 수 있어요.",
    tips: [
      "공부 전 루틴을 만들어 몰입 스위치를 켜세요.",
      "과목별로 어울리는 장소나 플레이리스트를 정해보세요.",
      "기분이 좋은 시간대에 어려운 과목을 배치하세요."
    ],
    place: "잔잔한 음악이 있는 카페, 창가 자리, 분위기 좋은 독서실"
  },
  perfectionist: {
    title: "완벽주의 정리형",
    desc: "구조화와 정리에 강한 타입입니다. 꼼꼼함이 큰 장점이지만, 시작이 늦어지지 않도록 주의하면 더 좋아요.",
    tips: [
      "정리 시간을 제한하고 문제 풀이 시간을 따로 확보하세요.",
      "완벽한 필기보다 반복 복습을 우선하세요.",
      "80% 완성 후 실행하는 연습을 해보세요."
    ],
    place: "개인 책상, 조용한 방, 자료를 펼쳐둘 수 있는 넓은 공간"
  }
};

let currentQuestionIndex = 0;
let userName = "";
let scores = {
  planner: 0,
  survivor: 0,
  flow: 0,
  perfectionist: 0
};

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const nicknameInput = document.getElementById("nickname-input");
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const copyBtn = document.getElementById("copy-btn");
const copyMessage = document.getElementById("copy-message");

const questionNumber = document.getElementById("question-number");
const totalNumber = document.getElementById("total-number");
const progressFill = document.getElementById("progress-fill");
const questionWrap = document.getElementById("question-wrap");
const questionTitle = document.getElementById("question-title");
const answerList = document.getElementById("answer-list");

const resultCard = document.getElementById("result-card");
const resultTitle = document.getElementById("result-title");
const resultDesc = document.getElementById("result-desc");
const resultTips = document.getElementById("result-tips");
const resultPlace = document.getElementById("result-place");

totalNumber.textContent = questions.length;

startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", restartQuiz);
copyBtn.addEventListener("click", copyLink);

nicknameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    startQuiz();
  }
});

function showScreen(screen) {
  startScreen.classList.remove("active");
  quizScreen.classList.remove("active");
  resultScreen.classList.remove("active");
  screen.classList.add("active");
}

function startQuiz() {
  userName = nicknameInput.value.trim() || "당신";
  currentQuestionIndex = 0;
  resetScores();
  showScreen(quizScreen);
  renderQuestion();
}

function resetScores() {
  scores = {
    planner: 0,
    survivor: 0,
    flow: 0,
    perfectionist: 0
  };
}

function renderQuestion() {
  const currentQuestion = questions[currentQuestionIndex];

  questionNumber.textContent = currentQuestionIndex + 1;
  progressFill.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
  questionTitle.textContent = currentQuestion.question;
  answerList.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.textContent = answer.text;

    button.addEventListener("click", () => {
      scores[answer.type] += 1;
      goToNextQuestion();
    });

    answerList.appendChild(button);
  });

  questionWrap.classList.remove("fade");
}

function goToNextQuestion() {
  questionWrap.classList.add("fade");

  setTimeout(() => {
    currentQuestionIndex += 1;

    if (currentQuestionIndex < questions.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }, 180);
}

function getTopType() {
  let topType = "planner";
  let topScore = scores[topType];

  Object.keys(scores).forEach((type) => {
    if (scores[type] > topScore) {
      topType = type;
      topScore = scores[type];
    }
  });

  return topType;
}

function showResult() {
  const topType = getTopType();
  const result = results[topType];

  resultCard.className = `result-card ${topType}`;
  resultTitle.textContent = `${userName}님의 공부 성향은 ${result.title}`;
  resultDesc.textContent = result.desc;
  resultPlace.textContent = result.place;

  resultTips.innerHTML = "";
  result.tips.forEach((tip) => {
    const li = document.createElement("li");
    li.textContent = tip;
    resultTips.appendChild(li);
  });

  copyMessage.classList.remove("show");
  showScreen(resultScreen);
}

function restartQuiz() {
  nicknameInput.value = "";
  copyMessage.classList.remove("show");
  showScreen(startScreen);
}

async function copyLink() {
  const url = window.location.href;

  try {
    await navigator.clipboard.writeText(url);
    copyMessage.textContent = "링크가 복사되었습니다!";
  } catch (error) {
    copyMessage.textContent = "주소창의 링크를 복사해 주세요.";
  }

  copyMessage.classList.add("show");

  setTimeout(() => {
    copyMessage.classList.remove("show");
  }, 2200);
}
