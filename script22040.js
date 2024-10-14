// let fruit = "banana"
// let fruit2 = "apple"
// let fruit3 = "grape"
// let fruit4 = "mango"
//여기까지는 비 효율적인 변수 선언
/*-------------------------------------------*/
//배열은 관련있는 데이터들을 하나로 묶어서 하나의 변수 아리에 저장하는 것
//엑셀과 비슷한 점 많음, 하나의 열에 관련있는 데이터들을 모두 저장
// let fruit = ["banana","apple","grape","mango"]
// console.log(fruit) //데이터 전부 호출
// console.log(fruit[0])//바나나만 호출 컴퓨터는 배열에서 순서를 0부터 셉니다.
                     //즉 index는 0부터 시작
// console.log(fruit[3])
// fruit[0] = "cherry"
// console.log(fruit) 
// fruit[2] = "tomato"
// console.log(fruit)

//pop() : 마지막에 있는 아이템을 뺌
// fruit.pop()
// console.log(fruit)

//push() : 괄호 안에 아이템을 넣어주면 그 배열에 아이템을 추가
// fruit.push("pineapple")
// console.log(fruit)
//fruit.includes("apple") : fruit라는 배열에 "apple" 이 있어요?
// console.log(fruit.includes("apple"))
// console.log(fruit.includes("pear"))

//fruit.indexOf("apple") : fruit라는 배열에 "apple" 가 몇번째 인덱스에 있는지?
// console.log(fruit.indexOf("apple"))

//slice : 배열 아이템을 잘라내는 역할 (시작점, 끝점-끝점 미포함)
//slice는 기존의 배열을 짜르지 않음
//fruit.slice(1) : fruit 배열에서 인덱스 번호 1부터 그 뒤를 전부 짤라냄
// console.log(fruit.slice(1))  // ['apple', 'grape', 'mango', 'pineapple']
//fruit.slice(1,3) : fruit 배열에서 인덱스 번호 1부터 3까지(3은 포함 안함) 짤라냄
// console.log(fruit.slice(1,3))

//splice : 배열 아이템 잘라내는 역할 (시작점, 개수) (시작점 포함, 개수를 적지 않으면 그 다음 전부 삭제)
//splice는 기존의 배열을 짜름
//fruit.splice(2,1) : fruit 배열에서 인덱스 번호 2부터 시작하여 몇개 아이템을 삭제할것인지?
// fruit.splice(2,1)
// console.log(fruit)

// fruit.splice(2,2)
// console.log(fruit)

// fruit.splice(0,2)
// console.log(fruit)

//slice 와 splice 차이
// let extrafruit = fruit.slice(1,3)
// console.log(extrafruit)
// console.log("Original fruit ",fruit)

// let extrafruit = fruit.splice(0,2)
// console.log(extrafruit)
// console.log("extrafruit + fruit == Original fruit", fruit)
/*-------------------------------------------*/
let animals= [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur", 
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Grasshopper",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Moose",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum", 
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit", 
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Red deer",
    "Sandpiper",
    "Sardine",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Tiger",
    "Toad",
    "Whale",
    "Wildcat",
    "Wolf",
    "Worm",
    "Wren",
    "Yak",
    "Zebra"
]

// 어레이에 마지막 아이템 “Zebra” 제거하기
// animals.pop()
// console.log(animals)

// 주어진 어레이에 “Dog” 추가하기
// animals.push("Dog")
// console.log(animals)

// 주어진 어레이에 “Mosquito”,“Mouse”,“Mule” 추가하기
// animals.push("Mosquito","Mouse","Mule")
// console.log(animals)

// 해당 어레이에는 "Human"이 있는가?
// console.log(animals.includes("Human"))

// 해당 어레이에는 “Cat” 이 있는가?
// console.log(animals.includes("Cat"))

// "Red deer"을 "Deer"로 바꾸시오
//나의 답안, 순서가 바뀜
// let animal1 = animals.indexOf("Red deer")
// animals.splice(animal1,1)
// animals.push("Deer")
// console.log(animals)
//모범답안
// animals[animals.indexOf("Red deer")] = "Deer"
// console.log(animals)

// "Spider"부터 3개의 아이템을 기존 어레이에서 제거하시오
//나의 답안
// let animal2 = animals.indexOf("Spider")
// animals.splice(animal2,3)
// console.log(animals)
//모범답안
// animals.splice(animals.indexOf("Spider"),3)
// console.log(animals)

// "Tiger"부터 그 이후의 값을 제거하시오 (Tiger 포함임)
//혼자서 풀지 못한 문제
//모범답안
// animals.splice(animals.indexOf("Tiger"))
// console.log(animals)

// "B"로 시작되는 아이템인 "Baboon"부터 "Bison"까지 가져와 새로운 어레이에 저장하시오
//혼자서 풀지 못한 문제
//모범답안
let newList = animals.slice(animals.indexOf("Baboon"),animals.indexOf("Bison") + 1)
console.log(newList)
