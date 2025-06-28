
console.log("Add a student with name, age, and marks");
console.log("View all students");
console.log("Calculate average marks");
console.log("Filter students by passing marks (e.g., marks >40)");

const students = [{
    name: 'john',
    age: 20,
    marks:
    {
        math: 90,
        science: 80,
        english: 70
    },
},
{
    name: 'peter',
    age: 21,
    marks: {
        math: 70,
        science: 60,
        english: 5
    },
},
{
    name: 'jack',
    age: 22,
    marks: {
        math: 8,
        science: 0,
        english: 19
    }
}
]
for (var student of students)
{
    console.log(student.name)
}
const studentage=students.map(student=>student.age)
console.log(studentage)

const stuage=students.map(function(item)
{
return item.age;
})
console.log(stuage)

console.log("All student marks")
const studentmaks=students.map(student=>student.marks)
 console.log(studentmaks)

 const eachstudentmarks=students.map(eachstudent=>{
    const studentmarks=eachstudent.marks
    const totalMark= studentmarks.math+studentmarks.science+studentmarks
    const ispass=function()
    {
        if(totalMark>=40)
        {
            return true
        }
        else
        {
            return false
        }
    }
    return {
        name: student.name,
        totalMark: totalMark,
        pass:ispass()
    }
 });
 console.log(eachstudentmarks)


// const totalMarks = students.reduce((sum, student) => {
//     const studentTotal = student.marks.math + student.marks.science + student.marks.english;
//     return sum + studentTotal;
// }, 0);

// console.log("Total marks of all students:", totalMark);
