//arithmetic operation
console.log(5+10);
console.log(5-10);
console.log(5*10);
console.log(5/10);
console.log(5*2);
let counter=0;
console.log(++counter);
console.log(counter++);
console.log(counter++);
console.log(counter++);
console.log(counter++);
const a="5";
const b=5;
console.log(a===b);
console.log(a==b);
//Comparison Operators
console.log('\nComparison:');
console.log('5 == "5"', 5 == '5');   // true (loose equality)
console.log('5 === "5"', 5 === '5'); // false (strict equality)
console.log('5 != "5"', 5 != '5');   // false
console.log('5 !== "5"', 5 !== '5'); // true
console.log('5 > 3', 5 > 3);         // true
console.log('5 < 3', 5 < 3)


//logical operator
console.log('\nLogical Operators:')
console.log('true && true', true && true);
console.log('true && false', true && false);
console.log('false && true', false && true);
console.log('false && false', false && false);
console.log('\nLogical Operators:')
console.log('true ||true', true || true);
console.log('true ||false', true || false);
console.log('false|| true', false || true);
console.log('false|| false', false || false);

//Boolean check
console.log('\nBoolean Check:')
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(10))
console.log(Boolean("hi"))
// Implicit Coercion (Automatic)
console.log(5+true);
console.log(5+false);
console.log("TEXT"+null)
const text=20;
console.log(Boolean(text));// console.log('text:',0)

// Explicit Conversion (Manual)
console.log(Number(true));
console.log(Number(false));
console.log(Number("hi"));
console.log(String(1))
