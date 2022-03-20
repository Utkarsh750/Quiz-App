const quizData = [
    {
        question : 'How old am I, can You Guess?',
        a : '19',
        b : '20',
        c : '21',
        d : '22',
        correct : 'a'
    },
    {
        question : 'When Javascript invented?',
        a : '1999',
        b : '1994',
        c : '1995',
        d : '1990',
        correct : 'c'

    },
    {
        question : 'How old is sanatan dharma',
        a : '5000 yrs',
        b : '7500 yrs',
        c : '8000 yrs',
        d : '6000 yrs',
        correct : 'd'
    },
    {
        question : 'Who is the Prime Minister of India',
        a : 'Yogi ji',
        b : 'Ramnath Kovind',
        c : 'Narendra Modi',
        d : 'Ankit Mishra',
        correct : 'c'
    },
    {
        question : 'Which is oldest Computer Language',
        a : 'javascript',
        b : 'C++',
        c : 'C#',
        d : 'none',
        correct : 'd'
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer")
const questionEL = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score =0

 loadQuiz();

 function loadQuiz(){
     deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

     questionEL.innerText = currentQuizData.question;
     a_text.innerText = currentQuizData.a;
     b_text.innerText = currentQuizData.b;
     c_text.innerText = currentQuizData.c;
     d_text.innerText = currentQuizData.d;

 }

 function getSeleted(){
    //  console.log("hwl")
     const answerEls = document.querySelectorAll(".answer");
     let answer = undefined;

     answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer =  answerEl.id;
        }
     });
     return answer;
 }

 function deselectAnswers(){

    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
 }


 submitBtn.addEventListener('click',() => {
    const answer =  getSeleted(); 
    console.log(answer)


    if(answer) {
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

         currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
           quiz.innerHTML = `<h2>you answered correctily at ${score}/${quizData.length} question.</h2> <button onclick="location.reload()">Reload</button>`;
        }
    }
 });