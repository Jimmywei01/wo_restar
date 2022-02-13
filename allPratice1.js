// p1
/* 練習一
請你自己寫出一段程式碼， 是判斷一個叫做 score 的變數是否及格（ 超過或剛好 60 分）， 如果及格的話就輸出 pass， 否則輸出 fail。

進階練習：

除了判斷是否及格以外， 也請你對滿分做出特別判斷， 如果是 100 分的話就輸出 you are no1!
*/

// let score = 70

// function calce(num) {
//   return num === 100 ? 'you are no1!' : num > 60 ? 'pass' : 'fail'
// }
// console.log('練習一:',calce(score))


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

// function bmi(wight, hight) {
//   hight = hight/100
//   bmi = (wight / (hight * hight)).toFixed(2)
//   return bmi <= 18.5 ? `BMI:${bmi} -> 體重過輕` :
//   bmi <= 24 ? `BMI:${bmi} -> 正常範圍` :
//   bmi <= 27 ? `BMI:${bmi} -> 過重` :
//   bmi <= 30 ? `BMI:${bmi} -> 輕度肥胖` : `BMI:${bmi} -> 重度肥胖`

// }

// console.log('練習二:',bmi(60,170))


/** 練習3
 * 回傳 除理過的 array（用回傳 function 的方式）
 * @param {array} ary arry 參數
 * @param {function} func
*/

// function roule(ary, func){
//   let result = []
//   for(let i = 0; i < ary.length; i++){
//     result.push(func(ary[i]))
//   }
//   return result
// }

// function double(n) {
//   return n*6
// }

// console.log('練習三:',roule([1,2,3],double))


/*
印出 1-9
請你分別用 for loop 以及 while 迴圈，印出 1~9。
*/

// for(let i = 1; i<=9;i++){
//   console.log(i)
// }

/* 印出 1~n 的函式
請寫一個函式叫做 print， 接收一個是數字的參數 n， 並且印出 1~n。
*/

// function print(n) {
//   for(let i = 1; i <= n; i++){
//     console.log(i)
//   }
// }
// console.log(print(5))


/* 印出 n 個 * 的函式 & 回傳 n 個 * 的函式
寫一個函式 star， 接收一個參數 n， 並印出 n 個 * （禁止使用內建函式 repeat）

star(1) 預期輸出：
*
star(5) 預期輸出：
*****
star(10) 預期輸出：
**********
*/

// let stars = ''
// function star(n) {
//   for(let i = 1; i <= n;i++){
// // 把 * 加起來
//     stars+='*'
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


// function isUpperCase(arr) {
//   for(let i=0; i< arr.length; i++){
//     return arr[0] >= 'A' && arr[0] < 'Z' ? true : false
//   //   if(arr[0]>='A' && arr[0]< 'Z'){
//   //     return true
//   //   }
//   //   return false
//   }
// }
// console.log(isUpperCase("ABCD"))


/* 回傳第一個大寫字母以及它的 index
請寫一個
function position， 接收一個字串並回傳這個字串裡面的第一個大寫字母跟它的 index， 若沒有則回傳 - 1。

position("abcd") 正確回傳值： - 1

position("AbcD") 正確回傳值： A 0

position("abCD") 正確回傳值： C 2
*/

/* 怎麼拆
找整個 array 裡面的大寫字
-> 跑完 array 拆出裡面的字，找第一個大寫字回傳他的 index
*/

// function min(n) {
//   let min = ''
//   for(let i = 0; i < n.length;i++){
//     if(n[i] >='A' && n[i]<'Z'){
//       console.log(n[i])
//        return n[i] + ' ' + i
//     }
//   }
// }
// console.log(min("abCD"))


/* 回傳陣列裡面所有小於 n 的數的數量
請寫出一個函式 findSmallCount， 接收一個陣列跟一個數字 n， 回傳有多少個數小於 n。

findSmallCount([1, 2, 3], 2) 預期回傳值： 1

findSmallCount([1, 2, 3, 4, 5], 0) 預期回傳值： 0

findSmallCount([1, 2, 3, 4], 100) 預期回傳值： 4
*/
/*
array 分開數字，在用 n 去比對 true or false
在將 true 的塞到 array 並取 array 得長度
*/

