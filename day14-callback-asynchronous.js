const displaysub=(result)=>{
console.log("the result of the calculation is: ",result);
return 
}

 function add(num1, num2)
{
   const result=num1+num2;
   displaysub(result);
}
add(2,34);
//callback function use when multiple task are performing at same time
const displayanswer=(result)=>{
console.log("the result of the calculation is: ",result);
return 
}

 function sub(num1, num2,callback)
{
   const result=num1-num2;
   callback(result);
}
sub(2,4,displaysub);
