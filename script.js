/*Add your JavaScript here*/


var questionCount= 0;
var earlyBird = 0;
var nightOwl = 0;

console.log(earlyBird);

/*Answers*/
var result = document.getElementById("result");
var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");

//event listeners
q1a1.addEventListener("click",early)
q1a2.addEventListener("click",night)

q2a1.addEventListener("click",night)
q2a2.addEventListener("click",early)

q3a1.addEventListener("click",night)
q3a2.addEventListener("click",early)

q4a1.addEventListener("click",early)
q4a2.addEventListener("click",night)

q5a1.addEventListener("click",early)
q5a2.addEventListener("click",night)

restart.addEventListener("click",reset)

function early()
  {
  //console.log("early bird option");
    earlyBird +=1;
    questionCount +=1;
    disable()

    console.log("question count= "+ questionCount+ " early bird = "+earlyBird)

    if (questionCount == 5)
    {
      console.log("quiz is done")
      results()
    }
   
  }

function night() 
  {
    nightOwl +=1;
    questionCount +=1;
    disable()
    console.log("night owl option = " + nightOwl + " Question ="+ questionCount);
    if (questionCount == 5)
      {
        console.log("quiz is done")
        results()
      }
  }

//results


function results()
{
  if(earlyBird>=3)
  {
    result.innerHTML = "You are an early bird!"
  }
  else if(nightOwl>=3)
  {
    result.innerHTML = "You are a night owl!"
  }
}

function reset()
{
  questionCount= 0;
  earlyBird = 0;
  nightOwl = 0;
  result.innerHTML = "You are a(n)..."

  q1a1.disabled=false;
  q1a2.disabled=false;
  q2a1.disabled=false;
  q2a2.disabled=false;
  q3a1.disabled=false;
  q3a2.disabled=false;
  q4a1.disabled=false;
  q4a2.disabled=false;
  q5a1.disabled=false;
  q5a2.disabled=false;
}

function disable()
{
  if(questionCount==1)
  {
    q1a1.disabled=true;
    q1a2.disabled=true;
  }
  if(questionCount==2)
  {
    q2a1.disabled=true;
    q2a2.disabled=true;
  }
  if(questionCount==3)
  {
    q3a1.disabled=true;
    q3a2.disabled=true;
  }
  if(questionCount==4)
  {
    q4a1.disabled=true;
    q4a2.disabled=true;
  }
  if(questionCount==5)
  {
    q5a1.disabled=true;
    q5a2.disabled=true;
  }
}

