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

let lis = document.querySelectorAll('li');
console.log(lis);

// Descripción y precio de las imágenes

li_test = lis[0];
img = li_test.querySelector('img');
p = li_test.querySelector('p');
img.addEventListener('click', () => p.style.display = 'block');


// for (li of lis) {
//   img = li.querySelector('img');
//   p = li.querySelector('p');
//   console.log(p);
// }