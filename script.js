
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

const carregarCases = () => {
    fetch("http://localhost:3000/cases")
    .then( resposta => resposta.json())
    .then ( (dados) => {
        listaCases = dados
        renderizarCases()
    } )
}


const solicitarOrcamento = () => {
    // pegar valores dos inputs
    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById("campo-email").value
    let valorDescricao = document.getElementById("campo-descricao").value

    console.log(valorNome);
    console.log(valorEmail);
    console.log(valorDescricao);
    // organizar objeto com os valores
    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescricao,
    }
    // enviar requisicao para a api
    // 127.0.0.1 -> localhost
    // método HTTP POST - create -> cadastrar ou criar
    fetch("http://127.0.0.1:3000/solicitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })
    .then(resposta => console.log(resposta))
    .catch(erro => console.error(erro))
    // limpar os campos
    // mostrar alert com msg de sucesso
    // caso erro - alert com msg erro
}