let name = "Sita";
name = "Gita"; // Allowed

const age = 25;
//age = 25;// note allowed
console.log(age);
console.log(name)

/// Template Literals
console.log(`Her name is ${name} and her age is ${age}`)

// 3. Destructuring Assignment
const person = {
    fullname:"sasmita",
    phone:12,
    address:"pokhara"
}

const {fullname,phone,address}=person;
console.log(fullname,phone,address)

//Spread Operator 
const arr1=[1,2,3]
const arr2=[...arr1,4,5,6]
console.log(arr2)


//arrow function
 const add=()=>{
    return 5+5
 }
 console.log(add())

 function sub()
 {
    return 5-5
 }
 console.log(sub())
