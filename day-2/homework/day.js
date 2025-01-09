console.log("DAYS")
console.log(process.argv);
// Function to check if a day is a weekday
function isWeekday(day) {
    // Convert input to lowercase for case-insensitive comparison
    const weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday"];
    return weekdays.includes(day.toLowerCase());
}

// Example usage
console.log(isWeekday("sunday"));    // true
console.log(isWeekday("monday"));    // false
console.log(isWeekday("saturday"));  // false
console.log(isWeekday("wednesday"));
console.log(isWeekday("thursday"));
console.log(isWeekday("sunday"));
console.log(isWeekday("MONday"));