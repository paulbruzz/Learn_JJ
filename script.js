document.addEventListener('DOMContentLoaded', () => {
    console.log("Prototipo Ju-Jitsu caricato!");

    const quizContainer = document.getElementById('quiz-container');
    let currentQuestionIndex = 0;

    // Dati di esempio per il quiz
    const quizData = [
        {
            question: "Come si chiama il fondatore del Judo, arte da cui deriva molto del Ju-Jitsu moderno?",
            answers: ["Morihei Ueshiba", "Gichin Funakoshi", "Jigoro Kano", "Masutatsu Oyama"],
            correct: "Jigoro Kano"
        },
        {
            question: "Qual è il termine giapponese per 'tecnica'?",
            answers: ["Waza", "Dojo", "Kata", "Ukemi"],
            correct: "Waza"
        },
        {
            question: "Come si chiama la giacca dell'uniforme di allenamento (judogi)?",
            answers: ["Zubon", "Obi", "Uwagi", "Eri"],
            correct: "Uwagi"
        }
    ];

    function loadQuiz() {
        if (currentQuestionIndex < quizData.length) {
            const currentQuestion = quizData[currentQuestionIndex];
            quizContainer.innerHTML = ''; // Pulisce il contenitore

            const questionElement = document.createElement('p');
            questionElement.textContent = currentQuestion.question;
            quizContainer.appendChild(questionElement);

            currentQuestion.answers.forEach(answer => {
                const button = document.createElement('button');
                button.textContent = answer;
                button.onclick = () => checkAnswer(answer);
                quizContainer.appendChild(button);
            });
        } else {
            quizContainer.innerHTML = "<p>Complimenti, hai completato il quiz!</p>";
        }
    }

    function checkAnswer(selectedAnswer) {
        const correctAnswer = quizData[currentQuestionIndex].correct;
        if (selectedAnswer === correctAnswer) {
            alert("Corretto!");
        } else {
            alert(`Sbagliato! La risposta corretta era: ${correctAnswer}`);
        }
        currentQuestionIndex++;
        loadQuiz();
    }

    // Carica la prima domanda del quiz
    if(quizContainer) {
        loadQuiz();
    }
});
