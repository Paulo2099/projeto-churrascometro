//--------- Nome e Saudação -----------//

var nome = prompt('Olá, qual o seu nome?')
var h1 = document.querySelector('#Titulo')
var saudação = ('Bom dia')

//----------- Imagem e Hora ------------//

var data = new Date()
var hora = data.getHours()

    if (hora >= 0 && hora < 12) {
        saudação = ('Bom dia')
    } else if (hora >= 12 && hora < 18) {
        saudação = ('Boa tarde')
    } else {
        saudação = ('Boa noite')
    }

h1.innerHTML = `${saudação}, ${nome}!`

//---------- Churrascômetro ------------//

let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular() {
    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) /2 * criancas)
    let qdtTotalCerveja = cervejaPP(duracao) * adultos
    let qdtTotalBebida = bebidasPP(duracao) * adultos + (bebidasPP(duracao) /2 * criancas)
    
    resultado.innerHTML = `<p>${qdtTotalCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 350)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebida / 2000)} Garrafas pets de Bebidas</p>`
}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650
    }else{
        return 400
    }   
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000
    }else{
        return 1200
    }
}

function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500
    }else{
        return 1000
    }
}