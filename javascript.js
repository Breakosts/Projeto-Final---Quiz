const $startGameButton = document.querySelector (".start-quiz")
const $quenstionsContainer = document.querySelector (".questions-container")
const $answersContainer = document.querySelector(".answers-container")
const $questionText = document.querySelector(".question")


$startGameButton.addEventListener("click", startGame)


let currentQuestionIndex = 0


function startGame () {
    $startGameButton.classList.add("hide")
    $quenstionsContainer.classList.remove("hide")
    displayNextQuestion()
}

function displayNextQuestion() {
    while($answersContainer.firstChild) {
        $answersContainer.removeChild($answersContainer.firstChild)
    }

    $questionText.textContent = questions[currentQuestionIndex].question
    questions[currentQuestionIndex].answers.forEach(answer => {
        const newAnswer = document.createElement("button")
        newAnswer.classList.add("button", "answer")
        newAnswer.textContent = answer.text
        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct
        }
        $answersContainer.appendChild(newAnswer)

        newAnswer.addEventListener("click", selectAnswer)
    })
}

function resetQuiz() {
    currentQuestionIndex = 0;
    $startGameButton.classList.remove("hide");
    $quenstionsContainer.classList.add("hide");
}































const questions = [
    {
        question: "quais os nomes dos personagens principais de minecraft?",
        answers : [
            {text: "Steve e Alex", correct: true},
            {text: "Rodrigo e Claudia", correct: false},
            {text: "Matheus e Larissa", correct: false},
            {text: "Cleber e Marta", correct: false}
        ]
    },
    {
        question: " O que o Creeper Faz?",
        answers: [
            { text: "Joga capueira", correct: false},
            { text: "Explode ", correct: true },
            { text: "Faz strofonoff (de frango)", correct: false},
            { text: "Faz pizza", correct: false}
        ]
    },
    {
        question: "Qual dos itens abaixo é comestível porém causa muito dano?",
        answers: [
            {text: "baiacu", correct: false},
            {text: "carne de zumbi", correct: false},
            {text: "frango cru", correct: false},
            {text: "batata envenenada", correct: true}
        ]

    },
    {
        question: "Qual minério é necessário para construir um portal para o nether/ inferno?",
        answers: [
            {text: "areia das almas", correct: false},
            {text: "obsidiana", correct: true},
            {text: "diamante", correct: false},
            {text: "terra do nether", correct: false}
        ]
    },
    {
        question: "Quais os itens que são extraídos quando se mata um mob aranha?",
        answers: [
            {text: "teia de aranha e veneno", correct: false},
            {text: "olho de aranha e ferrão", correct: false},
            {text: "veneno e ferrão", correct: false},
            {text: "teia de aranha e olho de aranha", correct: true}
        ]

    }
]