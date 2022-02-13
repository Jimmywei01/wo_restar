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

// i = 1(1) j=跑1(1)圈 , i = 2(2,2) j=跑2(1,2)圈...以此類推
// function stars(n) {
//   for(let i = 1; i<=n; i++){
//     // console.log('i:',i)
//     let star = ''
//     for(let j = 1; j <= i; j++){
//       // console.log('j:',j)
//       star+='*'
//     }
//     console.log(star)
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


// function printStar(i) {
//   let result = ''
//   for(let j = 1; j<= i ; j++){
//     result+='*'
//   }
//   return result
// }

// function makeStars(n) {
//   let stars = ''
//   for(let i = 1; i<=n; i++){
//     stars += printStar(i)

//     if(i!==n){
//       // console.log(i,n) // 1 => 1,3  2 => 2,3
//       stars+='\n'
//     }
//   }
//   return stars
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


// 先把 12321 的星星應出來

// function printStar(i) {
//   let result = ''
//   for(let j = 1; j<= i ; j++){
//     result+='*'
//   }
//   return result
// }

// function stars2(n) {
//   let result = ''
//   for(let i = 1; i <= n; i++){
//     result += printStar(i)+'\n'
//   }

//   for(let i = n-1; i > 0; i--){
//     console.log(i)
//     result += printStar(i)
// // 1 的時候就不能 \n
//     if(i!==1){
//       result+='\n'
//     }
//   }
//   return result
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

// function table1(n) {
//   for(let i=1;i<=9;i++){
//     console.log(n + '*' + i + "=" + n * i)
//   }
// }

// console.log(table1(3))



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

// function table9to9(n) {
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       num = i+'*'+ j+"="+i*j
//       console.log(num)
//     }
//   }
// }
// console.log(table9to9(9))




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

// 判斷 n 是什麼在判斷要減多少
// 3 = n-1 = 2
// 5 = n-2 = 3
// 8 = n-3 = 5

// 一般費式數列寫法（慢）
function fib(n) {
  if(n === 0) return 0
  if(n===1) return 1
  console.log(fib(n - 1) , fib(n - 2))
  return fib(n - 1) + fib(n - 2)
}
console.log(fib(8))


// 迴圈（空間換時間）
// function fib2(n){
//   let fib2 = [0,1]
//   for(let i=2; i<=n; i++ ){
//     // console.log('n:',n,'i:',i)
//     // fib2[i] = fib2[arry數值]＋fib2[arry數值]
//     // fib2[i]前 -> 當前沒有值
//     // console.log('fib2[i]前:',fib2[i])
//     fib2[i] = fib2[i - 1] + fib2[i - 2]  // fib2[i] = fib2[4]+fib2[3]
//     // console.log(fib2[i - 1] + fib2[i - 2])
//     // console.log('fib2[i]:', fib2[i] )
//     // console.log('fib2[i - 1], fib2[i - 2]:', fib2[i - 1], fib2[i - 2])
//     // console.log('fib2:',fib2)
//     // fib2[i] = 33
//   }
//   console.log(fib2)
//   return fib2[n]
// }
// console.log(fib2(8))


/* 字串反轉
請寫出一個函式 reverse， 接收一個字串， 並且回傳反轉過後的字串。（ 禁止使用內建函式 reverse）

reverse("abcd") 預期回傳值： dcba

reverse("12345aa") 預期回傳值： aa54321
*/

// function reverses(n) {
//   let str=''
//   for(let i = n.length - 1; i>=0;i--){
//     str+=n[i]
//   }
//   return str
// }

// console.log(reverses('gfdfg'))


/* 大小寫互換
請寫一個函式 swap， 接收一個字串， 並且回傳大小寫互換後的字串。

swap("Peter") 預期回傳值： pETER

swap("AbCdE") 預期回傳值： aBcDe
*/

// function swap(n) {
//   let str = ''

//   for(let i = 0; i < n.length; i++){
//     if (n[i] >= 'a' && n[i] <= 'z'){
//       str+=n[i].toUpperCase()
//     } else {
//       str+=n[i].toLowerCase()
//     }
//   }
//   return str
// }

// console.log(swap('Peter'))


