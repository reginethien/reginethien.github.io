
document.getElementById("NextPageIntro").addEventListener("click", function () {
   
    document.getElementById("intro").style.display = "none";
    
    document.getElementById("intro2").style.display = "block";
    
});


document.getElementById("NextPageQuiz").addEventListener("click", function () {
    
    document.getElementById("intro2").style.display = "none";
    
    document.getElementById("lesson1").style.display = "block";
});


document.getElementById("startquiz1").addEventListener("click", function () {
   
    document.getElementById("lesson1").style.display = "none";
   
    document.getElementById("quiz1").style.display = "block";



  
    const quizQuestions = [
        {
            question: "Question 1/2: Which of the following can Gen AI do?",
            options: ["Give us new ideas & solutions", "Create content such as text & images", "Exercise critical thinking"],
            correct: 1,
            image: "/Users/reginethien/Desktop/ThienAiXinRegine_INTDES_Assignment2/Green and White Blackboard Chalk Group Project Presentation (1) 2", // Replace with the actual image path for question 1
            mascotImage: "/Users/reginethien/Desktop/ThienAiXinRegine_INTDES_Assignment2" // Mascot image for question 1
        },
        {
            question: "Question 2/2: Which of these are correct examples of Gen AI software?",
            options: ["Google Search & ChatGPT", "ChatGPT & Midjourney", "Google Translate & Safari"],
            correct: 1,
            image: "/Users/reginethien/Desktop/ThienAiXinRegine_INTDES_Assignment2/Green and White Blackboard Chalk Group Project Presentation (1) 2", // Replace with the actual image path for question 2
            mascotImage: "/Users/reginethien/Desktop/ThienAiXinRegine_INTDES_Assignment2" // Mascot image for question 2
        },
        
    ];
    

let currentQuestionIndex = 0;


function loadQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    document.getElementById("questionText").innerText = currentQuestion.question;

    const optionsContainer = document.getElementById("optionsContainer");
    optionsContainer.innerHTML = ""; 

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.className = "optionButton";
        button.addEventListener("click", () => checkAnswer(index));
        optionsContainer.appendChild(button);
    });

    document.getElementById("feedback").innerText = ""; 
    document.getElementById("nextQuestion").style.display = "none"; 
}


function checkAnswer(selectedIndex) {
    const correctIndex = quizQuestions[currentQuestionIndex].correct;
    const feedback = document.getElementById("feedback");

    if (selectedIndex === correctIndex) {
        feedback.innerText = "That's right!";
        feedback.style.color = "green";
        document.getElementById("nextQuestion").style.display = "block"; 
    } else {
        feedback.innerText = "Hmm...Try again?";
        feedback.style.color = "red";
    }
}


document.getElementById("nextQuestion").addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz1").innerHTML = `
    <h2>Quiz 1 Completed! Well done :)</h2>
    <div style="display: flex; justify-content: center; align-items: center; flex-direction: column; height: 100vh;">
        <img src="GennyMascotYellow.jpg" alt="GennyMascotYellow" style="max-width: 100px; height: auto; margin-top: -300px;">
        <p style="text-align: center;"><strong>Keep learning and exploring!</strong></p>
        <button id="nextButton" style="background-color: palevioletred; color: white; border: none; padding: 10px 15px; cursor: pointer; border-radius: 5px; margin-top: -10px;">Next Lesson</button>
    </div>
`;
document.getElementById("nextButton").addEventListener("click", function () {
    
    document.getElementById("quiz1").style.display = "none";
    document.getElementById("lesson2").style.display = "block"; 
});
    }
});


document.getElementById("lesson2continue").addEventListener("click", function () {
    
    document.getElementById("lesson2").style.display = "none";
  
    document.getElementById("lesson2p2").style.display = "block";
});


document.getElementById("lesson2p2continue").addEventListener("click", function () {
    
    document.getElementById("lesson2p2").style.display = "none";
    
    document.getElementById("quiz2").style.display = "block";
});


function startQuiz() {
    document.getElementById("intro2").style.display = "none"; 
    document.getElementById("quiz1").style.display = "block"; 
    loadQuestion(); 
}


startQuiz();


document.getElementById("lesson2p2continue").addEventListener("click", function () {
    
    document.getElementById("lesson2p2").style.display = "none";
    
    document.getElementById("quiz2").style.display = "block";
    
    loadQuiz2Question();
});

});

const quiz2Questions = [
    {
        question: "Question 1/2: Which of the following is correct? A good Gen AI prompt should include:",
        options: ["personality, task, audience, content, formality", "persona, target, audio, context, format", "persona, task, audience, context, format"],
        correct: 2,
    },
    {
        question: "Question 2/2: Genny wants to know more about Gen AI with the help of ChatGPT. She prompts AI with this: “How can I use AI wisely?” Is this a strong prompt?",
        options: ["Yes, she is straight-forward", "No, it is vague"],
        correct: 1,
    },
];

let currentQuiz2QuestionIndex = 0;


function loadQuiz2Question() {
    const questionElement = document.getElementById("quiz2questionText");
    const optionsContainer = document.getElementById("quiz2optionsContainer");

    
    questionElement.innerText = "";
    optionsContainer.innerHTML = "";

   
    const currentQuestion = quiz2Questions[currentQuiz2QuestionIndex];

    
    questionElement.innerText = currentQuestion.question;

    
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button"); 
        button.innerText = option; 
        button.className = "optionButton"; 
        button.addEventListener("click", () => checkQuiz2Answer(index)); 
        optionsContainer.appendChild(button); 
    });

    
    document.getElementById("quiz2feedback").innerText = "";
    document.getElementById("quiz2nextQuestion").style.display = "none";
}


function checkQuiz2Answer(selectedIndex) {
    const correctIndex = quiz2Questions[currentQuiz2QuestionIndex].correct;
    const feedback = document.getElementById("quiz2feedback");

    if (selectedIndex === correctIndex) {
        feedback.innerText = "That's right!";
        feedback.style.color = "green";
        document.getElementById("quiz2nextQuestion").style.display = "block"; 
    } else {
        feedback.innerText = "Hmm...Try again?";
        feedback.style.color = "red";
    }
}


document.getElementById("quiz2nextQuestion").addEventListener("click", () => {
    currentQuiz2QuestionIndex++;
    if (currentQuiz2QuestionIndex < quiz2Questions.length) {
        loadQuiz2Question(); 
    } else {
        
        document.getElementById("quiz2").innerHTML = `
    <div style="text-align: center; display: flex; flex-direction: column; align-items: center;">
        <h2>Quiz 2 Completed! Great Job!</h2>
        <img src="GennyMascotYellow.jpg" alt="GennyMascotYellow" style="width: 100px; height: auto; margin: 20px 0;">
        <p>So far, so good! Let's keep going!</p>
        <button id="quiz2nextLesson" style="background-color: palevioletred; color: white; border: none; padding: 10px 15px; cursor: pointer; border-radius: 5px; margin-top: 10px;">Next Lesson</button>
    </div>
