/* 排序
請寫一個
function sort， 接收一個陣列並且回傳由小到大排序後的陣列。（ 禁止使用內建函式 sort）

提示： 如果你已經會找第 n 小的值了， 試著把這個概念應用到這題上。

sort([6, 8, 3, 2]) 預期回傳值：[2, 3, 6, 8]

sort([1, 2, 7, 5]) 預期回傳值：[1, 2, 5, 7]
*/


/*
function sort， 接收一個陣列並且回傳由小到大排序後的陣列。（ 禁止使用內建函式 sort）

拆解：
1.找出最小值
function min()

2.計算 array 要跑幾次，並建立新 array 接收最小值
function run(){
  let newArray = []
}
*/


// 取最小值
function findMin(arr){
  let min = ''
  let minIndex = 0
  for(let i = 0; i < arr.length; i++){
// 如何判斷最小值
// console.log(arr[0], arr[i])
    if(arr[0] > arr[i]){
      // console.log('arr[0], arr[i]:',arr[0],arr[i])
      min = arr[i]
      minIndex = i
      // console.log('minIndex:',minIndex)
    }
  }
  // console.log(minIndex)
  return minIndex
}
console.log(findMin([1, -3, 5, 6, 99, 4]))


/*
計算 array 要跑幾次才可以從最小值開始，把值排好
將最小值存到新 array，把初始的 array 刪掉最小的從新計算
*/
// function sort(arr) {
//   let sortArray = []
//   let len = arr.length // 把長度存起來避免改變原始長度
//   console.log('進1:',findMin(arr))
//   // 計算要跑幾次
//   for(let i = 0; i< len; i++){
//     console.log('進2:', findMin(arr))
//     let minIndex = findMin(arr)
//     sortArray.push(arr[minIndex])
//     arr.splice(minIndex,1)
//   }
//   return sortArray
// }

// // console.log(sort([6, 8, 3, 2, -5]))
// console.log(sort([1, -3, -5, 6, 99, 4]))


/* 壓平陣列
請寫出一個 function flatten，接收一個多維陣列並回傳「壓平」後的陣列。

flatten([1, 2, 3]) 預期回傳值：[1, 2, 3]

flatten([1, 2, [1, 2], [1, 3], 6]) 預期回傳值：[1, 2, 1, 2, 1, 3, 6]

flatten([1, [2, [3, [4]], 5], 6]) 預期回傳值：[1, 2, 3, 4, 5, 6]
*/

// function flatten(ary) {
//   return ary.flat(ary.length)
// }

// console.log(flatten([1, 2, 3]))
// console.log(flatten([1, 2, [1, 2], [1, 3], 6]))
// console.log(flatten([1, [2, [3, [4]], 5], 6]))

/*
一直把 array 取出
*/

// function flatten2(arr) {
//   let flatArr = []
//   for(let i=0;i<arr.length;i++){
//     // console.log(typeof arr[i]) // 取出全部得值，再把裡面是 array 的在重新取出值
//     if(Array.isArray(arr[i])){
//       let arr2 = flatten2(arr[i]) // 遞迴重新再取出 array 值
//       // console.log(arr2) // [1,2] [1,3]
//       arr2.forEach(function(item){
//         flatArr.push(item)
//       })
//     }else{
//       flatArr.push(arr[i])
//     }
//   }
//   return flatArr
// }
// console.log(flatten2([1, [2, [3, [4]], 5], 6]))




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
____   *
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
分上下
上 -> ＊ -> 2n-1
上空格 -> n-1

下空格 -> n-1
*/
// function tree(n){
//   if(n===1){console.log('＊') }
//   treeTop(n)
//   treeDown(n)
// }

// function treeTop(n) {
//   for(let i =1; i<=n;i++){
//     console.log('  '.repeat(n-i)+'＊'.repeat(2*i-1))
//   }
// }

// function treeDown(n) {
//   for(let i = 1; i<=n; i++){
//     console.log('  '.repeat(n-1)+'＊')
//   }
// }

// console.log(tree(10))

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
拆 2 維 array ，判斷是否相等
0 的部分跑完才會去跑其他的
[0][0] [0][1] [0][2]
[1][0] [1][1] [1][2]
[2][0] [2][1] [2][2]
*/

// function map(arr) {
//   for(let i = 0; i < 3;i++){
//   // 橫排
//     if(arr[i][0] === arr[i][1] && arr[i][1]===arr[i][2]){
//       return arr[i][0]
//     }
//   }

//   for(let i = 0; i < 3; i++){
//   // 直排
//     if(arr[0][i] === arr[1][i] && arr[1][i] === arr[2][i]){
//       return arr[0][i]
//     }
//   }

//   if(arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2]){
//     return arr[0][0]
//   }

//   if (arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0]) {
//     return arr[0][2]
//   }

//   return 'draw'

// }

// console.log(map([
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
質數的定義： 除了 1 以外， 沒辦法被所有 < n 的正整數整除
自己可除自己
5 是個質數， 因為其正因數只有1與5
*/

// function isPrime(n) {
//   if(n===1) return false
//   for(let i = 2; i <= n-1;i++){
//     if(n % i === 0){
//       return false
//     }
//   }
//   return true
// }

// console.log(isPrime(4))