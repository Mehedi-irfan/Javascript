//we can create date object using this format and this return a object
const now = new Date();
console.log(now);

//for finding specific date and time we can use this syntax
const dateTime = new Date("2025-01-17T10:30:00");
console.log(dateTime);

//using individual components
const specificDateTime = new Date(2025, 0, 17, 10, 30, 0);
console.log(specificDateTime); // Note: Month is 0-indexed

//to get year we can use this getFullYear()
const year = now.getFullYear();
console.log(year);

//using getTime() method for get time
const timestamp = now.getTime();
console.log(timestamp);


const date = new Date();
date.setFullYear(2030);
date.setMonth(5); // June
date.setDate(15);
console.log(date);

//using toLocalDateString() method to get local date
console.log(now.toLocaleDateString("zh-CN")); // MM/DD/YYYY
console.log(now.toLocaleDateString("en-GB")); // DD/MM/YYYY

//using toLocalTimeString() method to get local time
const nowDate = new Date();
console.log(nowDate.toLocaleDateString('zh-CN')); // Outputs: YYYY/MM/DD
console.log(now.toLocaleTimeString('zh-CN')); // Outputs: HH:MM:SS (24-hour format)

console.log(now.toLocaleString("en-CN")); // MM/DD/YYYY, HH:MM:SS AM/PM

//difference between date
const date1 = new Date("2025-01-01");
const date2 = new Date("2025-01-17");
const difference = date2 - date1; // Difference in milliseconds
console.log(difference / (1000 * 60 * 60 * 24)); // Convert to days


//add days
const future = new Date();
future.setDate(future.getDate() + 7); // Add 7 days
console.log(future);

setTimeout(() => console.log("Hello!"), 2000); // After 2 seconds
