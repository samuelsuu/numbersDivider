function highlightDivisor() {
  var userInput = document.getElementById("number").value;

  // Clear previous content
  document.getElementById("output").innerHTML = "";

  // Check if the input is not empty
  if (userInput !== "") {
    for (var i = 1; i <= 1000; i++) {
      if (userInput % i === 0) {
        var span = document.createElement("span");
        span.textContent = i;
        document.getElementById("output").appendChild(span);
      }
    }
  }
}

document.getElementById("number").addEventListener("input", highlightDivisor);