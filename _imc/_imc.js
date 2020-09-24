//peso / altura²
const calcular = document.getElementById('calcular');

function calcIMC() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(2);
        let faixa = ''

        if (valorIMC < 18.5) {
            faixa = 'abaixo do peso'
        } else if (valorIMC < 24.9) {
            faixa = 'no peso ideal'
        } else if (valorIMC < 29.9){
            faixa = 'com sobrepeso'
        } else if (valorIMC < 34.9){
            faixa = 'com obesidade grau 1'
        } else if (valorIMC < 39.9){
            faixa = 'com obesidade grau 2'
        } else if (valorIMC > 40){
            faixa = 'com obesidade grau 3'
        }
        resultado.textContent = `${nome}, o seu IMC é de: ${valorIMC}. Você está ${faixa}.`
    } else {
        alert('Confira os dados e tente novamente.')
    }
}

calcular.addEventListener('click', calcIMC);