export {writingInserting};
import {dataEntry} from './buttons.js';


function writingInserting(number) {
    const textContent = document.querySelector('.text') 
    
    let theMonth={title: "", history: "", }
    
    
    if(number === 1) {
        theMonth={title: "Janeiro branco", history: "", }
        textContent.style.backgroundColor= "white";
    }
    if(number === 2) {
        theMonth={title: "Fevereiro roxo", history: "", }
        textContent.style.backgroundColor= "purple";
    }
    if(number === 3) {
        theMonth={title: "Março lilás", history: "", }
        textContent.style.backgroundColor= "#9a40ff";
    }
    if(number === 4) {
        theMonth={title: "Abril azul", history: "", }
        textContent.style.backgroundColor= "blue";
    }
    if(number === 5) {
        theMonth={title: "Maio roxo", history: "", }
        textContent.style.backgroundColor= "purple";
    }
    if(number === 6) {
        theMonth={title: "Junho vermelho", history: "", }
        textContent.style.backgroundColor= "red";
    }
    if(number === 7) {
        theMonth={title: "Julho amarelo", history: "", }
        textContent.style.backgroundColor= "yellow";
    }
    if(number === 8) {
        theMonth={title: "Agosto laranja", history: "", }
        textContent.style.backgroundColor= "orange";
    }
    if(number === 9) {
        theMonth={title: "Setembro amarelo", history: "", }
        textContent.style.backgroundColor= "yellow";
    }
    if(number === 10) {
        theMonth={title: "Outubro Rosa", history: "", }
        textContent.style.backgroundColor= "deeppink";
    }
    if(number === 11) {
        theMonth={title: "Novembro azul", history: "", }
        textContent.style.backgroundColor= "blue";
    }
    if(number === 12) {
        theMonth={title: "Dezembro vermelho", history: "", }
        textContent.style.backgroundColor= "red";
    }
    
    dataEntry(theMonth.title, theMonth.history)
}




