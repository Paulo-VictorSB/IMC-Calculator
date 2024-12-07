import { Calculo } from './Calculo.js'
import { Data } from './Data.js'

const peso = document.querySelector('#ipeso')
const altura = document.querySelector('#ialtura')
const calc = document.querySelector('#calc')
const infos = document.querySelector('#infos')

calc.addEventListener('click', ()=> {
    if(peso.value != '' || altura.value != ''){

        const elementos = [
            'resultadoInfo',
            'imgInfo',
            'problemaInfo',
            'solucaoInfo',
            'dica1Info',
            'dica2Info',
            'dica3Info'
        ];
        
        elementos.forEach(seletor => {
            document.querySelector(`#${seletor}`)?.remove();
        });

        const result = new Calculo(peso.value, altura.value)
        const calcR = result.calcularIMC()
        const resultData = new Data(peso.value, altura.value)
        const resultado_calc = document.createElement('p')
        resultado_calc.innerHTML = `Seu IMC atual é ${calcR}`
        resultado_calc.id = 'resultadoInfo'
        const rData = resultData.dadosIMC()

        const novaImagem = document.createElement('img')
        novaImagem.setAttribute('src', rData.imagem)
        novaImagem.classList.add('imagens')
        novaImagem.id = 'imgInfo'
        const novoProblema = document.createElement('p')
        novoProblema.innerHTML = rData.problema
        novoProblema.id = 'problemaInfo'
        const novaSolucao = document.createElement('ul')
        novaSolucao.innerHTML = 'Dicas: '
        novaSolucao.id = 'solucaoInfo'
        const novaDica1 = document.createElement('li')
        novaDica1.innerHTML = rData.dica1
        novaDica1.id = 'dica1Info'
        const novaDica2 = document.createElement('li')
        novaDica2.innerHTML = rData.dica2
        novaDica2.id = 'dica2Info'
        const novaDica3 = document.createElement('li')
        novaDica3.innerHTML = rData.dica3
        novaDica3.id = 'dica3Info'

        infos.appendChild(resultado_calc)
        infos.appendChild(novaImagem)
        infos.appendChild(novoProblema)
        infos.appendChild(novaSolucao)
        if(rData.dica1 != ''){
            novaSolucao.appendChild(novaDica1)
        }
        if(rData.dica2 != ''){
            novaSolucao.appendChild(novaDica2)
        }
        if(rData.dica3 != ''){
            novaSolucao.appendChild(novaDica3)
        }

        if(infos.hasChildNodes()){
            infos.style.display = 'flex'
        }

    } else {
        alert("Os campos não podem estar vazios.")
    }

})
