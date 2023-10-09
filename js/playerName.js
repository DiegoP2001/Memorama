//ruta 2da pagina './game.html'

function clickEmpezar(){
    const link = document.querySelector(".link");
    const input = document.querySelector(".input.is-primary");

    if (input.value === '') {
        alert("Introduzca un nombre");
        input.classList.remove("is-primary")
        input.classList.add("id-danger")
    } else {
        input.classList.remove("is-danger")
        input.classList.add("id-primary")
        let name = input.value; 

        localStorage.setItem("Nombre", name);
        link.setAttribute('href', './game.html');
    }

}




