
import { matrizService } from "../Service/cliente-service.js";
import { criaNovoCartao } from "./criaCartao.js";
import { paginacao } from "./nrPagina.js";

const listagemDeCartoes = document.getElementById('listagemDeCartoes');

function criaPagina (pagina){
    // div para comportar as ul

    if (pagina == 1) {
        return null
    }
    const elementoPagina = document.createElement('div');
    elementoPagina.id = paginacao.identificaPagina(pagina);
    elementoPagina.className = 'matrizes__pagina';
    // inclusão da ul que receberá a lista de matrizes
    elementoPagina.innerHTML = `<ul class="matrizes__cartoes" data-cartoes> </ul>` 
    const total = populaPagina(elementoPagina.firstChild)
    //console.log("registros: ", total)
    return elementoPagina   
    
    
}

const populaPagina = async (listaDeCartoes) => {
    const cartoesPorPagina = 12; 
    //const listaDeCartoes = document.querySelector('[data-cartoes]')
    try {
         const listarMatrizes = await matrizService.listaMatrizes()

         for(let i = 0; i < cartoesPorPagina; i++){            
             const matriz = listarMatrizes[i]
             const novoCartao = criaNovoCartao(matriz.image_location, matriz.name, matriz.last_price, matriz.actual_price)
             listaDeCartoes.appendChild(novoCartao)         
         }
         return listarMatrizes.length
    }
    catch (erro) {
        console.log(erro)
    }
    
}

// function renderizaPagina (pagina) {
//     const novaPagina = criaPagina(pagina);
//     if (typeof(novaPagina) === 'object' && novaPagina !== null) {
//         listagemDeCartoes.appendChild(novaPagina);

//     }
    
// }
const renderizaPagina = new Promise (function(resolve,reject){
    const novaPagina = criaPagina(1);
    if (typeof(novaPagina) === 'object' && novaPagina !== null) {
        listagemDeCartoes.appendChild(novaPagina);
        resolve();
    } 
    else {
        reject();
    }

});

// function pegaUmaPagina(pagina) {
//     const novaPagina = renderizaPagina(pagina)
//     novaPagina.then(function (elemento) {
//         listagemDeCartoes.appendChild(elemento)
//     });

//   }

export const novaPagina = (pagina)=> {
    const render = renderizaPagina;
    console.log("Renderização: ", render)
    render.then (function () {
        paginacao.adicionaNrPagina(pagina);
    })

}

//novaPagina(++pagina)