`;
        
        document.getElementById("quiz2nextLesson").addEventListener("click", function () {
           
            document.getElementById("quiz2").style.display = "none";
            document.getElementById("lesson3").style.display = "block"; 
        });
    }
});


document.getElementById("lesson3continue").addEventListener("click", function () {
    
    document.getElementById("lesson3").style.display = "none";
    document.getElementById("lesson3p2").style.display = "block"; 
});


document.getElementById("lesson3next3").addEventListener("click", function () {
   
    document.getElementById("lesson3p2").style.display = "none";
    document.getElementById("lesson3p3").style.display = "block"; 
});


document.getElementById("startquiz3").addEventListener("click", function () {
   
    document.getElementById("lesson3p3").style.display = "none";
    
    document.getElementById("quiz3").style.display = "block";
    
    startQuiz3();
});

const quiz3Questions = [
    {
        question: "Question 1/3: AI is helpful for many tasks, but we should be careful and vigilant when using it. True or False?",
        options: ["True", "False"],
        correct: 0,
    },
    {
        question: "Question 2/3: There are only three risks caused from the misuse of Gen AI: Video and audio deepfakes, and text plagiarism. True or False?",
        options: ["True", "False"],
        correct: 1,
    },
    {
        question: "Question 3/3: What can we do to prevent AI misuse?",
        options: ["Educate ourselves on the ethical usage of Gen AI", "Conduct occasional risk assessments for our AI projects", "Do our research to verify AI-generated information", " All of the above"],
        correct: 3,
    }
];

let currentQuiz3QuestionIndex = 0;


function startQuiz3() {
    loadQuiz3Question();
}

function loadQuiz3Question() {
    const currentQuestion = quiz3Questions[currentQuiz3QuestionIndex];
    const questionText = document.getElementById("quiz3questionText");
    const optionsContainer = document.getElementById("quiz3optionsContainer");

    
    questionText.innerText = "";
    optionsContainer.innerHTML = "";
    document.getElementById("quiz3feedback").innerText = ""; 
    document.getElementById("quiz3nextQuestion").style.display = "none"; 

    
    questionText.innerText = currentQuestion.question;

    
    if (currentQuiz3QuestionIndex === 2) {
        optionsContainer.className = "quiz3-options-grid"; 
    } else {
        optionsContainer.className = ""; 
    }

    
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.className = "optionButton"; 
        button.addEventListener("click", () => checkQuiz3Answer(index));
        optionsContainer.appendChild(button);
    });
}


function checkQuiz3Answer(selectedIndex) {
    const correctIndex = quiz3Questions[currentQuiz3QuestionIndex].correct;
    const feedback = document.getElementById("quiz3feedback");

    if (selectedIndex === correctIndex) {
        feedback.innerText = "That's right!";
        feedback.style.color = "green";
        document.getElementById("quiz3nextQuestion").style.display = "block"; 
    } else {
        feedback.innerText = "Hmm...Try again?";
        feedback.style.color = "red";
    }
}



document.getElementById("quiz3nextQuestion").addEventListener("click", () => {
    currentQuiz3QuestionIndex++;
    if (currentQuiz3QuestionIndex < quiz3Questions.length) {
        loadQuiz3Question(); 
    } else {
    
        document.getElementById("quiz3").innerHTML = `
    <div style="text-align: center; display: flex; flex-direction: column; align-items: center;">
        <h2>Woah! You've completed 'What you need to know about Generative AI'! Well Done!</h2>
        <div class="side-by-side">
        <img src="GennyMascotYellow.jpg" alt="GennyMascotYellow" style="width: 180px; height: auto; margin: 20px 0;">
        <img src="endingspeechbubble.jpg" alt="endingspeechbubble.jpg" style="width: 180px; height: auto; margin: 20px 0;">
        </div>
        <p>I hope that you had fun learning about the basics of AI! Always remember to use AI safely and responsibly!</p>
    </div>
`;
    }
});