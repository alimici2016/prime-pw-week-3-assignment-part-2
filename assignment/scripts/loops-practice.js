console.log('****** Loops Practice ******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');
//   - Which part of the example loop do you need to change to do this?
for (let i=0; i<=5; i++){
console.log(i);
}
//You need to change the condition from 4 to greater than or equal to 5.
// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');
for (let i=3; i<=5; i++){
  console.log(i);
}
//You would need to change the initial expression to 3 and the condition must make it so 'i' only runs if it is less than or equal to 5.
// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
for (let i=2; i<=10; i+=2){
  console.log(i);
}
//The initialexpression begins with the number 2, the condition only runs if the variable 'i' is less than or equal to 10, and instead of an increment we plus equal 2.
// 1.d. (STRETCH) TODO: Write a for loop to do a counddown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');
for (let i=5; i>= 0; i--){
  console.log(i);
}
// 2. For of loops
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb'];

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
for (let star of stars ) {
  console.log(star);
}

//This is looping more than I want it to, maybe some answers in feedback.
// 3. While loops
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array

console.log('Some stars using while:');
let starIndex= 0;
while (starIndex < stars.length){
  console.log(stars[starIndex]);
  starIndex++;
}
// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');
let index = 0;
const max = 5;
while (index <=5){
  console.log(index);
index++;
}
// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
index = 10;
while (index => 5){
  console.log(index);
index--;
}
//I'm not exactly sure why this isn't working, maybe I could get help in feedback!
