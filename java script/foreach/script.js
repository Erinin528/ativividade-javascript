//Array
//É um grupovalores, Servem para guardamos diferestes valores em uma única variável.
/*
var videogames = ['Switch', 'PS4', 'xBox'];

var numeros = [1,2,3]
console.log(videogames[0])
console.log(videogames[1])
console.log(videogames[2])

console.log(numeros[0]+numeros[2])
*/
/*
var i = 0;
while(i<10){
    console.log(i);
    i = i + 1
}
*/
/*
for (var i = 0; i < 10; i = i+1){
    console.log(i)
} 
*/
var videogames = ['Switch', 'Ps4', 'xBox'];

//forEach
//forEach é um método que executa uma função para cada item array. É uma forma mais simples de utilizamos um loop com arrays
videogames.forEach(function(a, b, c){
    console.log(a, b, c)
})  

// Crie uma array com os anos que o Brasil ganhou a copa 1958, 1962, 1970, 1994, 2002
var Brasil = ['1958, 1962, 1970, 1994, 2002']
// Interaja com a array utilizando um loop, para mostrar no console a seguente mensagem, o Brasil ganhou a copa do mundo &{ano}
Brasil.forEach