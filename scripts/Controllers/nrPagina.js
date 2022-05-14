
const listaPaginas = document.getElementById('paginacao');
let numeraoPaginas = []

function identificaPagina(n) {
    return 'página-' + n;
  }

function adicionaNrPagina(pagina) {
    /*Função que chama a criação de nova página e atualiza o array de páginas criadas*/
    const idPagina = identificaPagina(pagina);
    const Listalink = `<a id="link_page${pagina}" class="matrizes__nr_paginacao__link" href="${'#' + idPagina}">${pagina}</a>`   
    const itemLista = document.createElement('li');
    itemLista.className = 'matrizes__nr_paginacao__item';
    itemLista.innerHTML = Listalink;  

    itemLista.onclick = function(){
      gerenciaNrPaginas(Number(this.innerText))
    }
    // incrementa array de páginas
    numeraoPaginas.push(itemLista)
    gerenciaNrPaginas()
    
    if (pagina === 2) {
        listaPaginas.classList.remove('matrizes__nr_paginacao--inativo');
    }
  }

  // controle para não haver página inicial negativa
const pagInicial = function(pagAtual, redutor = 0){
    return (pagAtual-redutor) < 0 ? 0: (pagAtual-redutor);
  }

function gerenciaNrPaginas (pagAtual= numeraoPaginas.length) {
  /* Função que irá manter 5 páginas disponíveis a partir da página atual selecionada.
     Para facilitar, também irá mostrar link para página 1 e última página que foi carregada
     Controle feito por array com todas as páginas que já foram carregadas
  */
  listaPaginas.innerHTML = '';
  let pagFim = 0;
  let pagIni = 0;
  let ultPag = numeraoPaginas.length;
  let penPag = numeraoPaginas.length - 1;
  const separador = `<span>...</span>`   
  const separadorIni = document.createElement('li');
  separadorIni.className = 'matrizes__nr_paginacao__item';
  separadorIni.innerHTML = separador;
  const separadorFim = document.createElement('li');
  separadorFim.className = 'matrizes__nr_paginacao__item';
  separadorFim.innerHTML = separador;
  
// Controle das páginas a serem disponibilizadas
  if (pagAtual <= 5 && ultPag <=5) {
    pagIni = 0;
    pagFim = numeraoPaginas.length > 5 ? 5: numeraoPaginas.length;
    } else if (pagAtual == ultPag ) {
        pagIni = pagInicial(pagAtual, 5);
      pagFim = ultPag;
      } else if ( pagAtual == penPag ) {
        pagIni = pagInicial(pagAtual, 4);
        pagFim = ultPag;
        } else  {
            pagIni = pagInicial(pagAtual, 3);
            pagFim = (pagAtual + 2) < 5 ? 5 : (pagAtual + 2);
          }

  for (let i = pagIni; i < pagFim; i++ ) {
    const nrPagina = numeraoPaginas[i];
    listaPaginas.appendChild(nrPagina);
    
  }

  // controle dos separadores e links para primeira e última páginas
  if (pagIni >= 1) {    
    listaPaginas.insertBefore(separadorIni, listaPaginas.firstChild);
    listaPaginas.insertBefore(numeraoPaginas[0], listaPaginas.firstChild) ;
  }

  if (pagFim < ultPag) {
    listaPaginas.appendChild(separadorFim);
    listaPaginas.appendChild(numeraoPaginas[ultPag-1]);
  }

}
    
  export const paginacao = {
      adicionaNrPagina,
      identificaPagina
  }