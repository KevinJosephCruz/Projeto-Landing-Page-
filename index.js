var setaDireita = window.document.getElementById("seta-direita")
var Bruna = window.document.getElementById("Bruna")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    Bruna.style ="display:none"
    Samantha.style ="display:flex"
    setaDireita.style ="display:none"
    setaEsquerda.style ="display:flex; margin-top: 55px"
}

function RolarParaEsquerda() {
    Bruna.style ="display:flex"
    Samantha.style ="display:none"
    setaDireita.style ="display:flex; margin-top: 55px"
    setaEsquerda.style ="display:none"
}
