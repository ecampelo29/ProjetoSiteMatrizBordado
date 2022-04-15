const pagAtual = 1;
const cartoesPorPagina = 12;

const pagAnterior =()=>{
    if (pagAtual > 1) {
        pagAtual--;
        renderizaPagina(pagAtual);
    }
}

const proximaPagina = ()=>{
    if (pagAtual < numeroPaginas()) {
        pagAtual++;
        renderizaPagina(pagAtual);
    }
}

const numeroPaginas=(totalCartoes)=>{
    return Math.ceil(totalCartoes / cartoesPorPagina);
}

export const renderizaPagina= (pagina, totalCartoes, cartao )=>{
    const btn_anterior = document.getElementById("btn_anterior");
    const btn_proxima = document.getElementById("btn_proxima");
    const listaDeCartoes = document.querySelector('[data-cartoes]')
    var page_span = document.getElementById("pagina");
 
    // Validate page
    if (pagina < 1) pagina = 1;
    if (pagina > numeroPaginas(totalCartoes)) pagina = numeroPaginas(totalCartoes);
    listaDeCartoes.innerHTML = "";

    for (var i = (pagina-1) * cartoesPorPagina; i < (pagina * cartoesPorPagina) && i < totalCartoes; i++) {
        console.log(i)
        listaDeCartoes.appendChild(cartao)
        }
    page_span.innerHTML = pagina + "/" + numeroPaginas(totalCartoes);

    if (pagina == 1) {
        btn_anterior.style.visibility = "hidden";
    } else {
        btn_anterior.style.visibility = "visible";
    }

    if (pagina == numeroPaginas(totalCartoes)) {
        btn_proxima.style.visibility = "hidden";
    } else {
        btn_proxima.style.visibility = "visible";
    }
}
