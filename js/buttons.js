export {writingInserting};
import {dataEntry} from './buttons.js';


function writingInserting(number) {
    const textContent = document.querySelector('.text') 
    let theTitle = document.querySelector('.chosen-month h2')
    
    let theMonth={title: "", history: "", }
    
    
    if(number === 1) {
        theMonth={title: "Janeiro branco", history: "", }
        textContent.style.backgroundColor= "rgb(255,255,2550)";
        theTitle.style.color= "rgb(255,255,255)"
        
    }
    if(number === 2) {
        theMonth={title: "Fevereiro roxo", history: "", }
        textContent.style.backgroundColor= "rgb(128,0,128,0.4)";
        theTitle.style.color= "rgb(128,0,128)"
        
    }
    if(number === 3) {
        theMonth={title: "Março lilás", history: "", }
        textContent.style.backgroundColor= "rgb(186,85,211,0.4)";
        theTitle.style.color= "rgb(186,85,211)"
        
    }
    if(number === 4) {
        theMonth={title: "Abril azul", history: "", }
        textContent.style.backgroundColor= "rgb(0,0,255,0.4)";
        theTitle.style.color= "rgb(0,0,255)"
        
    }
    if(number === 5) {
        theMonth={title: "Maio roxo", history: "", }
        textContent.style.backgroundColor= "rgb(128,0,128,0.4)";
        theTitle.style.color= "rgb(128,0,128)"
        
    }
    if(number === 6) {
        theMonth={title: "Junho vermelho", history: "", }
        textContent.style.backgroundColor= "rgb(255,0,0,0.4)";
        theTitle.style.color= "rgb(255,0,0)"
        
    }
    if(number === 7) {
        theMonth={title: "Julho amarelo", history: "", }
        textContent.style.backgroundColor= "rgb(255,255,0,0.4)";
        theTitle.style.color= "rgb(255,255,0)"
        
    }
    if(number === 8) {
        theMonth={title: "Agosto laranja", history: "", }
        textContent.style.backgroundColor= "rgb(255,165,0, 0.4)";
        theTitle.style.color= "rgb(255,165,0)"
        
    }
    if(number === 9) {
        theMonth={title: "Setembro amarelo", history: "", }
        textContent.style.backgroundColor= "rgb(255,255,0,0.4)";
        theTitle.style.color= "rgb(255,255,0)"
        
    }
    if(number === 10) {
        theMonth={title: "Outubro Rosa", history: "", }
        textContent.style.backgroundColor= "rgb(255,20,147, 0.4)";
        theTitle.style.color= "rgb(255,20,147)"
        
    }
    if(number === 11) {
        theMonth={title: "Novembro azul", history: "", }
        textContent.style.backgroundColor= "rgb(0,0,255,0.4)";
        theTitle.style.color= "rgb(0,0,255)"
        
    }
    if(number === 12) {
        theMonth={title: "Dezembro vermelho", history: "", }
        textContent.style.backgroundColor= "rgb(255,0,0,0.4)";
        theTitle.style.color= "rgb(255,0,0)"
        
    }
    
    dataEntry(theMonth.title, theMonth.history)
}




