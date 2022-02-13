var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin
});

var lines = []

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', function (line) {
  lines.push(line)
});

// rl.on('n', function (n) {
//   lines.push(n)
// });

/*
輸入結束， 開始針對 lines 做處理 - > ctrl + d
solve(lines) -> 拿到所有的資料，再去做其他
*/
rl.on('close', function () {
  solve(lines)
  // test(n)
})

// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容
// 每一個 sample 都是 line

/**
 * @param {string} lines 多個參數
 */


/*
LIOJ 1033： 最近點對

在一個二維的坐標系裡面給你一大堆點的座標， 請你求出距離最近的兩個點

請輸出距離最近的兩個點， 若是有兩組以上， 請輸出最先出現在測資的那組
輸出的時候請先輸出 x 比較小的那個點， 若是 x 相同， 請先輸出 y 比較小的那個點
輸出格式為：
x1 y1
x2 y2
1 1
2 2

*/
/*
把資料去出
計算取得最小值
把最小值移到第一位
*/
function solve(lines) {
  let obj = []
  for (let i = 0; i < lines.length; i++) {
    let num = lines[i].split(' ')
    obj.push({
      x:Number(num[0]),
      y:Number(num[1])
    })
  // 判斷最小值
    let min = Infinity
    let ansObj = null
    for(let i=0;i<obj.length;i++){
      // console.log(obj[i],i)
      for(let j=i+1;j<obj.length;j++){
        let ans = diot(obj[i].x, obj[j].x,obj[i].y,obj[j].y)
        console.log('j:',obj[j].x, obj[i].x,ans)
        if(ans < min){
          min = ans
          // 取不出來
          ansObj= {
            'x1':obj[i].x,
            'y1':obj[i].y,
            'x2':obj[j].x,
            'y2':obj[j].y
          }
        }

      }
    //    console.log(ansObj[0].x,ansObj[1])
    // if(ansObj.x1 < ansObj.x2){
    //   console.log(`x1:${ansObj.x2} y2:${ansObj.y2}`)
    // }
  }
    // console.log(ansObj) // ??
    // if(ansObj.x1 > ansObj.x2){
    //   console.log(`x2:${ansObj.x2} y2:${ansObj.y2} x1:${ansObj.x1} y1:${ansObj.y1}`)
    // }

  }
  // console.log(obj)
}

function diot(x1,x2,y1,y2) {
  console.log(x1, x2, y1, y2)
  // let x1, x2, y1, y2 = 0
  // for (let i = 0; i < obj.length; i++) {
  //   x1 = arr[0]
  //   y1 = arr[1]
  //   x2 = arr[2]
  //   y2 = arr[3]
  // }
  let as = Math.sqrt(Math.abs(x1 - x2) * Math.abs(x1 - x2) + Math.abs(y1 - y2) * Math.abs(y1 - y2))
  return as.toFixed(2)
}






/* LIOJ 1025 水仙花數
*/
// function solve(lines){
//   let num = lines[0].split(' ')
//   let n = Number(num[0])
//   let m = Number(num[1])
//   for (let i = n; i <= m; i++) {
//     if (count2(i)) {
//       console.log(i)
//     }
//   }
// }

// function count2(n) {
//   // console.log(typeof n)
//   let str = String(n)
//   let strLen = str.length
//   let num = 0
//   for (let i = 0; i < str.length; i++) {
//     num += Math.pow(str[i], strLen)
//     // num += Number(str[i])**strLen
//   }
//   // console.log(num === n, num)
//   return num === n
// }


// console.log(flower(5, 200))



 /* 1020 判斷質數 ->  輸出正確但 LIOJ 沒過，不知道哪裡錯
 Input
 第一行為一個正整數 N， 1 & lt; = N & lt; = 1001 <= N <= 100， 代表一共有幾個數字

 接下來 N 行每一行都包含了一個正整數 P， 1 & lt; = P & lt; = 1000001 <= P <= 100000

 Output
 針對每一筆輸入， 如果 P 是質數， 輸出： Prime， 否之則輸出 Composite

 （ 附註： Composite 是合數的意思， 不過有一點要注意的是 1 不是質數也不是合數， 但在這一題裡面一樣要輸出Composite）
 */

 /*
 檢查 lines 裡面的值
 */

/* 1024 NM 乘法表
Input
輸入為兩行， 第一行為一個數字 N， 第二行為一個數字 M， 1 & lt; = N, M & lt; = 30 ,1 <= N, M <= 30

Output
請根據輸出範例的格式輸出 NM 乘法表
*/
// function solve(lines){

// }


/* 1023 印出聖誕樹
N=4
   *
  ***
 *****
*******
   |
   |
   |
*/

// function solve(lines){

// }





/*1022 印出金字塔
輸出正確但 LIOJ 沒過， 不知道哪裡錯
請你按照題目給予的數字 N， 輸出 N 層的金字塔
N = 2
   *
  ***
N = 4
3 1 1
2 3 2
1 5 3
  7 4
*/
// function solve(lines){
//   let n = Number(lines[0].split(' '))
//   for(let i=0;i< n;i++){
//     console.log(' '.repeat(n-i)+'*'.repeat(2*i+1))
//     }
//   }





