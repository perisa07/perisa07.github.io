/* .js files add interaction to your website */

var factList = ["Studies suggest that 15.5 million children in the U.S. witness domestic violence annually", "By age 17, over one-third of America’s children will have been exposed to domestic violence.", "violence can limit life opportunities, lead to emotional and physical health problems, and shorten lives. ", "About 44% of teens experienced at least one type of violence.", "Every day about 360 teens is treated in emergency departments for assault injuries.", "Teens who experience violence have several health conditions and risk behaviors, including, missed school due to safety concerns, low academic grades, carried a weapon, suicidal thoughts or behavior, risky sexual behavior, overweight or obesity, felt sad or hopeless and substance use", "Globally, 275 million children witness firsthand violence at home. ", "Since abuse and violence are learned behaviors, part of the impact on children can also involve them taking on the cultural beliefs that support domestic abuse.", "One study reveals that men who were exposed to physical abuse, sexual abuse, and adult domestic violence as children were almost 4 times more likely than other men to perpetrate domestic violence as adults."];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}
function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}


var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

/*
REFACTOR ITEM 2: 
Create a separate function for displaying the script.
Be sure to update function names.
*/

function generateScript() {
  //This variable must be in the function or it will not work
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  var type = document.getElementById("type").value;
  var relation = document.getElementById("relation").value;

  displayScript.innerHTML = "Hello, my name is " + name + " and I live in " + location + ". I’m calling because I’m getting " +  type + " abused by " +  relation + ". I need your help.";
}

function showOverlay() {
  document.getElementById("overlay").style.display = "block";
}
window.addEventListener("load", showOverlay);

// Add event listener to proceed by closing the overlay when clicked
var proceed = document.getElementById("proceed");
proceed.addEventListener("click", closeOverlay);

function closeOverlay() {
  document.getElementById("overlay").style.display = "none";
}
