let buttonAdd = document.querySelector("#import-pacients");

buttonAdd.addEventListener("click", function(){

    /*let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");    
    xhr.addEventListener("load", function(){

        if (xhr.status == 200) {
            
            let pacients = JSON.parse(xhr.responseText);    
            pacients.forEach(function(pacient){
                addPacientTable(pacient);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    })
    xhr.send();*/

    let pacients = getDataPacients();
    pacients.forEach(function(pacient){
        addPacientTable(pacient);
    });
});