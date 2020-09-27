var computerscore = 0,
  yourscore = 0,
  yourchoice,
  computerchoice,
  winningscore = 5;

const setsFunction = () => {
  document.getElementById("main").style.display = "none";
  document.getElementById("inbox").style.display = "block";
  document.getElementById("displayscore").style.display = "block";
};

const getComputerChoice = () => {
  const arr = ["rock", "paper", "scissor"];
  computerchoice = arr[Math.floor(Math.random() * arr.length)];
  var dont = document.getElementById("computercontainer");
  var abc = document.createElement("p");
  abc.textContent = computerchoice;
  dont.appendChild(abc);
  document.getElementById("cchoice").innerHTML = computerchoice;
};
const evaluateScore = () => {
  console.log("evaluation is called");
  if (yourchoice == computerchoice) {
    document.getElementById("change").innerHTML = "Oops its a Draw";
  } else if (yourchoice == "rock" && computerchoice == "scissor") {
    yourscore++;
    document.getElementById("change").innerHTML = "Congrats You Won This Round";
    document.getElementById("yscore").innerHTML = yourscore;
  } else if (yourchoice == "rock" && computerchoice == "paper") {
    computerscore++;
    document.getElementById("change").innerHTML = "Sorry You Lose This Round";
    document.getElementById("cscore").innerHTML = computerscore;
  } else if (yourchoice == "paper" && computerchoice == "rock") {
    yourscore++;
    document.getElementById("change").innerHTML = "Congrats You Won This Round";
    document.getElementById("yscore").innerHTML = yourscore;
  } else if (yourchoice == "paper" && computerchoice == "scissor") {
    computerscore++;
    document.getElementById("change").innerHTML = "Sorry You Lose This Round";
    document.getElementById("cscore").innerHTML = computerscore;
  } else if (yourchoice == "scissor" && computerchoice == "paper") {
    yourscore++;
    document.getElementById("change").innerHTML = "Congrats You Won This Round";
    document.getElementById("yscore").innerHTML = yourscore;
  } else if (yourchoice == "scissor" && computerchoice == "rock") {
    computerscore++;
    document.getElementById("change").innerHTML = "Sorry You Lose This Round";
    document.getElementById("cscore").innerHTML = computerscore;
  }
  isMatchOver();
};

const rock = () => {
  yourchoice = "rock";

  var dont = document.getElementById("playercontainer");
  var abc = document.createElement("p");
  abc.textContent = "rock";
  dont.appendChild(abc);

  document.getElementById("ychoice").innerHTML = yourchoice;
  getComputerChoice();
  evaluateScore();
};

const paper = () => {
  yourchoice = "paper";

  var dont = document.getElementById("playercontainer");
  var abc = document.createElement("p");
  abc.textContent = "paper";
  dont.appendChild(abc);

  document.getElementById("ychoice").innerHTML = yourchoice;
  getComputerChoice();
  evaluateScore();
};

const scissor = () => {
  yourchoice = "scissor";

  var dont = document.getElementById("playercontainer");
  var abc = document.createElement("p");
  abc.textContent = "scissor";
  dont.appendChild(abc);

  document.getElementById("ychoice").innerHTML = yourchoice;
  getComputerChoice();
  evaluateScore();
};
const newGame = () => {
  document.getElementById("newbuttons").addEventListener("click", () => {
    window.location.reload();
  });
};

const isMatchOver = () => {
  var yfinal = document.getElementById("yscore").innerHTML;
  var cfinal = document.getElementById("cscore").innerHTML;
  if (cfinal == "5") {
    document.getElementById("change").innerHTML =
      "Sorry! You've lost the game.";
    document.getElementById("dispbuttons").style.display = "none";
    document.getElementById("newbuttons").style.display = "inline";
    document.getElementById("newsetbuttons").style.display = "inline";
  } else if (yfinal == "5") {
    document.getElementById("change").innerHTML =
      "Congratulation! You've won the game.";
    document.getElementById("dispbuttons").style.display = "none";
    document.getElementById("newbuttons").style.display = "inline";
    document.getElementById("newsetbuttons").style.display = "inline";
  } else {
  }
};
