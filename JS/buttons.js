export {clicked};
export {dataEntry};
export {clickMenu};
import {writingInserting} from './texts.js';

let actived = [false, false, false, false, false, false, false, false, false, false, false, false]
var number


function clicked() {
    const month1 = document.querySelector('.color1')
    const month2 = document.querySelector('.color2')
    const month3 = document.querySelector('.color3')
    const month4 = document.querySelector('.color4')
    const month5 = document.querySelector('.color5')
    const month6 = document.querySelector('.color6')
    const month7 = document.querySelector('.color7')
    const month8 = document.querySelector('.color8')
    const month9 = document.querySelector('.color9')
    const month10 = document.querySelector('.color10')
    const month11 = document.querySelector('.color11')
    const month12 = document.querySelector('.color12')
    
    let months = {month1, month2, month3, month4, month5, month6, month7, month8, month9, month10, month11, month12}
    oneAtTime()
    function oneAtTime() {
        for(var i = 0; i <= 11; i++){
            
            if(i === number) {
                
            }else{
                actived[i] = false    
            }
        }
        month1.style.height= '90px'
        month2.style.height= '90px'
        month3.style.height= '90px'
        month4.style.height= '90px'
        month5.style.height= '90px'
        month6.style.height= '90px'
        month7.style.height= '90px'
        month8.style.height= '90px'
        month9.style.height= '90px'
        month10.style.height= '90px'
        month11.style.height= '90px'
        month12.style.height= '90px'
    }
    
    month1.onclick = function() {
         number = 0
         oneAtTime()         
         if(actived[number]) {
             this.style.transition="0.75s"
             this.style.height= '90px'
             actived[number] = false
             writingInserting()
         }else {
             this.style.transition="0.75s"
             this.style.height= '70px'
             actived[number] = true
             variable = true
             writingInserting(number+1)
         }
         window.scrollTo(0, 0);
     };
    month2.onclick = function() {
         number = 1
         oneAtTime()
         if(actived[number]) {
             this.style.transition="0.75s"
             this.style.height= '90px'
             actived[number] = false
             writingInserting()
         }else {
             this.style.transition="0.75s"
             this.style.height= '70px'
             actived[number] = true
             variable = true
             writingInserting(number+1)
         }
         window.scrollTo(0, 0);
    };
    month3.onclick = function() {
         number = 2
         oneAtTime()
         if(actived[number]) {
             this.style.transition="0.75s"
             this.style.height= '90px'
             actived[number] = false
             writingInserting()
         }else {
             this.style.transition="0.75s"
             this.style.height= '70px'
             actived[number] = true
             variable = true
             writingInserting(number+1)
         }
         window.scrollTo(0, 0);
    };
    month4.onclick = function() {
         number = 3
         oneAtTime()
         if(actived[number]) {
             this.style.transition="0.75s"
             this.style.height= '90px'
             actived[number] = false
             writingInserting()
         }else {
             this.style.transition="0.75s"
             this.style.height= '70px'
             actived[number] = true
             variable = true
             writingInserting(number+1)
         }
         window.scrollTo(0, 0);
    };
    month5.onclick = function() {
         number = 4
         oneAtTime()
         if(actived[number]) {
             this.style.transition="0.75s"
             this.style.height= '90px'
             actived[number] = false
             writingInserting()
         }else {
             this.style.transition="0.75s"
             this.style.height= '70px'
             actived[number] = true
             variable = true
             writingInserting(number+1)
         }
         window.scrollTo(0, 0);
    };
    month6.onclick = function() {
         number = 5
         oneAtTime()
         if(actived[number]) {
             this.style.transition="0.75s"
             this.style.height= '90px'
             actived[number] = false
             writingInserting()
         }else {
             this.style.transition="0.75s"
             this.style.height= '70px'
             actived[number] = true
             variable = true
             writingInserting(number+1)
         }
         window.scrollTo(0, 0);
    };
    month7.onclick = function() {
         number = 6
         oneAtTime()
         if(actived[number]) {
             this.style.transition="0.75s"
             this.style.height= '90px'
             actived[number] = false
             writingInserting()
         }else {
             this.style.transition="0.75s"
             this.style.height= '70px'
             actived[number] = true
             variable = true
             writingInserting(number+1)
         }
         window.scrollTo(0, 0);
    };
    month8.onclick = function() {
         number = 7
         oneAtTime()
         if(actived[number]) {
             this.style.transition="0.75s"
             this.style.height= '90px'
             actived[number] = false
             writingInserting()
         }else {
             this.style.transition="0.75s"
             this.style.height= '70px'
             actived[number] = true
             variable = true
             writingInserting(number+1)
         }
         window.scrollTo(0, 0);
    };
    month9.onclick = function() {
         number = 8
         oneAtTime()
         if(actived[number]) {
             this.style.transition="0.75s"
             this.style.height= '90px'
             actived[number] = false
             writingInserting()
         }else {
             this.style.transition="0.75s"
             this.style.height= '70px'
             actived[number] = true
             variable = true
             writingInserting(number+1)
         }
         window.scrollTo(0, 0);
    };
    month10.onclick = function() {
         number = 9
         oneAtTime()
         if(actived[number]) {
             this.style.transition="0.75s"
             this.style.height= '90px'
             actived[number] = false
             writingInserting()
         }else {
             this.style.transition="0.75s"
             this.style.height= '70px'
             actived[number] = true
             variable = true
             writingInserting(number+1)
         }
         window.scrollTo(0, 0);
    };
    month11.onclick = function() {
         number = 10
         oneAtTime()
         if(actived[number]) {
             this.style.transition="0.75s"
             this.style.height= '90px'
             actived[number] = false
             writingInserting()
         }else {
             this.style.transition="0.75s"
             this.style.height= '70px'
             actived[number] = true
             variable = true
             writingInserting(number+1)
         }
         window.scrollTo(0, 0);
    };
    month12.onclick = function() {
         number = 11
         oneAtTime()
         if(actived[number]) {
             this.style.transition="0.75s"
             this.style.height= '90px'
             actived[number] = false
             writingInserting()
         }else {
             this.style.transition="0.75s"
             this.style.height= '70px'
             actived[number] = true
             variable = true
             writingInserting(number+1)
         }
         window.scrollTo(0, 0);
    };
}