// function findSmallCount(arr, n) {
//   let result = []
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] < n){
//       result.push(arr[i])
//     }
//   }
//   return result.length
// }
// console.log(findSmallCount([1, 2, 3, 4], 100))

/* 回傳陣列裡面所有小於 n 的數的總和
請寫一個函式 findSmallerTotal， 接收一個陣列以及數字 n， 回傳陣列裡面所有小於 n 的數的總和。

findSmallerTotal([1, 2, 3], 3) 正確回傳值： 3

findSmallerTotal([1, 2, 3], 1) 正確回傳值： 0

findSmallerTotal([3, 2, 5, 8, 7], 999) 正確回傳值： 25

findSmallerTotal([3, 2, 5, 8, 7], 0) 正確回傳值： 0
*/

// function findSmallerTotal(arr,n) {
//   let result = 0
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] < n){
//       result+=arr[i]
//     }
//   }
//   return result
// }
// console.log(findSmallerTotal([3, 2, 5, 8, 7], 0))


/*  回傳陣列裡面所有小於 n 的數
請寫一個函式 findAllSmall， 接收一個陣列跟一個數字 n， 回傳一個裡面有所有小於 n 的數的陣列（ 需按照原陣列順序）。

findAllSmall([1, 2, 3], 10) 正確回傳值：[1, 2, 3]
findAllSmall([1, 2, 3], 2) 正確回傳值：[1]
findAllSmall([1, 3, 5, 4, 2], 4) 正確回傳值：[1, 3, 2]
*/

// function findAllSmall(arr, n) {
//   let min = []
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] < n){
//       min.push(arr[i])
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
//   return arr.reduce(function (item, item2) {
//     return item+item2
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

/* 解法
一圈進出一個＊
所以，要用迴圈控制要印*的數量，＊的增加也要用迴圈印出來
*/
// function stars(n) {
// // 要跑幾次＊出來
//   for(let i=1; i<=n; i++){
//     let result = ''
//     for(let j=1;j<=i;j++){
//       result+='*'
//     }
//     console.log(result)
//   }
// }
// console.log(stars(3))


/* 好多星星 回傳版
請寫出一個
function makeStars， 接收一個參數 n， 並且根據規律「 回傳」 字串

makeStars(1) 正確回傳值： *

makeStars(2) 正確回傳值： * \n **

makeStars(5) 正確回傳值： * \n ** \n ** * \n ** ** \n ** ** *
*/

/*
規律
n -> 用 index 表示要印幾次

迴圈 -> 印出次數

印出次數計算＊
＊ -> n

計算 \n
\n -> n-1

*/

// 用圈數印出幾個星號
// function stars(i){
//   let star = ''
//   for(let j = 1; j <= i; j++){
//     // console.log(i)
//     star+="*"
//   }
//   return star
// }

// // 計算圈數
// function makeStars(n) {
//   let result = []
//   for(let i =1; i <= n; i++){
//     result+=stars(i)
//     // result.push(stars(i))
//     // console.log('i:',i)
//     if(i!==n){
//       result += '/n'
//     }
//   // console.log(result)

//   }
//     return result
// }
// console.log(makeStars(2))

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

/* 解析
第一圈印出正向的（＋＋）
第二圈印出負向的（- -）
*/

// // 印 ＊
// function star(i){
//   let star = ''
//   for(let j=0; j<i; j++){
//     star += '*'
//   }
//   return star
// }

// // 控制要印幾個 ＊
// function stars2(n) {
//   let res = ''
//   for(let i = 1; i <=n; i++ ){
//     res +=star(i)+'\n'
//   }
// // 負向從 n-1開始印
//   for(let i = n-1; i > 0; i--){
//     res += star(i)
//     if(i!==1){
//       res += '\n'
//     }
//   }
//   return res
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
//   for(let i =1;i<=9; i++){
//     console.log(`${n}*${i}=${n*i}`)
//   }
// }
// console.log(table(3))


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
//   let result = ''
//   for(let i=1; i<=9; i++){
//     for(let j = 1; j <=9; j++){
//       result = `${i}*${j}=${j*i}`
//       console.log(result)
//     }
//   }
// }
// console.log(table9to9())

/*
費式數列的定義為： 第 n 個數等於前兩個數的總和， 因此這個數列會長的像這樣： 0 1 2 3 5 8 13 21....

用比較數學一點的講法， 就是：

fib(0) = 0
fib(1) = 1
for n >= 2, fib(n) = fib(n - 1) + fib(n - 2)

現在， 請你寫出一個 fib 的函式， 回傳位在第 n 個位置的數字

fib(1) 預期回傳值： 1

fib(2) 預期回傳值： 1

fib(8) 預期回傳值： 21
*/


/* 解法
每個字都是前面兩個字相加

1+0=1
1+1=2
1+2=3
3+2=5
3+5=8

規律
所以基本定義 1+0=1
初始 ary[0,1] ->
index1+index2 = index3
index3+index4 = index5
*/

// function fib(n) {
//   let ary = [0,1]
//   for(let i = 2; i<=n; i++){
//     ary[i] = ary[i-1]+ary[i-2]
//      // ary[i] -> 陣列 n 跑的次數 = ary[2-1]+ary[2-2] （陣列裡面的 index 值）-> ary[1]+ary[0] -> ary[2] = 1
//   }
//   return ary[n]
// }
// console.log(fib(8))


/* 字串反轉
請寫出一個函式 reverse， 接收一個字串， 並且回傳反轉過後的字串。（ 禁止使用內建函式 reverse）

reverse("abcd") 預期回傳值： dcba

reverse("12345aa") 預期回傳值： aa54321
*/
/*
array 顛倒 index 可用(從後面數回來再組合)
*/

// function reverse(ary) {
//   let result = ''
//   for (let i = ary.length-1; i >= 0 ; i--) {
//     // console.log(ary[i])
//     result+=ary[i]
//   }
//   return result
// }
// console.log(reverse("avgr"))


/* 大小寫互換
請寫一個函式 swap， 接收一個字串， 並且回傳大小寫互換後的字串。

swap("Peter") 預期回傳值： pETER

swap("AbCdE") 預期回傳值： aBcDe
*/
/*
把字串取出來，判斷是不是在大寫的範圍內，是的話轉小寫
*/

// function swap(ary) {
//   let result = ''
//   for(let i=0; i < ary.length; i++){
//           // console.log('ary[i]:',ary[i])
//     if(ary[i] >= 'A' && ary[i]<='Z'){
//       // console.log(ary[i].toLowerCase())
//       result+=ary[i].toLowerCase()
//     } else{
//       result += ary[i].toUpperCase()
//     }
//   }
//   return result
// }
// console.log(swap('peTer'))

/* 找出最小值
請寫出一個函式 findMin， 接收一個陣列並回傳陣列中的最小值。（ 禁止使用內建函式 sort）

findMin([1, 2, 5, 6, 99, 4, 5]) 預期回傳值： 1

findMin([1, 6, 0, 33, 44, 88, -10]) 預期回傳值： - 10
*/

/* 順序
把 array 中的值取出
index1 > index2 ? index1 依序比下去直到整格 array 結束都是 true 才是最小值
如果 index1 是最大值就不要，換 index2 變為 index1 繼續比較
要一直判斷 ary 裡面得都跑完，再回傳
*/

// 把第幾個 index 丟到 array 裡面比對 -> 直到 array 比完（length===0）
// function selectMin(ary, number) {
//   return ary.filter(function (item) {
//     // console.log(item,number)
//     return item < number
//   }).length === 0

// }

// // 把要比對的 array ＆ index 傳給另一個處理
// function findMin(ary) {
//   for(let i = 0;i<ary.length;i++){
//     if(selectMin(ary, ary[i])){
//       return ary[i]
//     }
//   }
// }
// console.log(findMin([1, 6, 0, -33, 44, -88, -10]))

// 令一個作法 -> 會有問題只會取 array 最後面的最小值
// function findMin2(ary) {
//   let min = ''
//   for(let i =0; i < ary.length;i++){
//     if(ary[0] > ary[i]){
//       min = ary[i]
//     }
//   }
//   return min
// }
// console.log(findMin2([1, 6, 0, -33, 44, -88, 10]))


/* 找出第 n 小的值
這題是上一題的加強版， 上一題只要你找出最小值， 而這一題請你寫一個
function findNthMin， 接收一個陣列以及一個數字 n， 找出第 n 小的數字。（ 禁止使用內建函式 sort）

提示： 假設我要找出第 2 小的值， 我只要先找出最小的值然後再把它刪掉， 再重新找一次最小的值， 就會是第 2 小的值了。

findNthMin([1, 2, 3, 4, 5], 1) 預期回傳值： 1

findNthMin([1, 3, 5, 7, 9], 3) 預期回傳值： 5

findNthMin([1, 1, 1, 1, 1], 2) 預期回傳值： 1
*/
/*
設定第 n 小的值，並在 array 中找出來，然後傳出 n 小的值
-> 先找出最小值
-> 丟回比對 array 裡面的值
-> 看 n 是多少 array 就刪掉最小值幾次，留最後一次的結果

如何知道跑了幾次？刪除的次數？

*/

// function min(ary,index){
//   let minAry = []
//   // console.log(ary)
//   return ary.filter(function(item){
//     if (item < index){
//       // console.log('item <= index:', item , index)
//       return minAry.push(index)
//     }
//   })

// }

// function findNthMin(ary,n) {
//  for(let i=0;i<ary.length;i++){
//   console.log('進1')
//   console.log('min(ary, ary[i]):', min(ary, ary[i]))
//   let result = min(ary, ary[i])
//   console.log(result)
//   if (result.length === n) {
//     console.log('進2')
//     console.log('ary[i]:',ary[i])
//     console.log('ary[n]:',ary[n])
//     return result[n-1]
//   }
//    else if (result.length > n) {
//     console.log('進3')
//     console.log('ary[i]:', ary[i])
//     console.log('ary[n]:', ary[n])
//     // result[i] = result[n-1]
//     console.log(result[n-1])
//     return result[n-1]
//   }
//  }
// }
// console.log(findNthMin([1, 7, 4, 9, 6], 3))

// console.log(findNthMin([1, 1, 1, 1, 1], 2))


/* 排序
請寫一個
function sort， 接收一個陣列並且回傳由小到大排序後的陣列。（ 禁止使用內建函式 sort）

提示： 如果你已經會找第 n 小的值了， 試著把這個概念應用到這題上。

sort([6, 8, 3, 2]) 預期回傳值：[2, 3, 6, 8]

sort([1, 2, 7, 5]) 預期回傳值：[1, 2, 5, 7]
*/

/*
index n~n+1 比對 index全部 ，是最小值就刪除存到新的 array

1. 控制要跑幾個最小值 function sort(ary){}
2. 判斷最小值把最小值印出 function min(){return min} -> 回傳給控制，然後做處理
3. sort() 處理 -> 把最小值存道新 array，刪除舊的 array 第一位，依序重複做直到排完，在印出新的 array
*/

function min(ary){
  // console.log(ary)
  let min = 0
  for(let i = 0; i < ary.length;i++){
    // console.log(ary[0])
    // console.log(ary[0],ary[i])
    // console.log(ary[0]> ary[i])
    if(ary[0] > ary[i]){
      // console.log('i:',i)
      min = i
    }
  }
  return min
}
// console.log(min([1, 2, 7, 5]))

function sort(ary) {
  let minAry = []
  let len = ary.length
  for(let i=0; i<len; i++){
    // console.log(min(ary))
    let minIndex = min(ary)
    minAry.push(ary[minIndex])
    // console.log('minAry:',minAry)
    ary.splice(minIndex,1)
  }
  return minAry
}

console.log(sort([1, -2, -7, 5, 9]))








