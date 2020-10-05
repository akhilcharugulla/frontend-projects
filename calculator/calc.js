function numbercall(val) {
  document.getElementById("display").innerHTML += val;
  console.log(typeof +val);
}

function operatorcall(op) {
  document.getElementById("display").innerHTML += op;
}

//function that evaluates the digit and return result
function equalscall() {
  let hist = document.getElementById("history-data");
  let x = document.getElementById("display").innerHTML;
  console.log(x, "empty akhil");
  if (x == "") {
    console.log("inif");
    document.getElementById("display").innerHTML = "Enter some data";
  } else {
    let y = eval(x);
    document.getElementById("display").innerHTML = y;
    var subelement = document.createElement("div");
    subelement.textContent = x + "=" + y;
    hist.appendChild(subelement);
  }
}

window.addEventListener("keydown", function (e) {
  const button = document.querySelector(`button[data-key="${e.keyCode}"]`);
  console.log(button, "akhilbutton");
  if (!button) return;
  button.click();
});

//function that clear the display
function clearcall() {
  document.getElementById("display").innerHTML = "";
}

function sqrtcall() {
  var num = document.getElementById("display").innerHTML;
  num = Number(num);
  var ans = Math.sqrt(num).toFixed(5);
  document.getElementById("display").innerHTML = ans;
}

function factorialcall() {
  var num = document.getElementById("display").innerHTML;
  num = Number(num);
  console.log(num, "fact akhil");
  let fact = 1;
  for (var i = num; i > 0; i--) {
    fact = fact * i;
  }
  document.getElementById("display").innerHTML = fact;
}

function plusminuscall() {
  var num = document.getElementById("display").innerHTML;
  num = Number(num);
  if (num == 0) {
    document.getElementById("display").innerHTML = num;
  } else if (num > 0) {
    num = -num;
    document.getElementById("display").innerHTML = num;
  } else {
    num = Math.abs(num);
    document.getElementById("display").innerHTML = num;
  }
}

function lettererase() {
  var num = document.getElementById("display").innerHTML;
  num = num.split("");
  txt = "";
  for (var k = 0; k < num.length - 1; k++) {
    txt += num[k];
  }
  document.getElementById("display").innerHTML = txt;
}

function squarecall() {
  var num = document.getElementById("display").innerHTML;
  num = Number(num);
  var ans = num * num;
  document.getElementById("display").innerHTML = ans;
}

function clearhistory() {
  document.getElementById("history-data").innerHTML = "";
}
