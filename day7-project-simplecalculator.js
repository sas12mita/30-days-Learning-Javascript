const a = 10;
const b = 20;
const Calculator = {
    add: function () {
        return a + b;
    },
    subtract: function (c, d) {
        sub = c - d
        return sub
    },
    multiple: function () {
        return a * b;
    },
    divide: function () {
       return a / b;
    }
}

const addoperation = Calculator.add();
const suboperation = Calculator.subtract(30, 10);
const multipleopration = Calculator.multiple();
console.log(addoperation);
console.log(suboperation);
console.log(multipleopration);
console.log(Calculator.divide());
