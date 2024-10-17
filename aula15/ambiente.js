let num = [7, 3, 9]
num.push(4)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]} `)
let pos = num.indexOf(9)
if (pos == -1){
    console.log (`O valor 9 está na posicao ${pos}`)
} else {
    console.log(`o valor está na posicao ${pos}`)
}