/** 
function greet(){
    console.log("안녕 내 이름은 제시카야")
}

greet()
*/

/** 
function greet(name){
    // console.log("안녕 내 이름은 " + name + "야")
    console.log("안녕 내 이름은 ", name, "야")
}

greet("밀리")
greet("힐리")
*/

/**
//혼자서 풀어본 문제 틀렸음
// function meetAt(ye_ar, mon_th, da_y){
//     if(mon_th=="" && da_y==""){
//         return ye_ar + "년"
//     }
//     else if (da_y==""){
//         return ye_ar + "년" + mon_th + "월"
//     }
//     else{
//         return ye_ar + "년" + mon_th + "월" + da_y + "일"
//     }
// }

//모범답안
// function meetAt(ye_ar, mon_th, da_y){
//     if(da_y){
//         return `${ye_ar}/${mon_th}/${da_y}`
//     }
//     if (mon_th){
//         return `${ye_ar}/${mon_th}`
//     }
//     if (ye_ar){
//         return `${ye_ar}`
//     }
// }
// console.log(meetAt(2022))
// console.log(meetAt(2032,3))
// console.log(meetAt(1987, 10, 28))
 */

/** 
//혼자 풀어보지 못했음 모범 답안 보며 이해 했음
function findSmallestElement(arr){
    result = arr[0]
    if (arr.length === 0){
        return 0
    }
    for (let i = 1; i < arr.length; i++){
        if (result > arr[i]){
            result = arr[i]
        }
    }
    return result
}
let smallestElement=findSmallestElement([100,200,3,324,2,43])
console.log(smallestElement)
*/
/** 
 * //여하튼 소학교 지식으로 고등학교 문제 풀었음 중점 Math.floor() 정수 부분만 취하는 함수
let val = 12300
function valnum (num){
    let mo50000 = Math.floor(num / 50000)
    console.log("50000원짜리" , mo50000, "장")
    num = num - mo50000 * 50000
    let mo10000 = Math.floor(num / 10000)
    console.log("10000원짜리" , mo10000, "장")
    num = num - mo10000 * 10000
    let mo5000 = Math.floor(num / 5000)
    console.log("5000원짜리" , mo5000, "장")
    num = num - mo5000 * 5000
    let mo1000 = Math.floor(num / 1000)
    console.log("1000원짜리" , mo1000, "장")
    num = num - mo1000 * 1000
    let mo500 = Math.floor(num / 500)
    console.log("500원짜리" , mo500, "장")
    num = num - mo500 * 500
    let mo100 = Math.floor(num / 100)
    console.log("100원짜리" , mo100, "장")
}
valnum(val)
*/

//모범답안 이해
let unit = [50000,10000,5000,1000,500,100]

//먼저 함수 테스트
// function changeCalculatemoney(money){
//     console.log(money)
// }
function changeCalculatemoney(money){
    for (let i = 0; i < unit.length; i++){
        let num = Math.floor(money / unit[i])
        console.log(unit[i],"원짜리",num,"장")
        money = money - (num * unit[i])
    }
}

changeCalculatemoney(13200)
