document.addEventListener('DOMContentLoaded', function () {

function show (){
const show = localStorage.getItem("dato");
document.getElementById("data").innerHTML += show;

}

function borrar () {
    localStorage.removeItem("dato");
}

show();
borrar();
});