(function() {
    const myQuestions = [
      {
        question: "How much saliva our mouth produce in one day?",
        answers: {
          a: "20g",
          b: "1 liter",
          c: "500g"
        },
        correctAnswer: "b"
      },
      {
        question: "How many skin cells we loose every year?",
        answers: {
          a: "2kg",
          b: "2.45kg",
          c: "4kg"
        },
        correctAnswer: "c"
      },
      {
        question: "Our left lung is .... times smaller than right one.",
        answers: {
          a: "20 times",
          b: "10 times",
          c: "5 times"
        },
        correctAnswer: "b"
      },
      {
        question: "Your blood constitutes ..... of your body",
        answers: {
          a: "25%",
          b: "8%",
          c: "50%"
        },
        correctAnswer: "b"
      },
      {
        question: "A human forgets ..... of his dreams.",
        answers: {
          a: "50%",
          b: "80%",
          c: "90%"
        },
        correctAnswer: "c"
      },
      {
        question: "The total weight of bacteria in human body is ....",
        answers: {
          a: "2g",
          b: "200mg",
          c: "2kg"
        },
        correctAnswer: "c"
      },
      {
        question: "The total time taken by heart to pump blood and get it back is .....",
        answers: {
          a: "2s",
          b: "0.8s",
          c: "2.8s"
        },
        correctAnswer: "b"
      },
      {
        question: "One quater of our bones are in our .....",
        answers: {
          a: "hands",
          b: "skull",
          c: "feet"
        },
        correctAnswer: "c"
      },
      {
        question: "The human body contains enough fat to make ..... bars of soap",
        answers: {
          a: "Seven",
          b: "Two",
          c: "Hundred"
        },
        correctAnswer: "a"
      },
      {
        question: "80% of brain is ......",
        answers: {
          a: "fats",
          b: "water",
          c: "proteins"
        },
        correctAnswer: "b"
      },
    ];
  
    function buildQuiz() {
      // we'll need a place to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // we'll want to store the list of answer choices
        const answers = [];
  
        // and for each available answer...
        for (letter in currentQuestion.answers) {
          // ...add an HTML radio button
          answers.push(
            `<label>
               <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
             </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="slide">
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
           </div>`
        );
      });
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          // if answer is wrong or blank
          // color the answers red
          answerContainers[questionNumber].style.color = "red";
        }
      });
      
      // show number of correct answers out of total
      resultsContainer.innerHTML = `
      Result</br>
      ${numCorrect} out of ${myQuestions.length}
      `;
    if(numCorrect >=5){
      resultsContainer.style.color='green';
      quizContainer.innerHTML= 'You Passed It..';
      quizContainer.style.fontSize="35px";
      quizContainer.style.color="green";
      submitButton.style.display="none";
      previousButton.style.display="none";
    }else {
      resultsContainer.style.color='red';
      quizContainer.innerHTML= 'No Worries Try Again';
      quizContainer.style.fontSize="35px";
      submitButton.style.display="none";
      previousButton.style.display="none";
    }
    
    }
     
    function showSlide(n) {
      slides[currentSlide].classList.remove("active-slide");
      slides[n].classList.add("active-slide");
      currentSlide = n;
      
      if (currentSlide === 0) {
        previousButton.style.display = "none";
      } else {
        previousButton.style.display = "inline-block";
      }
      
      if (currentSlide === slides.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
      } else {
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
      }
    }
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
    let quizContainer = document.getElementById("quiz");
    let resultsContainer = document.getElementById("results");
    let submitButton = document.getElementById("submit");

    // display quiz right away
    buildQuiz();
  
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    showSlide(0);
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();  