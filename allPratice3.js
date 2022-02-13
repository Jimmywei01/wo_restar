/* 練習一
請你自己寫出一段程式碼， 是判斷一個叫做 score 的變數是否及格（ 超過或剛好 60 分）， 如果及格的話就輸出 pass， 否則輸出 fail。

進階練習：

除了判斷是否及格以外， 也請你對滿分做出特別判斷， 如果是 100 分的話就輸出 you are no1!
*/

// function score(params) {
//   return params === 100 ? 'you are no1!' : params >= 60 ? 'pass' : 'fail'
// }
// console.log(score(100))


/* 練習2
BMI 值的計算公式為： 體重 / 身高 ^ 2

假設體重是 70， 身高是 180(1.8 m)， BMI 就是 70 / (1.8 * 1.8) = 21

現在請你寫出一個簡單的 BMI 計算器， 用兩個變數代表體重跟身高， 算出 BMI 之後判斷 BMI 是落在哪個範圍內並輸出相對應的字串。

體重過輕： BMI < 18.5

正常範圍： 18.5 <= BMI < 24

過重： 24 <= BMI < 27

輕度肥胖： 27 <= BMI < 30

中度肥胖： 30 <= BMI < 35

重度肥胖： 35 <= BMI
*/

// function cacle(h,w) {
//   let calcH = h / 100
//   const ans = (w / (calcH*calcH)).toFixed(2)
//   // console.log(ans)
//   return ans < 18.5 ? '體重過輕' :
//   ans <= 24 ? '正常範圍' :
//   ans <= 27 ? '過重' :
//   ans <= 30 ? '輕度肥胖' :
//   ans <= 35 ? '中度肥胖' : '重度肥胖'
// }
// console.log(cacle(180,160))

/* 印出 1-9
請你分別用 for loop 以及 while 迴圈，印出 1~9。
*/

// function test() {
//   for(let i = 1; i <= 9; i++) {
//     console.log(i)
//   }
// }
// console.log(test())

// function test2() {
//   var n = 0;
//   var x = 0;
//   while (n<9) {
//     n++
//     console.log(n)
//   }
// }
// console.log(test2())


/* 印出 1~n 的函式
請寫一個函式叫做 print， 接收一個是數字的參數 n， 並且印出 1~n。
print(1) 預期輸出：
1

print(3) 預期輸出：
1
2
3

print(9) 預期輸出：
1
2
3
4
5
6
7
8
9
*/

// function print(n) {
//   for(let i=1; i<= n; i++){
//     console.log(i)
//   }
// }
// console.log(print(9))

/* 印出 n 個 * 的函式 & 回傳 n 個 * 的函式
寫一個函式 star， 接收一個參數 n， 並印出 n 個 * （禁止使用內建函式 repeat）

star(1) 預期輸出：
*
star(5) 預期輸出：
*****
star(10) 預期輸出：
**********
*/

// function star(n) {
//   let star = ''
//   for (let i = 1; i <= n; i++) {
//     star+= '*'
//   }
//   return star
// }

// console.log(star(10))

/* 判斷大小寫
請寫一個叫做 isUpperCase 的 functuon， 並且接收一個字串， 回傳這個字串的第一個字母是否為大寫。

isUpperCase("abcd") 正確回傳值： false

isUpperCase("Abcd") 正確回傳值： true

isUpperCase("ABCD") 正確回傳值： true

isUpperCase("aBCD") 正確回傳值： false
*/

// function isUpperCase(params) {
//   for(let i = 0;i<params.length;i++) {
//     if (params[0] >= 'A' && params[0] <= 'Z'){
//       return true
//     }
//     return false
//   }
// }

// console.log(isUpperCase("Zsccc"))

/* 回傳第一個大寫字母以及它的 index
請寫一個
function position， 接收一個字串並回傳這個字串裡面的第一個大寫字母跟它的 index， 若沒有則回傳 - 1。

position("abcd") 正確回傳值： - 1

position("AbcD") 正確回傳值： A 0

position("abCD") 正確回傳值： C 2
*/

