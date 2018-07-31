/* Buzzfeed Quiz
Create a Buzzfeed Quiz with 5 questions. Create a method for determining what
the results will be. Combine our knowledge of HTML, JS, and CSS to get hired at
Buzzfeed.
1. Finish the function 'creatQuestions'
  a. Make sure you have a list of dictionary of questions
  b. Create the questions and options (aka the radio buttons) DYNAMICALLY
  in JavaScript. In other words, don't hard code the questions; we want to use
  code to access our list of dictionary of questions.
      (HINT 1: HTML is just a bunch of STRINGS. Create HTML code with JS by
      creating strings with tags i.e. ('<input type="radio" name="group" value ="asdf"'))
      (HINT 2: Group the radio button inputs for each question using the SAME name
       or class)
  c. Make sure our changes are reflected in the HTML
      (HINT: getElementById and change its innerHTML)
  d. Call this function WHEN THE PAGE LOADS!!!!
      (HINT: wrap the function in paranthesis like in Overwatch Hero workshop)
2. Define the function 'submitAnswer'
  a. We want to iterate through each group of questions to see what the user
  selected.
  (HINT: a selected answer is "checked"; look up checked radio button)
  b. Determine how your Buzzfeed personality is predicted
      ideas (easy): Assign points to each of your option. If an option makes the
      user a Broccoli, assign a low point (0,1). If an option makes the user a Carrot,
      assign medium high points (4,5). If an option makes the user a Celery,
      assign high points (10). All numbers selected are arbitrary; you decide.
          0-15 points = Broccoli
          16-30 points = Carrot
          30-45 points = Celerey
      ideas (medium):
          Determine which value was selected the MAXIMUM times
          Need to handle TIES.
3. Make more questions, add CSS, add images, use BootStrap
*/
(function tacobellreee(){

  /*TODO: ADD MORE QUESTIONS. Create a field for images*/

  var questions = [
    {
      "question": "wat is ur fave anamal??",
      "name": "animals",
      "answers" : {
        "doge": 9,
        "kitty kat": 7,
        "tortle!!": 1
      }
    },
    {
      "question": "wat is ur faveorte cookiez? lolz!",
      "name": "cookies",
      "answers" : {
        "oatmeal raisin": 4,
        "chocolit lik data 1 cait from nekpara!": 2,
        "i relly luv sugar cookiez!": 3
      }
    },
    {
      "question": "wat is ur faverite sings??",
      "name": "singers",
      "answers" : {
        "avril lavine": 2,
        "1D~!!": 5,
        "da backstreet boooyzsss": 1
      }
    },
    {
      "question": "what is ur FAVRITE ANAMAY?",
      "name": "anime",
      "answers" : {
        "nobody actually reads any of these options": 2,
        "like you dont pick one favorite, you need to be more specific": 5,
        "ew anime": 1,
        "owo": 6
      }
    }
  ];

  var html = "";
  for (var i = 0; i < questions.length; i++){
    html += questions[i]["question"] + "<br>";
    for (var key in questions[i]["answers"]){
      html += '<input type="radio" name="' + questions[i]["name"] + '" value="';
      html += questions[i]["answers"][key] + '">' + key + "<br>";
    }
  }

  /* TODO: set the element "survey" 's innerHTML to html'*/
  document.getElementById("quiz").innerHTML = html;
})();

function tacobell(){
  var total = 0;
  var categories = ["singers", "anime", "animals", "cookies"];

  /* TODO:  Determine your winning "personality" */
var score = {
  "UwU": 0,
  ":3": 0,
  "X3": 0
}

for (var i = 0; i < categories.length; i++) {
  var cat = document.getElementsByName(categories[i]);
  for (var i = 0; i < cat.length; i++){
    if (cat[i].checked){
      total += parseInt(cat[i].value);
    }
  }
}

var face;
if (total < 5){
  face = "UwU";
} else if (total < 10) {
  face = ":3";
} else {
  face = "X3";
}


  /*TODO: Replace the empty quotes with the result of the quiz*/
  document.getElementById("results").innerHTML = "ur spr kawaii faec is "  + face;
}
