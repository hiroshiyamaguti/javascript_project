// let patient ={
//     name: "jimin",
//     age : 17,
//     disease : "cold"
// }

// console.log(patient)
// console.log(patient.name)
// console.log(patient.age)
// console.log(patient["age"]) //console.log(patient.age)과 똑같음
// patient.name = "jk"
// patient.age = 25  //patient["age"] = 25 도 똑같은 효과
// console.log(patient)

let patientList = [{name:"jimin",age:13},{name:"jk",age:25},{name:"jhope",age:40}]

console.log(patientList)
console.log("첫번째 환자는: ",patientList[0])
console.log("첫번째 환자의 나이는 : ",patientList[0].age)
//console.log("첫번째 환자의 나이는 : ",patientList[0]["age"]) 로도 쓸수 있음

console.log("두번째 환자의 이름: ", patientList[1].name)