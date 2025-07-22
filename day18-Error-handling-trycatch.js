try {
    // Code that might throw an error
    let result = 10 / 0;
    console.log("Result is:", result);
} catch (error) {
    // Code that runs if there's an error
    console.error("An error occurred:", error.message);
}
try {
    nonExistentFunction();
    console.log("This will not run.");
} catch (error) {
    // This block will run
    console.error("Caught error:", error.message);
}
