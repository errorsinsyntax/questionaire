const quizData = [
    {
        question: 'Lazy?',
        a: 'energetic',
        b: 'fast',
        c: 'yes',
        d: 'lethargic',
        correct: 'c'
    }, {
        question: 'what is the most used programming language of 2019?',
        a: 'energetic',
        b: 'fast',
        c: 'yes',
        d: 'lethargic',
        correct: 'c'
    }, {
        question: 'Why does my back hurt?',
        a: 'energetic',
        b: 'fast',
        c: 'yes',
        d: 'lethargic',
        correct: 'c'
    }, {
        question: 'What year was America lost?',
        a: 'energetic',
        b: 'fast',
        c: 'yes',
        d: 'lethargic',
        correct: 'c'
    }
    
];

const quesitonEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;

loadQuiz();

function loadQuiz(){
    const currentQuizData = quizData
    [currentQuiz];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

submitBtn.addEventListener('click', () => {
    currentQuiz++;
    if(currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        alert('fin!');
    }
});