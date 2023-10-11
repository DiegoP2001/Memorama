let matches = 0;
let score = 0;
let tiempo = 0;
let progressBar = document.getElementById("miProgress");
const nombre = localStorage.getItem("Nombre");
const nombreTitulo = document.querySelector('.title.is-4');
nombreTitulo.textContent = nombre;


function generar_pos_aleatoria_cartas(){
  
  const src = {
      Python: "./assets/python.png",
      Java: "./assets/java.png",
      C_Sharp: "./assets/c_sharp.png",
      Javascript: "./assets/js.png",
      Php: "./assets/php.png",
      Sql: "./assets/sql.png",
      Typescript: "./assets/typescript.png",
      C_Plus: "./assets/c_plus.png",
      Ruby: "./assets/ruby.png",
      Swift: "./assets/swift.png", 
    }

  const props = ["Python", "Java", "C_Sharp", "Javascript", "Php", "Sql", "Typescript", "C_Plus", "Ruby", "Swift"];
  let index = []
  const cara_detras_lista = document.querySelectorAll(".cara.detras > img");
  let i = 0
  while (i < cara_detras_lista.length) {
    index = generar_numero_aleatorio(index);
    cara_detras_lista[i].setAttribute("src", src[props[index[i]]]);
    i++;
  }
}

generar_pos_aleatoria_cartas();

function generar_numero_aleatorio(indexArray){
  indice_temporal = Math.floor(Math.random() * 10);
  if(indexArray.indexOf(indice_temporal) == indexArray.lastIndexOf(indice_temporal)){
    indexArray.push(indice_temporal)
  }else{
    generar_numero_aleatorio(indexArray);
  }

  return indexArray;
}

let giradas = [];


function girar_carta() {
  const cartas = document.querySelectorAll(".carta");
  
  cartas.forEach(element => {
    element.addEventListener("click", function() {
        this.style.transform = "rotateY(180deg)";
        this.classList.add("girada")
      });
  });


}

girar_carta();


/*function sonIguales(carta1, carta2) {
  const img1 = carta1.querySelector(".carta > .cara.detras > img");
  const img2 = carta2.querySelector(".carta > .cara.detras > img");
  return img1.getAttribute("src") === img2.getAttribute("src");
}*/


function comprobar_igualdad_cartas(){
    playAudio("./assets/flipcard.wav")
    let cartas_giradas = null;
    let cartas_boca_abajo = null;
    let carta1 = null;
    let carta2 = null
    
    
    setTimeout(() => {
       cartas_giradas = document.querySelectorAll(".carta.girada")
       cartas_boca_abajo = document.querySelectorAll(".carta")
       //console.log(cartas_boca_abajo)
       //console.log(cartas_giradas)
       //console.log(carta1 + " Carta1")
       //console.log(carta2 + " Carta2")
      }, 1)  
    
    setTimeout(() => {
      if (cartas_giradas.length == 2){
        
        carta1 = cartas_giradas[0].querySelector(".cara.detras > img").getAttribute("src");
        carta2 =  cartas_giradas[1].querySelector(".cara.detras > img").getAttribute("src");
        //console.log(carta1 + " Carta1 dentro de array = 2")
        //console.log(carta2 + " Carta2 dentro de array = 2")

        if(carta1 !== carta2){
          playAudio("./assets/wrong.wav")
          cartas_giradas[0].classList.remove("girada")
          cartas_giradas[0].style.transform = "rotateY(0deg)"
          cartas_giradas[1].classList.remove("girada")
          cartas_giradas[1].style.transform = "rotateY(0deg)"
          
          
          
        }else{
          playAudio("./assets/rigth.wav")
          cartas_giradas[0].classList.remove("girada")
          cartas_giradas[1].classList.remove("girada")
          cartas_giradas[0].style.backgroundColor = "black"
          cartas_giradas[1].style.backgroundColor = "black"  
          cartas_giradas[0].style.pointerEvents = "none"
          cartas_giradas[1].style.pointerEvents = "none"
          matches++;
          let intervalo = 60 * 1000 / progressBar.max;;
          score += (progressBar.value * intervalo)
          

          cartas_giradas = null
        }
          cartas_giradas = null;
      }

    }, 1000)

    //girar_carta()
    
}

