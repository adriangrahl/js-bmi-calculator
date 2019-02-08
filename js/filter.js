let filter = document.querySelector("#table-filter");

filter.addEventListener("input", function(event){
    
    let pacients = document.querySelectorAll(".pacient");
    if (this.value.length > 0){
        let expression = new RegExp(this.value, "i");
        pacients.forEach(function(pacient){
            let name = pacient.querySelector(".info-name").textContent;
            //if (name.includes(event.target.value)){ with upper_case
            if (expression.test(name)){
                pacient.classList.remove("invisible");
            } else {
                pacient.classList.add("invisible");
            }
        });
    } else {
        
        pacients.forEach(function(pacient){
            pacient.classList.remove("invisible");
        });
    }
});