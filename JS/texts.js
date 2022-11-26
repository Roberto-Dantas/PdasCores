export {writingInserting};
import {dataEntry} from './buttons.js';


function writingInserting(number) {
    const textContent = document.querySelector('.text') 
    let theTitle = document.querySelector('.chosen-month h2')
    
    let theMonth={title: "", titleText: "", img: "", text:""}
    
    
    if(number === 1) {
        theMonth={title: "Preto/Negro/Black", titleText:"Preto", img:"./Imagens/cores/preto.jpeg",text:"É amplamente discutido se o preto seria ou não uma cor. Segundo a ciência, o preto é a ausência de cores. No entanto, dentro da psicologia das cores, o preto é considerado uma cor devido aos amplos efeitos que este causa nos seres humanos.\n\nO preto é associado pelos jovens à modernidade, ao luxo e às roupas na moda. Contudo, as pessoas mais idosas costumam ver o preto como símbolo de luto, escuridão e morte. Além disso, a cor preta também se relaciona com a magia, o mistério e a introversão, e possui certa carga negativa.\n\nA cor preta também transmite a ideia de elegância, sendo a mais utilizada para roupas e objetos luxuosos. Além disso, o preto remete à noite, ao céu noturno, ao místico e ao mistério.",
        titleText2:"Principais associações da cor preta",text2:"A cor preta também transmite a ideia de elegância, sendo a mais utilizada para roupas e objetos luxuosos. Além disso, o preto remete à noite, ao céu noturno, ao místico e ao mistério."}
        setTimeout(function(){
        theTitle.style.color= "black";
        textContent.style.backgroundColor= "rgb(0,0,0,0.4)";
        },300)
        
    }
    if(number === 2) {
        theMonth={title: "Rosa Claro/Rosa Pálito/Peach", titleText:"Rosa Claro", img:"./Imagens/cores/rosaClaro.jpeg",text:"",titleText2:"",text2:""}
        setTimeout(function(){
        theTitle.style.color= "rgb(255,182,193)";
        textContent.style.backgroundColor= "rgb(255,182,193,0.4)";
        },300)
        
    }
    if(number === 3) {
        theMonth={title: "Rosa Chiclete/Rosa Chicle/Bubblegum pink", titleText:"Rosa Chiclete", img:"./Imagens/cores/rosa.jpeg",text:"",titleText2:"",text2:""}
        setTimeout(function(){
        theTitle.style.color= "rgb(255,0,127)";
        textContent.style.backgroundColor= "rgb(255,0,127,0.4)";
        },300)
        
    }
    if(number === 4) {
        theMonth={title: "Vermelho/Rojo/Red", titleText:"Vermelho", img:"./Imagens/cores/vermelho.jpeg",text:"",titleText2:"",text2:""}
        setTimeout(function(){
        theTitle.style.color= "rgb(250,0,0)";
        textContent.style.backgroundColor= "rgb(250,0,0,0.4)";
        },300)
        
    }
    if(number === 5) {
        theMonth={title: "Laranja/Naranja/Orange", titleText:"Laranja", img:"./Imagens/cores/laranja.jpeg",text:"",titleText2:"",text2:""}
        setTimeout(function(){
        theTitle.style.color= "rgb(255,165,0)";
        textContent.style.backgroundColor= "rgb(255,165,0,0.4)"
        },300)
        
    }
    if(number === 6) {
        theMonth={title: "Amarelo Canário/Amarillo Vivo/Yellow", titleText:"Amarelo Canário", img:"./Imagens/cores/amareloCanario.jpeg",text:"",titleText2:"",text2:""}
        setTimeout(function(){
        theTitle.style.color= "rgb(248,213,136)";
        textContent.style.backgroundColor= "rgb(248,213,136,0.4)"
        },300)
        
    }
    if(number === 7) {
        theMonth={title: "Verde Folha/Verde Hoja/Yellow Green", titleText:"Verde Folha", img:"./Imagens/cores/verdeFolha.jpeg",text:"",titleText2:"",text2:""}
        setTimeout(function(){
        theTitle.style.color= "rgb(144,238,144)";
        textContent.style.backgroundColor= "rgb(144,238,144,0.4)"
        },300)
        
    }
    if(number === 8) {
        theMonth={title: "Verde/Verde/Green", titleText:"Verde", img:"./Imagens/cores/verde.jpeg",text:"",titleText2:"",text2:""}
        setTimeout(function(){
        theTitle.style.color= "rgb(0,255,0)";
        textContent.style.backgroundColor= "rgb(0,255,0, 0.4)";
        },300)
        
    }
    if(number === 9) {
        theMonth={title: "Azul/Azul/Light Blue", titleText:"Azul", img:"./Imagens/cores/Azul.jpeg",text:"",titleText2:"",text2:""}
        setTimeout(function(){
        theTitle.style.color= "rgb(135,206,250)";
        textContent.style.backgroundColor= "rgb(135,206,250,0.4)";
        },300)
        
    }
    if(number === 10) {
        theMonth={title: "", titleText:"", img:"", text:"",titleText2:"",text2:""}
        setTimeout(function(){
        theTitle.style.color= "rgb(0,0,0)";
        textContent.style.backgroundColor= "rgb(255,20,147, 0.4)";
        },300)
        
    }
    if(number === 11) {
        theMonth={title: "Carmim/Púrpura Vivo/Red Violel", titleText:"Carmim", img:"./Imagens/cores/carmim.jpeg",text:"",titleText2:"",text2:""}
        setTimeout(function(){
        theTitle.style.color= "rgb(113,47,38)";
        textContent.style.backgroundColor= "rgb(113,47,38,0.4)";
        },300)
        
    }
    if(number === 12) {
        theMonth={title: "Marrom/Café Fuerte/Brown", titleText: "Marrom", img: "./Imagens/cores/marrom.jpeg", text: "Segundo as pesquisas realizadas por profissionais da psicologia das cores, o marrom é a cor que possui a maior taxa de rejeição entre as pessoas, tanto o público masculino quanto feminino."+"\n\n"+"O marrom remete à preguiça e à imbecilidade por alguns. No entanto, também pode ser associada ao aconchego e à segurança. Além disso, é uma das cores que mais combina com as demais, sendo adequada para diversas situações."+"\n\n"+"A cor marrom também se relaciona com o feio, desagradável e antiquado, sendo remetida à sujeira e excrementos, sendo a cor da decomposição.Contudo, o marrom também se associa aos sabores fortes, como o café e o cacau por exemplo. Além disso, móveis e tapetes na cor marrom possuem a sensação de aconchego.", titleText2:"Principais associações da cor marrom:", text2:"Sujeira, terra, natureza, madeira, segurança, decomposição, feio, preguiça, imbecilidade, negativo e velho."}
        setTimeout(function(){
        theTitle.style.color= "rgb(150,75,0)";
        textContent.style.backgroundColor= "rgb(150,75,0,0.4)";
        },300)
    }
    
    dataEntry(theMonth)
}

