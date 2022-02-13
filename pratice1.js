/* 練習一
請你自己寫出一段程式碼， 是判斷一個叫做 score 的變數是否及格（ 超過或剛好 60 分）， 如果及格的話就輸出 pass， 否則輸出 fail。

進階練習：

除了判斷是否及格以外， 也請你對滿分做出特別判斷， 如果是 100 分的話就輸出 you are no1!
*/ 

// function example(score) {
//   return score === 100 ? 'you are no1!' :
//     score >= 60 ? 'pass' : 'fail';
// }

// console.log(example(100))



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


// let weight = null
// let hight = null

// function bmi (weight, hight) { 
//   m = hight / 100
//   calc = weight / (m * m)
//   bmiRes = calc.toFixed(2)
//   return bmiResult(bmiRes)
// }

// function bmiResult() {
//   return (bmiRes <= 18.5) ? `BMI為:${bmiRes}_體重過輕`
//   : (bmiRes <= 24) ? `BMI為:${bmiRes}_正常範圍`
//   : (bmiRes <= 27) ? `BMI為:${bmiRes}_過重`
//   : (bmiRes <= 30) ? `BMI為:${bmiRes}_輕度肥胖`
//   : (bmiRes <= 35) ? `BMI為:${bmiRes}_中度肥胖 `: `BMI為:${bmiRes}_重度肥胖`
// }

// console.log(bmi(50,160))



/** 宣告 function 的不同方式
 * @param {string} arr 陣列參數
 * @param {function} transformFunction function參數
 * 
 * 傳遞 function  -> transformFunction
 * 傳遞 transformFunction(arr[i]) -> 到 double() 執行 -> 再回傳
 */

function transform(arr, transformFunction){
  debugger
  let result = []
  for( let i=0 ; i < arr.length; i++){
    result.push(transformFunction(arr[i]))
  }
  return result
}

function double(x) {
  return x*3
}

console.log(transform([1,2,3], double))


// function double(x) {
//   return x*3
// }

// let result = double(3)

// console.log(result)