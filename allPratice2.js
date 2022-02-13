/* 練習一
請你自己寫出一段程式碼， 是判斷一個叫做 score 的變數是否及格（ 超過或剛好 60 分）， 如果及格的話就輸出 pass， 否則輸出 fail。

進階練習：

除了判斷是否及格以外， 也請你對滿分做出特別判斷， 如果是 100 分的話就輸出 you are no1!
*/

// function score(n) {
//   return n === 100 ? 'you are no1!': n >= 60 ? 'pass':'fail'
// }
// console.log(score(20))

/* 練習2
BMI 值的計算公式為： 體重 / 身高 ^ 2。

假設體重是 70， 身高是 180(1.8 m)， BMI 就是 70 / (1.8 * 1.8) = 21。

現在請你寫出一個簡單的 BMI 計算器， 用兩個變數代表體重跟身高， 算出 BMI 之後判斷 BMI 是落在哪個範圍內並輸出相對應的字串。

體重過輕： BMI < 18.5

正常範圍： 18.5 <= BMI < 24

過重： 24 <= BMI < 27

輕度肥胖： 27 <= BMI < 30

中度肥胖： 30 <= BMI < 35

重度肥胖： 35 <= BMI
*/

// function bmi(w,h) {
//   clacH = h/100
//   bmi = (w/(clacH*clacH)).toFixed(2)
//   return bmi <= 18.5 ? '體重過輕':
//   bmi <= 24 ? '正常範圍':
//   bmi <= 27 ? '過重':
//   bmi <= 30 ? '輕度肥胖':
//   bmi <= 35 ? '中度肥胖' : '重度肥胖'
// }
// console.log(bmi(70,170))

/* 印出 1-9
請你分別用 for loop 以及 while 迴圈，印出 1~9。
*/
// for(let i = 1;i<=9;i++){
//   console.log(i)
// }

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
//   for(let i=1; i<=n;i++){
//     console.log(i)
//   }
// }
// console.log(print(3))


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
//   let stars = ''
//   for(let i = 1;i <=n;i++){
//     stars +='*'
//   }
//   return stars
// }
// console.log(star(10))


/* 判斷大小寫
請寫一個叫做 isUpperCase 的 functuon， 並且接收一個字串， 回傳這個字串的第一個字母是否為大寫。

isUpperCase("abcd") 正確回傳值： false

isUpperCase("Abcd") 正確回傳值： true

isUpperCase("ABCD") 正確回傳值： true

isUpperCase("aBCD") 正確回傳值： false
*/

// function isUpperCase(str) {
//   for(let i=0;i<str.length;i++){
//     if(str[0] >= 'A' && str[0] <= 'Z')
//       return true
//   }
//   return false
// }
// console.log(isUpperCase("aBCD"))


/* 回傳第一個大寫字母以及它的 index
請寫一個
function position， 接收一個字串並回傳這個字串裡面的第一個大寫字母跟它的 index， 若沒有則回傳 - 1。

position("abcd") 正確回傳值： - 1

position("AbcD") 正確回傳值： A 0

position("abCD") 正確回傳值： C 2
*/

/* 順序
判斷 index 是不是大寫
-> array 分別取出在判斷
是，回傳 index & value
否，回傳 -1
*/

// function position(str) {
//   for(let i = 0;i<str.length;i++){
//     let min = 0
//     if (str[i] >= 'A' && str[i] <= 'Z'){
//       min = str[0] + ' ' + i
//     }else{
//       return -1
//     }
//     return min
//   }
// }
// console.log(position("abcd"))


/* 回傳陣列裡面所有小於 n 的數的數量
請寫出一個函式 findSmallCount， 接收一個陣列跟一個數字 n， 回傳有多少個數小於 n。

findSmallCount([1, 2, 3], 2) 預期回傳值： 1

findSmallCount([1, 2, 3, 4, 5], 0) 預期回傳值： 0

findSmallCount([1, 2, 3, 4], 100) 預期回傳值： 4
*/

/*
array 取出值
比對 n 回傳 value
*/

// function findSmallCount(ary,n) {
//   let min = []
//   for(let i = 0;i<ary.length; i++){
//     // console.log(ary[i])
//     if(ary[i] < n){
//       min.push(ary[i])
//     }
//   }
//   return min.length
// }
// console.log(findSmallCount([1, 2, 3], 2))


