/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
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
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
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
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "In an electric motor, the energy transformation is from",  ///// Write the question inside double quotes
      answers: {
        a: "electrical to chemical",                  ///// Write the option 1 inside double quotes
        b: "chemical to light",                  ///// Write the option 2 inside double quotes
        c: "mechanical to electrical",                  ///// Write the option 3 inside double quotes
        d: "electrical to mechanical"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },

    {
     question: "A commutator changes the direction of current in the coil of",  ///// Write the question inside double quotes
      answers: {
        a: "a DC motor",                  ///// Write the option 1 inside double quotes
        b: "a DC motor and an AC generator",                  ///// Write the option 2 inside double quotes
        c: "a DC motor and a DC generator",                  ///// Write the option 3 inside double quotes
        d: "an AC generator"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    									                  ///// this line
 {
     question: "Which of the following devices works on the principle of electromagnetic induction?",  ///// Write the question inside double quotes
      answers: {
        a: "Ammeter",                  ///// Write the option 1 inside double quotes
        b: "Voltmeter",                  ///// Write the option 2 inside double quotes
        c: "Generator",                  ///// Write the option 3 inside double quotes
        d: "Galvanometer"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },    

     {
     question: "A device used for measuring small currents due to changing magnetic field is known as ",  ///// Write the question inside double quotes
      answers: {
        a: "galvanometer",                  ///// Write the option 1 inside double quotes
        b: "ammeter",                  ///// Write the option 2 inside double quotes
        c: "voltmeter",                  ///// Write the option 3 inside double quotes
        d: "potentiometer"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },    


     {
     question: "An electric generator actually acts as",  ///// Write the question inside double quotes
      answers: {
        a: "source of electric charge",                  ///// Write the option 1 inside double quotes
        b: "source of heat energy ",                  ///// Write the option 2 inside double quotes
        c: "an electromagnet",                  ///// Write the option 3 inside double quotes
        d: "a converter of energy"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },    

    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////