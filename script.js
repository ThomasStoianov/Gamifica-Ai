
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

// Função Carrossel

let slides = [
    'primeiro-banner',
    'segundo-banner',
    'terceiro-banner',
]

let slideAtual = 0

let numeroSlides = slides.length

let banner = document.querySelector(".banner")

banner.classList.add(slides[slideAtual])

const mostrarProximoSlide = () => {
    // Remove o slide anterior 
    banner.classList.remove(slides[slideAtual])

    if (slideAtual < numeroSlides - 1) {
        slideAtual++
    } else {
        slideAtual = 0
    }

    // Renderiza o slideAtual
    banner.classList.add(slides[slideAtual])
}

const mostrarSlideAnterior = () => {

    // Remove slide anterior
    banner.classList.remove(slides[slideAtual])

    if(slideAtual > 0) {
        slideAtual--
    } else {
        slideAtual = numeroSlides - 1
    }

    banner.classList.add(slides[slideAtual])
}