// 輸入 cat LIMITOinput.txt | node LIMITOJ3.js

/**
 * @desc 輸出 solve
 * line 輸入參數 string 要轉 number
 * control + D 執行
 */
var readline = require("readline")

var lines = []
var rl = readline.createInterface({
  input: process.stdin,
})

rl.on("line", function (line) {
  lines.push(line)
})

rl.on("close", function () {
  solve(lines)
})

// 練1 印出 1-100 的奇數
// function a(){
//   for(let i = 1; i <= 100;i++){
//     // console.log(i)
//     if(i%2 !== 0) {
//       console.log(i)
//     }
//   }
// }
// a()

// 練2 fizz buzz
// function fb(n){
//   let ary = []
//   for(let i=1;i<=n;i++){
//     // console.log(n[i], i)
//     if(i%3 === 0 && i%5 === 0) {
//       ary.push('FizzBuzz')
//     } else if(i%3 === 0){
//       ary.push('Fizz')
//     } else if (i%5 === 0){
//       ary.push('Buzz')
//     } else ary.push(i)
//   }
//   console.log(ary)
// }
// fb(15)

// 練3 找最小值
// function min(ary){
//   let num = ary[0]
//   for(let i = 0; i <ary.length; i++){
//     if(ary[i]< num) {
//       num = ary[i]
//     }
//   }
//   console.log(num)
// }
// min([6,3,5,2,8])

// 練4 字串反轉
// function str(ary){
//   let new_str =[]
//   for(let i = ary.length-1; i >= 0; i--){
//     new_str.push(ary[i])
//     // console.log(ary[i])
//   }
//   console.log(new_str)
// }
// str('hello')

// 練 5 陣列總和
// function aryNum(ary) {
//   let num = 0
//   for(let i = 0; i < ary.length; i++){
//     num += ary[i]
//   }
//   console.log(num)
// }
// aryNum([1,2,3])

// 練 6 找最大值
// function max(ary){
//   let maxNum = ary[0]
//   for (let i = 0; i <ary.length;i++){
//     if(maxNum < ary[i]){
//       maxNum = ary[i]
//     }
//   }
//   console.log(maxNum)
// }
// max([5,3,7])

// 練 7 找次小值
/*
Infinity 無窮大
*/
// function min(ary){
//   let min = Infinity
//   let min2 = Infinity
//   for (let i = 1; i <= ary.length; i++) {
//     if( ary[i] < min){
//       console.log('1')
//       min2 = min
//       min = ary[i]
//     } else if(ary[i] < min2){
//       console.log("2")
//       min2 = ary[i]
//       console.log(min2)
//     }
//     console.log("3")
//   }
//   console.log(min,min2)
// }
// min([8,4,6])

// 練 8 大小寫互換
// function change(n) {
//   let newAry = ''
//   for(let i = 0; i <n.length; i++){
//     // console.log(n[i])
//     if(n[i] > 'a' && n[i] < 'z') {
//       newAry += n[i].toUpperCase()
//     } else if (n[i] > 'A' && n[i] < 'Z') {
//       newAry+=n[i].toLowerCase()
//     }
//   }
//   console.log(newAry)

// }
// change('heLLo')

// 練 9 印出因數
// function num(n){
//   let numAry = []
//   for(let i=1; i<=n;i++){
//     // console.log(ib )
//     if(n % i === 0){
//       numAry.push(i)
//     }
//   }
//   console.log(numAry)
// }
// num(30)

// 1001. a+b
// function solve(lines) {
//   let tmp = lines[0].split(" ")
//   console.log(Number(tmp[0]) + Number(tmp[1]))
// }

// 1002. 數字比大小
// function solve(lines) {
//   for (let i = 0; i < lines.length; i++) {
//     let num = lines[i].split(" ")
//     let a = Number(num[0])
//     let b = Number(num[1])
//     if (a === 0 && b === 0) return
//     if (a > b) {
//       console.log(a)
//     } else {
//       console.log(b)
//     }
//   }
// }