/* 回傳陣列裡面所有小於 n 的數的總和
請寫一個函式 findSmallerTotal， 接收一個陣列以及數字 n， 回傳陣列裡面所有小於 n 的數的總和。

findSmallerTotal([1, 2, 3], 3) 正確回傳值： 3

findSmallerTotal([1, 2, 3], 1) 正確回傳值： 0

findSmallerTotal([3, 2, 5, 8, 7], 999) 正確回傳值： 25

findSmallerTotal([3, 2, 5, 8, 7], 0) 正確回傳值： 0
*/

// function findSmallerTotal(ary, n) {
//   let min = 0
//   for(let i = 0;i<ary.length; i++){
//     // console.log(ary[i])
//     if(ary[i] < n){
//       min+=ary[i]
//     }
//   }
//   return min
// }
// console.log(findSmallerTotal([3, 2, 5, 8, 7], 999))

/*  回傳陣列裡面所有小於 n 的數
請寫一個函式 findAllSmall， 接收一個陣列跟一個數字 n， 回傳一個裡面有所有小於 n 的數的陣列（ 需按照原陣列順序）。

findAllSmall([1, 2, 3], 10) 正確回傳值：[1, 2, 3]
findAllSmall([1, 2, 3], 2) 正確回傳值：[1]
findAllSmall([1, 3, 5, 4, 2], 4) 正確回傳值：[1, 3, 2]
*/

// function findAllSmall(ary,n) {
//   let min = []
//   for(let i = 0; i<ary.length;i++){
//     // console.log(ary[i])
//     if(ary[i] < n ){
//       min.push(ary[i])
//     }
//   }
//   return min
// }
// console.log(findAllSmall([1, 3, 5, 4, 2], 4))

/* 回傳陣列總和
請寫一個 function sum，接收一個陣列並回傳陣列中數字的總和。

sum([1, 2, 3]) 預期回傳值：6

sum([-1, 1, 2, -2, 3, -3]) 預期回傳值：0
*/

// function sum(arr) {
//   let num = 0
//   for(let i=0;i<arr.length;i++){
//     // console.log(i,arr[i])
//     num += arr[i]
//   }
//   return num
// }
// console.log(sum([-1, 1, 2, -2, 3, -3]))

// function sum(ary) {
//   return ary.reduce(function(item,item2){
//     return item + item2
//   },0)
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

//   for(let i = 1; i <= n ; i++){
//     let detail = ''
//     for(let j=1;j<=i;j++){
//       detail +='*'
//     }
//     // return detail
//     console.log(detail)
//   }
//   // return detail
// }

// console.log(stars(5))

/* 好多星星 回傳版
請寫出一個
function makeStars， 接收一個參數 n， 並且根據規律「 回傳」 字串

makeStars(1) 正確回傳值： *

makeStars(2) 正確回傳值： * \n **

makeStars(5) 正確回傳值： * \n ** \n ** * \n ** ** \n ** ** *
*/
/*
先把 star 印出 -> for 迴圈取出
在判斷 ＊ 後面要不要加 \n
*/

// function makeStars(n) {
//   let stars = ''
//   for(let i=1;i<=n;i++){
//     for(let j =1;j<=i;j++){
//       stars +='*'
//     }
//     if(i !== n){
//       stars+=` /n `
//     }
//   }
// return stars
// }
// console.log(makeStars(5))

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
切上下 star
用 for 控制 * 數量
先把上 star 印出來
再把下 star 印出來
*/

// function star(n) {
//   let result = ''
//   for(let k = 1;k<=n;k++){
//     result+='*'
//   }
//   return result
// }

// function stars2(n) {
//   let stars =''
//   for(let i =1;i<=n;i++){
//     stars+=star(i)+'\n'
//   }

//   for(let i = n-1; i>0;i--){
//     stars += star(i)
//     if( i!== 1){
//       stars+='\n'
//     }
//   }
//   return stars
// }
// console.log(stars2(5))

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
//   for(let i = 1;i<=9;i++){
//     console.log(n+'*'+i+'='+n*i)
//   }
// }
// console.log(table(1))

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

