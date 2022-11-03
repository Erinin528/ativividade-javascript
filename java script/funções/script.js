//Funções
/*
   function nomeDaFunção (parâmentros){
    ações 
   }
*/

var a = 7
var b = 8
var total = a + b
console.log(total)


function soma(c,d){
    var total = c + d
    return console.log(total) 
}

soma(10,50)
soma(7,5)

//Calculo da área de um quadrado
function areaDeUmQuadrado(lado){
    var area = lado*lado;
    return console.log(area)
}

areaDeUmQuadrado(4)

//Faça uma função que calcule a area de um retângulo de lados difefente.
function areadoumquadrado(lado1,lado2) {
    var area8 = lado1*lado2;
    return console.log(area8)
}

areadoumquadrado(6,7)

//função

function pi(){
    return 3.1415
}

function corFavorita(cor){
    if(cor === "azul"){
        return "gosta de céu"
    }else if (cor === "verde "){
        return "É sus"
    }else{
        return "Voce gosta de nada"
    }
}

//Crie uma função matemática que retorne o perimetro de um quadrado
// lenbrando: perimetro é a soma dos quatro lados do quadrado 

