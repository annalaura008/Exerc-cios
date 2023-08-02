/*const chocolate = "8"
if (chocolate >0) {
    console.log ("positivo")
} else {
    console.log ("negativo")
}*/
/*let morango = 0
if (morango === 0) {
    console.log ("neutro")
} else if (morango >0) {
    console.log ("positivo")
} else {
    console.log ("negativo")
}*/
/*const a = 2
const b = 4
console.log(a+b) 
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)*/

/*const a = 20
const b = 18
if (a>b) {
    console.log ("maior")
}
else {
    console.log ("menor")
}*/

/*const a= 0
const b= 0
const c= 0
if (a>b && a>c) {
    console.log (a)
}
else if (b>c && b>a) {
    console.log (b)
}
else if (c>a && c>b) {
    console.log (c)
}
else {
    console.log ("todos são iguais")
}*/

/*const a= 80
const b= 90
const c= 10
if (80+90+11 === 180) {
    console.log (true)
}
else {
    console.log (false)
}*/

/*const a= 49
if (a>= 90) {
    console.log ("A")
}
else if (a>= 80) {
    console.log ("B")
}
else if (a>= 70) {
    console.log ("C")
}
else if (a>= 60) {
    console.log ("D")
}
else if (a>= 50) {
    console.log ("E")
}
else {
    console.log ("F")
}*/

/*const a= 23
const b= 11
const c= 13
if (a%2 === 0) {
    console.log ("true")
}
else if (b%2 === 0) {
    console.log ("true")
}
else if (c%2 === 0) {
    console.log ("true")
}
else {
    console.log ("false")
}*/

/*const a= 0
const b= 0
const c= 0
if (a%2 === 1) {
    console.log ("true")
}
else if (b%2 === 1){
    console.log ("true")
}
else if (c%2 === 1){
    console.log ("true")
}
else {
    console.log ("false")
}*/
/*const a= 0
const b= 0
const c= 0
if (a%2 === 1 || b%2 === 1 || c%2 === 1){
    console.log ("true")
}
else {
    console.log ("false")
}*/

/*const a= 0
const b= 0
const c= 0
if (a%2 === 0 || b%2 === 0 || c%2 === 0){
    console.log ("true")
}
else {
    console.log ("false")
}*/
/*const custoDeProduto= 120
const valorDeVenda= 200
const imposto= 20/100 * custoDeProduto
const valorCustoTotal= custoDeProduto + imposto
const lucro= valorDeVenda - valorCustoTotal
if (custoDeProduto < 0 || valorDeVenda < 0){
    console.log("erro")
}
else {
    const lucro= valorDeVenda - valorCustoTotal
    valorDeVenda - custoDeProduto + imposto === lucro
    console.log(lucro * 1000)
}*/
/*const salárioBruto= 3000
let salárioLíquido= salárioBruto 
if (salárioBruto >= 0.01 && salárioBruto <= 1556.94) {
    const salário8= 8/100 * salárioBruto 
    salárioLíquido= salárioBruto - salário8
}
else if (salárioBruto >= 1556.95 && salárioBruto <= 2594.92) {
    const salário9= 9/100 * salárioBruto
    salárioLíquido= salárioBruto - salário9
}
else if (salárioBruto >= 2594.93 && salárioBruto <= 5189.82) {
    const salário11= 11/100 * salárioBruto 
    salárioLíquido= salárioBruto - salário11
}
else if (salárioBruto < 5189.82) {
    const saláriomáximo= salárioBruto - 570.88
   salárioLíquido= saláriomáximo
}

if (salárioLíquido >=0.01 && salárioLíquido <= 1903.98) {
}
else if (salárioLíquido >= 1903.99 && salárioLíquido <= 2826.65) {
    const salário7= 7.5/100 * salárioLíquido - 142.80
    salárioLíquido= salárioLíquido - salário7
}
else if (salárioLíquido >= 2826.66 && salárioLíquido <= 3751.05) {
    const salário15= 15/100 * salárioLíquido - 354.80
    salárioLíquido= salárioLíquido - salário15
}
else if (salárioLíquido >= 3751.06 && salárioLíquido <= 4664.68) {
    const salário22= 22.5/100 * salárioLíquido - 636.13
    salárioLíquido= salárioLíquido - salário22
}
else if (salárioLíquido > 4664.68) {
    const salário27= 27.5/100 * salárioLíquido - 869.36
    salárioLíquido= salárioLíquido - salário27
}
    console.log ("tendo R$"+salárioBruto +" como salário bruto, seu salário líquido será de "+salárioLíquido)
*/
/*const pessoa= {
    nome:"Maria", 
    idade:17,
    altura:1.62,
    peso: 42
}
for (const alguem in pessoa) {
    console.log(pessoa[alguem] )
}*/
/*console.log("olá "+pessoa.nome+", você tem "+pessoa.idade+" anos, "+pessoa.altura+" de altura e "+pessoa.peso+" kilos")

const notas= [10, 25, 30, 45, 50]
for (let index= 0; index<notas.length; index+= 1) {
    console.log (notas[index])
}
for (const nota of notas) {
    console.log (nota)
}*/
/*const pessoas= [{
    nome: "Anna",
    idade: 16,
    peso: 42,
    altura: 1.58,
}, {
    nome: "Maria",
    idade: 17,
    peso: 50,
    altura: 1.67,
}, {
    nome: "Clara",
    idade: 18,3
    peso: 65,
    altura: 1.70,
},
]
for (let index = 0; index < pessoas.length; index++) {
    const element = pessoas[index];
    const IMC= element.peso / element.altura ** 2
    console.log(`${element.nome} - ${IMC.toFixed(2)}`);
}*/
// let numeros= [50, 92, 36, 198, 14, 8, 152, 20, 356, 278]
/*for (let index = 0; index < numeros.length; index+=1) {
    console.log(numeros[index])
}*/
/*let soma= 0;
for (let index = 0; index < numeros.length; index+=1) {
    const element = numeros[index];
    soma+=element
    
}
console.log(soma)*/
/*let soma= 0;
for (let index = 0; index < numeros.length; index+=1) {
    const element = numeros[index];
    soma+=element
}
console.log(soma/numeros.length)

if (soma/numeros.length > 20) {
    console.log("o valor da média aritmética é maior que 20")
}
else {
    console.log("o valor da média aritmética é menor ou igual que 20")
}*/
/*let maiornumero = 0 
for (let index = 0; index < numeros.length; index+= 1) {
    const element = numeros[index];
    if(maiornumero < element) {
        maiornumero= element
    }
}
console.log(maiornumero)*/
/*let numeroimpar = 0
for (let index = 0; index < numeros.length; index+=1) {
    const element = numeros[index];
    if(element % 2 === 1){
        numeroimpar+=1
    }
}
if (numeroimpar === 0) {
    console.log("não existe número impar")
}
else {
    console.log(numeroimpar)
}*/
/*let menorNumero = numeros[0]
 for (let index = 0; index < numeros.length; index+=1) {
    const element = numeros[index];
    if (element < menorNumero){
        menorNumero= element
    
 }
 console.log (menorNumero)*/
