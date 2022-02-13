// 程式語言本身就不是可以歸類的
// OOP 物件導向、 FP(function promain)只是一種寫程式的風格
// js 是由 object 所組成
// new 是與 object 的 prototype 做連接，隨時都可以 new 出要的 prototype

function youtube(a,b){
  this.name = a
  this.age = b
}
const people = new youtube('Jimmy',30)

console.log(people.name, people.age, typeof people) // Jimmy, 30, object