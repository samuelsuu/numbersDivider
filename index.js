function highlightDivisor() {
  var userInput = document.getElementById("number").value;

  document.getElementById("output").innerHTML= "";

  for (var i = 1; i<=9; i++){
    if(userInput % i === 0){
      var span = document.createElement("span");
      span.textContent = i;
      document.getElementById("output").appendChild(span);
    }
  }
}

document.getElementById("number").addEventListener("input", highlightDivisor);