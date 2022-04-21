/* ideia adapatada do site https://speckyboy.com/code-snippets-pagination/ Combining Pagination with Infinite Scrolling */

import { novaPagina } from "./novaPagina.js";
let pagina = 0;
globalThis.qtdPaginas = 0;

function getDocumentHeight() {
    const body = document.body;
    const html = document.documentElement;
    
    return Math.max(
      body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight
    );
  };
  
  function getScrollTop() {
    return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  }

novaPagina(++pagina)

window.onscroll = function() {
    let limitePagina = getDocumentHeight() - window.innerHeight - 50
    if (getScrollTop() < limitePagina || pagina >= window.qtdPaginas) return;    
    novaPagina(++pagina)

  };