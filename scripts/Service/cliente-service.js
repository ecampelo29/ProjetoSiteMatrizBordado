

// GET
const listarMatrizes  =() => {
    return fetch ('http://localhost:3300/matrizes')
    .then( resposta => {
        if(resposta.ok){
            return (resposta.json())
        }
        throw new Error('Não foi possível listar as matrizes')
    })
}


export const matrizService = {
    listarMatrizes
} 