let variable = false

function dataEntry(theMonth) {
    const theTitle = document.querySelector('.chosen-month h2');
    const textContent = document.querySelector('.text')
    const textTitleContent1 =  document.querySelector('.h2-1');
    const textTitleContent2 =  document.querySelector('.h3-1')
    const textImageContent1 = document.querySelector('.img1')
    const textTextContent1 = document.querySelector('.p1')
    const textTextContent2 = document.querySelector('.p2')
    
    const titleMonth= theMonth.title
    const textTitleMonth= theMonth.titleText
    const textTitleMonth2= theMonth.titleText2
    const textImageMonth= theMonth.img
    const textMonth1= theMonth.text
    const textMonth2= theMonth.text2
    
    if(variable){
        if(actived[number]) {
            setTimeout(function(){
            theTitle.innerText = titleMonth
            textTitleContent1.innerText = textTitleMonth
            textTitleContent2.innerText = textTitleMonth2
            textImageContent1.style.transition = "1s"
            textImageContent1.src = textImageMonth
            textTextContent1.innerText= textMonth1
            textTextContent2.innerText= textMonth2
            textContent.style.border= "3px solid #000"
            variable = false
            },300)
        }
    }else{
        
        theTitle.innerText = "Escolha um dos meses acima";
        textTitleContent1.innerText = ""
        textImageContent1.src= "./Imagens/main.jpeg"
        textTextContent1.innerText= ""
        textContent.style.backgroundColor= ""
        textContent.style.border= ""
        textContent.style.color= "#000"
        theTitle.style.color= "#000"
    }
    
}