// function position(n) {
//   for(let i=0;i<=n.length;i++) {
//     if(n[i] >= 'A' && n[i] <= 'Z') {
//       return `${n[i]} ${i}`
//     }
//   }
//   return -1
// }
// console.log(position("acvd"))

/* 回傳陣列裡面所有小於 n 的數的數量
請寫出一個函式 findSmallCount， 接收一個陣列跟一個數字 n， 回傳有多少個數小於 n。

findSmallCount([1, 2, 3], 2) 預期回傳值： 1

findSmallCount([1, 2, 3, 4, 5], 0) 預期回傳值： 0

findSmallCount([1, 2, 3, 4], 100) 預期回傳值： 4
*/

// function findSmallCount(ary, n) {
//   let first = []
//   for(let i=0;i<ary.length;i++){
//     if(ary[i] < n) {
//       first.push(ary[i])
//     }
//   }
//   return first.length
// }
// console.log(findSmallCount([1, 2, 3, 104], 100))

/* 回傳陣列裡面所有小於 n 的數的總和
請寫一個函式 findSmallerTotal， 接收一個陣列以及數字 n， 回傳陣列裡面所有小於 n 的數的總和。

findSmallerTotal([1, 2, 3], 3) 正確回傳值： 3

findSmallerTotal([1, 2, 3], 1) 正確回傳值： 0

findSmallerTotal([3, 2, 5, 8, 7], 999) 正確回傳值： 25

findSmallerTotal([3, 2, 5, 8, 7], 0) 正確回傳值： 0
*/

// function findSmallerTotal(ary, n) {
//   let value = null
//   for (let i = 0; i <= ary.length; i++) {
//     if(ary[i] < n){
//       value +=ary[i]
//     }
//   }
//   return value
// }
// console.log(findSmallerTotal([3, 2, 5, 8, 7], 999))

/*  回傳陣列裡面所有小於 n 的數
請寫一個函式 findAllSmall， 接收一個陣列跟一個數字 n， 回傳一個裡面有所有小於 n 的數的陣列（ 需按照原陣列順序）。

findAllSmall([1, 2, 3], 10) 正確回傳值：[1, 2, 3]
findAllSmall([1, 2, 3], 2) 正確回傳值：[1]
findAllSmall([1, 3, 5, 4, 2], 4) 正確回傳值：[1, 3, 2]
*/

// function findAllSmall(ary, n) {
//   let newAry = []
//   for(let key of ary) {
//     if(n > key) {
//       newAry.push(key)
//     }
//   }
//   return newAry
// }
// console.log(findAllSmall([1, 3, 5, 4, 2], 4))

/* 回傳陣列總和
請寫一個 function sum，接收一個陣列並回傳陣列中數字的總和。

sum([1, 2, 3]) 預期回傳值：6

sum([-1, 1, 2, -2, 3, -3]) 預期回傳值：0
*/

// function sum(n) {
//   let sumN = 0
//   for(var i = 0; i < n.length; i++) {
//     sumN += n[i]
//   }
//   return sumN

// }
// console.log(sum([-1, 1, 2, -2, 3, -3]))

/* 好多星星
請寫出一個 function stars，接收一個參數 n，並且按照規律印出相對應的圖案。

stars(1) 預期輸出：
*

stars(3) 預期輸出：
*
**
***

stars(7) 預期輸出：
*
**
***
****
*****
******
*******
*/

// function stars(n) {
//   for(let i=0; i<n; i++) {
//     // console.log(i)
//      let sum = ''
//     for(let j =0; j<= i; j++) {
//       // console.log('j:', j)
//       sum+='*'
//     }
//     console.log(sum)
//   }
// }
// console.log(stars(7))

/* 好多星星 回傳版
請寫出一個
function makeStars， 接收一個參數 n， 並且根據規律「 回傳」 字串

makeStars(1) 正確回傳值： *

makeStars(2) 正確回傳值： * \n **

makeStars(5) 正確回傳值： * \n ** \n ** * \n ** ** \n ** ** *
*/

