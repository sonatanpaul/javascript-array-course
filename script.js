// How to Create an Array in JavaScript?
// 01.
const person = ["Shakib Khan", "Amir Khan", "Salman Khan", "Ranbir Kapoor"];
console.log(person);
// Output : ['Shakib Khan', 'Amir Khan', 'Salman Khan', 'Ranbir Kapoor']

// 02.
const newPerson = new Array(1, 2, 3, 4, 5, 6);
console.log(newPerson);
// Output: (6) [1, 2, 3, 4, 5, 6]

// 03. Empty Array Element
const emptyArray = new Array(10);
console.log(emptyArray);
// Output : (10) [empty × 10]

/// How to check array length
const number = [1, 2, 3, 4, 5, 6, 8];
const numberLength = number.length;
console.log(numberLength);
// Output : 7

// How to Get Elements from an Array

const names = ["Sonatan", "Anik", "Ashraful", "Akash"];
names[0]; // Output : Sonatan
names[2]; // Output: Ashraful

// How to Add Elements to an Array

// add last element of array
const friends = ["Bikash", "Anik", "Rayhan"];
friends.push("Ashraful");
console.log(friends);
// Output : (4) ['Bikash', 'Anik', 'Rayhan', 'Ashraful']
// Note : push() method return array total index number and push() method is muteable method

// add first element of array

const subject = ["Bangla", "English", "Math"];
subject.unshift("ICT");
console.log(subject);
// Output :  ['ICT', 'Bangla', 'English', 'Math']
// note : Note : unshift() method return array total index number and unshift() method is muteable method

// How to Remove Elements from an Array
// remove last element
const bestCity = ["Pabna", "Dhaka", "Rajshahi", "Barisal"];
bestCity.pop();
console.log(bestCity);
// Output : (3) ['Pabna', 'Dhaka', 'Rajshahi']
// Note :  pop() method alaways return actual remove value and pop method is muteable method

//remove first element

const lang = ["Urdu", "Bangla", "English", "Hindi"];
lang.shift();
console.log(lang);
// Output : (3) ['Bangla', 'English', 'Hindi']
// Note : shift () method alaways return actual remove value and shift method is muteable method

// How to Determine if a Value is an Array

const array = ["Sonatan", 25, "Student"];
const actualArray = Array.isArray(array);
console.log(actualArray);
// Output : true