// 1010. 靈魂伴侶
// function solve(lines) {
//   for (let i = 0; i < lines.length; i++) {
//     let num = lines[i].split(" ")
//     let a = Number(num[0])
//     let b = Number(num[1])
//     if(a === b){
//       console.log('Yes')
//     } else if (a !== b) {
//       console.log('No')
//     }
//   }
// }

// 1015. 音速小子
// function solve(lines) {
//   let a = Number(lines[0]) * 340
//   console.log(a)
// }

// 1017. 貪婪的小偷
/**
  可帶走幾項物品？總共幾項物品？可帶走幾項物品的價值？
  白話 -> 最多可拿走幾項？總共有幾項？加總拿走的項目
  maxItem    最多可拿走幾項
  totalItem  總共有幾項
  priceAry   項目
  taotalPrice  加總拿走的項目
  numPriceAry  轉為 num 的 Array
*/
// function solve(lines) {
//   let maxItem = Number(lines[0])
//   let totalItem = Number(lines[1])
//   let taotalPrice = 0
//   // 把前兩項過濾，給 priceAry
//   let priceAry = lines.slice(2, lines.length)
//   // 排序大到小，只要用 slice 取前 3
//   priceAry.sort(function (a, b) {
//     return b - a
//   })
//   let numPriceAry = []
//   // 轉 number
//   for (let i = 0; i < priceAry.length; i++) {
//     numPriceAry.push(Number(priceAry[i]))
//   }
//   numPriceAry = numPriceAry.slice(0, maxItem)
//   // 最後的價值加總
//   taotalPrice = numPriceAry.reduce(function (a, b) {
//     return a + b
//   }, 0)
//   console.log(taotalPrice)
// }

// 1022. 印出金字塔
/**
n 1 0 1
n 3 1 2
n 5 2 3
n 7 3 4
n 9 4 5
空白？ n-1
2n-1
*/
// function solve(lines) {
//   let num = Number(lines[0])
//   for (let i = 1; i <= num; i++) {
//     printStar(i, num)
//   }
//   function printStar(i, num){
//     let star = repeat(" ", num-i)+repeat('*',2*i-1)
//     console.log(star)
//   }
//   // 計算空白＆星星
//   function repeat(star, num){
//     let s = ''
//     for(let i =1;i<=num;i++){
//       s+=star
//     }
//     return s
//   }
// }