// function makeStars(n) {
//   let sum = ''
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//       sum +='*'
//     }
//     if (i !== n) {
//       sum += ' /n'
//     }
//     console.log(sum)
//   }
// }
// console.log(makeStars(3))

/* 好多星星 加強版
請寫出一個函式 stars2， 接收一個參數 n， 並依照規律印出圖形
stars2(1) 預期輸出：
*

stars2(3) 預期輸出：
*
**
***
**
*

stars2(5) 預期輸出：
*
**
***
****
*****
****
***
**
*
*/
/*
拆成上下兩個部分
把要控制 * 的迴圈拉出來共用
換行在各自判斷
*/

// function stars3 (n) {
//   // console.log(n)
//   let star = ''
//   for(let j = 1; j<= n;j++){
//     // console.log(j, n[j])
//     star +='*'
//   }
//   return star
// }

// function stars2 (n) {
//   let sum = ''
//   for(let i = 1; i <= n;i++) {
//     sum+=stars3(i)+'\n'
//     // console.log(stars3(i))
//     // return sum
//   }
//   for(let k= n-1;k>0;k--){
//     // console.log(k)
//     sum+=stars3(k)
//     // 0 的時候不加
//     if (k !== n) {
//       sum+='\n'
//     }
//   }
//   console.log(sum)
// }

// console.log(stars2(3))

/* 乘法表
請寫一個函式 table， 接收一個數字 n， 印出 n * 1~n * 9 的結果。

table(1) 預期輸出：
1 * 1 = 1
1 * 2 = 2
1 * 3 = 3
1 * 4 = 4
1 * 5 = 5
1 * 6 = 6
1 * 7 = 7
1 * 8 = 8
1 * 9 = 9
*/


// function table(n) {
//   for (let i = 1; i <= 9; i++) {
//     // console.log(i, n)
//     console.log(`${n} * ${i} = ${n*i}`)
//   }
// }
// console.log(table(9))

/* 九九乘法表
請寫出一個
function table9to9， 並列出 1 * 1~9 * 9。

table9to9() 預期輸出：

1 * 1 = 1
1 * 2 = 2
1 * 3 = 3
  .....
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
  ....
9 * 7 = 63
9 * 8 = 72
9 * 9 = 81
*/

// function table9(n) {
//   for (let i = 1; i<=n;i++) {
//     // console.log(n)
//     for(let j=1;j<=i;j++){
//       console.log(`${i}*${j}=${i*j}`)
//     }
//   }
// }
// console.log(table9(9))

/*
費式數列的定義為： 第 n 個數等於前兩個數的總和， 因此這個數列會長的像這樣： 1 1 2 3 5 8 13 21....

用比較數學一點的講法， 就是：

fib(0) = 0
fib(1) = 1
for n >= 2, fib(n) = fib(n - 1) + fib(n - 2)

現在， 請你寫出一個 fib 的函式， 回傳位在第 n 個位置的數字

fib(1) 預期回傳值： 1

fib(2) 預期回傳值： 1

fib(8) 預期回傳值： 21
*/

// function fib(n) {
//   let f = [0,1]
//   for(let i = 2; i <=n;i++) {
//     console.log('f:', f)
//     /*
//     for 用 f[i] 增加 f[0,1] array 的 index 數量
//     array 的值 f[i - 1] + f[i - 2] -> 費式數列要實現得值
//     */
//     f[i] = f[i - 1] + f[i - 2]
//     console.log('原:', i, 'f[i]:', f[i],f[i - 1], f[i - 2])

//   }
// }
// console.log(fib(5))

/* 字串反轉
請寫出一個函式 reverse， 接收一個字串， 並且回傳反轉過後的字串。（ 禁止使用內建函式 reverse）

reverse("abcd") 預期回傳值： dcba

reverse("12345aa") 預期回傳值： aa54321
*/

// function reverse(ary){
//   let re = ''
//   for(let i = ary.length-1; i >= 0; i--){
//     console.log(i, ary[i])
//     re += ary[i]
//   }
//   return re
// }
// console.log(reverse('12345aa'))

