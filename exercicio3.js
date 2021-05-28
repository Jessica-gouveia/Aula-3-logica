//  Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.

function imparOuPar(num1,num2) {

    let resultado = num1 / num2

    if(num1 % 2 === 0 && num2 % 2 === 0) {
        console.log(`O resultado da divisão é: ${resultado} , e o resto dessa divisão é par.`)

    } else {
        console.log('Esse número não é par.')
    }
    

} 

console.log(imparOuPar(4,6))



