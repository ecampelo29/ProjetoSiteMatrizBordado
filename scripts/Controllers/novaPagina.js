
import { matrizService } from "../Service/cliente-service.js";
import { criaNovoCartao } from "./criaCartao.js";
import { paginacao } from "./nrPagina.js";

const listagemDeCartoes = document.getElementById('listagemDeCartoes');
const cartoesPorPagina = 12;


function totalPaginas(totalRegistros){ 
    globalThis.qtdPaginas = Math.ceil(totalRegistros / cartoesPorPagina);
    return globalThis.qtdPaginas;
    }

function criaPagina (pagina){
    // div para comportar as ul

    const elementoPagina = document.createElement('div');
    elementoPagina.id = paginacao.identificaPagina(pagina);
    elementoPagina.className = 'matrizes__pagina';
    // inclusão da ul que receberá a lista de matrizes
    elementoPagina.innerHTML = `<ul class="matrizes__cartoes" data-cartoes> </ul>` 
    const paginaPopulada = populaPagina(pagina, elementoPagina.firstChild)

    const resultado =  paginaPopulada.then(function(value){       
        if(pagina <= totalPaginas(value)){
            return elementoPagina 
        }
        else {
            return null
        }
    })
    return resultado          
}

const populaPagina = async (pagina, listaDeCartoes) => { 
    try {
         const listarMatrizes = await matrizService.listaMatrizes()

         for(let i = (pagina -1) * cartoesPorPagina; i < (pagina * cartoesPorPagina) && i < listarMatrizes.length; i++){            
             const matriz = listarMatrizes[i]
             const novoCartao = criaNovoCartao(matriz.image_location, matriz.name, matriz.last_price, matriz.actual_price)
             listaDeCartoes.appendChild(novoCartao)         
         }
         return listarMatrizes.length
    }
    catch (erro) {
        console.log('populaPagina:', erro)
    }
    
}

const renderizaPagina = (pagina) => {
    return new Promise (async function(resolve,reject){
        const novaPagina = await criaPagina(pagina);
        if (typeof(novaPagina) === 'object' && novaPagina !== null) {       
            listagemDeCartoes.appendChild(novaPagina);
            resolve();
        } 
        else {
            reject()
        }

    })
};


export const novaPagina =  (pagina)=> {
    const render = renderizaPagina(pagina);
    render.then (function () {
        paginacao.adicionaNrPagina(pagina);
    }).catch(function(erro){
        console.log('Página não foi criada: ', erro)
    })
    return pagina

}
