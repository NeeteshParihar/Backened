document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("start-btn");
    const Question = document.getElementById("questions");
    const QuestionContainer = document.querySelector(".question-container");
    const score = document.getElementById("score");
    const scoreContainer = document.querySelector(".Score-container");    
    const restartButton = document.getElementById("restart-btn");
    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");
    const currentQuestionNumber = document.getElementById("question-number");
    const totalQuestionContainer = document.getElementById("total-questions");
    const StartQuizContainer = document.querySelector(".start-quiz-container");

    let TotalScore = 0;
    let index = 0;
    const quiz = [
        {
            question: "Kanche khelne ke liye kaunse cheez ki zarurat hoti hai?",
            options: ["Marbles", "Ball", "Bat", "Sticks"],
            correctAnswer: 0,
            isSelected: -1,
        },
        {
            question: "Kanche khelte waqt kis haath se marbles chalate hain?",
            options: ["Dahine haath", "Baaye haath", "Dono haath", "Koi bhi haath"],
            correctAnswer: 0,
            isSelected: -1,
        },
        {
            question: "Kanche khelte waqt kis cheez ko maarte hain?",
            options: ["Marbles", "Gend", "Foot", "Stick"],
            correctAnswer: 0,
            isSelected: -1,
        },
        {
            question: "Kanche mein kis par marbles ko chalana hota hai?",
            options: ["Zameen", "Kursi", "Table", "Wall"],
            correctAnswer: 0,
            isSelected: -1,
        },
        {
            question: "Kanche khel mein kitne log khelte hain?",
            options: ["Ek ya do", "Teen", "Chaar", "Panch"],
            correctAnswer: 0,
            isSelected: -1,
        },
        {
            question: "Kanche ka game kisko pasand aata hai?",
            options: ["Bachon ko", "Bado ko", "Teachers ko", "Sabko"],
            correctAnswer: 0,
            isSelected: -1,
        },
        {
            question: "Kanche game khelte waqt kaunse cheez ka dhyaan rakhna padta hai?",
            options: ["Marbles ka size", "Marbles ka rang", "Marbles ka weight", "Marbles ka design"],
            correctAnswer: 0,
            isSelected: -1,
        },
        {
            question: "Kanche khelte waqt kiski madad se marbles ko chalate hain?",
            options: ["Ungli", "Pairo", "Haath ka jhaank", "Ghoomna"],
            correctAnswer: 0,
            isSelected: -1,
        },
        {
            question: "Kanche ke kitne types hote hain?",
            options: ["2", "3", "4", "5"],
            correctAnswer: 1,
            isSelected: -1,
        },
        {
            question: "Kanche khelna kahan seekha jata hai?",
            options: ["School mein", "Gali mein", "Park mein", "Maidaan mein"],
            correctAnswer: 1,
            isSelected: -1,
        }
    ];
    
    
    

    startButton.addEventListener("click", function () {
        StartQuizContainer.classList.add("hidden");
        QuestionContainer.classList.remove("hidden");
        displayCurrentQuestion(index);
    });

    prevButton.addEventListener("click", function () {
        index--;
        if (index < 0) {
            index = 0;
            return;
        }
        displayCurrentQuestion(index);
    });

    nextButton.addEventListener("click", function () {
        index++;
        if (index === quiz.length) {
            QuestionContainer.classList.add("hidden");
            scoreContainer.classList.remove("hidden");
            displayScore();      
        } else {
            displayCurrentQuestion(index);
        }
    });

    function displayCurrentQuestion(index) {
        currentQuestionNumber.textContent = `${index + 1}`;
        totalQuestionContainer.textContent = `${quiz.length}`;
        Question.innerHTML = "";
        const item = quiz[index];
        const newQuesContainer = document.createElement("div");
        const quest = document.createElement("h1");
        quest.textContent = item.question;
        newQuesContainer.appendChild(quest);
        
        item.options.forEach((option, idx) => {
            const optionBtn = document.createElement("button");
            optionBtn.textContent = option;
            
            if (idx === item.isSelected && item.isSelected === item.correctAnswer) {
                optionBtn.style.background = "green";
            } else if (idx === item.isSelected && item.isSelected !== item.correctAnswer) {
                optionBtn.style.background = "red";
            }
            
            newQuesContainer.appendChild(optionBtn);
            if (item.isSelected !== -1) return;
            
            optionBtn.addEventListener("click", function () {
                if (item.isSelected !== -1) return;
                
                if (item.correctAnswer === idx) {
                    TotalScore++;
                    optionBtn.style.background = "green";
                } else {
                    TotalScore--;
                    optionBtn.style.background = "red";
                }
                item.isSelected = idx;
            });
        });

        Question.appendChild(newQuesContainer);
    }

    function displayScore() {
        score.textContent = `आपका स्कोर: ${TotalScore}/${quiz.length}`;
        restartButton.addEventListener("click", function () {
            index = 0;
            TotalScore = 0;
            quiz.forEach(q => q.isSelected = -1);
            scoreContainer.classList.add("hidden");
            StartQuizContainer.classList.remove("hidden");
        });
    }
});
