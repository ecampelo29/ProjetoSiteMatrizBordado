//import { matrizService } from "../api.js"

import { matrizService } from "../Service/cliente-service.js";
import { criaNovoCartao } from "./criaCartao.js";

//const pagAtual = 1;
const cartoesPorPagina = 12;

// const pagAnterior =()=>{
//     if (pagAtual > 1) {
//         pagAtual--;
//         renderizaPagina(pagAtual);
//     }
// }

// const proximaPagina = ()=>{
//     if (pagAtual < numeroPaginas()) {
//         pagAtual++;
//         renderizaPagina(pagAtual);
//     }
// }

const numeroPaginas=(totalCartoes)=>{
    return Math.ceil(totalCartoes / cartoesPorPagina);
}


//const listaDeCartoes = document.querySelector('[data-cartoes]')

const renderizaCartoes = async (nrDaPag) => {
    /* função que renderiza os cartões existentes na página */
    const btn_anterior = document.getElementById("btn_anterior");
    const btn_proxima = document.getElementById("btn_proxima");
    const listaDeCartoes = document.querySelector('[data-cartoes]');
    
   try {
       const listarMatrizes = await matrizService.listaMatrizes();
       const totalCartoes = listarMatrizes.length;
       const nrPaginas = numeroPaginas(totalCartoes);

   // Validate page
        if (nrDaPag < 1) nrDaPag = 1;
        if (nrDaPag > nrPaginas) nrDaPag = nrPaginas;

        listaDeCartoes.innerHTML = "";

        for (let i = (nrDaPag-1) * cartoesPorPagina; i < (nrDaPag * cartoesPorPagina) && i < totalCartoes; i++) {            
            let matriz = listarMatrizes[i]
            let cartao = criaNovoCartao(matriz.image_location, matriz.name, matriz.last_price, matriz.actual_price)
            listaDeCartoes.appendChild(cartao)
            //listaDeCartoes.appendChild(criaNovoCartao(matriz.image_location, matriz.name, matriz.last_price, matriz.actual_price))
        }
      
        return totalCartoes
                
    }
    catch (erro){
            console.log(erro)
    }
}

const qtdCartoes = renderizaCartoes(1)

// com o retorno da promessa processa a quantidade de cartões por página
qtdCartoes.then(function(totalCartoes){
    const totalPaginas = numeroPaginas(totalCartoes);
    numeracaoPaginas(totalPaginas)
})

const numeracaoPaginas = (totalPaginas) =>{
    /* função que inclui a numeração de paginas  */
    const paginacao = document.querySelector('[data-paginas]');
    const raquo = paginacao.lastElementChild;

    for (let i = 1; i <= totalPaginas; i++) {        
        const listaPag = document.createElement('li')
        listaPag.className = 'matrizes__paginacao__lista__item';
        listaPag.onclick = function() {
            this.lastElementChild.className = 'matrizes__paginacao__lista__pagina-active'
            console.log(this.lastElementChild.className)
            renderizaCartoes(this.dataset.id)
        }
        listaPag.innerHTML = `<a class="matrizes__paginacao__lista__pagina" >${i}</a>`
        listaPag.dataset.id= i;
        paginacao.insertBefore(listaPag, raquo)        
    }
}


