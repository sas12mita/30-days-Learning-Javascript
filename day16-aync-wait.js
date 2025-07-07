async function weatherapp() {
    try {
        console.log("hello")
        let res = await fetch("https://jsonplaceholder.typicode.com/users/1");
        let data=await res.json();
        console.log("hello")
        console.log(data);       
    } catch (error) {
        console.log("error");
    }
}
console.log(weatherapp())