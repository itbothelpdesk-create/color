(function () {
  var questions = window.QUESTIONS;
  var teams = window.TEAMS;
  var results = window.RESULTS;

  var picks = []; // e.g. ["A", "C", "B"]

  var $ = function (id) { return document.getElementById(id); };
  var screens = { start: $("start"), quiz: $("quiz"), result: $("result") };

  function show(name) {
    Object.keys(screens).forEach(function (key) {
      screens[key].classList.toggle("hidden", key !== name);
    });
  }

  function renderQuestion() {
    var index = picks.length;
    var q = questions[index];

    $("step").textContent = "Question " + (index + 1) + " of " + questions.length;
    $("question").textContent = q.text;
    $("bar").style.width = (index / questions.length) * 100 + "%";
    $("backBtn").style.visibility = index === 0 ? "hidden" : "visible";

    var box = $("answers");
    box.innerHTML = "";
    Object.keys(q.answers).forEach(function (letter) {
      var btn = document.createElement("button");
      btn.className = "answer";
      btn.innerHTML = '<span class="letter"></span><span class="label"></span>';
      btn.querySelector(".letter").textContent = letter;
      btn.querySelector(".label").textContent = q.answers[letter];
      btn.addEventListener("click", function () { choose(letter); });
      box.appendChild(btn);
    });
  }

  function choose(letter) {
    picks.push(letter);
    if (picks.length < questions.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }

  function showResult() {
    var key = picks.join("");
    var teamName = results[key];
    var team = teams[teamName];

    if (!team) {
      $("teamName").textContent = "No team found";
      $("teamMessage").textContent = "Check config.js: no team is set for combination " + key + ".";
      $("swatch").style.background = "#999";
    } else {
      $("teamName").textContent = teamName;
      $("teamName").style.color = team.hex;
      $("teamMessage").textContent = team.message;
      $("swatch").style.background = team.hex;
    }
    show("result");
  }

  function reset() {
    picks = [];
    $("teamName").style.color = "";
    renderQuestion();
    show("quiz");
  }

  $("startBtn").addEventListener("click", reset);
  $("restartBtn").addEventListener("click", reset);
  $("backBtn").addEventListener("click", function () {
    picks.pop();
    renderQuestion();
  });
})();