// 1024. NM 乘法表
// function solve(lines) {
//   let n = Number(lines[0])
//   let m = Number(lines[1])
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= m; j++) {
//       console.log(`${i}*${j}=${i * j}`)
//     }
//   }
// }

// 1023. 聖誕樹
/*
拆成上下兩部份
判斷間隔
*   -> 2i-1
' ' -> n-i
*/
// function solve(lines) {
//   let n = Number(lines[0])
//   tree(n)
//   function tree(n) {
//     if (n === 1) {
//       console.log("*")
//     } else if (n !== 1) {
//       treeTop(n)
//       treeDown(n)
//     }
//   }

//   function treeTop(n) {
//     for (let i = 1; i <= n; i++) {
//       console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1))
//     }
//   }

//   function treeDown(n) {
//     for (let i = 1; i <= n - 1; i++) {
//       console.log(" ".repeat(n - 1) + "|")
//     }
//   }
// }

// 1025. 水仙花數
/*
  數字 0~9 也都是水仙花數，因為一位數 n 的 1 次方一定會等於自己
  判斷幾位數
  切割數量，數字相乘後相加
  比對是否與先前數值相同
*/
// function solve(lines) {
//   let num = lines[0].split(" ")
//   a = Number(num[0])
//   b = Number(num[1])
//   for(let j = a;j<=b;j++){
//     let strNum = String(j)
//     let num = 0
//     for(let i = 0;i < strNum.length;i++){
//       num += Math.pow(strNum[i], strNum.length)
//     }
//     if(num === Number(strNum)){
//       console.log(Number(strNum))
//     }
//   }
// }

// 1026. 等比數列
/*
判斷 array 相除的結果
*/
// function solve(lines) {
//   let ary = lines[1].split(" ")
//   let ans = ary[1]/ary[0]
//   let tf = []
//   for(let i = 1; i < ary.length;i++){
//     if((ary[i]/ary[i-1]) !== ans) {
//       tf.push('No')
//     }
//     tf.push("Yes")
//   }
//   if (tf.indexOf("No") === -1) {a
//     console.log("Yes")
//   } else {
//     console.log("No")
//   }
// }

// 1027：信用卡號驗證
/**
分積數
分偶數
加總後判斷
*/
// function solve(lines) {
//   let ary = lines[0].split("-")
//   let evenDigitsCount = null
//   let evenCount = null
//   let first = 0
//   let last = 0
//   for (let i = 0; i <= ary.length - 1; i++) {
//     first = ary[0]
//     last = ary[3]
//     evenDigitsCount += acle(ary[i])
//     evenCount += acle2(ary[i], i)
//   }
//   let spLast = last.slice(3, 4)
//   // console.log("evenDigitsCount:", evenDigitsCount, "evenCount:", evenCount)
//   let sum = evenDigitsCount + evenCount
//   let check = sum % 10
//   if(check !== 0){
//     check = 10 - check
//   }
//   // console.log(check, spLast)
//   let cardTitle = Math.floor(first / 1000)
//   if (check !== Number(spLast)) {
//     console.log("INVALID")
//   } else {
//     if (cardTitle === 5) {
//       console.log("MASTER_CARD")
//     } else if (cardTitle === 4) {
//       console.log("VISA")
//     } else if (cardTitle === 3) {
//       console.log("JCB")
//     }
//   }
//   // }

//   // 前 15位加總
//   function addAll(item, local) {
//     let sum = 0
//     for (let i = 0; i < item.length; i++) {
//       // console.log(i, item[i], "local:", local)
//       if (local !== 3) {
//         sum += Number(item[i])
//         // console.log('sum:',sum)
//       } else {
//         // sum = Number(item[0]) + Number(item[1]) + Number(item[2])
//         sum += Number(item[i] - 1)
//         // console.log("sum:", sum, item[i])
//       }
//     }
//     // console.log(sum)
//     return sum
//   }

//   // 積位數
//   function acle(item) {
//     let one = 0
//     let three = 0
//     let a = 0
//     for (let i = 0; i < item.length; i++) {
//       // console.log(item)
//       one = Number(item[0]) * 2
//       three = Number(item[2]) * 2
//       if (one >= 10) {
//         one = one - 9
//       }
//       if (three >= 10) {
//         three = three - 9
//       }
//     }
//     a = one + three
//     // console.log("a:", a, "one:", one, "three:", three)
//     return a
//   }

//   // .偶位數
//   function acle2(item, local) {
//     let two = 0
//     let four = 0
//     let b = 0
//     for (let i = 0; i < item.length; i++) {
//       two = Number(item[1])
//       if (local !== 3) {
//         four = Number(item[3])
//       }
//     }
//     b = two + four
//     // console.log("b:", b, "two:", two, "four:", four)
//     return b
//   }
// }

// 1028：生命靈數
// function solve(lines) {
//   let ary = lines[0].split(" ")
//   let num = 0
//   for (let i = 0; i < ary.length; i++) {
//     num += f(ary[i])
//   }
//   while(num >= 10){
//     num = f(String(num))
//   }
//   console.log("num:", num)

//   function f(item) {
//     let num = 0
//     for (let i =0;i< item.length;i++){
//       num += Number(item[i])
//     }
//     return num
//   }
// }

// 1029：加減乘除:
// function solve(lines){
//   let ary = lines[0].split(" ")
//   let numA = Number(ary[0])
//   let calc = ary[1]
//   let numB = Number(ary[2])
//   let count
//   if(0<numA <= 10000 && 0<numB <= 10000){
//     if (ary[1] === "*") {
//       count = numA * numB
//     } else if (ary[1] === "+") {
//       count = numA + numB
//     } else if (ary[1] === "-") {
//       count = numA - numB
//     } else if (ary[1] === "/") {
//       count = Math.floor(numA / numB)
//     }
//   }
//   console.log(count)
// }

// 1030：判斷迴文
// function solve(lines){
//   let ary = lines[0]
//   // console.log(ary)
//   let newAry = ''
//   for(let i = ary.length-1; i >=0 ; i--){
//     // console.log(ary[i])
//     newAry += ary[i]
//   }
//   // console.log(newAry)
//   let ans = ary === newAry ? 'True' : 'False'
//   console.log(ans)
// }

// 1031：完全平方和
// function solve(lines){
// let ary = Number(lines[0])
// let add = 0
//   for(let i = 1; i <= ary;i++){
//     // console.log(i)
//     let dub = Math.pow(i, 2)
//     if (dub < ary && dub % i === 0) {
//       // console.log(i)
//       add += dub
//     }
//   }
//   console.log(add)
// }

// 1032：平面距離計算(pass)
/**
 * 不使用 for 迴圈一次印出
 * 因為要分出座標的距離數字
 * 改用分開印 -> 4 個一組 -> 第2組從 index 5 開始
 */
// function solve(lines){
//   let t = Number(lines[0])
//   // console.log(t)
//   for(let i = 1; i <= t; i++){
//     let start = (i - 1) * 4 + 1
//     let x1 = Number(lines[start])
//     let y1 = Number(lines[start + 1])
//     let x2 = Number(lines[start + 2])
//     let y2 = Number(lines[start + 3])
//     console.log(distance(x1, y1, x2, y2))

//   }

//   function distance(x1, y1, x2, y2) {
//     let dis = Math.sqrt(
//       abs(x1 - x2) * abs(x1 - x2) + abs(y1 - y2) * abs(y1 - y2)
//     )
//     return dis.toFixed(2)
//   }

//   function abs(n) {
//     if (n < 0) {
//       return -n
//     }
//     return n
//   }
// }

// 1033：最近點對(pass)
// function solve(lines) {
//   let n = Number(lines[0])
//   let dots = []
//   for (let i = 1; i < lines.length; i++) {
//     let temp = lines[i].split(" ")
//     dots.push({
//       x: Number(temp[0]),
//       y: Number(temp[1]),
//     })
//   }

//   let min = Infinity
//   let ans = null
//   for (let i = 0; i < dots.length; i++) {
//     for (let j = i + 1; j < dots.length; j++) {
//       let dis = distance(dots[i].x, dots[i].y, dots[j].x, dots[j].y)
//       if (dis < min) {
//         min = dis
//         ans = {
//           x1: dots[i].x,
//           y1: dots[i].y,
//           x2: dots[j].x,
//           y2: dots[j].y,
//         }
//       }
//     }
//   }

//   if (ans.x1 > ans.x2) {
//     console.log(ans.x2 + " " + ans.y2)
//     console.log(ans.x1 + " " + ans.y1)
//   } else if (ans.x1 < ans.x2) {
//     console.log(ans.x1 + " " + ans.y1)
//     console.log(ans.x2 + " " + ans.y2)
//   } else {
//     if (ans.y1 > ans.y2) {
//       console.log(ans.x2 + " " + ans.y2)
//       console.log(ans.x1 + " " + ans.y1)
//     } else {
//       console.log(ans.x1 + " " + ans.y1)
//       console.log(ans.x2 + " " + ans.y2)
//     }
//   }
// }

// function distance(x1, y1, x2, y2) {
//   let dis = Math.sqrt(abs(x1 - x2) * abs(x1 - x2) + abs(y1 - y2) * abs(y1 - y2))
//   return dis
// }

// function abs(n) {
//   if (n < 0) {
//     return -n
//   }
//   return n
// }

// 1034：凱薩加密(看不出來錯哪誒) -> 題目敘述有問題 pass
// function solve(lines) {
// let shift = Number(lines[0])
// let s = lines[1].toLowerCase()
// let newAry = ''
// // console.log((0<= shift < 100 ))
// //  1<=s.length <= 1000
// if (0 <= shift && shift <= 100) {
//   if (1 <= s.length <= 1000){
//     for (let i = 0; i < s.length; i++) {
//       // console.log(shift)
//       // let oldNumber = Number(s[i].charCodeAt(0))
//       let newNumber = Number(s[i].charCodeAt(0)) + shift
//       console.log(newNumber)
//       if (newNumber > 122) {
//         let diff = newNumber - 122
//         //  -1 -> 因為要剪掉原先的自己在位移 x 位數 -> 120 121 122 97 98 99 100 101 102 103 104
//         newAry += String.fromCharCode(diff + 97 - 1)
//       } else {
//         newAry += String.fromCharCode(newNumber)
//       }
//     }
//   }
// }
// // return newAry
// console.log(newAry)
// }

// 為何這 -1 執行判定會正確？不是與題目不符嗎？？？
// function solve(lines) {
//   let n = Number(lines[0])
//   let str = lines[1]
//   let result = ""
//   for (let i = 0; i < str.length; i++) {
//     result += ceaserCipher(n, str[i])
//   }
//   console.log(result)
// }

// a: 0
// b: 1
// c: 2
// z: 25 -> 3:
// 28 (c: 2)
// function ceaserCipher(n, s) {
//   // 0~25`
//   let code = s.charCodeAt(0) - 97
//   let newCode = (code + n) % 26
//   return String.fromCharCode(newCode + 97)
// }

// 1046：圈圈叉叉

// function solve(lines) {
//   console.log(whoWin(lines))
// }

// function whoWin(lines) {
//   for (let i=0; i<3; i++) {
//     if (lines[i][0] === lines[i][1] && lines[i][1] === lines[i][2]) {
//       return lines[i][0]
//     }
//   }

//   for (let i=0; i<3; i++) {
//     if (lines[0][i] === lines[1][i] && lines[1][i] === lines[2][i]) {
//       return lines[0][i]
//     }
//   }

//   if (lines[0][0] === lines[1][1] && lines[1][1] === lines[2][2]) {
//     return lines[1][1]
//   }

//   if (lines[0][2] === lines[1][1] && lines[1][1] === lines[2][0]) {
//     return lines[1][1]
//   }

//   return 'DRAW'
// }

// 1036：Array reverse
// function solve(lines) {
//   let result = []
//   for(let i = lines.length-1; i >= 1 ; i--) {
//     result.push(Number(lines[i]))
//   }
//   for(let j =lines.length-1;j>=1;j--){
//     console.log(lines[j])
//   }
// }

// 1037：Array filter
// function solve(lines) {
//   let result = []
//   let filter = lines[0]
//   for (let i = 2; i < lines.length; i++) {
//     if(lines[i] !== filter) {
//       result.push(Number(lines[i]))
//     }
//   }
//   for (let j = 0; j < result.length; j++) {
//     console.log(result[j])
//   }
// }

// 1038：Array indexOf
// function solve(lines) {
//   let target = Number(lines[0])
//   let arr = []
//   for (let i = 2; i < lines.length; i++) {
//     arr.push(Number(lines[i]))
//   }
//   console.log(indexOf(arr, target))
// }

// function indexOf(arr, searchElement) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === searchElement) {
//       return i
//     }
//   }
//   return -1
// }

// LIOJ 1039：Array fill
// function solve(lines){
//   let target = Number(lines[0])
//   let newLines = lines.fill(target)
//   for (let i = 2; i < newLines.length; i++) {
//     console.log(newLines[i])
//   }
// }

// 1040：Array join
// function solve(lines) {
//   let target = lines[0]
//   let newLine = []
//   for (let i = 2; i < lines.length; i++) {
//     newLine.push(lines[i])
//   }
//   newLine = newLine.join(target)
//   console.log(newLine)
// }

// 1041：String trim
// function solve(lines) {
//   let target = lines[0]
//   console.log(target.trim())
// }

// 1042：String toLowerCase
// function solve(lines) {
//   let target = lines[0]
//   let result =''
//   for(let i = 0; i < lines[0].length; i++){
//     if (lines[0][i] >= 'A' && lines[0][i] <= 'Z'){
//         let code = lines[0].charCodeAt(i)
//     result += String.fromCharCode(code + 32)
//   } else {
//     result += lines[0][i]
//   }
//     }
//     console.log(result)
// }

// 1043：String endsWith
// function solve(lines) {
//   let line = lines[0]
//   let target = lines[1]
//   const startLen = line.length - target.length
//   let newLine = line.slice(startLen, line.length)
//   console.log(target === newLine)
// }

// 1035：簡易排序
// function solve(lines) {
//   let result = []
//   for (let i = 1; i < lines.length; i++) {
//     result.push(Number(lines[i]))
//   }
//   // sort 內負數判斷 return 回給 sort 再次判斷
//   result = result.sort(function (a, b){
//     return a-b
//   })

//   for (let j = 0; j < result.length; j++) {
//     console.log(result[j])
//   }

// }

// 1047：搜尋數字
// function solve(lines) {
//   // 解構取出單一值
//   let [n, m] = lines[0].split(" ")
//   let count = Number(n) + Number(m)
//   let newLines = lines.slice(1, Number(n) + 1)
//   let searchLines = lines.slice(Number(n) + 1, count + 1)
//   let result = []
//   for (let i = 0; i < searchLines.length; i++) {
//     result.push(newLines.indexOf(searchLines[i]))
//   }
//   for (let j = 0; j < result.length; j++) {
//     console.log(result[j])
//   }
// }


// 1048：最大連續和
// function solve(lines) {
//   console.log(lines[0])
//   const nesLines = lines.slice(1, Number(lines[0])+1)
//   let arr = []
//   for(let i = 0; i < nesLines.length; i++) {
//     arr.push(Number(nesLines[i]))
//   }
//   console.log(arr)
//   let max = -Infinity
//   for(let i = 0; i < lines.length; i++){
//     for(let j = i; j < lines.length; j++){
//       let sum = 0
//       // 相加到 j 數量長度結束
//       for(let k=i;k<=j;k++){
//         sum+=arr[k]
//       }
//       if(sum>max){
//         max = sum
//       }
//     }
//   }
//   console.log(typeof max)
// }

//  1049：陣列最短距離
/*
雙迴圈，相減取最小值
*/
// function solve(lines) {
//   // console.log(lines)
//   // 第二行資料
//   let mArray = lines[1].split(" ")
//   let mArray2 = []
//   for (let i = 0; i < mArray.length; i++) {
//     mArray2.push(Number(mArray[i]))
//   }
//   // 第三行資料
//   let nArray = lines[2].split(" ")
//   let nArray2 = []
//   for (let i = 0; i < nArray.length; i++) {
//     nArray2.push(Number(nArray[i]))
//   }
//   // console.log(mArray,nArray)
//   let min = Infinity
//   for (let i = 0; i < mArray2.length; i++) {
//     // console.log(mArray2[i])
//     // 丟進 nArray2 相減
//     for (let j = 0 ; j < nArray2.length; j++) {
//       let a = mArray2[i] - nArray2[j]
//       // console.log("a:", a, Math.abs(a))
//       if(Math.abs(a) <= min){
//         // console.log("min:", min, "a:", Math.abs(a))
//         min = Math.abs(a)
//       }
//     }
//   }
//   console.log(min)
// }

// 1050：two sum
/*
找出兩個相加是 target 的 index
*/
// function solve(lines) {
//   let [n, m] = lines[0].split(" ")
//   const target = Number(m)
//   let mArray = lines[1].split(" ")
//   let mArray2 = []
//   for (let i = 0; i < mArray.length; i++) {
//     mArray2.push(Number(mArray[i]))
//   }
//   for(let i = 0;i< mArray2.length; i++){
//     for (let j = 0; j < mArray2.length;j++){
//       let an = mArray2[i] + mArray2[j]
//       if(an === target){
//         console.log(i+' '+j)
//         return
//       }
//     }
//   }
// }

// 1051：逆序數對
/*
把第二行 array 轉為 number
第一個數字 > 第二個數字 ？  -> 雙迴圈比較
有，算一次逆序數對 -> 數字加1
沒有，就不算      -> 數字加0
*/
// function solve(lines) {
//   // map 轉換為 Number
//   let target = lines[1].split(" ").map(Number)
//   let num = 0
//   for (let i=0;i<target.length;i++){
//     for (let j=i+1;j<target.length;j++){
//       if(target[i] > target[j]){
//         num += 1
//       } else if(target[i] < target[j]){
//         num += 0
//       }
//     }
//   }
//   console.log(num)
// }

// 1044 String padEnd 執行都正確看不出錯在哪
/* 三種填充狀況
第一行判斷 s 字串的長度
第二行預期要達到的長度
第三行為一個字串，當 s 沒有達到預期長度就用這字串填充
當 (s < len) -> newLen = len - s 看長度差多少
給第二行判斷差值
在第二行長度內，取出值相加為新的字串
在第二行長度外，newLen - 第二行差值在用 slice 取出剩餘要填充的值
最終字串 = 第一行 + 第三行 + 剩餘要填充的值
*/
// function solve(lines) {
//   let sLen = lines[0].length
//   let s = lines[0]
//   let len = Math.abs(lines[1])
//   let str = lines[2]
//   if (sLen >= len) console.log('0:',s)
//   else if (sLen < len) {
//     let newTarget = len - sLen
//     let diff = 0
//     let newStr = ''
//     let newLen = ''
//     if(newTarget>str.length){
//       diff = newTarget - str.length
//       newStr = str.slice(0, diff)
//       newLen = s + str + newStr
//     } else {
//       diff = newTarget
//       newStr = str.slice(0, diff)
//       newLen = s + newStr
//     }
//     console.log(newLen)
//   }
// }

// function solve(lines) {
//   // let sLen = lines[0].length
//   let s = lines[0]
//   let len = Number(lines[1])
//   let str = lines[2]
//   console.log(padEnd(s,len,str))
//   function padEnd(s,len,str){
//     if (s.length >= len) {
//       return s
//     }
//     // 計算要組成新字串的長度，直到超過預期長度 len 為止
//     let result = s
//     while(result.length < len){
//       result += str
//     }
//     // 再重新把新值取出
//     let newResult = ''
//     for(let i = 0;i<len;i++){
//       newResult +=result[i]
//     }

//     return newResult
//   }
// }

// 1045 String slice
/*
  1.將 star 當迴圈初始值
  2. end 為迴圈要結束的值
  3.用 index 取出為字串
*/
// function solve(lines) {
//   let star = lines[1]
//   let len = lines[0]
//   let end = lines[2]
//   let newLen = ''

//   for(let i = star;i<end;i++){
//     newLen+=len[i]
//   }
//   console.log(newLen)
// }

// 1021 好多星星
/*
lines[0] 限制 i 數量
限制星星放置數量
*/
// function solve(lines) {
//   for (let i = 0;i<lines[0];i++){
//     let star = ''
//     for(let j = 0;j<=i;j++){
//       console.log(i,j)
//       star+='*'
//     }
//     console.log(star)
//   }
// }

// 1003 聯誼門票搶起來
/*
  1.把英文字串相加合併
  2.找出要取英文字串的 index 值
*/
// function solve(lines) {
//   // console.log(lines.length)
//   let sAll = ''
//   let num = 0
//   let newLines = ''
//   for (let i = 1; i <= lines[0]; i++) {
//     // console.log(lines[i])
//     sAll += lines[i]
//     num = 1 + Number(lines[0])
//   }
//   console.log(num)
//   for(let i = num+1;i<lines.length; i++){
//     console.log(i,lines[i])
//     newLines += sAll.charAt(Number(lines[i]) - 1)
//     // console.log(newLines)
//   }
//   console.log(sAll,newLines)
// }

// 1004 聯誼順序比大小
/*
  1. 取出要跑的 string 數量
      BigInt 使用表示「很大的數字」
  2. 判斷 string 是比大還是比小，在判斷誰贏
*/
// function solve(lines) {
//   let result = []
//   for (let i = 1; i <= lines[0]; i++) {
//     // let a = lines[i].split(" ")
//     result.push(victor(lines[i]))
//   }
//   for (let i = 0; i < result.length; i++) {
//     console.log(result[i])
//   }

//   function victor(item) {
//     const [a, b, result] = item.split(" ")
//     if (BigInt(a) === BigInt(b)) {
//       return "DRAW"
//     } else if (
//       (BigInt(a) > BigInt(b) && Number(result) === 1) ||
//       (BigInt(a) < BigInt(b) && Number(result) === -1)
//     ) {
//       return "A"
//     } else {
//       return "B"
//     }
//   }
// }


// 1005 聯誼話題相親數(出來正確，但檢查錯誤)
// function solve(lines) {
//   let oldNumber = []
//   let newNumber = []
//   let newNumber2 = []
//   let result = []
//   for (let i = 0; i < lines.length; i++) {
//     oldNumber.push(Number(lines[i]))
//     newNumber.push(victor(lines[i]))
//     newNumber2.push(victor(newNumber))
//   }
//   console.log(oldNumber, newNumber)
//   console.log(oldNumber, newNumber2) // array 比對
//   for (let i = 0; i < oldNumber.length; i++) {
//     // console.log(oldNumber[i])
//     if (oldNumber[i] === 0) {
//       // result.push(' ')
//       console.log("123", oldNumber[i])
//     } else if (oldNumber[i] === newNumber2[i]) {
//       // console.log('1:',oldNumber[i])
//       result.push(newNumber[i])
//     } else if(oldNumber[i] !== newNumber2[i]) {
//       // console.log('2:',oldNumber[i])
//       result.push("QQ")
//     }
//     // else if (oldNumber[i] === 0) {
//     //   // result.push(' ')
//     //   // console.log("123", oldNumber[i])
//     //   return ' '
//     // }
//   }
//   for (let i = 0; i < result.length; i++) {
//     console.log(result[i])
//   }


//   function victor(item) {
//     // console.log(item)
//     let newItem = 0
//     for (let i = 1; i <= item - 1; i++) {
//       if (item % i === 0) {
//         newItem += i
//       }
//     }
//     return newItem
//     // console.log('newItem:',newItem,'item:',item)
//     // console.log(victor(newItem))
//   }
// }


// 1006 聯誼坐法排排看
/**
 * 8-2 = 6 -> 座位數 - 被佔走的座位數目 = 店裡空座位數
 * 4 5 已被占走編號
 * out 4
 *  */
function solve(lines) {
  let all = Number(lines[0])
  let end = Number(lines[1])
  let cel = all - end
  if(end === 0) {
    if (cel % 2 === 0) {
      console.log(cel / 2)
    } else {
      console.log(cel - 1)
    }
  } else if (end !== 0){
      if (cel % 2 === 0){
    console.log(cel-2)
  } else {
    console.log(cel - 1)
  }
  }
}





// 資料結構
// 1047：搜尋數字 線性搜尋(暫時不寫)
// function solve(lines) {
//   let [n, m] = lines[0].split(" ")
//     let count = Number(n) + Number(m)
//     // 篩選後
//     let newLines = lines.slice(1, Number(n) + 1)
//     // 要搜尋的
//     let searchLines = lines.slice(Number(n) + 1, count + 1)
//   console.log(newLines,searchLines)
//   let arr = []
//   for (let i = 0; i < searchLines; i++) {
//     arr[i] = Number(newLines[i + 1])
//   }
//   // n = Number(n)
//   for (let i = searchLines + 1; i < newLines.length; i++) {
//     let q = Number(newLines[i])
//     console.log(search(arr, q))
//   }
//   // 線性搜尋
//   function search(arr, q) {
//     let L = 0
//     let R = arr.length - 1
//     while (L <= R) {
//       let M = Math.floor((L + R) / 2)
//       if (arr[M] === q) {
//         return M
//       } else if (arr[M] > q) {
//         R = M - 1
//       } else {
//         L = M + 1
//       }
//     }
//   }
// }