/* 1020 判斷質數
輸出正確但 LIOJ 沒過， 不知道哪裡錯
*/
// function solve(lines){
//   let num2 = []
//   for(let i=0;i<lines.length;i++){
//     let num =lines[i].split(' ')
//     num.forEach(function(item){
//       return num2.push(Number(item))
//     })
//   for (let j = 0; j < num2.length; j++){
//     let isPrime = true
//     if (num2[j] === 1) isPrime = false
//     let n = num2[j]
//     for (let k = 2; k < n; k++){
//       if(n%k===0){
//         isPrime = false
//       }
//     }
//     if (isPrime) {
//         console.log('Prime')
//       } else {
//         console.log('Composite')
//       }
//     }
//   }
// }




/* 1015 音速小子*/
// function solve(lines){
//   let num = lines[0] * 340
//     console.log(num)
// }


/* 1010 靈魂伴侶*/
// function solve(lines) {
//   for (let i = 0; i < lines.length; i++) {
//     let num = lines[i].split(' ')
//     let a = Number(num[0])
//     let b = Number(num[1])
//     if (a === b) {
//       console.log('Yes')
//     } else {
//       console.log('No')
//     }
//   }
// }

/* 1017 貪婪的小偷 */
/* 輸出正確但 LIOJ 沒過，不知道哪裡錯
Input
第一行為一個數字 C，代表小偷最多能夠帶走幾樣物品。

第二行為一個數字 N，代表一共有幾項物品

接下來 N 行每一行都包含一個數字 P，代表第 i 項物品的價值

Output
請你輸出小偷最多能偷到多少價值的東西
3
5
1
3
5
7
9

21
*/
/*
new
先把數值 a = 被偷走的數量 b = 總共幾項物品數量
把 a b 拿出來，剩下存成新 array
處理新 array
一共可以拿 3 樣物品， 因此拿價值最高的三樣： 9 + 7 + 5 = 21
*/
// let lines = [3,5,1,3,5,7,9]
// function solve(lines) {
//   let a = 0
//   let b = 0
//   let len = lines.length
//   let newArray = null
//   let money = 0
//   let numAns = []
//   let count = ''
//   for (let i = 0; i < len; i++) {
//     let num = lines[i].split(' ')
//     a = Number(num[0])
//     b = Number(num[1])
//     newArray = num.splice(2, num.length)
//   }

//   //  b-a = 計算最大值初始位置，遇到 a =1 會抓不到所以開一個條件
//   newArray = newArray.splice(newArray.length - a, newArray.length)

//   for(let j=0;j<newArray.length;j++){
//     let num2 = Number(newArray[j])
//     numAns.push(num2)
//     money += num2
//   }

// // 轉成處理印出的 string
//   for (let k = numAns.length-1;k>=0;k--){
//     count += String(numAns[k])
//     if(k !== 0){
//       count += "+"
//     }
//   }
//   console.log(`一共可以拿 ${a} 樣物品， 因此拿價值最高的${a}樣：${count} = ${money}`)
// }

/* new 想法
a b -> a 被偷走的數量, b 數量

b 價格
0 2i + 1
1 2i + 2
2 2i + 3
3 2i + 4
4 2i + 5
*/
// function solve(lines){
//   let num = lines[0].split(' ')
//   let n = Number(num[0])
//   let m = Number(num[1])
//   for (let i = n; i <= m; i++) {
//     if (count2(i)) {
//       console.log(i)
//     }
//   }
// }

// function solve(lines){
//   // let num = lines[0].split(' ')
//   // let a = Number(num[0])
//   // let b = Number(num[1])
//   let a = 0
//   let b = 0
//   let numberArray = []
//   let newArray = []
//   let money = 0
//   let count = ''

//   for(let i=0;i<lines.length;i++){
//     let num = lines[i].split(' ')
//     // console.log(num,i)
//     a = Number(num[0])
//     b = Number(num[1])
//     numberArray.push(Number(num))
//   }
  // console.log(numberArray, numberArray.length)
  // for(let i=0;i<b;i++){
  //   newArray.push(2*i+1)
  // }

//   newArray = numberArray.splice(numberArray.length - numberArray[0], numberArray.length)
//   console.log('new:',newArray)
//   for(let j=0;j<newArray.length;j++){
//     // newArray = newArray.splice(newArray.length - a, newArray.length)
//     // console.log(newArray)
//     money += newArray[j]
//   }
//   console.log(money)
// }
// 轉成處理印出的 string
//   for (let k = newArray.length-1;k>=0;k--){
//     count += String(newArray[k])
//     if(k !== 0){
//       count += "+"
//     }
//   }
//   console.log(`一共可以拿 ${a} 樣物品， 因此拿價值最高的${a}樣：${count} = ${money}`)
// }


/*****************/


/*2
輸入一共有許多行， 每一行都包含兩個正整數 a, b
請輸出這兩個之中比較大的那個數字
若是碰到 a = b = 0 代表輸入結束

1 1 -> 1
2 3 -> 3
0 0 ->
*/
/*
從 array 拿出資料
*/

// function solve(lines) {
//   for (let i = 0; i < lines.length; i++) {
//     let num = lines[i].split(' ')
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




/* 1
 每一個 Online Judge 都會有的基本題目， 讓你熟悉 OJ 的使用方式。
 給定兩個正整數 a 與 b， 輸出 a + b 的結果。
in -> 1 2
ouput -> 3
 */
// function solve(lines) {
//   console.log(lines)
//   let num = lines[0].split(' ')
//   console.log(Number(num[0])+Number(num[1]))
// }
