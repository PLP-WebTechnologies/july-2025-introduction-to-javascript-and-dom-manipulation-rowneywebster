// =======================================
// Part 1: Variables, Data Types & Conditionals
// =======================================

// Declaring variables with different data types
let studentName = "Amina";
let assignmentScore = 87;
let isSubmitted = true;

// Conditional check
if (assignmentScore >= 50 && isSubmitted) {
  console.log(studentName + " passed the assignment ✅");
} else {
  console.log(studentName + " needs to try again ❌");
}

// =======================================
// Part 2: Functions (Reusable Logic)
// =======================================

// Function 1: Calculate average of 3 scores
function calculateAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}

// Function 2: Toggle a message (e.g. for dark mode or notifications)
function toggleMessage(elementId, newMessage) {
  let element = document.getElementById(elementId);
  element.innerText = newMessage;
}

// Using the functions
console.log("Average score:", calculateAverage(80, 90, 100));
toggleMessage("intro", "JavaScript is running this page 🎉");

// =======================================
// Part 3: Loops (Repetition & Iteration)
// =======================================

let fruits = ["🍎 Apple", "🍌 Banana", "🥭 Mango", "🍊 Orange"];

// For loop to display fruits
for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit #" + (i + 1) + ": " + fruits[i]);
}

// While loop - countdown
let countdown = 3;
while (countdown > 0) {
  console.log("Starting in... " + countdown);
  countdown--;
}

// =======================================
// Part 4: DOM Manipulation (Make Page Interactive)
// =======================================

// 1. Change text content dynamically
document.getElementById("title").innerText = "🔥 JavaScript in Action 🔥";

// 2. Add a click event listener to a button
document.getElementById("btn").addEventListener("click", function() {
  alert("You clicked the button! 🚀");
});

// 3. Dynamically create list items from the fruits array
let fruitList = document.getElementById("fruit-list");
fruits.forEach(function(fruit) {
  let li = document.createElement("li");
  li.innerText = fruit;
  fruitList.appendChild(li);
});

// =======================================
// End of Assignment
// =======================================

console.log("Assignment complete 🎯");
