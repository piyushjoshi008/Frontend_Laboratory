
const output = document.getElementById("console-output");
const form = document.getElementById("console-form");
const input = document.getElementById("console-input");

function show(text) {
  output.innerHTML += "<p>" + text + "</p>";
  output.scrollTop = output.scrollHeight;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const command = input.value.trim().toLowerCase();

  if (command === "help") {
    show("Type one of these: about, skills, goals, projects, clear");
  } else if (command === "about") {
    show("I'm Piyush Joshi, a B.Tech CSE student who enjoys Java, DSA and frontend development.");
  } else if (command === "skills") {
    show("HTML, CSS, JavaScript, Java, DSA, Git and GitHub.");
  } else if (command === "goals") {
    show("Become a full-stack developer and contribute to open source.");
  } else if (command === "projects") {
    show("Portfolio website, To-Do List app, Library Management (Java), DSA practice repo.");
  } else if (command === "clear") {
    output.innerHTML = "";
  } else {
    show("Unknown command. Type help to see the options.");
  }

  input.value = "";
});

show("Welcome! Type help and press Enter.");
