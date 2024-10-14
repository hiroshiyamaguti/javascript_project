// let number = -1

// if (number > 0) {
//     console.log("양수입니다.")
// }
// else if (number == 0) {
//     console.log("0입니다.")
// }
// else {
//     console.log("음수입니다.")
// }

// let number = 560
// if (number > 100){
//     alert("정확한 점수범위를 입력해 주세요")
// }

// if (number >= 90 && number <= 100) {
//     console.log("A")
// }
// else if (number >= 80 && number <=89) {
//     console.log("B")
// }
// else if (number >= 70 && number <=79) {
//     console.log("C")
// }
// else if (number >= 60 && number <=69) {
//     console.log("D")
// }
// else if (number >=0 && number <= 59) {
//     console.log("F")
// }
// else {
//     console.log("잘못된 범위의 점수입니다.")
// }

// let skills = ["HTML", "CSS", "JavaScript", "React"]
// let skills = ["HTML", "CSS", "JavaScript"]
// let skills = ["HTML", "CSS"]

// if (skills.includes("JavaScript") && skills.includes("React")) {
//     console.log("합격")
// }
// else if (skills.includes("JavaScript") || skills.includes("React")) {
//     console.log("예비")
// }
// else {
//     console.log("탈락")
// }
/*--------------------------------------------------------------*/
/*보너스 트랙 switch*/
// let menu = 8
// if (menu == 1) {
//     console.log("물건 사기")
// }
// else if (menu == 2) {
//     console.log("잔고확인")
// }
// else if (menu == 3) {
//     console.log("히스토리확인")
// }
// else {
//     console.log("홈으로 돌아가기")
// }

// 
/**if문은 조건에 범위를 정할수 있지만 switch는 case 값이 딱
 * 맞아 떨어질때 실행 됨으로 if문보다 사용범위가 졻다
 */


//let menu = 2
// if (menu <= 3) {
//     console.log("범위안에 숫자입니다.")
// }
// else {
//     console.log("범위 밖의 숫자입니다.")
// }
/*삼항 연산식 조건? true일때 : false일때 */
let menu = 2
let answer = menu <= 3? "범위안에 숫자입니다." : "범위 밖의 숫자입니다."
console.log(answer)