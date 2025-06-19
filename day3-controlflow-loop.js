const a = 0;
if (a > -1) {
    console.log(true);
}
else {
    console.log(false)
}


const ab = 27;
switch (ab) {
    case 10:
        console.log("one");
        break
    case 2:
        console.log("@")
        break;
    default:
        console.log("default");
}
let age = 18;

if (age < 18) {
    console.log("Minor");
} else if (age === 18) {
    console.log("Just became adult");
} else {
    console.log("Adult");
}

let loggedin = false
let message = loggedin ? 'welcome to home page' : 'You are not authorized'
console.log(message);

const fruits = ['banana', 'mango', 'leeche'];
for (fruit of fruits) {
    console.log(fruit);
}
console.log(fruits[1])

const vegetable = [
    {
        'name': 'pumkin',
        'price': 10
    },
    {
        'name': 'tomato',
        'price': 20
    },
    {
        'name': 'cucumber',
        'price': 30
    }
];
for (let veg of vegetable) {
    console.log(veg['name']);
}