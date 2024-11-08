const numeros = []

console.log(numeros)

numeros.push(10)
numeros.push(9)
numeros.push(8)
numeros.push(7)
numeros.push(6)
numeros.push(5)

console.log('original:',numeros)

const removidoUltimo = numeros.pop()

console.log('depois do pop:',numeros)
console.log('pop var:',removidoUltimo)

const removidoPrimeiro = numeros.shift()

console.log('depois do shift:',numeros)
console.log('shift var:',removidoPrimeiro)

let soma = 0
numeros.forEach(item => {
  soma += item
})

console.log(soma)