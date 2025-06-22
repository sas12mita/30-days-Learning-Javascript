const fruits=["mango","banana","grapes"];
const fruit=new Array(1,2,3,4,);

console.log(fruit[2]);
console.log(fruits.push('kaju'));
fruits.push('leeche'); // add 'leeche' to the end
fruits.pop(); // remove from the end (no parameter needed!)

console.log(fruits);// ['apple', 'banana', 'mango']


let arr = [2, 3, 4];
arr.shift();  // remove from the start
arr.unshift(1);// add 1 to the start  
console.log(arr); 

arr.unshift(0, -1); 
console.log(arr);