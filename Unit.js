/* Unit1.4
印出 1 - 100 的奇數
*/
// for(let i=1; i<= 100;i++){
//   if(i%2 ===1) console.log(i)
// }

/*Unit1.5：實戰練習：fizz buzz
給數字n
3倍 -> Fizz
5倍 -> Buzz
3 & 5 -> FizzBuzz
*/
// function fz(n) {
//   let res = ''
//   for(let i=1;i<=n;i++){
//     console.log((i%3 === 0 && i%5 === 0)? 'FizzBuzz': i%3 === 0? 'Fizz':i%5 === 0? 'Buzz':i)
//   }
// }
// console.log(fz(15))

/*
Unit1 .6： 實戰練習： 找最小值
*/
// let minValue = 13
// function min(n) {
//   for (let i = n-1; i >= 1; i--) {
//     // console.log(i)
//     if(13 > i){
//       minValue = i
//       // console.log(minValue,i)
//     }
//   }
//   return minValue
// }
// console.log(min(13))

/* Unit1.7
1. 字串反轉
給一個字串 str，請輸出 str 反過來的結果
範例輸入：hello
範例輸出：olleh
PS. 可以用 str[i] 取得第 i 個字，例如說 str="abc"，str[0] 就是 'a'

2. 陣列總和
給一個陣列 arr，裡面全都包含了數字（整數），請輸出陣列加總的結果（總和保證不超過 int 範圍）
範例輸入：[1, 2, 3]
範例輸出：6

3. 找最大值
給一個陣列 arr， 裡面全都包含了數字（ 整數）， 請輸出陣列中的最大值
範例輸入：[1, 2, 3]
範例輸出： 3
*/
// 1.字串反轉
// function stringReverse(arr) {
//   let re = ''
//   for(let i=arr.length-1;i>=0;i--){
//     re+=arr[i]
//   }
//   return re
// }
// console.log(stringReverse('hello'))

// 2. 陣列總和
// function fff(arr) {
//   let ans = 0
//   for(let i=0;i<arr.length;i++){
//     ans+=arr[i]
//   }
//   Number.MAX_VALUE > ans ? ans : '超過 int 範圍'
//   return ans
// }
// console.log(fff([1, 2, 3]))

// 3. 找最大值
// function big(arr) {
//   let max = arr[0]
//   for(let i=0;i<=arr.length;i++){
//     // console.log(arr[i],i,arr[0])
//     if(max < arr[i]){
//       max = arr[i]
//     }
//   }
//   return max
// }
// console.log(big([1, 2, 9]))


/* Unit2.5：實戰練習：找次大值*/
/*
先把第一個最大值找出
再比對第二個 index 的值一直比到完
*/

// function secNum(arr) {
//   let max = 0
//   let max2 = 0
//   for(let i =0;i<arr.length;i++){
//     // console.log(arr[i])
//     if(max < arr[i]){
//       // console.log('ar:',arr[i])
//       max2 = max
//       max = arr[i]
//     }else if(max2 < arr[i]){
//       // console.log(arr[i])
//       max2 = arr[i]
//     }
//   }
//   // console.log('max:',max,'max2:',max2)
//   return max2
// }
// console.log(secNum([7,9,8]))


/* Unit2.6：實戰練習：字串轉大寫*/

// function change(arr) {
//   let ch = ''
//   for(let i=0;i<arr.length;i++){
//     // console.log(arr[i])
//     if(arr[i] >= 'A' && arr[i] <='Z'){
//       // console.log(arr[i])
//       ch+=arr[i]
//     }else{
//       // console.log(2)
//       ch += arr[i].toUpperCase()
//     }
//   }
//   return ch
// }
// console.log(change("aGf"))



/*Unit2.7：實戰練習：刪除特定字元*/

// function del(arr,n) {
//   let new2 = ''
//   for (let i = 0; i < arr.length; i++) {
//     // console.log(arr[i])
//     if(arr[i] !== n){
//       new2+=arr[i]
//     }
//   }
//   return new2
// }
// console.log(del("hello",'e'))


/*
1. 找次小值
給一個陣列， 裡面全都包含了數字（ 整數）， 請輸出陣列中的次小值
範例輸入：[1, 2, 3]
範例輸出： 2
*/
/*
先把 array 值拿出來
比大小，再把小的丟到新 array，刪除原先的 array 再繼續排
比大小，先找最小值，在找次小值
*/
// function min(arr) {
//   let min = Infinity
//   let min2 = Infinity
//   for(let i=0;i<arr.length;i++){
//     if(arr[i] < min){
//       console.log('1:',arr[i])
//       min2 = min
//       min = arr[i]
//       console.log(min)
//     }else if( arr[i] < min2 ){
//       // console.log(arr[i])
//       min2 = arr[i]
//     }
//   }
//    return min2
// }
// console.log(min([ 4, 3, 6]))

