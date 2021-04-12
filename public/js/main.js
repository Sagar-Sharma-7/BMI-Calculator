// BMI = weight(kg)/ height^2(m)

// variables
const title = document.querySelector("title");
const mainHeading = document.querySelector("#mainHeading");
const female = document.querySelector(".female");
const male = document.querySelector(".male");
const heightVal = document.querySelector("#heightVal");
const heightRange = document.querySelector(".heightRange");
const kg = document.querySelector("#kg");
const weightVal = document.querySelector("#weightVal");
const weightRange = document.querySelector(".weightRange");
const cm = document.querySelector("#cm");
const result = document.querySelector("#result");
const status = document.querySelector("#status");
const calculate = document.querySelector("#calculate");


// user
let userHeight;
let userWeight;

title.textContent = `BMI Calculator`;
mainHeading.textContent = `BMI CALCULATOR`;
result.textContent = `Your BMI`;
status.textContent = `Status`;
cm.textContent = `Height(cm)`;
kg.textContent = `Weight(kg)`;
calculate.textContent = `CALCULATE`;



// gender
female.addEventListener("click", () => {
    female.style.color  = "#1EFFC9";
    male.style.color = "#FFF";
});

male.addEventListener("click", () => {
    female.style.color  = "#FFF";
    male.style.color = "#1EFFC9";
});


// height
const heightInterval = setInterval(() => {
    heightVal.innerHTML = heightRange.value + " cm";
}, 1);

// weight
const weightInterval = setInterval(() => {
    weightVal.innerHTML = weightRange.value + " kg";
}, 1);

// calculate
calculate.addEventListener("click", () => {
    userHeight = heightRange.value / 100;
    userWeight = weightRange.value;

    const userBMI = userWeight / (userHeight * userHeight);
    result.innerHTML = userBMI + " BMI";

    const userStatus = (userBMI < 18.5) ? "Underweight &#128531;" 
                                : (userBMI  >= 18.5 && userBMI <= 24.9) ? "Normal &#128515;"
                                : (userBMI > 24.9 && userBMI <= 30) ? "Overweight &#128543;" : "Obese &#128542;";
    status.innerHTML = userStatus;
});
