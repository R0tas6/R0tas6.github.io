const imagesData = [
  { id: 1, sexe: "femme", nom: "Agnès", path: "Agnès.jpeg" },
  { id: 2, sexe: "femme", nom: "Aisha", path: "Aisha.jpeg" },
  { id: 3, sexe: "femme", nom: "Amandine", path: "Amandine.jpeg" },
  { id: 4, sexe: "femme", nom: "Amara", path: "Amara.jpeg" },
  { id: 5, sexe: "femme", nom: "Amina", path: "Amina.jpeg" },
  { id: 6, sexe: "homme", nom: "Anatoly", path: "Anatoly.jpeg" },
  { id: 7, sexe: "homme", nom: "Arthur", path: "Arthur.jpeg" },
  { id: 8, sexe: "femme", nom: "Ayşe", path: "Ayşe.jpeg" },
  { id: 9, sexe: "homme", nom: "Boris", path: "Boris.jpeg" },
  { id: 10, sexe: "femme", nom: "Brigitte", path: "Brigitte.jpeg" },
  { id: 11, sexe: "femme", nom: "Camille", path: "Camille.jpeg" },
  { id: 12, sexe: "femme", nom: "Chiara", path: "Chiara.jpeg" },
  { id: 13, sexe: "femme", nom: "Chloé", path: "Chloé.jpeg" },
  { id: 14, sexe: "homme", nom: "Charles", path: "Charles.jpeg" },
  { id: 15, sexe: "femme", nom: "Clémentine", path: "Clémentine.jpeg" },
  { id: 16, sexe: "homme", nom: "Diego", path: "Diego.jpeg" },
  { id: 17, sexe: "femme", nom: "Djamila", path: "Djamila.jpeg" },
  { id: 18, sexe: "homme", nom: "Dorian", path: "Dorian.jpeg" },
  // { id: 19, sexe: "homme", nom: "Elias", path: "Elias.jpeg" },
  { id: 20, sexe: "homme", nom: "Elijah", path: "Elijah.jpeg" },
  { id: 21, sexe: "homme", nom: "Eli", path: "Eli.jpeg" },
  { id: 22, sexe: "homme", nom: "Enzo", path: "Enzo.jpeg" },
  { id: 23, sexe: "femme", nom: "Erika", path: "Erika.jpeg" },
  { id: 24, sexe: "homme", nom: "Farid", path: "Farid.jpeg" },
  { id: 25, sexe: "femme", nom: "Fatou", path: "Fatou.jpeg" },
  { id: 26, sexe: "femme", nom: "Hanna", path: "Hanna.jpeg" },
  { id: 27, sexe: "femme", nom: "Helena", path: "Helena.jpeg" },
  { id: 28, sexe: "homme", nom: "Hugo", path: "Hugo.jpeg" },
  { id: 30, sexe: "homme", nom: "Jamal", path: "Jamal.jpeg" },
  { id: 31, sexe: "homme", nom: "Jean-Baptiste", path: "Jean-Baptiste.jpeg" },
  { id: 32, sexe: "homme", nom: "Jean-Michel", path: "Jean-Michel.jpeg" },
  { id: 33, sexe: "homme", nom: "Jérémy", path: "Jérémy.jpeg" },
  { id: 34, sexe: "homme", nom: "Jin-Ho", path: "Jin-Ho.jpeg" },
  { id: 36, sexe: "homme", nom: "Kévin", path: "Kévin.jpeg" },
  { id: 37, sexe: "homme", nom: "Kofi", path: "Kofi.jpeg" },
  { id: 38, sexe: "homme", nom: "Kwame", path: "Kwame.jpeg" },
  { id: 39, sexe: "femme", nom: "Léa", path: "Léa.jpeg" },
  { id: 40, sexe: "femme", nom: "Leïla", path: "Leïla.jpeg" },
  { id: 41, sexe: "homme", nom: "Liem", path: "Liem.jpeg" },
  { id: 42, sexe: "homme", nom: "Lucas", path: "Lucas.jpeg" },
  { id: 43, sexe: "femme", nom: "Lucia", path: "Lucia.jpeg" },
  { id: 44, sexe: "homme", nom: "Malik", path: "Malik.jpeg" },
  { id: 45, sexe: "homme", nom: "Mamadou", path: "Mamadou.jpeg" },
  { id: 46, sexe: "homme", nom: "Mathieu", path: "Mathieu.jpeg" },
  { id: 47, sexe: "femme", nom: "Mia", path: "Mia.jpeg" },
  { id: 48, sexe: "femme", nom: "Milena", path: "Milena.jpeg" },
  { id: 50, sexe: "femme", nom: "Nadège", path: "Nadège.jpeg" },
  { id: 51, sexe: "homme", nom: "Natsuki", path: "Natsuki.jpeg" },
  { id: 52, sexe: "femme", nom: "Noura", path: "Noura.jpeg" },
  { id: 53, sexe: "homme", nom: "Omar", path: "Omar.jpeg" },
  // { id: 54, sexe: "homme", nom: "Pierre-Eloi", path: "Pierre-Eloi.jpeg" },
  { id: 55, sexe: "homme", nom: "Rajiv", path: "Rajiv.jpeg" },
  { id: 56, sexe: "homme", nom: "René", path: "René.jpeg" },
  { id: 57, sexe: "femme", nom: "Rina", path: "Rina.jpeg" },
  // { id: 58, sexe: "homme", nom: "Romain", path: "Romain.jpeg" },
  { id: 59, sexe: "femme", nom: "Sam", path: "Sam.jpeg" },
  { id: 60, sexe: "homme", nom: "Sergio", path: "Sergio.jpeg" },
  { id: 61, sexe: "femme", nom: "Sigrid", path: "Sigrid.jpeg" },
  { id: 63, sexe: "femme", nom: "Solveig", path: "Solveig.jpeg" },
  { id: 64, sexe: "femme", nom: "Tatiana", path: "Tatiana.jpeg" },
  { id: 66, sexe: "homme", nom: "Théo", path: "Théo.jpeg" },
  { id: 67, sexe: "homme", nom: "Thomas", path: "Thomas.jpeg" },
  { id: 68, sexe: "femme", nom: "Yuki", path: "Yuki.jpeg" },
];

