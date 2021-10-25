var scrolls = document.querySelectorAll('.scroll-wrapper > div');

// Descripción y precio de las imágenes

for (scroll of scrolls) {
  let img = scroll.querySelector('img');
  let text = scroll.querySelector('div');
  console.log(text.style.display);
  img.addEventListener('mouseover', () => text.style.display = 'block');
  img.addEventListener('mouseout', () => text.style.display = 'none');
}


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
