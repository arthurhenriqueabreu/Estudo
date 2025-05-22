//FUP que solicite a operação (+,-,*,/) e dois números, calcule
//a operação solicitada e informe o resultado

let operador = '*', num1= 5, num2= 3, resultado

console.log("o operador solicitado foi:", operador)

if(operador == '+'){
    resultado = num1 + num2
    console.log(num1,operador,num2,"=",resultado)
} else if(operador == '-'){
    resultado = num1 - num2
    console.log(num1,operador,num2,"=",resultado)
} else if(operador == '*'){
    resultado = num1 * num2
    console.log(num1,operador,num2,"=",resultado)
}else if(operador == '/'){
    resultado = num1 / num2
    console.log(num1,operador,num2,"=",resultado)
} else{
    console.log("o operador escolhido é inválido!")
}