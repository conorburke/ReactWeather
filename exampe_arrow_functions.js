var names = ['conor', 'mack', 'solda']

names.forEach(function(name){
  console.log(name);
})

names.forEach((name) => {
  console.log(name)
})

names.forEach((name) => console.log(name))

// var returnMe = (name) => name + '!'
// console.log(returnMe('lahey'))

// var person = {
//   name: 'Conor',
//   greet: function(){
//     names.forEach(function(name){
//       console.log(this.name + ' says hi to ' + name)
//     })
//   }
// }

var person = {
  name: 'Conor',
  greet: function(){
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name)
    })
  }
}
person.greet();

function add(a,b){
  return a + b;
}
console.log(add(1,3))
console.log(add(9,0))

var addStatement = (a, b) => {
  return a + b;
}
console.log(addStatement(9,1))

var addExpression = (a, b) => a + b;
console.log(addExpression(9,2))