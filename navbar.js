export function navbarHamburguerOnClick() {
    const hamburguer = document.getElementById("cabecalho__hamburguer");

    if(hamburguer.value == "active") {
        hamburguer.value = "inactive";
        esconderNavbar();
    } else if (hamburguer.value == "inactive") {
        hamburguer.value = "active";
        mostrarNavbar();
    }
}

export function initNavbar() {
    const itensNavbar = Array.from(document.getElementsByClassName("navbar__item"));
    itensNavbar.forEach((item, index) => {
        item.style.left = ((itensNavbar.length - index - 1)*100 + 100) + "%";
        item.style.visibility = "hidden";
    });
    
    document.getElementsByClassName("cabecalho-navbar")[0].style.width = "0";

    setTimeout(esconderItens, 400, itensNavbar);
}

let mostrarNavbar = function mostrarNavbar() {
    document.getElementById("cabecalho__hamburguer").classList.remove("fa-rotate-180");
    document.getElementById("cabecalho__hamburguer").classList.add("fa-rotate-90");

    const itensNavbar = Array.from(document.getElementsByClassName("navbar__item"));

    mostrarItens(itensNavbar);

    setTimeout(() => {
        itensNavbar.forEach(item => {
            item.style.visibility = "visible";
            item.style.left = "0%";
        });
    }, 10);

    document.getElementsByClassName("cabecalho-navbar")[0].style.width = "auto";
}

let esconderNavbar = function esconderNavbar() {
    document.getElementById("cabecalho__hamburguer").classList.remove("fa-rotate-90");
    document.getElementById("cabecalho__hamburguer").classList.add("fa-rotate-180");

    const itensNavbar = Array.from(document.getElementsByClassName("navbar__item"));
    itensNavbar.forEach((item, index) => {
        item.style.left = ((itensNavbar.length - index - 1)*100 + 100) + "%";
        item.style.visibility = "hidden";
    });
    
    document.getElementsByClassName("cabecalho-navbar")[0].style.width = "0";

    setTimeout(esconderItens, 400, itensNavbar);
}

let mostrarItens = function mostrarItens(itensNavbar) {
    itensNavbar.forEach((item) => {
        item.style.display = "flex";
    });
}

let esconderItens = function esconderItens(itensNavbar) {
    itensNavbar.forEach((item) => {
        item.style.display = "none";
    });
}