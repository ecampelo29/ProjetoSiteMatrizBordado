//import { matrizService } from "../api.js"

import { matrizService } from "../Service/cliente-service.js";
import { criaNovoCartao } from "./criaCartao.js";

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

//const listaDeCartoes = document.querySelector('[data-cartoes]')

const renderizaCartoes = async (nrDaPag) => {
    /* função que renderiza os cartões existentes na página */
    const btn_anterior = document.getElementById("btn_anterior");
    const btn_proxima = document.getElementById("btn_proxima");
    const listaDeCartoes = document.querySelector('[data-cartoes]')
    var page_span = document.getElementById("pagina");
    
   try {
       const listarMatrizes = await matrizService.listaMatrizes()
       const totalCartoes = listarMatrizes.length

   // Validate page
        if (nrDaPag < 1) nrDaPag = 1;
        if (nrDaPag > numeroPaginas(totalCartoes)) nrDaPag = numeroPaginas(totalCartoes);
        console.log(nrDaPag)
        listaDeCartoes.innerHTML = "";

        for (var i = (nrDaPag-1) * cartoesPorPagina; i < (nrDaPag * cartoesPorPagina) && i < totalCartoes; i++) {            
            let matriz = listarMatrizes[i]
            let cartao = criaNovoCartao(matriz.image_location, matriz.name, matriz.last_price, matriz.actual_price)
            listaDeCartoes.appendChild(cartao)
            //listaDeCartoes.appendChild(criaNovoCartao(matriz.image_location, matriz.name, matriz.last_price, matriz.actual_price))
        }
      
        page_span.innerHTML = nrDaPag + "/" + numeroPaginas(totalCartoes);
        
        if (nrDaPag == 1) {
            btn_anterior.style.visibility = "hidden";
        } else {
            btn_anterior.style.visibility = "visible";
        }
        
        if (nrDaPag == numeroPaginas(totalCartoes)) {
            btn_proxima.style.visibility = "hidden";
        } else {
            btn_proxima.style.visibility = "visible";
        }
    }
    catch (erro){
            console.log(erro)
    }
}
renderizaCartoes(1)
