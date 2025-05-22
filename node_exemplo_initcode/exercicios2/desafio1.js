//FUP que solicite três números e verifique qual é o menor

let num1 = 3, num2= 3, num3 = 5

let menor = Math.min(num1, num2, num3)

if(num1 == num2 && num2 == num3){
    console.log("Os números são iguais")
}else{
    console.log("O menor número é",menor)
}