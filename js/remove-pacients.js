let tabPacientes = document.querySelector("#table-pacients");

tabPacientes.addEventListener("dblclick", function(event) {

    // let alvoEvento = event.target;
    // let paiEvento = alvoEvento.parentNode;
    // paiEvento.remove();
    event.target.parentNode.classList.add('fade-out');
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);
});