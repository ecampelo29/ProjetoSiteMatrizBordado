//import { matrizService } from "../api.js"

import { matrizService } from "../Service/cliente-service.js";


const criaNovoCartao = (nome) => {
    /* função que cria um novo cartão com os dados da matriz */
    const novoCartao = document.createElement ('li')
    novoCartao.className = 'cartao'
    const conteudo = 
            `
            <a href="#"><img src="./imagens/matriz1.jpg" alt="descrição matriz 1" class="cartao__img"></a>
            <article class="cartao__conteudo"> 
                <a href="#"><h4 class="cartao_titulo">${nome}</h4></a>
                <div class="cartao__precos">
                    <p class="cartao__preco--antigo">R$ 10,00</p>
                    <p class="cartao__preco--atual">R$ 8,00</p>
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
            console.log(matriz.primeiro_nome)
            listaDeCartoes.appendChild(criaNovoCartao(matriz.primeiro_nome))
        });
    }
    catch (erro){
        console.log(erro)
    }
}

renderizaCartoes()

