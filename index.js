// console.log("hello world")
// 0.5
// 1
// ;("use strict")
// ;("jhhjgj")
// true
// false

// let number = 2 // .toFixed(2) // "2.00" 2 "2.01" 2.01
// const name = "jac"
// number = 3
// let temp = number
// console.log(temp)
// number = 4
// temp = number
// console.log(temp)

// //pratice
// let a = 10
// let b = 20
// let c
// c = a
// a = b
// b = c
// //
// console.log(a,b)

// == != && || > < 邏輯運算子
let a = 10
let b = 20
// console.log(a == 10)
// console.log(a != 10)
// console.log(a == 10 && b == 20)
// console.log(a == 10 || b == 10)
// console.log(a <= 10 && b >= 20)

// 算術運算子
// + - * / %
// console.log("1" + "2")
// console.log(1 + 2)
// console.log(2 - 1)
// console.log(2 * 3)
// console.log(6 / 2)
// console.log(5 % 2)

// if (a == 10) {
//   console.log("a is 10")
// } else if (a == 11) {
//   console.log("a is 11")
// } else if (a == 15) {
//   consle.log("a is 15")
// } else {
//   console.log("a is not equal 10 and 15")
// }

// for(let i = 0; i < 10; i++) {
//  console.log(i)
// }
// console.log("for loop end")

// let double = function (num1, num2) {
//   // num = num || 1 // 如果沒有傳入參數，預設值為 1
//   return num1 * 2
// }
// let c = double(2, 3) // 4
// console.log(c)
// let sayMyName = function (name) {
//   console. log("My name is" + name)
// }
// sayMyName("jac")
// sayMyName("mary")
// sayMyName("ming")
// sayMyName("john")
// console.log(document.querySelector("#year"))
// window.onload = function () {
//     console.log(document.querySelector("#year"))
//     document.querySelector("#year_btn").addEventListener("click", function (){
//         const year = parseInt(document.querySelector("#year").value)
//         //該年份為400的倍數，或者為4的倍數，但不可以是100的倍數
//         let result
//         if (year % 400 == 0 || (year % 4 == 0 && year % 100 !=0)) {
//             result = "閏年"
//         } else {
//             result = "不是閏年"
//         }
//         console.log(year)
//         document.querySelector("#answer").innerHTML = year
//     })
// }

// const isTriangle = function (a, b, c) {
//   return a + b > c && a + c > b && b + c > a
// }
// // 三角形特性，兩邊相加大於第三邊
// console.log(isTriangle(1, 2, 3)) // false
// console.log(isTriangle(3, 4, 5)) // true

// const countBMI = function (height, weght) {
//     // 體重 / 身高平方(M)
//     return weight / (height * height)
// }
// let bmi = countBMI(1.7, 60)
// console.log(bmi)
// console.log(countBMI(1.7, 60))

// 判斷大小的函式
// const whichIsBig = function (a, b) {
//      if (a > b) {
//         return a
//      } else if (b > a) {
//         return b
//      }
// }
// whichIsBig(1, 2)

// 成績判斷
// 95-100 return A+
// 90-94 return A
// 80-89 return B
// 70-79 return C
// 0-69 return D
// const checkScore = function (score) {}
// const checkScoreWithFullRange = function (score) {

//   // 判斷式從最高分開始，每個都包含上限和下限
//   if (score >= 95 && score <= 100) {
//     return "A+";
//   } else if (score >= 90 && score <= 94) {
//     return "A";
//   } else if (score >= 80 && score <= 89) {
//     return "B";
//   } else if (score >= 70 && score <= 79) {
//     return "C";
//   } else if (score >= 0 && score <= 69) {
//     // 注意：D 也需要一個明確的範圍了
//     return "D";
//   } else {
//     // 如果以上所有範圍都不符合，那它就是一個無效的分數
//     return "無效的分數";
//   }
// };
// // --- 測試這個函式 ---
// console.log("--- 開始測試明確範圍版本 ---");
// console.log(`分數 100 的等級是: ${checkScoreWithFullRange(100)}`);
// console.log(`分數 94 的等級是: ${checkScoreWithFullRange(94)}`);
// console.log(`分數 75 的等級是: ${checkScoreWithFullRange(75)}`);
// console.log(`分數 69 的等級是: ${checkScoreWithFullRange(69)}`);
// console.log(`分數 105 的等級是: ${checkScoreWithFullRange(105)}`);
// console.log(`分數 -1 的等級是: ${checkScoreWithFullRange(-1)}`);
// console.log("--- 測試結束 ---");

// // 99乘法表
// console.log("--- 九九乘法表 (主控台版) ---");