/*
2. 大小寫互換
給一個字串， 請把字串裡的大小寫互換
範例輸入： hELLo
範例輸出： HellO
*/

// function change(arr) {
//   let ff = ''
//   for(let i=0; i<arr.length;i++){
//     // console.log(arr[i])
//     if(arr[i] >= 'A' && arr[i] <= 'Z'){
//       ff+=arr[i].toLowerCase()
//     }else{
//       ff += arr[i].toUpperCase()
//     }
//   }
//   return ff
// }
// console.log(change('hELLo'))

/*
3. 印出因數
給一個正整數， 請輸出他的所有因數
範例輸入： 15
範例輸出： 1 3 5 15
*/
/*
因數自己為最大
*/
// function tt(n) {
//   for(let i=1;i<= n;i++){
//     if (n % i === 0){
//       console.log(i)
//     }
//   }
// }
// console.log(tt(7))

/* 99 乘法表
*/
// function e() {
//   for(let i=1;i<=9;i++){
//     for(let j=1;j<=9;j++){
//       console.log(i+'*'+j+'='+i*j)
//     }
//   }
// }
// console.log(e())


/*印出 1-100 的平方數
25 的平方數是 5
*/
// function db() {
//   for(let i=1;i<=100;i++){
//     // console.log(i)
//     if(tt(i)) {
//       console.log(i)
//     }
//   }
// }
// function tt(n){
//   let num = Math.floor(Math.sqrt(n))
//   if( num *num === n){
//     return n
//   }
// }
// console.log(db())



/*LIOJ 1023： 印出聖誕樹
N=4
   *
  ***
 *****
*******
   |
   |
   |
*/

// function tree(n){
//   treeTop(n)
//   treeDown(n)
// }

// function treeTop(n) {
//   for(let i=0;i<n;i++){
//     console.log(' '.repeat(n-i)+'*'.repeat(2*i+1))
//   }
// }
// // console.log(treeTop(4))
// function treeDown(n) {
//   for(let i=1;i<n;i++){
//     console.log(' '.repeat(n)+"|")
//   }
// }
// // console.log(treeDown(4))
// console.log(tree(3))


/* LIOJ 1024 NN 乘法表
簡單來說，N 代表 N 個數，M 代表每個數要乘到多少，例如說 N=2, M=3，就會是：
1*1, 1*2, 1*3
2*1, 2*2, 2*3

現在給你 N 以及 M，請你輸出 NM 乘法表會長什麼樣子

Input
輸入為兩行，第一行為一個數字 N，第二行為一個數字 M，1&lt;=N, M &lt;= 301<=N,M<=30

Output
請根據輸出範例的格式輸出 NM 乘法表
*/

// function clNM(n,m) {
//   for(let i=1;i<=n;i++){
//     // console.log(i)
//     for(let j=1;j<=m;j++){
//       console.log(i+'*'+j+'='+j*i)
//     }
//   }
// }

// console.log(clNM(3,2))


/* LIOJ 1025 水仙花數

例如說 153 是三位數，而 1^3 + 5^3 + 3^3 = 1531，所以它就是一個水仙花數

Input
輸入為兩個用空白分割的正整數 N 與 M， 1 & lt; = N & lt; = M & lt; = 10 ^ 61 <= N <= M <= 10^6

Output
請由小到大輸出從 N 到 M（ 包含 N 與 M） 有哪些水仙花數， 每個數字以空行分隔

檢查 n~m 之間數字 m^n 的平方是不是 ＝ m

一個 n 位數的數字， 每一個數字的 n 次方加總等於自身
12 -> 2位數切割 1^2 + 2^2 檢查是不是 = 1 2
不是，換下一個
是，組合回 12 並保留
*/

// function solve(lines){
//   let num = lines[0].split(' ')
//   let n = Number(num[0])
//   let m = Number(num[1])
//   if(flower(n,m)){
//     console.log(i)
//   }
// }

// function flower(n,m) {
//   for(let i = n;i<=m;i++){
//     if(count2(i)){
//       console.log(i)
//     }
//   }
// }
//   function count2(n) {
//     // console.log(typeof n)
//     let str = String(n)
//     let strLen = str.length
//     let num = 0
//     for(let i=0;i<str.length;i++){
//       num += Math.pow(str[i], strLen)
//       // num += Number(str[i])**strLen
//     }
//     // console.log(num === n, num)
//     return num === n
//   }


