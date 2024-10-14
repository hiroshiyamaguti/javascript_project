// console.log("빵두기")
// console.log("상추두기")
// console.log("고기패티두기")
// console.log("뚜껑덮기")

// console.log("감튀빡스선택")
// console.log("감튀 담기")

// console.log("콜라통 선택")
// console.log("얼음담기")
// console.log("콜라담기")

// 변수 선언 let const var

function makeBurger(type,size,num){
    console.log("매개변수값은?", type)
    console.log("빵두기")
    console.log("상추두기")
    if (num < 1){
        return "버거 개수가 0개 입니다."
    }
    if (type == "불고기"){
        console.log("고기패티두기")
    }
    else if (type == "새우"){
        console.log("새우패티두기")
    }    
    console.log("뚜껑덮기")
    console.log(type,"버거",size,"사이즈", num,"개 준비 완료")

    return "완료 되였습니다."
}

function serveCoke(){
    console.log("콜라통 선택")
    console.log("얼음담기")
    console.log("콜라담기")
}

function servefrenchFries(){
    console.log("감튀빡스선택")
    console.log("감튀 담기")
}

//함수는 만든후 불러야 실행됨
//함수와 변수의 차이: 함수는 부를때 괄호 있음, 변수는 없음 
//함수에 괄호를 넣는 이유: 매개변수를 넣어주는것
//return 어떤 값을 반환 (return을 만나는 순간 이 함수는 끝나벼려)

// let result = makeBurger("불고기","L",0)
// console.log("버거 프로세스 결과:", result)

function makeSet(){
    makeBurger("불고기","M",2)
    serveCoke()
    servefrenchFries()
}

makeSet()