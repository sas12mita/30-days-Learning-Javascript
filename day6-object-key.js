
console.log('function inside object')
const person = ({
    name: "John", //name=>key and value="john"
    age: 30,
    city: "New York",
    add: function () {
        return "Hello"
    }
})
console.log(person.name);
console.log(person.age);
console.log(person.add())

console.log('nested object')
const person2 = {
    name: "ram",
    age: 30,
    subject:{
        math:90,
        science:80
     }

}
console.log(person2.name);
console.log(person2.age);
console.log(person2.subject.math)






