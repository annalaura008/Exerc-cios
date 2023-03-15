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
const pessoa= {
    nome:"Anna Laura", 
    idade:16,
    altura:1.58
}
for(const prop in pessoa){
    console.log(prop)
}