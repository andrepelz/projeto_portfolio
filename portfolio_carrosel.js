let cabecalhoPortfolioOnClick = function cabecalhoPortfolioOnClick(numPagina) {
    let totalPaginas = document.getElementById("numPaginas").value;
    let paginas = document.getElementsByClassName("secao-portfolio__pagina");

    Array.prototype.forEach.call(
        paginas,
        (pagina) => pagina.style.left = `${-100/totalPaginas*numPagina}%`
    )
}