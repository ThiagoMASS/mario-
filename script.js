const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.cloud');

const questionDialog = document.getElementById('questionDialog');
const gameOver = document.querySelector('.game-over');
const restartButton = document.querySelector('.restart');
const tijolo = document.querySelector('.tijolo');

//banco de questões 


const perguntas = [
    {
        pergunta: "Joao comprou 10 sacos de laranjas, em que cada um dos sacos possui 5 laranjas, quantas laranjas tem no total?",
        opcoes: ["50 laranjas", "20 laranjas", "10 laranjas", "15 laranjas"],
        resposta: "50 laranjas"
    },
    {
        pergunta: "Qual a probabilidade de cair 2 caras seguidas em uma moeda?",
        opcoes: ["1/4", "50%", "1/2", "20%"],
        resposta: "1/4"
    },
    {
        pergunta: "Qual a probabilidade de cair o numero 6 no dado?",
        opcoes: ["2/5", "1/6", "1/4", "50%"],
        resposta: "1/6"
    },
    {
        pergunta: "O José ganhou R$ 5000 e ele gastou um total de R$3750 esse mês, quanto sobrou?",
        opcoes: ["2000", "1250", "1150", "2550"],
        resposta: "1250"
    },
    {
        pergunta: "Fernando comprou uma pizza de 8 pedaços e já comeram 5 pedaços, quantos pedaços sobraram?",
        opcoes: ["3", "5", "1", "2"],
        resposta: "3"
    },
    {
        pergunta: "O que é um bug?",
        opcoes: ["É um erro", "É um componente", "É um periférico", "É a tela do computador"],
        resposta: "É um erro"
    },
    {
        pergunta: "O que é scratch?",
        opcoes: ["É um sistema operacional", "Um pen drive", "Uma linguagem de programação", "Um aplicativo"],
        resposta: "Uma linguagem de programação"
    },
    {
        pergunta: "Qual o sistema operacional da microsoft?",
        opcoes: ["Windows", "Android", "Linux", "iOS"],
        resposta: "Windows"
    },
    {
        pergunta: "O que é um navegador de internet?",
        opcoes: ["Um programa para fazer ligações", "Um periferico para conectar a rede", "É um roteador", "Um software capaz de se conectar com a web"],
        resposta: "Um software capaz de se conectar com a web"
    },
    {
        pergunta: "O que é um pdf?",
        opcoes: ["Um formato de imagem", "Um formato de planilha", "Um formato de texto", "Um formato de documento portátil"],
        resposta: "Um formato de documento portátil"
    }
    ]




const jump = () => {

    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudPosition = +window.getComputedStyle(cloud).left.replace('px', '');
    const computedTijoloLeft = +window.getComputedStyle(tijolo).left.replace('px', '');

    const tijoloposition = {
        top: tijolo.offsetTop,
        bottom: tijolo.offsetTop + tijolo.offsetHeight,
        left: computedTijoloLeft,
        right: computedTijoloLeft + tijolo.offsetWidth
    };

    console.log(tijoloposition);
  

    if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 60) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

     

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'assets/imgs/game-over.png';
        mario.style.width = '70px';
        mario.style.marginLeft = '35px';

        cloud.style.animation = 'cloud 20s infinite linear';
        cloud.style.left = `${cloudPosition}px`;

        gameOver.style.visibility = 'visible';

        clearInterval(loop);
    }

    if(  
      
        marioPosition > tijoloposition.bottom - 85  && // Ajuste para a altura do tijolo
        marioPosition + 130 > tijoloposition.top && // Ajuste para a altura do tijolo
        marioPosition + 120 > tijoloposition.left && // Lado esquerdo do tijolo
    marioPosition < tijoloposition.right 
    ){
        
    alert(`tijolo`)
    }
}, 10);




let Loop
const restart = () => {

    gameOver.style.visibility = 'hidden';

    pipe.style.animation = 'pipe-animations 1.5s infinite linear';
    pipe.style.left = ``;

   
    tijolo.style.left = '100%'; // Volta à posição inicial

    mario.src = 'assets/imgs/mario.gif';
    mario.style.width = '130px';
    mario.style.bottom = '0px';
    mario.style.marginLeft = '';
    mario.style.animation = '';

    cloud.style.left = ``;
    window.location.reload();
  
}

document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);

restartButton.addEventListener('click', restart);