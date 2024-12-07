export class Data {

    constructor(peso, altura){
        this.peso = Number(peso),
        this.altura = Number(altura)
    }

    dadosIMC(){
        const calc = this.peso / (this.altura * this.altura)

        if(calc < 18.5){
            return {
                imagem: './assets/img/magreza.png',
                problema: 'Estar abaixo do peso ideal pode indicar desnutrição, falta de nutrientes essenciais e aumento da vulnerabilidade a doenças, fraqueza muscular e dificuldades na regulação hormonal.',
                dica1: 'Adotar uma dieta balanceada: Inclua alimentos ricos em nutrientes e calorias saudáveis, como grãos integrais, proteínas magras, frutas, vegetais e gorduras boas (castanhas, azeite).',
                dica2: 'Consultar um nutricionista: Um plano alimentar específico pode ajudar a ganhar peso de forma saudável.',
                dica3: 'Praticar exercícios de fortalecimento muscular: Eles ajudam a aumentar a massa magra.'
            };
        } else if(calc <= 24.9) {
            return {
                imagem: './assets/img/normal.png',
                problema: 'Esta é a faixa considerada ideal e indica um bom equilíbrio entre peso e altura. Não é necessário fazer ajustes no peso, mas é importante manter hábitos saudáveis.',
                dica1: 'Continue com uma alimentação equilibrada e exercícios regulares para preservar sua saúde.',
                dica2: '',
                dica3: ''
            };
        } else if(calc <= 29.9) {
            return {
                imagem: './assets/img/sobrepeso.png',
                problema: 'O sobrepeso pode ser o início de problemas de saúde, como pressão alta, colesterol elevado, resistência à insulina e dores articulares.',
                dica1: 'Rever os hábitos alimentares: Reduzir o consumo de alimentos ultraprocessados, açúcares e gorduras ruins.',
                dica2: 'Aumentar a atividade física: Caminhadas, corridas leves, dança ou esportes podem ajudar.',
                dica3: 'Dormir bem: O sono adequado regula o apetite e contribui para a perda de peso.'
            };
        } else if(calc <= 34.9){
            return {
                imagem: './assets/img/obesidade.png',
                problema: 'A obesidade aumenta o risco de diabetes tipo 2, doenças cardiovasculares, problemas respiratórios, como apneia do sono, e dores articulares.',
                dica1: 'Procurar um profissional de saúde: Um médico e um nutricionista podem orientar sobre mudanças necessárias.',
                dica2: 'Estabelecer metas realistas: Pequenas reduções no peso, como 5% a 10%, já podem melhorar a saúde.',
                dica3: 'Praticar exercícios regularmente: Escolha atividades que você goste para facilitar a adesão.'
            };
        } else if(calc <= 39.9){
            return {
                imagem: './assets/img/obesidadeg2.png',
                problema: 'Riscos mais sérios para doenças como hipertensão, problemas renais, doenças do fígado e até mesmo alguns tipos de câncer.',
                dica1: 'Buscar suporte especializado: Acompanhamento médico e psicológico pode ser necessário.',
                dica2: 'Participar de programas de reeducação alimentar: Eles ajudam a criar hábitos sustentáveis.',
                dica3: 'Focar no longo prazo: Mudanças graduais são mais efetivas que dietas radicais.'
            };
        } else {
            return {
                imagem: './assets/img/obesidadeg3.png',
                problema: 'Essa é uma condição grave, com risco aumentado para complicações sérias e até fatais, como insuficiência cardíaca, derrames e problemas de mobilidade.',
                dica1: 'Tratamento médico rigoroso: Pode incluir medicamentos ou até cirurgia bariátrica, dependendo da avaliação médica.',
                dica2: 'Mudança no estilo de vida: Pequenos passos, como melhorar a qualidade da dieta e praticar exercícios adaptados, fazem a diferença.',
                dica3: 'Apoio psicológico: Pode ajudar a lidar com os desafios emocionais relacionados ao peso.'
            };
        }
    }
}