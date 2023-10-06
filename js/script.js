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

let giradas = []


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

// Función para verificar si dos cartas son iguales (personalizar según tus necesidades)
function sonIguales(carta1, carta2) {
  const img1 = carta1.querySelector(".carta > .cara.detras > img");
  const img2 = carta2.querySelector(".carta > .cara.detras > img");
  return img1.getAttribute("src") === img2.getAttribute("src");
}


function comprobar_igualdad_cartas(){

    let cartas_giradas = null;
    let cartas_boca_abajo = null;
    let carta1 = null;
    let carta2 = null

    setTimeout(() => {
       cartas_giradas = document.querySelectorAll(".carta.girada")
       console.log(cartas_boca_abajo)
       console.log(cartas_giradas)
       console.log(carta1 + " Carta1")
       console.log(carta2 + " Carta2")
      }, 1)  
    
    setTimeout(() => {
      if (cartas_giradas.length == 2){


        carta1 = cartas_giradas[0].querySelector(".cara.detras > img").getAttribute("src");
        carta2 =  cartas_giradas[1].querySelector(".cara.detras > img").getAttribute("src");
        console.log(carta1 + " Carta1 dentro de array = 2")
        console.log(carta2 + " Carta2 dentro de array = 2")

        if(carta1 !== carta2){
          cartas_giradas[0].classList.remove("girada")
          cartas_giradas[0].style.transform = "rotateY(0deg)"
          cartas_giradas[1].classList.remove("girada")
          cartas_giradas[1].style.transform = "rotateY(0deg)"
          
          
        }else{
          cartas_giradas[0].classList.remove("girada")
          cartas_giradas[1].classList.remove("girada")
          //cartas_giradas[0].style.display = "none"
          //cartas_giradas[1].style.display = "none"
          cartas_giradas[0].style.backgroundColor = "black"
          cartas_giradas[1].style.backgroundColor = "black"
          
          
          cartas_giradas = null
        }
          cartas_giradas = null;
      }

    }, 1000)

    girar_carta()
    
}




function cartas_iguales(){
  
}



function comenzar_temporizador(){

}