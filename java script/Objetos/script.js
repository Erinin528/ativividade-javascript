//Objetos
//Conjunto de variáveis e funções , que são chamadas de propriedades e métodos.

var pessoa = {
    nome: "Grazi",
    Idade: 20,
    profissao: "Monitor do professor ",
    faculdade: true,
}

pessoa.nome
console.table(pessoa)

//Objetos com ou métodos 

var quadrado = {
    perimetro: function(lado){
        return lado + lado + lado + lado
    },
    Area: function(lado){
        return lado*lado
    }
}

//Areays

//É um grupo de  valores geralmente relacionados. servem para guardarmos diferentes valores em uma única variável.

var videoGames = ["PS4", "XBox" , "Switch"]

 console.log(videoGames.length)