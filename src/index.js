"use strict"; // more error reporting help from the browser, we can request strict behavior.

//  Wave 2 
console.log('loaded');
const state = {
    // <span id="increaseTempControl">⬆️</span>
    // <span id="tempValue"></span>
    // <span id="decreaseTempControl">⬇️</span>
    tempValue: null, // get temprature from APIs?
    increaseTempControl: null,
    decreaseTempControl: null,
    landscape: null,
}


const handleIncreaseTempControlClicked = () => {
    // If the tempValue is not exist, it will default as 0?
    // increase tempValue by 1
    // Method 1
    // state.tempValue.textContent = +state.tempValue.textContent + 1;
    // Method 2
    state.tempValue.textContent = Number(state.tempValue.textContent) + 1;
    changeTempColors();
    changeLandscapes();
}


const handleDecreaseTempControlClicked = () => {
    // decrease tempValue by 1
    state.tempValue.textContent = +state.tempValue.textContent - 1;
    changeTempColors();
    changeLandscapes();
}


const registerEvents = () => {
    state.increaseTempControl.addEventListener ('click', handleIncreaseTempControlClicked);
    state.decreaseTempControl.addEventListener ('click', handleDecreaseTempControlClicked);
}


// Temperature Ranges Change Text Color
// Temperature (F)	Color
// 80+	Red
// 70-79	Orange
// 60-69	Yellow
// 50-59	Green
// 49 or below	Teal
const changeTempColors = () => {
    const temp = Number(state.tempValue.textContent)
    if (temp >= 80) {
        state.tempValue.style.color = 'red';
    } else if (temp >= 70 && temp <= 79) {
        state.tempValue.style.color = 'orange';changeLandscapes();
    } else if (temp >= 60 && temp <= 69) {
        state.tempValue.style.color = 'yellow';
    } else if (temp >= 50 && temp <= 59) {
        state.tempValue.style.color = 'green';
    } else if (temp <= 49) {
        state.tempValue.style.color = 'teal';
    };
}

// Temperature Ranges Change Landscape
// Temperature (F)	Landscape
// 80+	"🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"
// 70-79	"🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"
// 60-69	"🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"
// 59 or below	"🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"

const changeLandscapes = () => {
    const temp = Number(state.tempValue.textContent)
    if (temp >= 80) {
        state.landscape.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (temp >= 70 && temp <= 79) {
        state.landscape.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (temp >= 60 && temp <= 69) {
        state.landscape.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else if (temp <= 59) {
        state.landscape.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    };
}

const onloaded = () => {
    loadedControls();
    registerEvents();
    changeTempColors();
    changeLandscapes();
}


const loadedControls = () => {
    state.tempValue = document.getElementById('tempValue');
    state.increaseTempControl = document.getElementById('increaseTempControl');
    state.decreaseTempControl = document.getElementById('decreaseTempControl');
    state.landscape = document.getElementById('landscape');
}


onloaded();