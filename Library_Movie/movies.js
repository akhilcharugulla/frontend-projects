function stat() {
  var status = document.getElementById("vision").value;
  if (status == "New Movie") {
    document.getElementById("vision").value = "Cancel";
    document.getElementById("addmovie").style.display = "block";
  } else if (status == "Cancel") {
    document.getElementById("vision").value = "New Movie";
    document.getElementById("addmovie").style.display = "none";
  } else {
  }
}

var mylibrary = [];
var movieslist = document.getElementById("movie-list");
for (var i = 1; i < 3; i++) {
  mylibrary.push(new Cinemas(`movie ${i}`, `director ${i}`));
}

function Cinemas(name, director, watched = false) {
  this.name = name;
  this.director = director;
  this.watched = watched;
}

document.addEventListener("DOMContentLoaded", runApp);
function runApp() {
  displaycontent();
}

function AddMovie() {
  var mvename = document.getElementById("nam").value;
  var diename = document.getElementById("direc").value;
  var che = document.getElementById("tick").checked;
  if (mvename !== "" && diename !== "") {
    mylibrary.push(new Cinemas(mvename, diename, che));
    displaycontent();
    clearForm();
  } else {
    alert("form not filled");
  }
}

function displaycontent() {
  movieslist.innerHTML = "";
  for (var i = 0; i < mylibrary.length; i++) {
    movieslist.append(createmoviecard(i));
  }
}

function createmoviecard(index) {
  var ab = document.createElement("div");
  ab.classList.add("movie_name");
  ab.innerHTML = `<h3>${mylibrary[index].name}</h3>
  <h3>${mylibrary[index].director}</h3>
  <span class="button-status" id="status-${index}" onclick="changeStatus(${index})">${
    mylibrary[index].watched ? "Alreay watched" : "Not yet watched"
  }</span>
  <button class="remove-btn" onclick="removemovie(${index})">Remove Book</button>`;
  return ab;
}

function removemovie(index) {
  mylibrary.splice(index, 1);
  displaycontent();
  return;
}

function changeStatus(index) {
  mylibrary[index].watched = !mylibrary[index].watched;
  let movieStatus = document.querySelector(`#status-${index}`);
  movieStatus.textContent = mylibrary[index].watched
    ? "Already Watched"
    : "Not yet Watched";
  return;
}

function clearForm() {
  document.getElementById("nam").value = "";
  document.getElementById("direc").value = "";
  document.getElementById("tick").checked = false;
}
