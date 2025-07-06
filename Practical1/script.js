let jsVotes = 0;
let pyVotes = 0;
let javaVotes = 0;

function vote(language) {
  if (language === "JavaScript") {
    jsVotes++;
    document.getElementById("js-count").innerText = jsVotes;
  } else if (language === "Python") {
    pyVotes++;
    document.getElementById("py-count").innerText = pyVotes;
  } else if (language === "Java") {
    javaVotes++;
    document.getElementById("java-count").innerText = javaVotes;
  }
}

// Update all vote counts
function updateVotes() {
  document.getElementById("js-count").innerText = jsVotes;
  document.getElementById("py-count").innerText = pyVotes;
  document.getElementById("java-count").innerText = javaVotes;
}

// Simulate real-time voting
setInterval(() => {
  const languages = ["JavaScript", "Python", "Java"];
  const randomLang = languages[Math.floor(Math.random() * languages.length)];
  vote(randomLang);
}, 2000);

// Initial render
updateVotes();
