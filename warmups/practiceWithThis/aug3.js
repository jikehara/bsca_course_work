const myObject = {};
// // console.log(myObject);
// myObject.data = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
// myObject.aFunction = function() {
//
//   return (this.data.filter((item, index) => indexOf(item)===index))
// }
//
// console.log(myObject.data);

const func = function() {
  console.log("func this is", this)
}

// lambda syntax
const lambda = () => console.log("lambda this is",this);

// func();
// lambda();

myObject.func = func;
myObject.lambda = lambda;

console.log(myObject)

myObject.func();
myObject.lambda();
