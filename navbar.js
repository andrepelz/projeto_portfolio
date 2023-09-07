export default function navbarHamburguerOnClick() {
    const hamburguer = document.getElementById("cabecalho__hamburguer");

    if(hamburguer.value == "active") {
        hamburguer.value = "inactive";
        esconderNavbar();
    } else if (hamburguer.value == "inactive") {
        hamburguer.value = "active";
        mostrarNavbar();
    }
}

let mostrarNavbar = function mostrarNavbar() {
    document.getElementById("cabecalho__hamburguer").classList.remove("fa-rotate-180");
    document.getElementById("cabecalho__hamburguer").classList.add("fa-rotate-90");

    const itensNavbar = Array.from(document.getElementsByClassName("navbar__item"));
    itensNavbar.forEach(item => {
        item.style.visibility = "visible";
        item.style.left = "0%";
    });
}

let esconderNavbar = function esconderNavbar() {
    document.getElementById("cabecalho__hamburguer").classList.remove("fa-rotate-90");
    document.getElementById("cabecalho__hamburguer").classList.add("fa-rotate-180");

    const itensNavbar = Array.from(document.getElementsByClassName("navbar__item"));
    itensNavbar.forEach((item, index) => {
        item.style.left = ((itensNavbar.length - index - 1)*100 + 200) + "%";
        item.style.visibility = "hidden";
    });
}