/* 大小寫互換
請寫一個函式 swap， 接收一個字串， 並且回傳大小寫互換後的字串。

swap("Peter") 預期回傳值： pETER

swap("AbCdE") 預期回傳值： aBcDe
*/

// function swap(ary){
//   let re = ''
//   for(let i = 0; i < ary.length;i++){
//     if(ary[i] >= 'A' && ary[i] <= 'Z') {
//       re +=ary[i].toLowerCase()
//     } else {
//       re +=ary[i].toUpperCase()
//     }
//   }
//   return re
// }

// console.log(swap("Peter"))

/* 找出最小值
請寫出一個函式 findMin， 接收一個陣列並回傳陣列中的最小值。（ 禁止使用內建函式 sort）

findMin([1, 2, 5, 6, 99, 4, 5]) 預期回傳值： 1

findMin([1, 6, 0, 33, 44, 88, -10]) 預期回傳值： - 10
*/

// function findMin(ary){
//   let num = ary[0]
//   for (let i = 1; i <= ary.length; i++) {
//     // console.log(i, ary[i])
//     if(num > ary[i]){
//       num = ary[i]
//     }
//   }
//   return num
// }
// console.log(findMin([1, 6, 0, 33, 44, 88, -10]))

/* 找出第 n 小的值
這題是上一題的加強版， 上一題只要你找出最小值， 而這一題請你寫一個
function findNthMin， 接收一個陣列以及一個數字 n， 找出第 n 小的數字。（ 禁止使用內建函式 sort）

提示： 假設我要找出第 2 小的值， 我只要先找出最小的值然後再把它刪掉， 再重新找一次最小的值， 就會是第 2 小的值了。

findNthMin([1, 2, 3, 4, 5], 1) 預期回傳值： 1

findNthMin([1, 3, 5, 7, 9], 3) 預期回傳值： 5

findNthMin([1, 1, 1, 1, 1], 2) 預期回傳值： 1
*/
/**
 * 先找出最小的數字＆index
 * 把搜尋條件 -1，變成搜尋第 2 -> n 小的值
 * 把最小的數字從 array 中過濾
 * 回傳 function 重新計算
 */
// function findNthMin(ary, n){
//   let minOne =ary[0]
//   let len = ary.length
//   let minIdx = 0
//   for (let i = 0; i < len; i++) {
//     if(i>ary[i]){
//       minOne = ary[i]
//       minIdx = i
//     }
//   }
//   if(0 < n-1){
//     ary.splice(minIdx,1)
//     return findNthMin(ary, n-1)
//   }
//   return minOne

// }
// console.log(findNthMin([1, 3, 5, 7, 9], 3))

/* 排序
請寫一個
function sort， 接收一個陣列並且回傳由小到大排序後的陣列。（ 禁止使用內建函式 sort）

提示： 如果你已經會找第 n 小的值了， 試著把這個概念應用到這題上。

sort([6, 8, 3, 2]) 預期回傳值：[2, 3, 6, 8]

sort([1, 2, 7, 5]) 預期回傳值：[1, 2, 5, 7]
*/

/**
 * 建立 array 存值
 * 比對找出當前array最小值
 * 加入 new array
 * 把 old array 最小值刪掉，重找最小值
 */

// function sort(ary) {
//   let minOne = ary[0]
//   let minIndex = 0
//   for(let j = 0; j < ary.length; j++){
//       if (minOne > ary[j]) {
//         minIndex = j
//       }
//   }
//   return minIndex
// }

// function fsort(ary){
//   let len = ary.length
//   let newAry = []
//   for(let i = 0; i < len;i++){
//     let minIndex = sort(ary)
//     newAry.push(ary[minIndex])
//     ary.splice(minIndex,1)
//   }
//   console.log(newAry)
// }
// console.log(fsort([6, 8, 3, 2]))

/* 壓平陣列
請寫出一個 function flatten，接收一個多維陣列並回傳「壓平」後的陣列。

flatten([1, 2, 3]) 預期回傳值：[1, 2, 3]

flatten([1, 2, [1, 2], [1, 3], 6]) 預期回傳值：[1, 2, 1, 2, 1, 3, 6]

flatten([1, [2, [3, [4]], 5], 6]) 預期回傳值：[1, 2, 3, 4, 5, 6]
*/