// function table9to9() {
//   for(let i =1;i<=9;i++){
//     for(let j =1;j<=9;j++){
//       console.log(i+'*'+j+'='+i*j)
//     }
//   }
// }
// console.log(table9to9())

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
/*
index1+index2=index3
1 = 1+0
2 = 1+1
3 = 1+2
5 = 2+3
8 = 3+5

先把規則數列組出來
1 = 1 + 0 // 假設固定
2 = 1 + 1
3 = 1 + 2
index_i = (i-1) + (i-2)

在用 index 挑出 value
*/

// function fib(n) {
//   let f = [0, 1] // 費式數列的結果 n1,n2
//   // 控制次數
//   for(let i = 2;i<=n;i++){
//     // i 跑第幾次，次數計算完 value，再把 value 傳給 f
//     // console.log(i,f[i-1],f[i-2],f[i-1]+f[i-2]) // 觀察
//     f[i] = f[i-1]+f[i-2]
//     f.push(f[i])
//   }
//   console.log(f)
//   return f[n]
// }
// console.log(fib(8))


/* 字串反轉
請寫出一個函式 reverse， 接收一個字串， 並且回傳反轉過後的字串。（ 禁止使用內建函式 reverse）

reverse("abcd") 預期回傳值： dcba

reverse("12345aa") 預期回傳值： aa54321
*/

// function reverse(arr) {
//   let re = ""
//   for (let i = arr.length-1; i >=0 ; i--) {
//     // console.log(i)
//     re+=arr[i]
//   }
//   return re
// }
// console.log(reverse("12345aa"))


/* 大小寫互換
請寫一個函式 swap， 接收一個字串， 並且回傳大小寫互換後的字串。

swap("Peter") 預期回傳值： pETER

swap("AbCdE") 預期回傳值： aBcDe
*/

// function swap(arr) {
//   let re = ''
//   for(let i=arr.length-1;i>=0;i--){
//     // console.log(arr[i])
//     if(arr[i] >= 'A' && arr[i] <='Z'){
//       re+=arr[i].toLowerCase()
//     }else{
//       re+=arr[i].toUpperCase()
//     }
//   }
//   return re
// }
// console.log(swap("AbCdE"))


/* 找出最小值
請寫出一個函式 findMin， 接收一個陣列並回傳陣列中的最小值。（ 禁止使用內建函式 sort）

findMin([1, 2, 5, 6, 99, 4, 5]) 預期回傳值： 1

findMin([1, 6, 0, 33, 44, 88, -10]) 預期回傳值： - 10
*/

/*
假設第一個值為最小值，比對其他值
如果有比他小的就取代最小值
*/

// function findMin(arr) {
//   // console.log('mina:',min)
//   let min = arr[0]
//   for(let i=0;i<arr.length;i++){
//     // console.log(arr[i])
//     if(min > arr[i]){
//       min = arr[i]
//     }
//   }
//   return min
// }
// console.log(findMin([7, 6, 0, 33, 44, -88, -10]))

/* 找出第 n 小的值
這題是上一題的加強版， 上一題只要你找出最小值， 而這一題請你寫一個
function findNthMin， 接收一個陣列以及一個數字 n， 找出第 n 小的數字。（ 禁止使用內建函式 sort）

提示： 假設我要找出第 2 小的值， 我只要先找出最小的值然後再把它刪掉， 再重新找一次最小的值， 就會是第 2 小的值了。

findNthMin([1, 2, 3, 4, 5], 1) 預期回傳值： 1

findNthMin([1, 3, 5, 7, 9], 3) 預期回傳值： 5

findNthMin([1, 1, 1, 1, 1], 2) 預期回傳值： 1
*/
/*
找到第一個最小值
把原先 array 裡的最小值刪掉， n 也要同步減少，新的 array index 才會同步
*/

// function findNthMin(arr,n) {
//   let len = arr.length // 不動到原始參數
//   let min = arr[0] // 同上
//   let minIndex = 0
//   for(let i=0;i<len;i++){
//     if(min > arr[i]){
//       min = arr[i]
//       minIndex = i
//     }
//   }
//   if(0 < n-1){
//     arr.splice(minIndex,1)
//     // console.log('arr:', arr ,'n',n,'min',min)
//     return findNthMin(arr,n-1)
//   }
//   return min
// }
// console.log(findNthMin([1, 3, 5, 7, 9], 2))


