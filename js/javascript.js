function myFunction(x) { 
    x.classList.toggle("change");
    var y = document.getElementById("myLinks");
    if (y.style.display == "block") {
      y.style.display = "none";
    } else {
      y.style.display = "block";
      y.style.position = "fixed";
    }
  }

  function dissapear(y) {
    y.style.display = "none";
    var x = document.getElementsByClassName("topnav")[0];
    x.classList.toggle("change");
  }