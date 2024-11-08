const alturas = [1.6, 1.77, 1.69, 1.90, 1.83]

let soma = 0
for(let i = 0; i < alturas.length; i++){
  //console.log(alturas[i])
  soma += alturas [i]
}

console.log('média das alturas é:',soma/alturas.length)