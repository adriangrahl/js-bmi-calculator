let button = document.querySelector("#add-pacient");
button.addEventListener("click", () => {
    event.preventDefault();
    addPacient();
})

function addPacient() {
    let form = document.querySelector("form");
    let pacient = getPacientForm(form);

    var errors = validatePacient(pacient);
    if (errors.length){
        showErrors(errors);
        return;
    }

    addPacientTable(pacient);

    form.reset();
}

function getPacientForm(form) {

    let pacient = {

        name : form.name.value,
        weight : form.weight.value,
        height : form.height.value,
        mass : form.mass.value,
        bmi : calculateBMI(form.weight.value, form.height.value)
    }
    return pacient;
}

function mountTr(pacient) {

    let trPacient = document.createElement("tr");
    trPacient.classList.add("pacient");

    trPacient.appendChild(mountTd(pacient.name, "info-name"));
    trPacient.appendChild(mountTd(pacient.weight, "info-weight"));
    trPacient.appendChild(mountTd(pacient.height, "info-height"));
    trPacient.appendChild(mountTd(pacient.mass, "info-mass"));
    trPacient.appendChild(mountTd(pacient.bmi, "info-bmi"));

    return trPacient;
}

function mountTd(dado, classe) {

    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validatePacient(pacient) {

    let errors = [];
    if (!pacient.name.length) errors.push("Name is required");
    if (!validateWeight(pacient.weight)) errors.push("Invalid weight");
    if (!validateHeight(pacient.height)) errors.push("Invalid height");
    if (!pacient.mass.length) errors.push("Mass is required");
    return errors;
}

function showErrors(errors) {

    let ul = document.querySelector('#error-messages');
    ul.innerHTML = "";
    errors.forEach(function(e) {
        
        let li = document.createElement("li");
        li.textContent = e;
        ul.appendChild(li);
    })
}

function addPacientTable(pacient) {
    let pacientTr = mountTr(pacient);
    let table = document.querySelector("#table-pacients");
    table.appendChild(pacientTr);
}