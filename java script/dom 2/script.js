const inputElemento = document.querySelector ('.new-taks-input')
const aadTaksButton = document.querySelector ('.taks-button')
const takscontaner = document.querySelector ('.taks-contaner')

function validarbotao(){
    const texto = document.createElement('p')
    takscontaner.appendChild(texto)
    texto.innerText = inputElemento.value

}

aadTaksButton.addEventListener('click', validarbotao);