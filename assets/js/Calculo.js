export class Calculo {

    constructor(peso, altura){
        this.peso = Number(peso),
        this.altura = Number(altura)
    }

    calcularIMC(){
        const calc = this.peso / (this.altura * this.altura)
        const calcc = calc.toFixed(2)

        if(calc < 18.5){
            return `${calcc} Magreza`
        } else if(calc <= 24.9) {
            return `${calcc} Normal`
        } else if(calc <= 29.9) {
            return `${calcc} Sobrepeso`
        } else if(calc <= 34.9){
            return `${calcc} Obesidade grau I`
        } else if(calc <= 39.9){
            return `${calcc} Obesidade grau II`
        } else {
            return `${calcc} Obesidade grau III`
        }
    }

}