/* 找出最小值
請寫出一個函式 findMin， 接收一個陣列並回傳陣列中的最小值。（ 禁止使用內建函式 sort）

findMin([1, 2, 5, 6, 99, 4, 5]) 預期回傳值： 1

findMin([1, 6, 0, 33, 44, 88, -10]) 預期回傳值： - 10
*/

// 慢
// function arrMin(arr,number) {
//   return arr.filter(function (item) {
//     console.log('item:',item)
//     console.log('number:', number)
//     console.log(item < number)
//     return item < number
// // 加 length 是為了判斷整個 array 是不是 false（代表都跑完了）
// // 0 -> 布林判斷為 false
//   }).length === 0
// }

// function findMin(arr) {
//   for(let i=0;i<arr.length;i++){
// // 胡立 -> 這個數字是不是在陣列中是最小的
//     if(arrMin(arr,arr[i])){
//       console.log(arr)
//       return arr[i]
//     }

//   }
// }

// console.log(findMin([1, 2, 5, 6, 99, 4, -5]))

// 快只要比一次
// 我的 -> 陣列裡面自己比較，把最小值存起來
// function findMin(arr){
//   let min = ''
//   let minIndex = 0
//   for(let i = 0; i < arr.length; i++){
//     if(arr[0] > arr[i]){
//       min = arr[i]
//       minIndex = i
//     }
//   }
//   console.log(minIndex)
//   return min
// }
// console.log(findMin([1, 2, 5, 6, 99, 4, -5]))


/* 找出第 n 小的值
這題是上一題的加強版， 上一題只要你找出最小值， 而這一題請你寫一個
function findNthMin， 接收一個陣列以及一個數字 n， 找出第 n 小的數字。（ 禁止使用內建函式 sort）

提示： 假設我要找出第 2 小的值， 我只要先找出最小的值然後再把它刪掉， 再重新找一次最小的值， 就會是第 2 小的值了。

findNthMin([1, 2, 3, 4, 5], 1) 預期回傳值： 1

findNthMin([1, 3, 5, 7, 9], 3) 預期回傳值： 5

findNthMin([1, 1, 1, 1, 1], 2) 預期回傳值： 1
*/

// 1.先找到最小值的 index
function findMin(arr) {
  // console.log(arr)
  let min = ''
  let minIndex = 0
  for(let i = 1; i< arr.length; i++){
// 找到最小值
    if(arr[0]>arr[i]){
      min = arr[i]
      // console.log(min)
      minIndex = i-1
      // console.log('minIndex:',minIndex)
    }
  }
  return minIndex
}
 console.log(findMin([1, 2, 5, 6, 99, 4, -5],3))

// splice 範例
// let a = [1, 2, 5, 6, 99, 4, -5]
// console.log(a.splice(3,1))

/** 2.用 replace 刪除第一個最小值 or filter 過濾最小值
 * @param {array} arr 數字陣列
 * @param {number} n  要找到數字陣列第幾個最小值的設定
*/

// function findNthMin(arr,n) {
// // 計算 n 減掉的數量，代表要刪幾次最小值，n=1 代表只要刪1次
//   // console.log(arr,n)
//   // console.log(findMin(arr))
//   for(let i = 0; i < n-1;i++){
// // 第一種用法 -> replace 刪除第幾小值的 index
//     // console.log('findMin(arr):', findMin(arr)) // 取 findMin(arr) -> minIndex 的結果
//     let minIndex = findMin(arr)
//     // console.log('arr:', arr) // 刪除前的陣列
//     arr.splice(minIndex,1)

// // 第二種用法 -> 過濾最小值的 index，回傳給陣列
//     // arr = arr.filter(function (item,index) {
//     //   // console.log(index,minIndex) // 最小值 index 比對 陣列裡面的 index
//     //   return index !== minIndex
//     // })

//   }
// // 最後實際的最小值
//   let realMinIndex = findMin(arr)
//   return arr[realMinIndex]

// }

// console.log(findNthMin([1, 2, 5, 6, 99, 4, -5], 4)) // 4





// function findNthMin， 接收一個陣列以及一個數字 n， 找出第 n 小的數字。（ 禁止使用內建函式 sort）