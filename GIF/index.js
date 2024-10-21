// Selectăm imaginea afișată pe ecran
const gif = document.querySelector("img");

// Vectorul ce conține sursele tuturor imaginilor
const images = [
  "img/0.png",
  "img/1.png",
  "img/2.png",
  "img/3.png",
  "img/4.png",
  "img/5.png",
];

// Inițializăm counterul pentru a ține evidența imaginii curente
let counter = 0;

// Funcția care schimbă imaginea afișată la fiecare 100ms
function changeImage() {
  // Incrementăm counterul
  counter++;

  // Resetăm counterul dacă ajunge la capătul array-ului
  if (counter === 6) {
    counter = 0;
  }

  // Setăm noua sursă a imaginii
  gif.src = images[counter];
}

// Schimbăm imaginea la fiecare 100ms
setInterval(changeImage, 100);
