/* vamos entender variáveis
variaveis são "recipientes", onde podemos armazenar informações que
podem variar, ou seja podem ter qualquer tipo de valor.
 
No Java Script temos 23 palavaras-chaves para declarar variáveis:
-> var: vale em todo codigo, como se fosse um coringa!
-> let: não pode ser redeclarado, variavel unica  
-> const: uma coisa que nunca pode mudar 
*/
var pote = 'Olá mundo!';
alert(pote);

var a = 2;
var b = 3;
var c = a + b;
alert(c);

// DECLARASÃO DE VARIAVEIS 

var a,b,c;
var nome , sobrenome, idade;

//ATRIBUIÇÃO DE VARIAVEIS 
// a = 2;
// b = 3;
// c = a + b;
// alert(c);

// atrbuição de valores
nome = "Carlos Gabriel";
sobrenome = "Gehlen de Oliveira";
nome_completo = nome + sobrenome;
idade = 19;
soma = idade + 19;
pessoa = nome_completo + soma + "  ";

document.getElementById("texto").innerHTML = pessoa;

/* para dar contatenar as palavras:
nome = "Carlos Gehlen de Oliveira";
sobrenome = "Gehlen de Oliveira";
nome_completo = nome + " " + sobrenome;
document.getElementById("texto").innerHTML = nome_completo;
*/

//var 
var x=10; // aqui é 10
    {
        var x=2; //aqui é 2
    }
// aqui tambem vai ser 2
document.getElementById("texto").innerHTML = x;
//let
let x = 10 //só funciona o 10 
{
    let x = 2;
}
document.getElementById("texto").innerHTML = x;