function renderGrid() {
  const grid = document.getElementById("grid");

  imagesData.forEach(data => {
    const div = document.createElement("div");
    div.className = "grid-item";
    div.dataset.sexe = data.sexe;
    div.dataset.id = data.id;
    div.dataset.nom = data.nom;

    const img = document.createElement("img");
    img.src = "Images/" + data.path;
    img.alt = data.nom;

    const label = document.createElement("div");
    label.className = "name-label";
    label.textContent = data.nom;

    div.appendChild(img);
    div.appendChild(label);

    div.addEventListener("click", () => {
      div.classList.toggle("darkened");
      div.classList.toggle("darkLabel");
      div.classList.toggle("lightLabel");

    });

    grid.appendChild(div);

    let zoomedImg = null;

    function onMiddleClick(e) {
      if (e.button !== 1) return;

      e.preventDefault();

      if (zoomedImg) {
        zoomedImg.remove();
        zoomedImg = null;
        return;
      }

      const img = e.currentTarget.querySelector("img");
      zoomedImg = img.cloneNode();

      Object.assign(zoomedImg.style, {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        maxHeight: "95vh",
        maxWidth: "95vw",
        zIndex: "1000",
        boxShadow: "0 0 20px rgba(0,0,0,0.5)",
        cursor: "zoom-out",
      });

      document.body.appendChild(zoomedImg);

      zoomedImg.addEventListener("mousedown", (event) => {
        if (event.button === 1) {
          event.preventDefault();
          zoomedImg.remove();
          zoomedImg = null;
        }
      });
    }

    div.addEventListener("mousedown", (e) => {
      if (e.button === 1) {
        onMiddleClick(e);
      }
    });
  });

}

function noMen() {
  document.querySelectorAll(".grid-item").forEach(item => {
    if (item.dataset.sexe === "homme") {
      item.remove();
    }
  });
}
function noWomen() {
  document.querySelectorAll(".grid-item").forEach(item => {
    if (item.dataset.sexe === "femme") {
      item.remove();
    }
  });
}

function resetGame() {
  document.querySelectorAll(".grid-item").forEach(item => {
    item.remove();
  });
  renderGrid();
  // document.querySelectorAll(".grid-item").forEach(item => {
  //   item.classList.remove("darkened");
  // });
}

window.addEventListener("DOMContentLoaded", () => {
  const headerImg = document.getElementById("imgHeader");
  headerImg.addEventListener("mousedown", function (e) {
    if (e.button === 1) { // clic molette
      e.preventDefault(); // évite le scroll par défaut
      headerImg.classList.toggle("zoomed");
    }
  });

  document.getElementById("idPartyTextBox").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      const txtBox = document.getElementById("idPartyTextBox");
      let idParty;
      let parsedVal = parseInt(txtBox.value);
      if (!isNaN(parsedVal)) {
        idParty = parsedVal;
      } else {
        idParty = 0;
        txtBox.value = idParty;
      }
      runParty(idParty);
    }
  });

  renderGrid();
  runParty(1);
});

function runParty(idParty) {
  perso = imagesData[Math.floor(Math.random() * imagesData.length)];

  const label = document.getElementById("labelMyPerso");
  label.innerHTML = perso.nom + "<br>N° " + ((perso.id + idParty + 14) % imagesData.length + 120); // 14 is randomly chosen

  const img = document.getElementById("imgHeader");
  img.src = "Images/" + perso.path;
}

function runNewParty() {
  const txtBox = document.getElementById("idPartyTextBox");
  let idParty;
  let parsedVal = parseInt(txtBox.value);
  if (!isNaN(parsedVal)) {
    idParty = parsedVal + 1;
    txtBox.value = idParty;
  } else {
    idParty = 1;
    txtBox.value = idParty;
  }
  runParty(idParty);
  resetGame();
}
