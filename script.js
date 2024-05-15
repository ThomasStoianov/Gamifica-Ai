
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

const selecionarSlide = (indiceSlide) => {

    slides.forEach( slide => banner.classList.remove(slide))

    slideAtual = indiceSlide

    banner.classList.add(slides[indiceSlide])
}


let listaCases = [
    {
        imagem: "https://unsplash.it/600/400?image=40",
        descricao: "Uma empresa de tecnologia lança um desafio de gamificação onde os funcionários devem propor e implementar ideias inovadoras"
    },
    {
        imagem: "https://unsplash.it/600/400?image=51",
        descricao: "Empresa de consultoria cria uma narrativa interativa de gamificação para seu programa de treinamento"
    },
    {
        imagem: "https://unsplash.it/600/400?image=67",
        descricao: "Uma empresa de vendas implementa uma competição gameficada entre equipes que competem pelo topo do ranking"
    },
    {
        imagem: "https://unsplash.it/600/400?image=78",
        descricao: "Uma empresa de saúde promove o bem-estar dos funcionários através de um desafio de gamificação de condicionamento"
    }
]

const renderizarCases = () => {
    let elementoLista = document.getElementById("lista-cards")

    let template = ""

    listaCases.forEach( cardCase => {
        template += ` <div class="card">
        <img src="${cardCase.imagem}
        " alt="">
        <p>${cardCase.descricao}</p>
        <button>Ver Mais</button>
    </div>`
    })

    elementoLista.innerHTML = template
}