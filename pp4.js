/*
費式數列的定義為： 第 n 個數等於前兩個數的總和， 因此這個數列會長的像這樣： 1 1 2 3 5 8 13 21....

fib(1) 預期回傳值： 1

fib(2) 預期回傳值： 1

fib(8) 預期回傳值： 21
*/

// 判斷 n 是什麼在判斷要減多少
// 3 = n-1 = 2
// 5 = n-2 = 3
// 8 = n-3 = 5

function fib2(n) {
  let fib2 = [0, 1]
  for (let i = 2; i <= n; i++) {
    // console.log('n:',n,'i:',i)
    // fib2[i] = fib2[arry數值]＋fib2[arry數值]
    // fib2[i]前 -> 當前沒有值
    // console.log('fib2[i]前:',fib2[i])
    fib2[i] = fib2[i - 1] + fib2[i - 2] // fib2[i] = fib2[4]+fib2[3]
    // console.log(fib2[i - 1] + fib2[i - 2])
    // console.log('fib2[i]:', fib2[i] )
    // console.log('fib2[i - 1], fib2[i - 2]:', fib2[i - 1], fib2[i - 2])
    // console.log('fib2:',fib2)
    // fib2[i] = 33
  }
  // return fib2[n]
  console.log(fib2)
  return fib2[n]
}
console.log(fib2(8))
