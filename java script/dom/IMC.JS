const nome = document.querySelector('#Nome')
const Altura = document.querySelector('#Altura')
const peso = document.querySelector('#Peso')
const calcular = document.querySelector('#calcular')
const resutado = document.querySelector('#resultado')

function imc(){
   if(nome.value !== ''){
       const valorIMC = (peso.value/(Altura.value**2))
       
        if(valorIMC <= 18){
            resutado.textContent = `${nome.value}, você possui ${valorIMC} de IMC. Você está abaixo do peso`        
        }else if (valorIMC > 18 && valorIMC <= 25){
            resutado.textContent = `${nome.value}, você possui ${valorIMC} de IMC. Você está no peso ideal`
        }
        }else if (valorIMC > 18 && valorIMC <= 25){
            resutado.textContent = `${nome.value}, você possui ${valorIMC} de IMC. Você está acima no peso`
        }

   }else{
    alert('preencha o campo vazio!')
   }
}

calcular.addEventListener('click', imc)