// function flatten(arr) {
//   let newArray = []
//   console.log(arr)
//   for(let i=0;i<arr.length;i++){
//     console.log(typeof arr)
//     if(typeof arr[i] !== 'number'){
//       let flatten2 = flatten(arr[i])
//       flatten2.forEach(item => {
//         newArray.push(item)
//       })
//       } else {
//       newArray.push(arr[i])
//     }
//   }
//   return newArray
// }
// console.log(flatten([1, [2, [3, [4]], 5], 6]))


/*
請寫一個
function tree， 接收一個數字 n， 按照規律列印出大小為 n 的聖誕樹

（ 這邊編輯器有點問題空白顯示不出來， 用 _ 代表空白）
tree(1) 預期輸出： *

tree(2) 預期輸出：
_  *
  ***
  _*
  _*

tree(5) 預期輸出：
  ____ *
  ___ ** *
  __ ** ** *
  _ ** ** ** *
  ** ** ** ** *
  ____ *
  ____ *
  ____ *
  ____ *
  ____ *
*/

// function tree(n) {
//   if(n===1) {return '*'}
//   up(n)
//   down(n)
// }

// function up(n) {
//   let star = null
//   for(let i = 1; i <=n;i++){
//     // let star = null
//     console.log(' '.repeat(n-i)+'*'.repeat(2*i-1))
//   }
//   // console.log(star)
// }
// function down(n){
//   for(let i = 0;i<n;i++){
//     console.log(' '.repeat(n-1)+'*')
//   }
// }
// console.log(tree(2))

/* 判斷圈圈叉叉勝負
請寫出一個 function winner，接收一個代表圈圈叉叉的陣列，並回傳贏的是 O 還是 X，如果平手或還沒下完，請回傳 draw。

winner([
['O', 'O', 'X'],
['O', 'X', 'X'],
['O', 'X', 'O']
]) 預期回傳值：O

winner([
['O', 'O', 'X'],
['O', 'X', 'X'],
['X', 'X', 'O']
]) 預期回傳值：X

winner([
['O', 'O', 'X'],
['O', 'O', 'X'],
['X', 'X', '']
]) 預期回傳值：draw
*/
/*
win 連線 直*3 橫*3 斜*2
draw
*/

// function winner(ary){
//   for(let i = 0; i <ary.length; i++){
//     console.log(ary[1][0])
//     if(ary[i][0] === ary[i][1] && ary[i][1] === ary[i][2]) {
//       return ary[i][0]
//     }
//     if(ary[0][i] === ary[1][i] && ary[1][i] === ary[2][i] ){
//       return ary[0][i]
//     }
//     if(ary[0][0] === ary[1][1] && ary[1][1] === ary[2][2]){
//       return ary[0][0]
//     }
//     if (ary[2][0] === ary[1][1] && ary[1][1] === ary[0][2]) {
//       return ary[2][0]
//     }
//     return
//   }
//   return 'draw'
// }
// console.log(winner([
// ['X', 'O', 'X'],
// ['O', 'X', 'X'],
// ['O', 'X', 'O']
// ]))

/* 判斷質數
請寫出一個 function isPrime，給定一個數字 n，回傳 n 是否為質數。
（質數的定義：除了 1 以外，沒辦法被所有 < n 的正整數整除）

isPrime(1) 正確回傳值：false

isPrime(5) 正確回傳值：true

isPrime(37) 正確回傳值：true
*/
/*
除了1與本身之外，無法被其他自然數整除 -> 餘數是 0
*/

function isPrime(n){
  if(n === 1) return false
  let g = []
  for(let i = 1; i <=n;i++){
    // console.log(n%i)
    if(n%i === 0){
      // console.log(n%i)
      g.push(n)
    }
  }
  if(g.length === 2){
    return true
  }
  return false
}
console.log(isPrime(2))