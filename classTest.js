// class Dice {
//   constructor() {
//     this.num = Math.random();
//     Dice.prototype.count++;
//     console.log(`Count: ${Dice.prototype.count}`);
//   }

//   rand() {
//     const result = Math.round(this.num * 10 + 1);
//     console.log(`Random: ${result}`);
//   }
// }

// Dice.prototype.count = 0;

// var d1 = new Dice(); // Count: 1
// var d2 = new Dice(); // Count: 2
// let d3 = new Dice(); // Count: 1
// let d4 = new Dice(); // Count: 2
// console.log(d1.count === d2.count,d3.count === d4.count) // true，的確是更新同一個值！

// 作用域 更
// var tmp = "start"
// console.log('1')
// const func = () => {
//   console.log('2.2')
//   setTimeout(() => {
//     console.log('2')
//     console.log(`app：${tmp}`)
//   }, 0)
//   if (tmp) {
//     console.log('3')
//     var tmp = "running"
//   }
// }
// var tmp = "end"
// console.log('4')
// console.log(func())

// 淺拷貝 記憶體
// const clone = ({ name, age }) => {
//   let template = { name:"foo", attr: { age: 18 } };
//   let human = Object.assign({}, template);
//   human.name = name;
//   human.attr.age = age;
//   console.log(human);
//   console.log(template);
// }
// clone({name:"bar",age:40})

const promise = (num) => {
  return new Promise((resolve, reject) => {
    console.log(num)
    num ? resolve(`${num} success`) : reject(`${num} fail`)
  })
}
console.log("start")
promise(1)
  .then((success) => {
    console.log(success)
    return promise(2)
  })
  .then((success) => {
    console.log(success)
    return promise(5)
  })
  .then((success) => {
    console.log(success)
    return promise(3)
  })
  .catch((error) => {
    console.log(error)
  })
  .finally(() => {
    console.log("done")
  })
console.log("end")