// console.log(flower(5, 200))




/* 判斷是否為等差數列
公差 1 3 5 7 9 -> 數字間距一樣
*/
/*
每個 array 數字間距會不同，要如何判斷
從中間往左右相減 or 相加的間距數相同就是 等差數列
判斷中間數
*/

// function num(arr) {
//   if (arr.length <= 1) return '是等差數列'
//   for(let i=0;i<arr.length;i++){
//    let num = Math.ceil(arr.length/2) // 記算 array 中間 value
//    let midNum = arr.length - num     // array 中間 index
//    if (arr[midNum] - arr[midNum - 1] !== arr[midNum + 1]-arr[midNum]){
//     //  console.log('arr:',arr[midNum] - arr[midNum - 1])
//     return '不是等差數列'
//    }
//   }
//   return '是等差數列'
// }

// console.log(num([1,3,5,7,9]))
// console.log(num([2, 4, 6, 8, 10,12,14]))
// console.log(num([1]))
// console.log(num([]))
// console.log(num([1,2,4]))


/* 身分證驗證
A123456789
先把英文字母取出
字母轉換數字計算
*/
// function card(arr) {
//   let a = trans(arr[0])
//   let b = arr.split(arr[0])
//   let newArr = a + b[0] + b[1]
//   let num = newArr[0] * 1 + newArr[1] * 9 + newArr[2] * 8 + newArr[3] * 7 + newArr[4] * 6 + newArr[5] * 5 + newArr[6] * 4 + newArr[7] * 3 + newArr[8] * 2 + newArr[9] * 1 + newArr[10] * 1
//   if(num%10 === 0){
//     return `${arr} 驗證成功`
//   }else{
//     return `${arr} 驗證失敗`
//   }
// }

// function trans(en) {
//   let upEn = ''
//   if (en >= 'a' && en <= 'z') upEn = en.toUpperCase()

//   // 第一種方式 比較簡潔
//   let mapping = {
//     A: 10, B: 11, C: 12, D: 13, E: 14,
//     F: 15, G: 16, H: 17, I: 34, J: 18,
//     K: 19, L: 20, M: 21, N: 22, O: 35,
//     P: 23, Q: 24, R: 25, S: 26, T: 27,
//     U: 28, V: 29, W: 32, X: 30, Y: 31,
//     Z: 33
//   }
//   return mapping[upEn]

//   // 第二種方式
//   // switch(upEn)
//   //   {
//   //       case 'A': return 10 ;break;   case 'P': return 23; break;
//   //       case 'B': return 11 ;break;   case 'Q': return 24; break;
//   //       case 'C': return 12 ;break;   case 'R': return 25; break;
//   //       case 'D': return 13 ;break;   case 'S': return 26; break;
//   //       case 'E': return 14 ;break;   case 'T': return 27; break;
//   //       case 'F': return 15 ;break;   case 'U': return 28; break;
//   //       case 'G': return 16 ;break;   case 'V': return 29; break;
//   //       case 'H': return 17 ;break;   case 'W': return 32; break;
//   //       case 'I': return 34 ;break;   case 'X': return 30; break;
//   //       case 'J': return 18 ;break;   case 'Y': return 31; break;
//   //       case 'K': return 19 ;break;   case 'Z': return 33; break;
//   //       case 'L': return 20 ;break;
//   //       case 'M': return 21 ;break;
//   //       case 'N': return 22 ;break;
//   //       case 'O': return 35 ;break;
//   //   }
// }

// console.log(card('a123456789'))


/*數字位數加總

把多位數切成單數
在單數相加
*/

// function addNum(str) {
//   if(str< 0){
//     str = str*-1
//   }
//   let numStr = String(str)
//   let num = 0
//   for(let i=0;i<numStr.length;i++){
//     num += Number(numStr[i])
//   }
//   return num
// }
// console.log(addNum(-32))
// console.log(addNum(5566))


/* LIOJ 1026：判斷等比數列
3,6,12,24,48 就是等比數列，
因為 6/3、12/6、24/12、48/24 的值都相等，而且都是 2，我們就稱這個等差數列的公比為 2

Input
輸入的第一行為一個數字 N，2 &lt;= N &lt;= 1002<=N<=100，代表數列裡總共有幾個數字

接下來第二行為數列中的數字 A_{i}Ai，-10000 &lt; = A{i} &lt;= 10000−10000<=Ai<=10000，彼此用空格分隔

Output
若是輸入的數列為等比數列，請輸出 Yes，反之輸出 No
*/
/*
先假設 第一個為參數， 第二個 / 第一個
把除數存起來，把第一個去除在回傳新 array
*/

