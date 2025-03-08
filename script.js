var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

var modal = document.getElementById("myModal");
var modalText = document.querySelector("#modalText");
var span = document.getElementsByClassName("close")[0];

function calculate() {
  let ageVal = Number(age.value);
  let heightVal = Number(height.value);
  let weightVal = Number(weight.value);
  
  if (!age.value || !height.value || !weight.value || (!male.checked && !female.checked)) {
    showModal("⚠️ All fields are required!");
  } else if (ageVal < 5 || ageVal > 120) {
    showModal("⏳ Please enter a valid age (5-120 years).");
  } else if (heightVal < 50 || heightVal > 250) {
    showModal("📏 Please enter a valid height (50-250 cm).");
  } else if (weightVal < 10 || weightVal > 300) {
    showModal("⚖️ Please enter a valid weight (10-300 kg).");
  } else {
    countBmi(heightVal, weightVal);
  }
}

function countBmi(height, weight) {
  var bmi = weight / ((height / 100) * (height / 100));

  let result = "";
  let emoji = "";

  if (bmi < 18.5) {
    result = "Underweight";
    emoji = "😟🍃";
  } else if (bmi <= 24.9) {
    result = "Healthy";
    emoji = "😊💪";
  } else if (bmi <= 29.9) {
    result = "Overweight";
    emoji = "😅🍔";
  } else if (bmi <= 34.9) {
    result = "Obese";
    emoji = "😬⚖️";
  } else {
    result = "Extremely Obese";
    emoji = "😨🚨";
  }

  resultArea.style.display = "block";
  resultArea.classList.remove("animate-result"); // Restart animation
  void resultArea.offsetWidth; // Trigger reflow
  resultArea.classList.add("animate-result");

  document.querySelector(".comment").innerHTML = `You are <span id="comment">${result} ${emoji}</span>`;
  document.querySelector("#result").innerHTML = `Your BMI: <strong>${bmi.toFixed(2)}</strong>`;
}

function showModal(message) {
  modal.style.display = "block";
  modalText.innerHTML = message;
}

// Close modal when clicking on (x)
span.onclick = function () {
  modal.style.display = "none";
};

// Close modal when clicking outside
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};