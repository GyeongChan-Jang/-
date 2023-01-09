let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])
let arr = input[1].split(' ').map(Number)
const v = Number(input[2])

let answer = arr.filter((item) => item === v)
console.log(answer.length)