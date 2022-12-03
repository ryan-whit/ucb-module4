

// Store a list of "questions"
// Questions should have multiple choice options, where the
// options are buttons, and the correct answer is stored in
// the questions "object"(?)


// Start with one question
//   - Needs question statement
//   - Needs list of answers
//   - Answers need to be buttons

var questionStatement = "This is the question statement.";

var answerOptions = {
    "a": true,
    "b": false,
    "c": false,
    "d": false,
};

var questionField = document.querySelector(".code-questions");
var questionFieldState = questionField.getAttribute("display");

if (questionFieldState === null) {
    questionFieldState = "contents";
    console.log("setting field state")
};
