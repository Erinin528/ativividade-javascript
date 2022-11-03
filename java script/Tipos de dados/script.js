//tipos de dados 

//Todos são preimitivos exceto os objetos
var nome = "João"//  String
var idade = 15 //number
var VardadeiroOuFalso = true // Bolean
var time; //Undefined
var comida = null // null
var novoObjeto = {} // object


//objetos
    const Alunos =  {
        NomeDoAluno: 'Erick',
        IdadeDoAlunos: 16,
        TimeDoAluno: false,
    }
    
    console.log(Alunos.IdadeDoAlunos);

//Verica os tipos de dados
console.log( typeof nome);    
console.log(typeof idade);   
console.log(typeof Verdade);    
console.log( typeof time);    
console.log( typeof comida);    
console.log( typeof novoObjeto);    

//Você pode somar string e assim constenar as palavra.

var nome2 = "Matheus"
var sobrenome = "Vaz"
var nomeCompleto = nome2 + " "+ sobrenome;
console.log(nomeCompleto) 

//Você pode somar números com string , o resultado final será sempre uma string

var gols = 1000;
var frase = 'Pelé fez' + gols + ' gols '
console.log(frase)

//Template string
var golaços = 1000;
var frase2 = `Matheus vaz fez mais de ${golaços} gols`
console.log(frase2)

//Declare uma variavel contendo uma string
let carro = "Voyage"

//declare uma variavel com a sua idade

var numeroString = "16";

//var Declare uma variavel com sua idade

var MinhaIdade = 16;

//Declare duas variaveis , uma com seu nome e contra com seu sobrenome e some as mesmas

var Meunome = "Matheus"
var MeuSobrenome = "Vaz"
var MeunomeCompleto = Meunome + " " + MeuSobrenome

//Coloque a seguinte frase em uma variavel: It´s time 

let Itstime = "It´s time"

//
console.log(typeof MeunomeCompleto )


//var numero =prompt("Digite um valor: ");console.log(numero)


//faça um programa que peça dois numeros para o usuários. Imprima a soma dessas dois números.

//Criar dois prompt dentro de variaveis
let x = parseInt(prompt("Digete o 1 valor: "))
let y = parseInt(prompt("Digete o 2 valor: "))

//somar os resultados 
let soma = x + y
console.log(soma)

//
