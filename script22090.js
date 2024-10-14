// i = i + 1   i ++
// for(let i = 0; i <= 10; i ++) {
//     if (i % 2 == 0) {
//         console.log("누나!!", i)
//     }
// }

// for(let i = 0; i <= 10; i += 2) {
//     console.log("누나!!", i)
// }

// for (let i = 2; i <= 9; i ++) {
//     for (let j = 1; j <= 9; j ++)
//         console.log(i + "x" + j + "=" + i * j + "  ")
// }

// let i = 2
// while (i < 10) {
//     console.log("while문 실행", i)
//     i++;
// }

//for은 배열과 찰떡궁합
// let fruit = ["banana", "apple", "grappe","mango"]
// for (let i = 0; i < fruit.length; i++){
//     console.log(fruit[i])
// }
/*---------------------------------------------------------*/
//문제풀이
//1
// let sum = 0
// for (let i = 1; i <= 100; i++){
//     sum += i
// }
// console.log(sum)

//2
// for (let i = 1; i <= 100; i++){
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

//3 혼자 못한 문제 답안 베낌
// for (let i = 1; i <= 50; i++) {
//     let stringValue = i.toString() //숫자 타입을 String 타입으로 바꾸는 함수
//     let result = ""
//     for (let j = 0; j < stringValue.length; j++) {
//         if (stringValue[j] == 3 || stringValue[j] == 6 || stringValue[j] == 9) {
//             result += "짝"
//         }
//     }
//     console.log(result.length > 0? result : i)
// }

//4-1 나의 방식
// let i = 1
// let sum = 0
// if (i === 1){
//     console.log(false)
// }
// else {
//     for (let j = 2; j < i; j++){
//         if (i % j == 0) {
//             sum++
//         }
//     }
//     console.log(sum > 0 ? true : false)
// }

//4-2 모범답안
let n = 11
let isPrime = true
if (n === 1){
    isPrime = false
}
else {
    for (let i = 2; i < n; i++){
        if (n % i == 0) {
            isPrime = false
        }
    }
}
console.log(isPrime)