// function ratio(arr) {
//   if(calcMod(arr)){
//     return true
//   }else{
//     return false
//   }
// }

// function calcMod(arr) {
// let d = arr[1]/arr[0]
//   for(let i=1;i<arr.length;i++){
//     if(arr[i]/arr[i-1] !== d){
//       return false
//     }
//   }
//   return true
// }
// console.log(ratio([3,9,27]))

/*驗證身分證字號
信用卡的驗證機制很簡單， 首先卡號基本上都是 16 碼， 只有美國運通是 15 碼。 為了節省大家的麻煩， 這一題的測試資料卡號皆為 16 碼。
從左邊算起來的第一個數字為發卡行， Master Card 是 5 開頭， Visa 是 4， JCB 則是 3

權重的部分你可以很簡單
這樣記：左邊數起奇數位是 2，偶數位是 1

若是在計算的過程中某一位數加權後的結果比 10 大，那請減去 9
舉例來說，
5412-3456-7890-1232這個卡號的第一位是 5，代表這是 MasterCard 的卡
而奇數位加總為：5*2 + 1*2 + 3*2 + 5*2 + 7*2 + 9*2 + 1*2 + 3*2，原本應該是：10 + 2 + 6 + 10 + 14 + 18 + 2 + 6
但前面有說過「如果比 10 大，請減去 9」，所以就是 1(10-9) + 2 + 6 + 1(10-9) + 5(14-9) + 9(18-9) + 2 + 6 = 32
偶數位加總為：4 + 2 + 4 + 6 + 8 + 0 + 2 = 26，乘以 1 之後還是 26
把 32 跟 26 相加，得到 58，58 % 10 = 8，因此檢查碼就是 10-8 = 2
而卡號的第 16 碼也是 2，因此這個卡號是沒有問題的。
*/
/*
先判斷是什麼卡（先統一為 16 碼）
在把 積數挑出來計算 -> 是奇數位置
偶數挑出來計算 - > 是偶是位置 1 3 5 7 9 11 13
兩格相加 % 10 mod餘數
檢查碼就是 10 - mod餘數
判斷 檢查碼 === 卡號的第 16 碼？ 卡號正確：卡號錯誤
*/

// function craidCard(card) {
//   let re = /-/gi;
//   let spitCard = card.replace(re,'')
//   let num = reNum(spitCard) + addNum(spitCard)
//   let p = num % 10
//   if( p !== 0){
//     p = 10 - p
//   }
//   if( p !== Number(spitCard[15])){
//       console.log('INVALID')
//   }else{
//     if (spitCard[0] === '5'){
//       console.log('MASTER_CARD')
//     }else{
//       console.log('VISA')
//     }
//   }
// }

// function reNum(item) {
//   let num =0
//   for(let i=0;i<item.length;i++){
//     let itemA = item[i + i]*2
//     if(itemA >= 10 && itemA !== NaN){
//       num += itemA - 9
//     } else if (itemA < 10 && itemA !== NaN) {
//       num += itemA
//     }
//   }
//   return num
// }

// function addNum(item) {
//   let num = 0
//   for(let i=1;i<=item.length-3;i+=2){
//     // console.log(item[i], i, item[i]) //1 3 5 7 9 11 13  // 4 + 2 + 4 + 6 + 8 + 0 + 2
//     let itemB = item[i]
//     if(itemB !== undefined){
//       num += Number(itemB)
//     }
//   }
//   return num
// }

// console.log(craidCard('5412-3456-7890-1232'))


/*LIOJ 1028：生命靈數
1946-06-14 為例，就是 1+9+4+6+0+6+1+4 = 311+9+4+6+0+6+1+4=31，
而我們把這個結果的每個位數再次做相加：3+1=43+1=4，就得出了生命靈數 4
Input
輸入為三個用空白分隔的數字，分別代表著出生年、月以及日
Output
請輸出生命靈數
*/

// function birthday(date) {
//   let strDate = date.split(' ').join('')
//   let num = 0
//   for(let i=0;i<strDate.length;i++){
//     num +=Number(strDate[i])
//   }
//   // console.log(num)
//   if(String(num).length >= 2){
//     num = count(num)
//   }
//   return num
// }

