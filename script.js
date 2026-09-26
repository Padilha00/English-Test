const questions = [
    {
        question: "What does HOUSE mean?",
        answers: ["Escola", "Casa", "Carro", "Água"],
        correct: "Casa"
    },

    {
        question: "What does WATER mean?",
        answers: ["Comida", "Livro", "Água", "Janela"],
        correct: "Água"
    },

    {
        question: "What does BOOK mean?",
        answers: ["Livro", "Casa", "Carro", "Água"],
        correct: "Livro"
    },

    {
        question: "What does FRIEND mean?",
        answers: ["Professor", "Amigo", "Família", "Estudante"],
        correct: "Amigo"
    },

    {
        question: "What does WINDOW mean?",
        answers: ["Porta", "Mesa", "Janela", "Cadeira"],
        correct: "Janela"
    },

{
    question: "What does 'I am very tired today' mean?",
    answers: [
        "Eu estou muito cansado(a) hoje.",
        "Eu estou muito feliz hoje.",
        "Eu estou estudando hoje.",
        "Eu estou em casa hoje."
    ],
    correct: "Eu estou muito cansado(a) hoje."
},

{
    question: "What does 'She likes to read books' mean?",
    answers: [
        "Ela gosta de ler livros.",
        "Ela gosta de escrever livros.",
        "Ela compra muitos livros.",
        "Ela perdeu seus livros."
    ],
    correct: "Ela gosta de ler livros."
},

{
    question: "What does 'We are going to school' mean?",
    answers: [
        "Nós estamos voltando da escola.",
        "Nós estamos indo para a escola.",
        "Nós estamos estudando em casa.",
        "Nós estamos procurando a escola."
    ],
    correct: "Nós estamos indo para a escola."
},

{
    question: "What does 'He has a new phone' mean?",
    answers: [
        "Ele perdeu seu celular.",
        "Ele quer um celular novo.",
        "Ele tem um celular novo.",
        "Ele comprou um computador novo."
    ],
    correct: "Ele tem um celular novo."
}
];


let currentQuestion = 0;
let score = 0;


function showQuestion() {

    const question = questions[currentQuestion];
    
    const level = document.getElementById("level");
const questionNumber = document.getElementById("score");

if (currentQuestion < 5) {

    level.innerText = "LEVEL 1";

} else {

    level.innerText = "LEVEL 2";

}

questionNumber.innerText = ((currentQuestion % 9) + 1) + " / 9";

    document.getElementById("question").innerText = question.question;

    const answersContainer = document.getElementById("answers");

    answersContainer.innerHTML = "";

    document.getElementById("next-button").style.display = "none";

    document.getElementById("next-button").onclick = function () {

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;
        showQuestion();

    } else {

        document.querySelector(".quiz").style.display = "none";
        document.getElementById("ready-screen").style.display = "block";

    }

};


    document.getElementById("again-button").style.display = "none";


    question.answers.forEach(answer => {

        const button = document.createElement("button");

        button.innerText = answer;

        button.onclick = function () {
            checkAnswer(answer, button);
        };

        answersContainer.appendChild(button);

    });
}


function checkAnswer(answer, button) {

    const question = questions[currentQuestion];

    const buttons = document.querySelectorAll(".answers button");


    if (answer === question.correct) {

        button.classList.add("correct");

        score++;

        document.getElementById("score").innerText =
            score + " / 9";

        buttons.forEach(btn => {
            btn.disabled = true;
        });

        document.getElementById("next-button").style.display = "block";

    } else {

        button.classList.add("wrong");

        button.disabled = true;

        document.getElementById("again-button").style.display = "block";
    }
}


document.getElementById("again-button").onclick = function () {


    showQuestion();

};


showQuestion();

document.getElementById("ready-no").addEventListener("click", function () {

    document.getElementById("ready-screen").style.display = "none";
    document.getElementById("thankyou-screen").style.display = "block";

});


document.getElementById("ready-yes").addEventListener("click", function () {

    document.getElementById("ready-screen").style.display = "none";
    document.getElementById("like-screen").style.display = "block";

});


document.getElementById("back-ready").addEventListener("click", function () {

    document.getElementById("thankyou-screen").style.display = "none";
    document.getElementById("ready-screen").style.display = "block";

});

document.getElementById("like-no").addEventListener("click", function () {

    document.getElementById("like-screen").style.display = "none";
    document.getElementById("bye-screen").style.display = "block";

});
document.getElementById("like-yes").addEventListener("click", function () {

    document.getElementById("like-screen").style.display = "none";
    document.getElementById("message-screen").style.display = "block";

});

document.getElementById("message-next").addEventListener("click", function () {

    document.getElementById("message-screen").style.display = "none";
    document.getElementById("love-screen").style.display = "block";

});