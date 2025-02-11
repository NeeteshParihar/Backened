document.addEventListener(
    "DOMContentLoaded", () => {

        const startButton =
            document.getElementById("start-btn");

        const Question =
            document.getElementById("questions");

        const QuestionContainer =
            document.querySelector(".question-container ");

        const score =
            document.getElementById("score");

        const scoreContainer =
            document.querySelector(".Score-container ") ;    

        const restartButton =
            document.getElementById("restart-btn");

        const prevButton =
            document.getElementById("prev-btn");

        const nextButton =
            document.getElementById("next-btn");

        const currentQuestionNumber = document.getElementById("question-number")     
        const totalQuestionContainer = document.getElementById("total-questions") ;

        const StartQuizContainer = document.querySelector(".start-quiz-container");

        let TotalScore = 0 ;
        let index = 0;
        const quiz = [
            {
                question: "What is the capital of France?",
                options: ["Paris", "Berlin", "Madrid", "Rome"],
                correctAnswer: 0,
                isSelected: -1,
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Earth", "Mars", "Jupiter", "Venus"],
                correctAnswer: 1,
                isSelected: -1,
            },
            {
                question: "Who wrote 'Hamlet'?",
                options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "J.K. Rowling"],
                correctAnswer: 0,
                isSelected: -1,
            },
            {
                question: "What is the largest ocean on Earth?",
                options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                correctAnswer: 3,
                isSelected: -1,
            },
            {
                question: "How many continents are there on Earth?",
                options: ["5", "6", "7", "8"],
                correctAnswer: 2,
                isSelected: -1,
            },
        ];


        startButton.addEventListener("click",
            function () {

                StartQuizContainer.classList.add("hidden");
                QuestionContainer.classList.remove("hidden");
                displayCurrentQuestion(index) ;

            }
        )


        prevButton.addEventListener("click" , 
            function(){
                index-- ;
                if(index < 0 ){
                    index = 0 ;
                    return ;
                }

                displayCurrentQuestion(index) ;
          }
        )

        nextButton.addEventListener("click" ,
            function(){


                index++ ;


                if(index === quiz.length){

                    QuestionContainer.classList.add("hidden");
                    scoreContainer.classList.remove("hidden") ;
                    displayScore() ;      


                }else{
                    displayCurrentQuestion(index) ;
                }



            }
        )



        function displayCurrentQuestion(index){



            currentQuestionNumber.textContent = `${index+1}` ;
            totalQuestionContainer.textContent = `${quiz.length}`
            Question.innerHTML = "" ;

            const item = quiz[index] ;
            const newQuesContainer = document.createElement("div") ;
            const quest = document.createElement("h1") ;
            quest.textContent = item.question ; 
            newQuesContainer.appendChild(quest) ;
            
            item.options.forEach(
                (option , index)=>{

                    const optionBtn = document.createElement("button") ;
                    optionBtn.textContent = option ;                    

                    if(index == item.isSelected && item.isSelected == item.correctAnswer){
                        optionBtn.style.background = "green" ;
                        
                    }else if( index == item.isSelected  && item.isSelected != item.correctAnswer){
                        optionBtn.style.background = "red" ;
                    }

                    newQuesContainer.appendChild(optionBtn) ;

                
                    if(item.isSelected !== -1)
                            return ;

                    optionBtn.addEventListener("click" ,
                        function(){
                            if(item.isSelected !== -1) 
                                return ;
                                    
                            if(item.correctAnswer === index ){
                                TotalScore ++ ;    
                                optionBtn.style.background = "green" ;
                                                    
                            }else{
                                TotalScore-- ;
                                optionBtn.style.background = "red" ;

                            }  

                            item.isSelected = index ;     
                        }
                    )

                }
            )

            Question.appendChild(newQuesContainer) ;





        }

        function displayScore(){
            score.textContent = `Your score : ${TotalScore}/ ${quiz.length}` ;

            restartButton.addEventListener("click" , 
                function(){
                    index = 0 ;
                    TotalScore = 0 ;
                    for( let i = 0 ; i < quiz.length ; i++){
                        quiz[i].isSelected = -1 ;
                    }
                    scoreContainer.classList.add("hidden") ;

                    StartQuizContainer.classList.remove("hidden") ;

                }
            )


        }



    }
)