const quizList = [
    {
        question: 'SEVENTEENのメンバーは何人か？',
        answer: '13人',
    },
    {
        question: 'SEVENTEENのリーダーの名前は？英語で答えよ。',
        answer: 'S.COUPS',
    },
    {
        question: 'SEVENTEENの天才作曲者の名前は？英語で答えよ。',
        answer: 'WOOZI',
    },
    {
        question: 'SEVENTEENのファン名は？',
        answer: 'CARAT',
    },
    {
        question: 'SEVENTEENのデビューした年月日は？',
        answer: '2015年5月26日',
    },
    {
        question: '世界最大の熱帯雨林はどこですか？',
        answer: 'アマゾン',
    },
    {
        question: '日本で最も高い山は何ですか？',
        answer: '富士山',
    },
    {
        question: 'ビートルズのボーカルは誰ですか？',
        answer: 'ジョン・レノン',
    },
    {
        question: '日本の現在の天皇は誰ですか？',
        answer: '徳仁',
    },
    {
        question: '世界で最も人口が多い国はどこですか？',
        answer: '中国',
    },
];

let currentQuizIndex = 0;

const answerResultCorrectElement   = document.querySelector('.answer-result-correct');
const answerResultIncorrectElement = document.querySelector('.answer-result-incorrect');
const quizIndexElement             = document.querySelector('#quiz-index');
const questionElement              = document.querySelector('#question');
const inputAnswerElement           = document.querySelector('#input-answer');
const toAnswerButtonElement        = document.querySelector('#to-answer-button');

const displayQuestion = () => {
    questionElement.textContent  = quizList[currentQuizIndex].question;
    quizIndexElement.textContent = currentQuizIndex + 1 + '問目';
}

const displayAnswerResult = () => {
    if (inputAnswerElement.value === quizList[currentQuizIndex].answer) {
        answerResultCorrectElement.classList.add('display-answer-result');
    } else {
        answerResultIncorrectElement.classList.add('display-answer-result');
    }

    setTimeout(() => {
        currentQuizIndex++;
        resetFormValues();
        resetDisplayAnswerResult();
        displayQuestion();
    }, 3000);
}

const resetFormValues = () => {
    quizIndexElement.textContent    = '';
    questionElement.textContent     = '';
    inputAnswerElement.value        = '';
}

const resetDisplayAnswerResult = () => {
    answerResultCorrectElement.classList.remove('display-answer-result');
    answerResultIncorrectElement.classList.remove('display-answer-result');
}

toAnswerButtonElement.addEventListener('click', displayAnswerResult);

displayQuestion();