// function count(num) {
//   let numStr = String(num)
//   let reNum = 0
//   for(let i=0;i<numStr.length;i++){
//     reNum += Number(numStr[i])
//     if(String(reNum).length >= 2){
//       return count(reNum)
//     }
//   }
//   return reNum
// }

// console.log(birthday('1990 07 19'))


/* LIOJ 1029：加減乘除
保證數字以及除法出來的結果都會是 整數

Input
用空格分隔的三個資料：
數字 A（ 0 <= A <= 100000 ）
運算符號（加法：+，減法：-，乘法：*，除法：/）
數字 B（ 0 <= B <= 100000 ）

Output
請輸出運算後的結果
*/

// function calc(arr) {
//   let num = arr[0].split(' ')
//   let a = Number(num[0])
//   let b = Number(num[2])

//   if(num[1]==='+'){
//     num = a + b
//   }else if(num[1]==='-'){
//     num = a-b
//   }else if(num[1]==='*'){
//     num = a*b
//   }else if(num[1]==='/' ){
//     num = a/b
//   }

//   if(num < 0){
//     num = Math.floor(num * -1)
//     return num
//   }
//   return Math.floor(num)

// }
// console.log(calc(['3 - 4']))

/*LIOJ 1030：判斷迴文
把一個字串倒過來以後還是長的跟原字串一樣
舉例
aba 倒過來還是 aba，我們就稱 aba 為迴文
abab 倒過來變成 baba，跟原本的字串不一樣，就不是迴文
baba
*/

// function name(item) {
//   let newItem = ''
//   for (let i = item.length-1; i >= 0; i--){
//     newItem += item[i]
//   }
//   let ans = item === newItem ? 'True':'Flase'
//   return ans
// }

// console.log(name('abb'))

/* LIOJ 1031：完全平方和
用 Math.sqrt() 判斷是不是平方
30
1 + 4 + 9 + 16 + 25 = 55
*/

// function sqrtMath(num) {
//   let addNum = 0
//   for(let i=1;i<=num;i++){
//     let num2 = Math.floor (Math.pow(i, 2))
//     if ( num2 < num) {
//       addNum+=num2
//     }
//   }
//   return addNum
// }
// console.log(sqrtMath(30))


/* LIOJ 1032：平面距離計算
而兩個點 (x1, y1) 與 (x2,y2) 的距離計算公式則為 sqrt{|x1-x2|^2 + |y1-y2|^2 }
請你幫忙計算出兩個點的距離

Input
第一行為一個正整數 T（1&lt;=T&lt;=1001<=T<=100），代表一共有幾筆測試資料
每一筆測試資料會有 4 個整數，x1, y1, x2, y2，範圍均在 -100~100，彼此間以空行分開

Output
針對每一筆測試資料，請輸出兩點的距離，並且「一律」四捨五入到小數點第二位
如果距離是 3，請輸出 3.00，距離是 2.7，請輸出 2.70
*/
/*
x y 順序要注意
*/

// function num(arr) {
//   let x1,x2,y1,y2 = 0
//   for(let i=0;i<arr.length;i++){
//     x1 = arr[0]
//     y1 = arr[1]
//     x2 = arr[2]
//     y2 = arr[3]
//   }
//   let as = Math.sqrt(Math.abs(x1 - x2) * Math.abs(x1 - x2) + Math.abs(y1 - y2) * Math.abs(y1 - y2))
//   return as.toFixed(2)
// }

// // console.log(num([1,1,2,2]))
// console.log(num([3, 3, 4, 4]))


/*LIOJ 1033：最近點對（未完成）

在一個二維的坐標系裡面給你一大堆點的座標， 請你求出距離最近的兩個點

請輸出距離最近的兩個點， 若是有兩組以上， 請輸出最先出現在測資的那組
輸出的時候請先輸出 x 比較小的那個點， 若是 x 相同， 請先輸出 y 比較小的那個點
輸出格式為：
x1 y1
x2 y2

*/
/*
點對點距離怎麼算？ sqrt{|x1-y1|^2 + |x2-y2|^2 }
x1 = arr[0]
y1 = arr[1]
x2 = arr[2]
y2 = arr[3]

array 長度計算有幾組
*/

// function opint(arr) {
//   // console.log(arr.length,arr)
//   let obj = []
//   for(let i=0;i<arr.length;i++){
//     // console.log(arr[i],i)
//     obj.push({
//       x: Number(arr[i]),
//       y: Number(arr[i])
//     })
//   }
//   console.log(obj)

// }

