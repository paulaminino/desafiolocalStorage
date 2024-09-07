document.addEventListener('DOMContentLoaded', function () {

let btn = document.getElementById("buttonText");

function guardar () {
    let info = document.getElementById("inputText").value;
    localStorage.setItem("dato", info);
}

btn.addEventListener('click', guardar);

});