document.addEventListener("DOMContentLoaded", function () {
  
  let duracion = 60; 
  let intervalo = duracion * 1000 / progressBar.max;; 
  
  function actualizarProgressBar() {
    if (progressBar.value > 0) {
      progressBar.value -= 1;
      hasGanado(progressBar.value, nombre, score, intervalo)
      //console.log(matches)
      if(matches === 10){
        clearInterval(intervalID)
      }
    } else {
      clearInterval(intervalID);
      hasPerdido()
    }
  }

  let intervalID = setInterval(actualizarProgressBar, intervalo);
});


function hasGanado(progressBarValue, nombre, score, intervalo){

  if((progressBarValue > 0 && matches === 10)){
    sendDataToServer();
    limpiarPantalla()
    playAudio("./assets/winner.wav")
    startConfetti()
    setTimeout(() => {
      limpiarPantalla()
    }, 3000)

    setTimeout(() => {
      const infoContainer = document.createElement('div');
      infoContainer.classList.add('info-container');


      const infoBox = document.createElement('div');
      infoBox.classList.add('info-box');


      const nombreParagraph = document.createElement('p');
      nombreParagraph.innerHTML = `Nombre: <span id="nombre">${nombre}</span>`;

      const scoreParagraph = document.createElement('p');
      scoreParagraph.innerHTML = `Puntaje: <span id="score">${score}</span>`;

      const tiempoParagraph = document.createElement('p');
      tiempo = 60 - ((progressBarValue * intervalo) / 1000)
      tiempoParagraph.innerHTML = `Tiempo: <span id="tiempo">${tiempo}seg</span>`;


      infoBox.appendChild(nombreParagraph);
      infoBox.appendChild(scoreParagraph);
      infoBox.appendChild(tiempoParagraph);


      infoContainer.appendChild(infoBox);


      document.body.appendChild(infoContainer);

    }, 3500)
    
  }
}

function hasPerdido(){
  
  const cartas = document.querySelectorAll(".carta");
  
  cartas.forEach(element => {
    element.style.pointerEvents = "none"
  })

  playAudio("./assets/gameOver.wav")
  limpiarPantalla();

  const infoContainer = document.createElement('div');
    infoContainer.classList.add('info-container');


    const infoBox = document.createElement('div');
    infoBox.classList.add('info-box');


    const nombreParagraph = document.createElement('p');
    nombreParagraph.innerHTML = `Nombre: <span id="nombre">${nombre}</span>`;

    const scoreParagraph = document.createElement('p');
    scoreParagraph.innerHTML = `Puntaje: <span id="score">${score}</span>`;

    const tiempoParagraph = document.createElement('p');
    tiempoParagraph.innerHTML = `Tiempo: <span id="tiempo">${60 - ((progressBarValue * intervalo) / 1000)}seg</span>`;


    infoBox.appendChild(nombreParagraph);
    infoBox.appendChild(scoreParagraph);
    infoBox.appendChild(tiempoParagraph);


    infoContainer.appendChild(infoBox);


    document.body.appendChild(infoContainer);

    alert("GAME OVER")
}

function limpiarPantalla(){
  const body = document.body;

  while (body.firstChild) {
    body.removeChild(body.firstChild);
  }
}


function sendDataToServer(){
  
const data = {
  nombre: nombre,
  score: score,
  time: tiempo
};

fetch('./insert.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json' // Puedes cambiar el tipo de contenido según tus necesidades
  },
  body: JSON.stringify(data) 
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
    return response.text(); // Otra opción es response.json() si esperas una respuesta JSON
  })
  .then(responseData => {
    console.log('Respuesta del servidor:', responseData);
  })
  .catch(error => {
    console.error('Error:', error);
  });

}


function playAudio(url) {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const source = audioContext.createBufferSource();

  const request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';

  request.onload = function() {
    audioContext.decodeAudioData(request.response, function(buffer) {
      source.buffer = buffer;
      source.connect(audioContext.destination);
      source.start(0);
    }, function(error) {
      console.error('Error decoding audio data', error);
    });
  };

  request.send();
}

