import { matrizService } from "../Service/cliente-service.js";

const categorias = await matrizService.listarCategorias()
const navCabecalho = document.getElementById('menuGeral')

function construtorMenu(itens){
    // para cada item existente inseri um link na div do menu
    const divLinks = document.createElement('div')
    divLinks.classList = 'menu'
    itens.forEach(item=> {
        const link = document.createElement('a')
        link.href ="#"
        link.innerHTML = item
        divLinks.appendChild(link)
    
    }) 
    // for (let i=0; i<= 3;i++) {
    //     itens.forEach(item=> {
    //         const link = document.createElement('a')
    //         link.href ="#"
    //         link.innerHTML = item
    //         divLinks.appendChild(link)
        
    //     }) 
    // }

    return divLinks
}

function resizeListener() {    
    return  window.innerWidth;
    }
window.addEventListener('resize', resizeListener);

const divMenuCategoria = construtorMenu(categorias)
navCabecalho.appendChild(divMenuCategoria)

const menuCategoria = document.getElementById('menuCategorias')
menuCategoria.onclick = (function(){
    let altBase = 75;
    let larguraJanela = resizeListener()

    if(larguraJanela <= 768){
        altBase = 150   
    } else if(larguraJanela <= 1024) {
        altBase = 100
    } 
    // definie altura para cada 12 itens
    const divAltura = (altBase * Math.ceil(divMenuCategoria.childElementCount/12))+'px';
    divMenuCategoria.style.height=divAltura;
    
    // alterna entre visível ou não
    if (divMenuCategoria.style.display === 'flex') {
        divMenuCategoria.style.display = 'none' 
    } else {
        divMenuCategoria.style.display = 'flex'
    }

})

// const menu = document.getElementById('linksMenu')
// const linksDoMenu = [...menu.children]

// const divMenu = construtorMenu(categorias)

// navCabecalho.appendChild(divMenu)

// linksDoMenu.forEach(link=>{
//     link.onclick = (function(){
//         if (divMenu.style.display === 'flex') {
//             divMenu.style.display = 'none' 
//         } else {
//             divMenu.style.display = 'flex'
//         }
    
//     })

// })