// // 外層迴圈：代表被乘數 (i)
// for (let i = 1; i <= 9; i++) {
//   // 內層迴圈：代表乘數 (j)
//   for (let j = 1; j <= 9; j++) {
//     // 計算結果
//     let result = i * j;
//     // 使用樣板字面值 (template literal) 來組合字串並印出，模板制服`用${}來放變數
//     console.log(`${i} × ${j} = ${result}`);
//   }
//   // 每輪外層迴圈結束後，印一條分隔線，讓版面更清晰
//   console.log("--------------------");
// }

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  sayName() {
    console.log(this.name)
  }
}

// const jac = new Person("jac", 20)
// jac.sayName() // jac
// const mary = new Person("mary", 21)
// mary.sayName() // mary

console.log("Hello world".length)
console.log("Hello world".substring(0, 3))
console.log("Hello world".toUpperCase())
const word = "hello world"

console.log(
  word.substring(0, 1).toUpperCase() + // H
    word.substring(1, word.length) // ello world
)

// string
// console.log("1,jac,wang,21;2,mary,yang,22".split(";"))

// xml
{
  /* <students>
  <student>
    <firstname>jac</firstname>
    <age>21</age>
  </student>
  <student>
    <firstname>mary</firstname>
    <age>22</age>
  </student>
</students> */
}

// json
const students = [
  {
    id: 1,
    last_name: "林",
    first_name: "美玲",
    gender: "female",
    phone: "0912-345-678",
    birthday: "1998-03-15",
    email: "meiling.lin@email.com",
  },
  {
    id: 2,
    last_name: "王",
    first_name: "俊傑",
    gender: "male",
    phone: "0923-456-789",
    birthday: "1997-11-22",
    email: "junjie.wang@email.com",
  },
  {
    id: 3,
    last_name: "張",
    first_name: "雅婷",
    gender: "female",
    phone: "0934-567-890",
    birthday: "1999-07-30",
    email: "yating.zhang@email.com",
  },
  {
    id: 4,
    last_name: "李",
    first_name: "建志",
    gender: "male",
    phone: "0945-678-901",
    birthday: "1998-09-05",
    email: "jianzhi.li@email.com",
  },
  {
    id: 5,
    last_name: "陳",
    first_name: "佳蓉",
    gender: "female",
    phone: "0956-789-012",
    birthday: "1997-05-18",
    email: "jiarong.chen@email.com",
  },
  {
    id: 6,
    last_name: "黃",
    first_name: "志明",
    gender: "male",
    phone: "0967-890-123",
    birthday: "1999-01-10",
    email: "zhiming.huang@email.com",
  },
  {
    id: 7,
    last_name: "吳",
    first_name: "芳瑜",
    gender: "female",
    phone: "0978-901-234",
    birthday: "1998-12-03",
    email: "fangyu.wu@email.com",
  },
  {
    id: 8,
    last_name: "劉",
    first_name: "家豪",
    gender: "male",
    phone: "0989-012-345",
    birthday: "1997-08-20",
    email: "jiahao.liu@email.com",
  },
  {
    id: 9,
    last_name: "蔡",
    first_name: "雅琪",
    gender: "female",
    phone: "0990-123-456",
    birthday: "1999-04-25",
    email: "yaqi.cai@email.com",
  },
  {
    id: 10,
    last_name: "楊",
    first_name: "志遠",
    gender: "male",
    phone: "0901-234-567",
    birthday: "1998-06-12",
    email: "zhiyuan.yang@email.com",
  },
]
// forEach
for (let i = 0; i < students.length; i++) {
  console.log(students[i].first_name)
}
students.forEach(function (student) {
  console.log(student.first_name)
})

// filter
// const result = []
// for (let i = 0; i < students.length; i++) {
//   if (students[i].gender == "male") {
//     result.push(students[i])
//   }
// }
// console.log(result)
console.log(
  students.filter(function (student) {
    return student.gender == "male"
  })
)

// map
// const result = []
// for (let i = 0; i < students.length; i++) {
//   result.push({
//     // id: students[i].id,
//     // first_name: students[i].first_name,
//     // last_name: students[i].last_name,
//     // gender: students[i].gender,
//     // phone: students[i].phone,
//     // birthday: students[i].birthday,
//     // email: students[i].email,
//     ...students[i],
//     age: new Date().getFullYear() - students[i].birthday.substring(0, 4),
//   })
//   // console.log(new Date().getFullYear() - students[i].birthday.substring(0, 4))
// }
// console.log(result)

// reduce
// let sum = 0
// for (let i = 0; i < students.length; i++) {
//   sum += new Date().getFullYear() - students[i].birthday.substring(0, 4)
// }
// console.log(sum)

// console.log(JSON.parse(JSON.stringify(students)))

// fetch
fetch("https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json")
  .then(function (res) {
    return res.json()
  })
  .then(function (json) {
    console.log(json)
  })

  // setInterval

  // setTimeout
  setTimeout(function () {
    console.log("timeout")
  }, 1000)
  setTimeout(() => {
    clearInterval(timer)
  }, 5000)