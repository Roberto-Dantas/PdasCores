export {clicked};
export {dataEntry};
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

function dataEntry(titleMonth, textMonth) {
    const theTitle = document.querySelector('.chosen-month h2');
    let textContent = document.querySelector('.text');
    
    if(variable){
        if(actived[number]) {
            theTitle.innerText = titleMonth
            textContent.style.border= "3px solid #000"
            variable = false
        }
    }else{
        theTitle.innerText = "Escolha um dos meses acima";
        textContent.style.backgroundColor= "";
        textContent.style.border=""
    }
    
}
