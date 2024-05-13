
let menu = document.getElementById("menu")
let iconebarras = document.getElementById("icone-barras")
let iconeX = document.querySelector("#icone-x")

function AbrirFechar() {

    // Se o menu está fechado
    if (menu.classList.contains("menu-fechado")) {
    // Abrir o menu    
    menu.classList.remove("menu-fechado")

    // Mostrar icone X
    iconeX.style.display = "inline"

    // Esconder icone Barras
    iconebarras.style.display = "none"
    } else {
    // Fechar o menu
    menu.classList.add("menu-fechado")

    //  Esconder icone X
    iconeX.style.display = "none"

    // Mostrar icone barras 
    iconebarras.style.display = "inline"
    }
}

window.onresize = () => {
    menu.classList.remove("menu-fechado")
    iconeX.style.display = "inline"
    iconebarras.style.display = "none"
}