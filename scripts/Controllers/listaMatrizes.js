//import { matrizService } from "../api.js"

import { matrizService } from "../Service/cliente-service.js";


const criaNovoCartao = (imagem, nome, preco_antigo, preco_atual) => {
    /* função que cria um novo cartão com os dados da matriz */
    const novoCartao = document.createElement ('li')
    novoCartao.className = 'cartao'
    const conteudo = 
            `
            <a href="#"><img src=${imagem} alt="descrição matriz 1" class="cartao__img"></a>
            <article class="cartao__conteudo"> 
                <a href="#"><h4 class="cartao_titulo">${nome}</h4></a>
                <div class="cartao__precos">
                    <p class="cartao__preco--antigo">R$ ${preco_antigo}</p>
                    <p class="cartao__preco--atual">R$ ${preco_atual}</p>
                </div>
                <div class="cartao__botoes">
                    <button class="cartao__favorito" type="submit" ><i class="fa fa-fw fa-heart"></i></button>
                    <button class="cartao__carrinho" type="submit">Adicionar<i class="fa fa-fw fa-cart-plus"></i></button>
                </div>
            </article>
            `
    
    novoCartao.innerHTML = conteudo
    novoCartao.dataset.id = 1
    return novoCartao
}

const listaDeCartoes = document.querySelector('[data-cartoes]')

const renderizaCartoes = async () => {
    /* função que renderiza os cartões existentes na página */
    try {
        const listarMatrizes = await matrizService.listaMatrizes()
        listarMatrizes.forEach(matriz => {
            listaDeCartoes.appendChild(criaNovoCartao(matriz.image_location, matriz.name, matriz.last_price, matriz.actual_price))
        });
    }
    catch (erro){
        console.log(erro)
    }
}

renderizaCartoes()

