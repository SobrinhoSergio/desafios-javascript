'use strict'

const display = document.querySelector('.display')
const numeros = document.querySelectorAll('[id*=tecla]')
const operadores = document.querySelectorAll('[id*=operador]')

let novoNumero = true
let operador
let numeroAnterior 

const operacaoPendente = () => operador != undefined 

const calcular = () => {
    
    if(operacaoPendente()){
    
        const numeroAtual = parseFloat(display.textContent.replace(',', '.'))
        novoNumero = true

        const resultado = eval(`${numeroAnterior}${operador}${numeroAtual}`)

        atualizarDisplay(resultado)
        
    }
}

const atualizarDisplay = (texto) => {

    if(novoNumero){
        display.textContent = texto.toLocaleString('BR')
        novoNumero = false
    }
    else{
        display.textContent += texto.toLocaleString('BR')
    }

}

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent)

numeros.forEach(numero => numero.addEventListener('click', inserirNumero))

const selecionarOperador = (evento) =>{

    if(!novoNumero){
        calcular()
        novoNumero = true
        operador = evento.target.textContent
        numeroAnterior = parseFloat(display.textContent.replace(',','.'))
        console.log(operador)
    }

}

operadores.forEach(operador => operador.addEventListener('click', selecionarOperador))

const ativarIgual = () => {

    calcular()
    operador = undefined
}

document.getElementById('igual').addEventListener('click', ativarIgual)

const limparDisplay = () => display.textContent = ''

document.getElementById('limparDisplay').addEventListener('click', limparDisplay)

const limparCalculo = () => {

    limparDisplay()
    operador = undefined
    novoNumero = true
    numeroAnterior = undefined
}

document.getElementById('limparCalculo').addEventListener('click', limparCalculo)

const removerUltimoNum = () => display.textContent = display.textContent.slice(0,-1)

document.getElementById('backspace').addEventListener('click', removerUltimoNum)

const inverterSinal = () => {

    novoNumero = true
    atualizarDisplay(display.textContent * -1)

}

document.getElementById('inverter').addEventListener('click', inverterSinal)

const existeDecimal = () => display.textContent.indexOf(',') != -1

const existeValor = () => display.textContent.length > 0;

const inserirDecimal = () => {

    if(!existeDecimal()){

        if(existeValor()){
            atualizarDisplay(',')
        }

        else{
            atualizarDisplay('0,')
        }

    }
}

document.getElementById('decimal').addEventListener('click', inserirDecimal)


/*function insert(num){

    let numero = document.querySelector('.display').innerHTML

    document.querySelector('.display').innerHTML = numero + num
}

function clean(){

    document.querySelector('.display').innerHTML = ""
}

function back(){

    let resultado = document.querySelector('.display').innerHTML
    document.querySelector('.display').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular(){

    let resultado = document.querySelector('.display').innerHTML

    if(resultado){

        document.querySelector('.display').innerHTML = eval(resultado)
    }

    else{
        document.querySelector('.display').innerHTML = 'Nada...'
    }

}*/