/*let array = []
for (let index = 1; index < 26; inde x+= 1) {
    array.push(index)
}
console.log(array);

for (let index = 0; index < array.length; index += 1) {
    const element = array[index];
    console.log(element / 2);
}*/
/*const fatorial= 10
let resultado= 1
for (let index = 1; index <= fatorial; index+=1) {
    resultado= index * resultado
}
console.log(resultado);*/
/*const word = "panelada"
console.log(word.split('').reverse().join(''));*/
/*const n = 12
const asterisco = "*"
let primeiro = ""
for (let index = 0; index < n; index += 1) {
primeiro += asterisco 
}
for (let index = 0; index < n; index += 1) {
    console.log(primeiro );   
}*/
/*const n = 12
const asterisco = "*"
let primeiro = ""
for (let index = 0; index < n; index += 1) {
    primeiro += asterisco
    console.log(primeiro);  
}*/
/*const n = 5
const asterisco = "*"
const espaco = " " 
for (let index = 1; index < n + 1; index += 1) {
    let linha= ""
    for (let i = 0; i < n - index; i += 1) {
        linha += espaco
    }
    for (let j = 0; j < index ; j+=1) {
        linha += asterisco 
    }
    
    console.log(linha);  
}*/
/*function revertida(fruta) {
    let vazia = ""
    for (let index = fruta.length - 1; index >= 0; index-=1) {
        const element = fruta[index];
        vazia += element
    }
    return vazia
}
console.log(revertida("chocolate"));*/

/*function revertida(palavra) {
    return palavra.split("").reverse().join("")
}
console.log(revertida("brownie"));*/
/*const palindromo = (algo) => {
    return revertida(algo) === algo
}
console.log(palindromo('palavra'));
console.log(palindromo('arara'));*/
function maiorIndice(words) {
    let maior = 0
    for (let index = 0; index < words.length; index+=1) {
        if (words[index].length > words[maior].length) {
            maior= index
        }
    }
    return maior
}
/*function menorIndice(palavra) {
    let menor= 0
    for (let index = 0; index < palavra.length; index+=1) {
        if (palavra[index].length < palavra[menor].length) {
            menor= index
        }
    }
    return menor
}
const objetos= ["almofada", "travesseiro", "celular", "teclado"]
console.log(menorIndice(objetos));*/
function maiorPalavra(palavra) {
    console.log(maiorIndice(palavra))
}
const frutas= ["banana", "pera", "jabuticaba", "kiwi", "melancia"]
console.log(maiorPalavra(frutas));