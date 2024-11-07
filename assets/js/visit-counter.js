fetch("https://raw.githubusercontent.com/pereradrian/pereradrian.github.io/main/assets/data/visit-counter.json")
.then(response => response.json())
.then(data => {
  document.getElementById("visit-counter").innerText = data.visits;
})
.catch(error => console.error("Error loading counter:", error));