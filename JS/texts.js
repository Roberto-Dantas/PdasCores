export {writingInserting};
import {dataEntry} from './buttons.js';


function writingInserting(number) {
    const textContent = document.querySelector('.text') 
    let theTitle = document.querySelector('.chosen-month h2')
    
    let theMonth={title: "", titleText: "", img: "", text:""}
    
    
    if(number === 1) {
        theMonth={title: "Preto/Negro/Black", titleText:"Preto", img:"./Imagens/cores/preto.jpg",text:"É amplamente discutido se o preto seria ou não uma cor. Segundo a ciência, o preto é a ausência de cores. No entanto, dentro da psicologia das cores, o preto é considerado uma cor devido aos amplos efeitos que este causa nos seres humanos.\n\nO preto é associado pelos jovens à modernidade, ao luxo e às roupas na moda. Contudo, as pessoas mais idosas costumam ver o preto como símbolo de luto, escuridão e morte. Além disso, a cor preta também se relaciona com a magia, o mistério e a introversão, e possui certa carga negativa.\n\nA cor preta também transmite a ideia de elegância, sendo a mais utilizada para roupas e objetos luxuosos. Além disso, o preto remete à noite, ao céu noturno, ao místico e ao mistério.",
        titleText2:"Principais associações da cor preta",text2:"A cor preta também transmite a ideia de elegância, sendo a mais utilizada para roupas e objetos luxuosos. Além disso, o preto remete à noite, ao céu noturno, ao místico e ao mistério."}
        setTimeout(function(){
        theTitle.style.color= "black";
        textContent.style.backgroundColor= "rgb(0,0,0,0.4)";
        },300)
        
    }
    if(number === 2) {
        theMonth={title: "Cinza/Gris/Grey", titleText:"Cinza", img:"./Imagens/cores/cinza.jpg",text:"Segundo a psicologia das cores, o cinza é uma cor que não possui força, sendo remetida à neutralidade e à resignação. É uma cor que até combina com as demais, mas, sozinha, representa indefinição, não sendo quente nem fria.\n\nNa cor cinza, o branco nobre está “sujo” e o preto poderosos está “fraco”. É a cor dos sentimentos sombrios como a solidão, o vazio e o tédio, além de se relacionar com a insensibilidade e a insegurança.\n\nO cinza também pode ser a cor da tecnologia e da inovação, além de poder representar a maturidade e a razão.",titleText2:"Principais associações da cor cinza:",text2:"Seriedade, decadência, neutralidade, tédio, velhice, chatice, solidão, sombrio, hostil, maturidade, tecnologia, sujeira, reflexão, passado e feio."}
        setTimeout(function(){
        theTitle.style.color= "rgb(92,92,92)";
        textContent.style.backgroundColor= "rgb(92,92,92,0.4)";
        },300)
        
    }
    if(number === 3) {
        theMonth={title: "Branco/Blanco/White", titleText:"Branco", img:"./Imagens/cores/branco.jpg",text:"Assim como o preto, o branco, pela ciência, não é considerada uma cor só – ela é a junção de todas as cores. Mas, na psicologia das cores, o branco é considerado uma cor como qualquer outra.\n\nA cor branca é associada à inocência, à limpeza e à pureza. Além disso, o branco está diretamente relacionado com o bem, a verdade e a honestidade, exprimindo clareza e exatidão.",
        titleText2:"Principais associações da cor branca:",text2:"Paz, bondade, pureza, verdade, simplicidade, verdade, perfeição, inocência, otimismo, harmonia, leveza, divindade, neutralidade, clareza, modéstia, exatidão e objetividade."}
        setTimeout(function(){
        theTitle.style.color= "rgb(0,0,0)";
        textContent.style.backgroundColor= "rgb(255,255,255)";
        },300)
        
    }
    if(number === 4) {
        theMonth={title: "Vermelho/Rojo/Red", titleText:"Vermelho", img:"./Imagens/cores/vermelho.jpg",text:"O vermelho é a cor mais carregada emocionalmente. Isso acontece devido a esta cor  transmitir valores totalmente opostos um ao outro, como por exemplo: bem e mal, amor e guerra.\n\nA cor vermelha é um símbolo categórico do fogo e do sangue. Além disso, o vermelho representa paixão e amor, bem como está associado ao ódio, raiva, agressividade e más intenções. Por isso, o vermelho é considerado a cor mais intensa na psicologia das cores.\n\nO vermelho é a uma cor quente – sendo a que mais expressa a ideia de cor. Isso acontece pois o fogo, apesar de possuir diversas cores, possui o vermelho em sua composição. Além disso, os metais, quando aquecidos, se tornam majoritariamente vermelhos.",titleText2:"Principais associações da cor vermelha:",text2:"Emoção, calor, coragem, intensidade, paixão, impulso, amor, guerra, perigo, violência, poder, atração, energia, controle, conquista e excitação."}
        setTimeout(function(){
        theTitle.style.color= "rgb(250,0,0)";
        textContent.style.backgroundColor= "rgb(250,0,0,0.4)";
        },300)
        
    }
    if(number === 5) {
        theMonth={title: "Laranja/Naranja/Orange", titleText:"Laranja", img:"./Imagens/cores/laranja.jpg",text:"A cor laranja possui pouca expressão dentro da psicologia das cores, pois ela está bem próxima de duas cores com amplo destaque: vermelho e amarelo. O laranja remete à diversão, ao lúdico e à sociabilidade.\n\nO laranja também simboliza a iluminação, possuindo um caráter intrusivo, de certa forma. Por isso, durante muito tempo, a cor laranja foi exaustivamente utilizada na publicidade e no marketing. No entanto, devido ao excesso, muitos evitaram sua utilização.",titleText2:"Principais associações da cor laranja:",text2:"Lucidez, calor, energia, iluminação, saúde, vibração, recreação, sociabilidade, fogo, alegria, fertilidade, luxo, senso de humor, competição, entusiasmo e cítrico."}
        setTimeout(function(){
        theTitle.style.color= "rgb(255,165,0)";
        textContent.style.backgroundColor= "rgb(255,165,0,0.4)"
        },300)
        
    }
    if(number === 6) {
        theMonth={title: "Amarelo/Amarillo/Yellow", titleText:"Amarelo", img:"./Imagens/cores/amarelo.jpg",text:"Na psicologia das cores, o amarelo é tido como uma das cores mais alegres, que remetem à recreação, otimismo e disposição. Além disso, a cor amarela é extremamente chamativa, sendo utilizada para o alerta sobre perigos, para advertências e sinalizações em geral.\n\nO amarelo também pode transmitir algumas conotações negativas, como a inveja, egoísmo, ciúme e hipocrisia. Contudo, o amarelo utilizado para remeter a esses sentimentos é diferente do que conhecemos, pois se trata de um tom pálido e meio esverdeado de amarelo.\n\nA cor amarela é uma cor otimista e ensolarada, sendo a mais utilizada para se remeter a momentos felizes. Isso acontece devido ao Sol ser majoritariamente amarelo, bem como seu amanhecer e entardecer, momentos que carregam alegria consigo.",titleText2:"Principais associações da cor amarelo:",text2:"Alegria, energia, advertência, iluminação, euforia, espontaneidade, juventude, animação, inveja, ciúmes, engano, saúde, esperança, calor, descontração, expectativa e perigo."}
        setTimeout(function(){
        theTitle.style.color= "rgb(248,213,136)";
        textContent.style.backgroundColor= "rgb(248,213,136,0.4)"
        },300)
        
    }
    if(number === 7) {
        theMonth={title: "Rosa/Rosa/Pink", titleText:"Rosa", img:"./Imagens/cores/rosa.jpg",text:"Segundo a psicologia das cores, o rosa é majoritariamente associado ao universo feminino. Essa cor é composta por duas cores totalmente opostas: o vermelho e o branco, que explicaremos a seguir. Além disso, suas principais associações são a amabilidade, o charme e a cortesia.\n\nA cor rosa pode possuir sentidos totalmente opostos, oscilando entre a sensibilidade, a mansidão e a doçura, e a paixão, o amor e a intensidade. Além disso, o rosa possui personalidade forte, sendo utilizada para descrever sentimentos e emoções específicas.",titleText2:"Principais associações da cor rosa:",text2:"Encanto, doçura, delicadeza, cortesia, charme, amabilidade, suavidade, paixão, amor e mansidão."}
        setTimeout(function(){
        theTitle.style.color= "rgb(255,0,179)";
        textContent.style.backgroundColor= "rgb(255,0,179,0.4)"
        },300)
        
    }
    if(number === 8) {
        theMonth={title: "Verde/Verde/Green", titleText:"Verde", img:"./Imagens/cores/verde.jpg",text:"O verde é a cor que representa a vida, a saúde, a natureza, a consciência ambiental. Isso acontece devido a toda a natureza e vida vegetal possuírem a tonalidade verde. Além disso, a cor verde simboliza a fertilidade e a riqueza, sendo a cor que representa o dinheiro, apesar de algumas cédulas possuírem cores diferentes.\n\nO verde também é a cor utilizada para se referir a algo imaturo, como por exemplo frutas verdes. Além disso, o termo também é utilizado para tratar de todos os estados de imaturidade: alguém “verde” é alguém imaturo, que ainda tem muito o que aprender.\n\nA cor verde também é utilizada para retratar a liberdade, o acesso livre. Além disso, o verde é associado à juventude, muito pelas ideias de liberdade e imaturidade que a cor carrega.",titleText2:"Principais associações da cor verde:",text2:"Natureza, saúde, paz, segurança, tranquilidade, serenidade, felicidade, riqueza, vida, harmonia, juventude, humor, estabilidade, equilíbrio, divertimento, fertilidade, amizade e sorte."}
        setTimeout(function(){
        theTitle.style.color= "rgb(0,255,0)";
        textContent.style.backgroundColor= "rgb(0,255,0, 0.4)";
        },300)
        
    }
    if(number === 9) {
        theMonth={title: "Azul/Azul/Light Blue", titleText:"Azul", img:"./Imagens/cores/azul.jpg",text:"O azul é uma cor que abrange tanto o público masculino quanto feminino. Diversas pesquisas realizadas por profissionais que estudam a psicologia das cores apontam que a cor azul é a favorita quando perguntados sobre sua preferência. Além disso, as pesquisas apontam que a taxa de rejeição para esta cor é a mais baixa dentre todas.\n\nA cor azul é uma cor fria – a que mais transmite essa sensação dentre todas. Isso se dá devido à visualização de tons azuis no gelo e na neve, bem como à pele humana que se torna azulada quando exposta ao frio.\n\nSegundo a psicologia das cores, o azul transmite sensações de segurança e confiança. Além disso, a cor azul pode causar a impressão de espaço aberto e transmitir a ideia de passividade.",titleText2:"Principais associações da cor azul:",text2:"Segurança, confiança, verdade, sinceridade, tecnologia, credibilidade, estabilidade, independência, intelectualidade, harmonia, conservadorismo e espaço."}
        setTimeout(function(){
        theTitle.style.color= "rgb(0,0,139)";
        textContent.style.backgroundColor= "rgb(0,0,139,0.4)";
        },300)
        
    }
    if(number === 10) {
        theMonth={title: "Dourado/Dorado/Golden", titleText:"Dourado", img:"./Imagens/cores/dourado.jpg", text:"A cor dourada está profundamente relacionada a tudo aquilo que indica riqueza material, poder, prosperidade e vitórias. Não é por menos que as coroas dos reis e as medalhas para os vencedores são de ouro e, consequentemente, douradas.\n\nO caro e o exclusivo também são representados pela cor dourada. Ela é a cor da extravagância, da ostentação, do prestigio social e da sofisticação.\n\nMas não se engane achando que o dourado se refere única e exclusivamente a conceitos materiais e mundanos. Pelo contrário. A cor também está associada a ideais elevados, sabedoria, compreensão e iluminação espiritual. O buda é dourado, lembra disso?\n\nAlém do budismo, outras religiões buscam no dourado a expressão de suas mais altas crenças. Como no Islã em que o tom, juntamente com o verde, representa o paraíso. As bordas das páginas do Alcorão são dourados para simbolizar as benções de Ala.\n\nPara os cristãos, o dourado é uma cor divina associada a imagem de Jesus Cristo. Para eles, os ensinamentos de Jesus são reluzentes como o ouro. Já no Hinduísmo o dourado é a cor da sabedoria e do conhecimento. Por isso é muito comum ver os deuses hindus representados em ambientes dourados ou segurando objetos na cor.",titleText2:"",text2:""}
        setTimeout(function(){
        theTitle.style.color= "rgb(191,147,13)";
        textContent.style.backgroundColor= "rgb(191,147,13,0.4)";
        },300)
        
    }
    if(number === 11) {
        theMonth={title: "Violeta/Violeta/Violet", titleText:"Violeta", img:"./Imagens/cores/violeta.jpeg",text:"A cor violeta é obtida através da mistura das cores vermelho e azul. Segundo a psicologia das cores, o violeta remete à tecnologia e à ciência, mas ao mesmo tempo se relaciona à fantasia e à magia.\n\nAntigamente, a cor violeta foi amplamente associada à nobreza e ao poder. Além disso, esta cor transmite a ideia de vaidade e extravagância, bem como remete ao desejo e à atenção.",titleText2:"Principais associações da cor violeta:",text2:"Luxo, atitude, dignidade, vaidade, alquimia, calma, extravagância, controle, nobreza, poder, tecnologia, magia e ciência."}
        setTimeout(function(){
        theTitle.style.color= "rgb(148,0,211)";
        textContent.style.backgroundColor= "rgb(148,0,211,0.6)";
        },300)
        
    }
    if(number === 12) {
        theMonth={title: "Marrom/Café Fuerte/Brown", titleText: "Marrom", img: "./Imagens/cores/marrom.jpg", text: "Segundo as pesquisas realizadas por profissionais da psicologia das cores, o marrom é a cor que possui a maior taxa de rejeição entre as pessoas, tanto o público masculino quanto feminino."+"\n\n"+"O marrom remete à preguiça e à imbecilidade por alguns. No entanto, também pode ser associada ao aconchego e à segurança. Além disso, é uma das cores que mais combina com as demais, sendo adequada para diversas situações."+"\n\n"+"A cor marrom também se relaciona com o feio, desagradável e antiquado, sendo remetida à sujeira e excrementos, sendo a cor da decomposição.Contudo, o marrom também se associa aos sabores fortes, como o café e o cacau por exemplo. Além disso, móveis e tapetes na cor marrom possuem a sensação de aconchego.", titleText2:"Principais associações da cor marrom:", text2:"Sujeira, terra, natureza, madeira, segurança, decomposição, feio, preguiça, imbecilidade, negativo e velho."}
        setTimeout(function(){
        theTitle.style.color= "rgb(150,75,0)";
        textContent.style.backgroundColor= "rgb(150,75,0,0.4)";
        },300)
    }
    
    dataEntry(theMonth)
}
