function showSection(section) {
    var sections = document.getElementsByClassName('section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }

    var selectedSection = document.getElementById(section + 'Section');
    selectedSection.style.display = 'block';
}

function convertTime() {
    var value = document.getElementById('timeValue').value;
    var fromUnit = document.getElementById('timeFromUnit').value;
    var toUnit = document.getElementById('timeToUnit').value;

    var result;

    if (fromUnit === 'seconds' && toUnit === 'minutes') {
        result = value / 60;
    } else if (fromUnit === 'seconds' && toUnit === 'hours') {
        result = value / 3600;
    } else if (fromUnit === 'minutes' && toUnit === 'seconds') {
        result = value * 60;
    } else if (fromUnit === 'minutes' && toUnit === 'hours') {
        result = value / 60;
    } else if (fromUnit === 'hours' && toUnit === 'seconds') {
        result = value * 3600;
    } else if (fromUnit === 'hours' && toUnit === 'minutes') {
        result = value * 60;
    } else {
        result = value;
    }

    document.getElementById('timeResult').innerHTML = result;
}

function convertTemperature() {
    var value = document.getElementById('tempValue').value;
    var fromUnit = document.getElementById('tempFromUnit').value;
    var toUnit = document.getElementById('tempToUnit').value;

    var result;

    if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
        result = (value * 9/5) + 32;
    } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
        result = parseFloat(value) + 273.15;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
        result = (value - 32) * 5/9;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
        result = (parseFloat(value) - 32) * 5/9 + 273.15;
    } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
        result = parseFloat(value) - 273.15;
    } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
        result = (parseFloat(value) - 273.15) * 9/5 + 32;
    } else {
        result = value;
    }

    document.getElementById('tempResult').innerHTML = result;
}

function convertWeight() {
    var value = document.getElementById('weightValue').value;
    var fromUnit = document.getElementById('weightFromUnit').value;
    var toUnit = document.getElementById('weightToUnit').value;

    var result;

    if (fromUnit === 'grams' && toUnit === 'kilograms') {
        result = value / 1000;
    } else if (fromUnit === 'grams' && toUnit === 'pounds') {
        result = value / 453.592;
    } else if (fromUnit === 'kilograms' && toUnit === 'grams') {
        result = value * 1000;
    } else if (fromUnit === 'kilograms' && toUnit === 'pounds') {
        result = value * 2.205;
    } else if (fromUnit === 'pounds' && toUnit === 'grams') {
        result = value * 453.592;
    } else if (fromUnit === 'pounds' && toUnit === 'kilograms') {
        result = value / 2.205;
    } else {
        result = value;
    }

    document.getElementById('weightResult').innerHTML = result;
}

function convertLength() {
    var value = document.getElementById('lengthValue').value;
    var fromUnit = document.getElementById('lengthFromUnit').value;
    var toUnit = document.getElementById('lengthToUnit').value;

    var result;

    if (fromUnit === 'cm' && toUnit === 'm') {
        result = value / 100;
    } else if (fromUnit === 'cm' && toUnit === 'km') {
        result = value / 100000;
    } else if (fromUnit === 'm' && toUnit === 'cm') {
        result = value * 100;
    } else if (fromUnit === 'm' && toUnit === 'km') {
        result = value / 1000;
    } else if (fromUnit === 'km' && toUnit === 'cm') {
        result = value * 100000;
    } else if (fromUnit === 'km' && toUnit === 'm') {
        result = value * 1000;
    } else {
        result = value;
    }

    document.getElementById('lengthResult').innerHTML = result;
}
