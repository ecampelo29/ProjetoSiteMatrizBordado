
const listaPaginas = document.getElementById('paginacao');

function identificaPagina(n) {
    return 'article-page-' + n;
  }

function adicionaNrPagina(pagina) {
    const idPagina = identificaPagina(pagina);
    const Listalink = `<a class="matrizes__nr_paginacao__link" href="${'#' + idPagina}">${pagina}</a>`

    // const pageLink = document.createElement('a');
    // pageLink.href = '#' + ;
    // pageLink.innerHTML = pagina;
    
    const itemLista = document.createElement('li');
    itemLista.className = 'matrizes__nr_paginacao__item';
    itemLista.innerHTML = Listalink;
    

    listaPaginas.appendChild(itemLista);
    
    if (pagina === 2) {
        listaPaginas.classList.remove('matrizes__nr_paginacao--inativo');
    }
  }

  export const paginacao = {
      adicionaNrPagina,
      identificaPagina
  }