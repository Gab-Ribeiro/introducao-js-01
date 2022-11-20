let numberOne = prompt('Digite o primeiro número: ')
let numberTwo = prompt('Digite o segundo número: ')

numberOne = Number(numberOne)//reatribuindo o tipo de dado
numberTwo = Number(numberTwo)//reatribuindo o tipo de dado

if (numberOne === numberTwo) {
  comparison = 'Os números são iguais'
} else {
  comparison = 'Os números são diferentes'
}

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const times = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo

if ((sum % 2) == 0) {
  oddOrEven = 'A soma dos números é par'
} else {
  oddOrEven = 'A soma dos números é ímpar'
}


alert(`Soma: ${sum} | Subtração: ${sub} | Multiplicação: ${times} | Divisão: ${div.toFixed(2)} | Resto da divisão: ${restDiv} | ${comparison} | ${oddOrEven}: ${sum}` )