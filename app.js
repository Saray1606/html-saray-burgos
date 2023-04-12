document.addEventListener("DOMContentLoaded", () => {
  const cardsAdj = [
    {
      name: "vaca",
      img: "img/vaca.jpg"
    },
    {
      name: "perro",
      img: "img/perro.jpg"
    },
    {
      name: "cabra",
      img: "img/cabra.jpg"
    },
    {
      name: "elefante",
      img: "img/elefante.jpg"
    },
    {
      name: "foca",
      img: "img/foca.jpg"
    },
    {
      name: "panda",
      img: "img/panda.jpg"
    },
    {
      name: "vaca",
      img: "img/vaca.jpg"
    },
    {
      name: "perro",
      img: "img/perro.jpg"
    },
    {
      name: "cabra",
      img: "img/cabra.jpg"
    },
    {
      name: "elefante",
      img: "img/elefante.jpg"
    },
    {
      name: "foca",
      img: "img/foca.jpg"
    },
    {
      name: "panda",
      img: "img/panda.jpg"
    }
  ];

  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];

  function crearTablero() {
    for (let i = 0; i < cardsAdj.length; i++) {
      var carta = document.createElement("img");
      carta.setAttribute("src", "img/reverso.png");
      carta.setAttribute("data-id", i);
      carta.addEventListener("click", voltearCarta);
      cuadricula.appendChild(carta);
    }
  }

  function verificarPareja() {
    var cards = document.querySelectorAll("img");
    const opcionUnoId = cartasEscogidasId[0];
    const opcionDosId = cartasEscogidasId[1];

    if (opcionUnoId === opcionDosId) {
      cards[opcionUnoId].setAttribute("src", "img/reverso.png");
      cards[opcionDosId].setAttribute("src", "img/reverso.png");
      alert("¡Diste click a la misma imagen");
    } else if (cartasEscogidas[0] === cartasEscogidas[1]) {
      alert("¡CORRECTO!");
      cards[opcionUnoId].setAttribute("src", "img/blank.png");
      cards[opcionDosId].setAttribute("src", "img/blank.png");
      cards[opcionUnoId].removeEventListener("click", voltearCarta);
      cards[opcionDosId].removeEventListener("click", voltearCarta);
      cartasGanadas.push(cartasEscogidas);
    } else {
      cards[opcionUnoId].setAttribute("src", "img/reverso.png");
      cards[opcionDosId].setAttribute("src", "img/reverso.png");
      alert("¡Intenta de nuevo!");
    }
    cartasEscogidas = [];
    cartasEscogidasId = [];

    resultado.textContent = cartasGanadas.length;

    if (cartasGanadas.length === cardsAdj.length / 2) {
      resultado.textContent = "¡Felicidades, encontraste todos los pares!";
    }
  }

  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardsAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardsAdj[cardId].img);
    if (cartasEscogidas.lenght === 2) {
      setTimeout(verificarPareja, 1000);
    }
  }
  crearTablero();
});
