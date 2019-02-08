let table = document.querySelector("#table-pacients");
let pacients = table.getElementsByTagName('tr');

for (i = 0; i < pacients.length; i++) {
    let pacient = pacients.item(i);

    let weight = pacient.querySelector('.info-weight').textContent;
    let height = pacient.querySelector('.info-height').textContent;

    let validWeight = validateWeight(weight);
    let validHeight = validateHeight(height);

    let bmiInfo = "";
    if (validWeight && validHeight) {
        
        bmiInfo = calculateBMI(weight, height);
    } else {
        bmiInfo = (!validWeight) ? "Invalid weight" : "Invalid height";
        pacient.classList.add('invalid-pacient');
    }

    pacient.querySelector('.info-bmi').textContent = bmiInfo;
}

function calculateBMI(weight, height) {
    return (weight / (height * height)).toFixed(2);
}

function validateWeight(weight) {
    return weight > 0 && weight < 1000;
}

function validateHeight(height) {
    return height > 0 && height < 3;
}