// function diot(obj) {
//     let x1,x2,y1,y2 = 0
//     for(let i=0;i<obj.length;i++){
//       x1 = arr[0]
//       y1 = arr[1]
//       x2 = arr[2]
//       y2 = arr[3]
//     }
//     let as = Math.sqrt(Math.abs(x1 - x2) * Math.abs(x1 - x2) + Math.abs(y1 - y2) * Math.abs(y1 - y2))
//     return as.toFixed(2)
// }

// console.log(opint([2, 3,1, 3,10, 20,100,100]))



/* LIOJ 1034：凱薩加密
原文是 apple， 而 N = 1， 那加密完後的結果就是： bqqmf

Input
第一行為一個數字 N，代表要往右移的位數，0&lt;=N&lt;=1000<=N<=100
第二行為一個字串 S，1&lt;= length(S) &lt;= 10001<=length(S)<=1000，代表原文，只會由小寫字母組成

Output
請輸出把 S 的每個字母右移 N 位之後的結果
*/
/*
轉小寫，每個抓出來
轉ASCII碼
遇到 z:122 加 n=1 要回到 a 開始計算
122- x = 97
x=25
n=1
122 - 26 +n = 97
122 - 26 +n = 98
加n
*/

// function secr(n,str) {
//   let str2 = str.toLowerCase(str)
//   let trans = []
//   let tt=''
//   for(let i=0;i<str2.length;i++){
//     trans.push(String(str2[i].charCodeAt()))
//   }
//   if(n>0){
//     let t = tr(trans,n)
//     return t
//   }else{
//     trans.forEach(item => {
//       tt += String.fromCharCode(item)
//     })
//     return tt
//   }
// }

// function tr(item,n) {
//     let g = []
//     let tt = ''
//     for(let i=0;i<item.length;i++){
//       g.push(Number(item[i])+n)
//       if(item[i] === '122'){
//         g.splice(i, i + 1, (122 - 26 + n))
//       }
//     }
//     g.forEach(item => {
//       tt += String.fromCharCode(item)
//     })
//     return tt
// }

// console.log(secr(2,'XRAZ'))


/*LIOJ 1046：圈圈叉叉

winner([
  ['O', 'O', 'X'],
  ['O', 'X', 'X'],
  ['O', 'X', 'O']
]) 預期回傳值： O

winner([
  ['O', 'O', 'X'],
  ['O', 'X', 'X'],
  ['X', 'X', 'O']
]) 預期回傳值： X

winner([
  ['O', 'O', 'X'],
  ['O', 'O', 'X'],
  ['X', 'X', '']
]) 預期回傳值： draw

*/

// function game(arr) {
//   // console.log(arr)
//   for(let i=0;i<arr.length;i++){
//     if(arr[0][i] === arr[1][i] && arr[1][i] === arr[2][i]){
//       console.log(arr[0][i])
//     }
//     if(arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2]){
//       console.log(arr[i][0])
//     }

//     if(arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2]){
//       console.log(arr[0][0])
//     }

//     if(arr[0][2] === arr[1][1] && arr[1][1] === arr[2][1]){
//       console.log(arr[0][2])
//     }
//   }
//   return 'draw'

// }

// console.log(game([
//   ['O', 'O', 'X'],
//   ['O', 'X', 'X'],
//   ['O', 'X', 'O']
// ]))

// console.log(game([
//   ['X', 'X', 'X'],
//   ['X', 'O', 'O'],
//   ['O', 'X', 'O']
// ]))

// console.log(game([
//   ['X', 'O', 'O'],
//   ['O', 'X', 'X'],
//   ['O', 'X', '']
// ]))



// LIOJ 1036：Array reverse
// function reverse(arr) {
//   let arr2 = []
//   for(let i=arr.length-1;i>=0;i--){
//     // console.log(arr[i])
//     arr2.push(arr[i])
//   }
//   return arr2
// }

// console.log(reverse(['one', 'two', 'three']))



/* 1037：Array filter
給你一個數列以及目標 target，若是數列中有符合 target 的元素，請把它刪除
並且輸出刪除完以後的數列
*/
/*
傳入值給 callback 判斷值
*/

// function filter(arr, n) {
//   let newArr = []
//   for(let i=0;i<arr.length;i++){
//     if(arr[i] !== n){
//       newArr.push(arr[i])
//     }
//   }
//   return newArr
// }

// let arr = [1, 3, 3, 5, 6]
// console.log(arr.filter(x =>  x<6))
// console.log(filter([1,3,3,5,6],3))



/*LIOJ 1038：Array indexOf

給你一個數列以及目標 target，若是數列中有符合 target 的元素，請輸出它的 index

若是沒有，請輸出 -1
*/

