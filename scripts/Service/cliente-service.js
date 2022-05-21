

// GET -> todos os dados das matrizes
const listarMatrizes  =() => {
    return fetch ('http://localhost:3300/matrizes')
    .then( resposta => {
        if(resposta.ok){
            return (resposta.json())
        }
        throw new Error('Não foi possível listar as matrizes')
    })
}
// GET -> todas as categorias das matrizes
async function listarCategorias() {
    const listaDeCategorias= [];
    const resposta = await fetch ('http://localhost:3300/categorias');
    const dados = await resposta.json()
    dados.forEach(item => {
        listaDeCategorias.push(item.category)
    })
    
    return listaDeCategorias
}

export const matrizService = {
    listarMatrizes,
    listarCategorias
} 

