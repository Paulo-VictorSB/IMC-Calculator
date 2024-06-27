import { Calculo } from './Calculo.js'

const peso = document.querySelector('#ipeso')
const altura = document.querySelector('#ialtura')
const resultado = document.querySelector('#resultado-calc')
const calc = document.querySelector('#calc')

calc.addEventListener('click', ()=> {
    resultado.innerHTML = ''

    const result = new Calculo(peso.value, altura.value)
    const calcR = result.calcularIMC()
    resultado.classList.add('resultado-calc')
    resultado.innerHTML = `Seu IMC atual é ${calcR}`

})
