function girar_carta() {
    const cartas = document.querySelectorAll(".carta");
    let giradas = [];
  
    cartas.forEach(element => {
      element.addEventListener("click", function() {
        if (!this.classList.contains("girada")) {
          this.style.transform = "rotateY(180deg)";
          this.classList.add("girada");
          giradas.push(this)
        }else if(){

        }
      });
    }); 

    

    

}

girar_carta();


function comprobar_igualdad_cartas(){

}

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

function cartas_iguales(){
  
}



function comenzar_temporizador(){

}