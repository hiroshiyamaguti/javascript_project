let fruit = ['apple','mango','strawbarry','pineapple']
// for(let i = 0; i < fruit.length; i++) {
//     console.log("누나가 좋아하는 과일은: " , fruit[i])
// }

//for...of 배열 혹은 스트링에 많이 쓰임, object에는 사용 할수 없음
//장점: 코드가 간단함   단점: 디테일하게 첫번째 시작 값, 증가하는 값 등을 설정 못함
// for(let item of fruit){
//     console.log("누나가 좋아하는 과일은 of: " , item)
// }
// let sentence = '누나는 코딩을 너무 좋아해'
// for(let char of sentence) {
//     console.log("char" , char)
// }

//for...in name이라는 key가 있었던가?
// let person = {
//     name:"누나", 
//     age: 25, 
//     cute: false
// }
// for(let key in person) {
//     console.log("key", key)
//     // if (key === "cute") {
//     //     console.log("누나는 귀엽니? ", person[key])
//     // }
//     console.log("누나는 귀엽니? ", person.cute)
// }

for(let key in fruit){
    console.log("key", key)
}