document.addEventListener("DOMContentLoaded", () => {
  const cardsAdj = [
    {
      name: "vaca",
      img: "img/vaca.jpg"
    },
    {
      name: "perro",
      img: "img/perro.jpg"
    }
    {
      name: "cabra",
      img: "img/cabra.jpg"
    }
    {
      name: "elefante",
      img: "img/elefante.jpg"
    }
    {
      name: "foca",
      img: "img/foca.jpg"
    }
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
  
  function crearTablero (){
    for (let i = 0; i < cardAdj.length; i++) {

      var carta = document.createElement('img');
      carta.setAttribute('src', 'images/reverso.png');
     
      carta.setAttribute('data-id', i);
      carta.addEventListenner('click', voltearCarta);

      cuadricula.appendChild(carta);
    }
  }
});