// function indexOf(arr, searchElement) {
//   for(let i=0;i<arr.length;i++){
//     if(arr[i] === searchElement){
//       return i
//     }
//   }
//   return -1
// }

// console.log(indexOf([1,5,3,3],4))


/*LIOJ 1039：Array fill
給你一個數列以及目標 target，請你把數列中每一個元素都變成 target

並且輸出調整完的數列
*/

// function fill(arr, value) {
//   let newArr = []
//   for(let i =0;i<arr.length;i++){
//     // console.log(arr[i],i)
//     newArr.push(arr[i] = value)
//   }
//   return newArr
// }

// console.log(fill([1,2,3],1))



/* LIOJ 1040：Array join
給你一個數列以及要組合的字串 str，請輸出數列裡面每個元素與 str 組合而成的結果

舉例來說，假設有個數列是 1,2,3 而 str 是 !

組合完的結果就是：1!2!3，要注意的是 3 的後面不會有 str

換句話說，就是在每一個元素中間都插入 str，並且輸出成一個字串
*/

// function join(arr, separator) {
//   let str = ''
//   for(let i=0;i<arr.length;i++){
//     str += arr[i]
//     if( i < arr.length-1){
//       str += separator
//     }
//   }
//   return str
// }

// console.log(join([1,2,3,4],'!!'))


/* LIOJ 1041：String trim
給你一個字串 S， 請輸出把頭尾的空格去掉之後的結果（ 只有頭尾， 在字串中間的不算）
*/
/*
前後分開刪除
空格過濾，其他複製保留
*/

// function trim(str) {
//   let allNum = ''
//   let leftNum = ''
//   let leftstop = false
//   for(let i=0;i<str.length;i++){
//     if (str[i] !== ' ' || leftstop) {
//       leftstop = true
//       leftNum += str[i]
//     }
//   }

//   let rightNum = ''
//   let rightStop = false
//   for(let j=leftNum.length -1;j>=0;j--){
//     if(leftNum[j] !== ' ' || rightStop){
//       rightStop = true
//       rightNum +=leftNum[j]
//     }
//   }

//   for(let k=rightNum.length -1;k>=0;k--){
//     allNum +=rightNum[k]
//   }
//   return allNum
// }

// console.log(trim(' a bc d '))




/* LIOJ 1042：String toLowerCase
給你一個字串 S，請你把 S 裡面出現的大寫英文字母都轉成小寫（禁止使用內建函式 toLowerCase）
大寫字母A - Z對應的ASCII碼值是65 - 90
小寫字母a - z對應的ASCII碼值是97 - 122
*/
// function toLowerCase(str) {
//   let result = ''
//   for(let i=0;i<str.length;i++){
//     if(str[i] >= 'A' && str[i] <= 'Z'){
//       result += String.fromCharCode(str[i].charCodeAt() + 32)
//     }else{
//       result +=str[i]
//     }
//   }
//   return result
// }
// console.log(toLowerCase('ABcD!!'))




/* LIOJ 1043：String endsWith
給定兩個字串 S 與 target，請判斷 S 是不是以 target 結尾

例如說 S=abc，target=c，abc 是以 c 結尾沒錯，答案就是 true

或者 S=abc，target=bc 或是 target=abc，答案也都是 true
*/

// function endsWith(str, searchString) {
//   let len = searchString.length
//   for(let i =0;i<len;i++){
//     if(searchString[len-1] === str){
//       return true
//     }
//   }
//   return false
// }

// console.log(endsWith('c','abd'))



/*  LIOJ 1044：String padEnd
pad 翻作「填充」，而 padEnd 顧名思義就是在字串的尾端填充字元

會有兩個參數 length 以及 str，代表預期字串最後的長度，以及要填充的字串是什麼

例如說現在有個字串 S=abc，length=5，str=a，填充完就會變成 abcaa

a 會重複兩次，因為還沒到達預期的長度

或者是 S=abc，length=5，str=abcdefghijk，填充完會是 abcab

str 後面的字串會被截斷，因為長度已經到了規定的 5 個字

有一種特殊情況是 S 的長度已經大於等於 length，例如說 S=abc，length=1，str=zzz，結果就會是原字串 S，不會做任何改動

abcaa
10
xyz
-- - > abcaaxyzxy
*/
/*
先判斷原始 string 長度是否更輸入的長度一樣
一樣，直接輸出原始 string
不同，用要補的 string 重複補滿
*/

