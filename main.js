
const firstDiv = document.getElementById("dom");
const secondDiv = document.getElementsByClassName("class");
const thirdDiv = document.getElementsByTagName("p");
const fourthDiv = document.querySelector("#high");
const fifthDiv = document.querySelector(".low");
const sixthDiv = document.querySelector("h3");
const sevDiv = document.querySelectorAll(".all");

/* Getting elements by ID */
console.log(firstDiv);

firstDiv.textContent = "Document Object Model";
firstDiv.innerHTML = "<h6>Document Object Model</h6>";

/* Getting elements by Class Name */

console.log(secondDiv);

/* Get Element by Tag name */

console.log(thirdDiv);

/* Getting elements by query selctor */

console.log(fourthDiv);
fourthDiv.textContent = "Document Object Model II";


console.log(fifthDiv);


console.log(sixthDiv);

/* Get query selector all */

console.log(sevDiv);

/* If statment */
const goToSchool = true;

if (goToSchool) {
  console.log("Going to school");
} else {
  console.log("Stay at home");
}
