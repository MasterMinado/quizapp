import { trocarTema, verificarTema } from '../../../helpers/tema-helper.js'

const botaoTema = document.querySelector(".tema button")
const body = document.querySelector("body")
const assunto = localStorage.getItem("assunto")
const botaJogarNovamente = document.querySelector("main button")

botaoTema.addEventListener("click", () => {
    trocarTema(body, botaoTema)
})

botaJogarNovamente.addEventListener("click", jogarNovamente)

verificarTema(body, botaoTema)

function alterarAssunto() {
    const divIcone = document.querySelector(".assunto_icone")
    const iconeImg = document.querySelector(".assunto_icone img")
    const assuntoTitulo = document.querySelector("h1")

    divIcone.classList.add(assunto.toLowerCase())
    iconeImg.setAttribute("src", `../../../assets/images/icon-${assunto.toLowerCase()}.svg`)
    iconeImg.setAttribute("alt", `ícone de ${assunto}`)
    assuntoTitulo.innerText = assunto
}

function inserirResultado() {
    const divAssunto = document.querySelector(".assunto")
    const pontos = localStorage.getItem("pontos")
    const sectionPontuacao = document.querySelector(".pontuacao");

    sectionPontuacao.innerHTML = `
    <div class="assunto">
        <div class="assunto_icone">
            <img src="../../../assets/images/icon-${assunto.toLocaleLowerCase()}.svg" alt="ícone de acessibilidade" >
        </div>
        <h1>${assunto}</h1>
    </div>

        <strong>${pontos}</strong>

        <p>de 10</p>
    `
}

function  jogarNovamente() {
    localStorage.removeItem("pontos")
    localStorage.removeItem("assunto")

    window.location.href = "../../index.html"
}

inserirResultado()
alterarAssunto()