function clickMenu(){

    const buttonMenu = document.querySelector('.buttonMenu')
    const theMenu = document.querySelector('.theMenu')
    const eraseMenu = document.querySelector('.eraseMenu')
    const backMenu = document.querySelector('.backMenu')
    const backText = document.querySelector('.backText')
    var o = false
    buttonMenu.onclick = function(){
        if(o) {
            theMenu.style.transform= "translateX(-30%)";
            eraseMenu.style.transform= "translateX(-100%)";
            o = false
        }else{
            theMenu.style.transform= "translateX(100%)";
            eraseMenu.style.transform= "translateX(100%)";
            o = true
        }
        

    }
    backText.onclick = function(){
        theMenu.style.transform= "translateX(-30%)";
        eraseMenu.style.transform= "translateX(-100%)";
        o = false
        
        const theTitle = document.querySelector('.chosen-month h2');
    const textContent = document.querySelector('.text')
    const textTitleContent1 =  document.querySelector('.h2-1');
    const textTitleContent2 =  document.querySelector('.h3-1')
    const textImageContent1 = document.querySelector('.img1')
    const textTextContent1 = document.querySelector('.p1')
    const textTextContent2 = document.querySelector('.p2')
    
    
        theTitle.innerText = "Escolha um dos meses acima";
        textTitleContent1.innerText = "O que ?? Psicologia das Cores?"
        textImageContent1.src= "./Imagens/cores.jpeg"
        textTextContent1.innerText= "A psicologia das cores ?? o estudo que tem como objetivo entender como o ser humano se comporta no que diz respeito ??s cores que existem. Sendo assim, s??o analisados os efeitos que cada cor produz nos seres humanos, como emo????es, sentimentos, vontades, etc.\n\nCompreender e aplicar a psicologia das cores ?? fundamental para transmitir algumas informa????es. Por isso, marcas e empresas necessitam de saber todos estes aspectos para alcan??ar suas metas de marketing."
        textTitleContent2.innerText = "Caracter??sticas observadas na Psicologia das Cores"
        textTextContent2.innerText ="Segundo o estudo, cada cor produz um efeito distinto nos seres humanos. Por isso, ?? essencial compreender como elas podem ser utilizadas. Sendo assim, alguns aspectos e caracter??sticas desses efeitos precisam ser observados. Tais como:\n\n\nDimens??o: dependendo a cor utilizada, a pessoa pode ter a percep????o do ambiente afetada, como ter a sensa????o de estar em um local maior ou menor, apesar de ambos possu??rem o mesmo tamanho;\n\nPeso: a cor tamb??m pode afetar na impress??o de peso que um certo objeto aparenta, fazendo com que este pare??a mais leve ou mais pesado;\n\nIlumina????o: a cor diz respeito ?? absor????o de luz, que varia de acordo com cada uma delas. Logo, dependendo da cor utilizada, um ambiente ou objeto pode aparentar ser mais claro ou escuro;\n\nTemperatura: outra caracter??stica a ser observada ?? a temperatura que, dependendo da cor, pode transmitir a impress??o de um ambiente mais frio ou mais quente;\n\nSimbolismo: aspecto mais pessoal, cada cor pode possuir uma ideia ou significado para uma pessoa. Contudo, isto varia de acordo com as experi??ncias de cada um;\n\nEmo????o: as cores afetam de forma direta as emo????es despertadas em uma pessoa, influenciando seu humor, motiva????o, estado de esp??rito, etc;\n\nRecorda????o: da mesma forma que sentir algum cheiro espec??fico pode trazer uma recorda????o, a visualiza????o de certas cores pode estar relacionada a lembran??as vividas. Contudo, esse aspecto tamb??m ?? pessoal e varia de acordo com cada indiv??duo." 
        textContent.style.backgroundColor= ""
        textContent.style.border= ""
        textContent.style.color= "#000"
        theTitle.style.color= "#000"
        clicked()
    }
    
    backMenu.onclick = function(){
        theMenu.style.transform= "translateX(-30%)";
        eraseMenu.style.transform= "translateX(-100%)";
        o = false
    }
    
    
}