/* 排序
請寫一個
function sort， 接收一個陣列並且回傳由小到大排序後的陣列。（ 禁止使用內建函式 sort）

提示： 如果你已經會找第 n 小的值了， 試著把這個概念應用到這題上。

sort([6, 8, 3, 2]) 預期回傳值：[2, 3, 6, 8]

sort([1, 2, 7, 5]) 預期回傳值：[1, 2, 5, 7]
*/
/*
先找出最小值，把最小值傳到新的 array -> 用 value 值沒辦法取到下一個值，要用 index 回傳回原 array 再做處理
再刪掉舊 array 的值，在計算一次 -> 注意 array 長度要用另外一個變數裝不然會修改到初始 array
*/
// function sort(arr) {
//   let min = arr[0]
//   let minIndex = 0
//   for(let i=1;i<=arr.length;i++){
//     if(min > arr[i]){
//       min = arr[i]
//       minIndex = i
//     }
//   }
//   return minIndex
// }

// function sort2(arr) {
//   let newArray = []
//   let len = arr.length
//   for(let i=1;i<=len;i++){
//     let minIndex = sort(arr)
//     newArray.push(arr[minIndex])
//     arr.splice(minIndex,1)
//   }
//   return newArray
// }
// console.log(sort2([6, 8, 3, 2]))


/* 壓平陣列
請寫出一個 function flatten，接收一個多維陣列並回傳「壓平」後的陣列。

flatten([1, 2, 3]) 預期回傳值：[1, 2, 3]

flatten([1, 2, [1, 2], [1, 3], 6]) 預期回傳值：[1, 2, 1, 2, 1, 3, 6]

flatten([1, [2, [3, [4]], 5], 6]) 預期回傳值：[1, 2, 3, 4, 5, 6]
*/

/*
一直把 array 解開
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
//         // console.log('item:',item)
//       })
//       }else{
//       newArray.push(arr[i])
//       // return flatten(arr[i])
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

/*
找上下規律， repeat 重複執行
*/

// function star(n) {
//   if (n === 1) { console.log('＊') }
//   starTop(n)
//   starDown(n)
// }

// function starTop(n) {
//   for(let i=1;i<=n;i++){
// // 2*i-> 左右兩邊
//     console.log('  '.repeat(n-i)+'＊'.repeat(2*i-1))
//   }
// }
// // console.log(starTop(5))

// function starDown(n) {
//   for(let i=1;i<=n;i++){
//     // console.log('*')
//     console.log('  '.repeat(n - 1) + '＊')
//   }
// }
// console.log(star(5))
// // console.log(starDown(5))


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

// function winner(arr) {
//   // console.log(arr.length)
//   for(let i=0;i<arr.length;i++){
//     if(arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2]){
//       return arr[i][0]
//     }
//     if(arr[0][i] === arr[1][i] && arr[1][i] === arr[2][i] ){
//       return arr[0][i]
//     }
//     // 斜的
//     // console.log(arr[1][1])
//     if(arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2]){
//       return arr[0][0]
//     }

//     if (arr[2][0] === arr[1][1] && arr[1][1] === arr[0][2]) {
//       return arr[2][0]
//     }
//     return 'draw'
//   }
// }

// console.log(winner([
//   ['O', 'O', 'X'],
//   ['O', 'O', 'X'],
//   ['X', 'X', '']
// ]))


/* 判斷質數
請寫出一個 function isPrime，給定一個數字 n，回傳 n 是否為質數。
（質數的定義：除了 1 以外，沒辦法被所有 < n 的正整數整除）

isPrime(1) 正確回傳值：false

isPrime(5) 正確回傳值：true

isPrime(37) 正確回傳值：true
*/
/*
可以被自己整除
*/
// function isPrime(n) {
//   if (n === 1) return false
//   let g =[]
//   for(let i=1;i<=n;i++){
//     if(n%i === 0){
//       g.push(i)
//     }
//   }
//   // console.log(g)
//   if(g.length > 2){
//     return false
//   }
//   return true
// }
// console.log(isPrime(7))