// function padEnd(str, targetLength, padString) {
//   console.log(str.length, targetLength, padString)
//   if(str.length >= targetLength){
//     return str
//   }

//   let result = str
//   let n = 0
//   while(result.length < targetLength){
//     result += padString[n]
//     n++
//     if(n === padString.length){
//       // console.log(n)
//       n = 0
//     }
//   }
//   return result
// }

// console.log(padEnd('abcaa', 10, 'xyz'))




/* LIOJ 1045：String slice
slice 通常用來取陣列或者是字串的其中一部分，有兩個參數 start 與 end

提取範圍是 start 到 end - 1

例如說對 str=abcdef，start=1，end=5，答案就是 bcde
*/
/*
控制 for 印出的數量
*/

// function slice(str, beginIndex, endIndex) {
//   let num = ''
//   let n = endIndex - beginIndex
//   for (let i = beginIndex; i < str.length; i++) {
//     if(i< endIndex){
//       num += str[i]
//     }
//   }
//   return num
// }

// console.log(slice('abcdef', 1, 4))
// console.log(slice('abcdef', 0, 3))



/* LIOJ 1008：幾個水桶
1（2^0）
2（2^1）
4（2^2）
8（2^3）
16（2^4）
請輸出若是要取 M 個單位的水， 最少需要帶幾個水桶
20 -> 2個 （16,4）
*/
/*
1 = 2*0
2 = 2*1
4 = 2*2
8 = 2*2*2
16 = 2*2*2*2
2*i+2

1
2 = 1+1
4 = 2+2
8 = 4+4
16 = 8+8

0 個2
1 個2
2 個2
3 個2
4 個2
i 個2
把 n  1 2 4 8 16 濾出來

*/
// function buket(n) {
//   let num = []
//   for(let i=1;i<=2**n;i*=2){
//     if(n-i>=0){
//       num.push(i)
//     }
//   }
//   let num2= 0
//   for(let i = num.length;i>=0;i--){
//     if(num[i] <= n){
//       n-=num[i]
//       num2++
//     }
//   }
//   return num2
// }

// console.log(buket(30))


/* LIOJ 1009：Yo！倒著唸！
請你輸出字串 S 倒過來的結果
*/

// function yo(str) {
//   let num = ''
//   for(let i = str.length-1;i>=0;i--){
//     // console.log(str[i])
//     num+=str[i]
//   }
//   return num
// }
// console.log(yo('abcde'))


/* LIOJ 1013：搭電梯  -> 費波納實際案例
Input
輸入為一個數字 N（2<=N<=20），代表要去的樓層

Output
請輸出要從一樓搭電梯到 N 樓一共有幾種不同的搭法

1 = 0
2 = 0+1 = 1
3 = 1+1 = 2
4 = 1+2 = 3
5 = 2+3 = 5
6 = 3+5 = 8
i = (i-1)+()
*/

// function light(n) {
//   if(n===2) return 1
//   if(n===3) return 2
//   return light(n-1)+light(n-2)
// }

// console.log(light(6))



/* LIOJ 1014：不九人世
1, 2, 3, 4, 5, 6, 7, 8, 10, 11
12, 13, 14, 15, 16, 17, 18, 20, 21, 22
23, 24, 25, 26, 27, 28, 30, 31, 32, 33

所以從我們的角度來看，在齊數系統當中第 9 個數字是 10，第 21 個數字是 23。

現在給你一個齊數系統裡的數字 N，請問這個數字是第幾個數字。

input 33
輸入為一個數字 N，代表在齊數系統裡的數字（1<=N<=2**30−1）

output 30
你輸出 N 是齊數系統裡面第幾個數字
*/

// function num(n) {
//   return parseInt(n,9)
// }
// console.log(num(100))


/* LIOJ 1016：不合群的人
Input
第一行為一個數字 N，代表遊玩人數（1<=N<=100）接下來 N 行每行為一個字母 Pi
，代表第 i 個人選擇 A 還是 B

Output
請你依照順序輸出不合群的人的編號，並用空行分隔，編號由 1 開始

若是沒有人不合群，請輸出：PEACE
*/
function people(arr) {
  let aNum = []
  let bNum = []
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === 'A'){
      aNum.push(i+1)
    }
    if(arr[i] === 'B'){
      bNum.push(i+1)
    }
  }
  let num = aNum.length < bNum.length? aNum : bNum
  if (aNum.length === bNum.length){
    return 'PEACE'
  }
  num.forEach( item => {
    console.log(item)
  })
}

console.log(people(['A','B','A','A','B','B']))




